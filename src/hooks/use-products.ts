import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiGet, apiPost, apiPut, apiDelete } from "@/lib/api";

// WooCommerce Product types
export interface ProductImage {
  id: number;
  src: string;
  name: string;
  alt: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  type: string;
  status: string;
  featured: boolean;
  catalog_visibility: string;
  description: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  purchasable: boolean;
  total_sales: number;
  virtual: boolean;
  downloadable: boolean;
  downloads: unknown[];
  download_limit: number;
  download_expiry: number;
  external_url: string;
  button_text: string;
  tax_status: string;
  tax_class: string;
  manage_stock: boolean;
  stock_quantity: number | null;
  stock_status: string;
  backorders: string;
  backorders_allowed: boolean;
  backordered: boolean;
  sold_individually: boolean;
  weight: string;
  dimensions: {
    length: string;
    width: string;
    height: string;
  };
  shipping_required: boolean;
  shipping_taxable: boolean;
  shipping_class: string;
  shipping_class_id: number;
  reviews_allowed: boolean;
  average_rating: string;
  rating_count: number;
  related_ids: number[];
  upsell_ids: number[];
  cross_sell_ids: number[];
  parent_id: number;
  purchase_note: string;
  categories: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
  tags: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
  images: ProductImage[];
  attributes: unknown[];
  default_attributes: unknown[];
  variations: number[];
  grouped_products: number[];
  menu_order: number;
  meta_data: unknown[];
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  _links: {
    self: Array<{ href: string }>;
    collection: Array<{ href: string }>;
  };
}

export interface ProductsResponse {
  data: Product[];
  total?: number;
  totalPages?: number;
}

export interface CreateProductData {
  name: string;
  type?: string;
  regular_price?: string;
  description?: string;
  short_description?: string;
  [key: string]: unknown;
}

export interface UpdateProductData extends Partial<CreateProductData> {
  id: number;
}

// Query keys
export const productKeys = {
  all: ["products"] as const,
  lists: () => [...productKeys.all, "list"] as const,
  list: (filters?: Record<string, unknown>) =>
    [...productKeys.lists(), filters] as const,
  details: () => [...productKeys.all, "detail"] as const,
  detail: (id: number) => [...productKeys.details(), id] as const,
};

// Fetch all products
export async function fetchProducts(
  params?: Record<string, unknown>
): Promise<Product[]> {
  const queryParams = new URLSearchParams();
  
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        queryParams.append(key, String(value));
      }
    });
  }

  const queryString = queryParams.toString();
  const endpoint = `/products${queryString ? `?${queryString}` : ""}`;
  
  return apiGet<Product[]>(endpoint);
}

// Fetch single product
export async function fetchProduct(id: number): Promise<Product> {
  return apiGet<Product>(`/products/${id}`);
}

// Create product
export async function createProduct(data: CreateProductData): Promise<Product> {
  return apiPost<Product>("/products", data);
}

// Update product
export async function updateProduct(
  id: number,
  data: Partial<CreateProductData>
): Promise<Product> {
  return apiPut<Product>(`/products/${id}`, data);
}

// Delete product
export async function deleteProduct(id: number): Promise<Product> {
  return apiDelete<Product>(`/products/${id}`);
}

// React Query Hooks

/**
 * Hook to fetch all products
 * @param params - Optional query parameters (page, per_page, search, etc.)
 */
export function useProducts(params?: Record<string, unknown>) {
  return useQuery({
    queryKey: productKeys.list(params),
    queryFn: () => fetchProducts(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

/**
 * Hook to fetch a single product by ID
 */
export function useProduct(id: number, enabled = true) {
  return useQuery({
    queryKey: productKeys.detail(id),
    queryFn: () => fetchProduct(id),
    enabled: enabled && !!id,
    staleTime: 5 * 60 * 1000,
  });
}

/**
 * Mutation hook to create a new product
 */
export function useCreateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      // Invalidate and refetch products list
      queryClient.invalidateQueries({ queryKey: productKeys.lists() });
    },
  });
}

/**
 * Mutation hook to update an existing product
 */
export function useUpdateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<CreateProductData> }) =>
      updateProduct(id, data),
    onSuccess: (data) => {
      // Invalidate both the list and the specific product
      queryClient.invalidateQueries({ queryKey: productKeys.lists() });
      queryClient.invalidateQueries({ queryKey: productKeys.detail(data.id) });
    },
  });
}

/**
 * Mutation hook to delete a product
 */
export function useDeleteProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: (_, deletedId) => {
      // Invalidate products list
      queryClient.invalidateQueries({ queryKey: productKeys.lists() });
      // Remove the specific product from cache
      queryClient.removeQueries({ queryKey: productKeys.detail(deletedId) });
    },
  });
}
