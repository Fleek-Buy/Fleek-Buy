import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { User, Package, Heart, MapPin, CreditCard, Settings, LogOut, ChevronRight, Edit2 } from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = {
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    avatar: null,
    memberSince: "January 2024",
    loyaltyPoints: 2450,
  };

  const menuItems = [
    { icon: Package, label: "My Orders", description: "Track and manage your orders", href: "#", count: 3 },
    { icon: Heart, label: "Wishlist", description: "Products you've saved", href: "/wishlist", count: 5 },
    { icon: MapPin, label: "Addresses", description: "Manage shipping addresses", href: "#" },
    { icon: CreditCard, label: "Payment Methods", description: "Saved cards and wallets", href: "#" },
    { icon: Settings, label: "Account Settings", description: "Privacy and preferences", href: "#" },
  ];

  const recentOrders = [
    { id: "ORD-2024-001", date: "Jan 15, 2024", status: "Delivered", total: 156.00, items: 3 },
    { id: "ORD-2024-002", date: "Jan 08, 2024", status: "In Transit", total: 89.00, items: 2 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 md:px-6 py-8 md:py-12">
        {/* Profile Header */}
        <div className="mb-8 rounded-2xl border border-border bg-card p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="h-full w-full rounded-full object-cover" />
                  ) : (
                    <span className="text-2xl font-bold">{user.name.charAt(0)}</span>
                  )}
                </div>
                <button className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-accent text-accent-foreground transition-transform hover:scale-110">
                  <Edit2 className="h-3.5 w-3.5" />
                </button>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">{user.name}</h1>
                <p className="text-muted-foreground">{user.email}</p>
                <p className="mt-1 text-sm text-muted-foreground">Member since {user.memberSince}</p>
              </div>
            </div>
            
            <div className="flex flex-col items-start gap-2 rounded-xl bg-accent-light p-4 md:items-center">
              <span className="text-sm font-medium text-accent-foreground">Loyalty Points</span>
              <span className="text-3xl font-bold text-accent">{user.loyaltyPoints.toLocaleString()}</span>
              <span className="text-xs text-muted-foreground">=$24.50 value</span>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Menu */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              {menuItems.map((item, index) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`flex items-center justify-between p-4 transition-colors hover:bg-muted/50 ${
                    index !== menuItems.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{item.label}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.count && (
                      <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-accent px-2 text-xs font-medium text-accent-foreground">
                        {item.count}
                      </span>
                    )}
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                </Link>
              ))}
            </div>

            <Button variant="ghost" className="mt-4 w-full justify-start gap-2 text-destructive hover:bg-destructive/10 hover:text-destructive">
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>

          {/* Recent Orders */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-foreground">Recent Orders</h2>
                <Button variant="link" size="sm" className="text-primary">
                  View All
                </Button>
              </div>
              
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="rounded-xl border border-border p-4 transition-colors hover:bg-muted/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{order.id}</span>
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        order.status === 'Delivered' 
                          ? 'bg-secondary-light text-secondary' 
                          : 'bg-accent-light text-accent-foreground'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{order.date}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{order.items} items</span>
                      <span className="font-semibold text-primary">${order.total.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
