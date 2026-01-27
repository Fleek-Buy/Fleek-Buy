// API Configuration
const BASE_URL = "http://localhost/wordpress/wp-json/wc/v3";

// API Response types
export interface ApiError {
  message: string;
  code?: string;
  data?: {
    status?: number;
  };
}

// Generic fetch wrapper with error handling
async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `API Error: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("An unknown error occurred");
  }
}

// GET request
export async function apiGet<T>(endpoint: string): Promise<T> {
  return apiFetch<T>(endpoint, {
    method: "GET",
  });
}

// POST request
export async function apiPost<T>(
  endpoint: string,
  data?: unknown
): Promise<T> {
  return apiFetch<T>(endpoint, {
    method: "POST",
    body: data ? JSON.stringify(data) : undefined,
  });
}

// PUT request
export async function apiPut<T>(
  endpoint: string,
  data?: unknown
): Promise<T> {
  return apiFetch<T>(endpoint, {
    method: "PUT",
    body: data ? JSON.stringify(data) : undefined,
  });
}

// DELETE request
export async function apiDelete<T>(endpoint: string): Promise<T> {
  return apiFetch<T>(endpoint, {
    method: "DELETE",
  });
}

export { BASE_URL };
