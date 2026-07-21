import {
  LayoutDashboard,
  ShoppingCart,
  UtensilsCrossed,
  Tags,
  Package,
  Users,
  Star,
  TicketPercent,
  BadgePercent,
  Bike,
  UserCog,
  Truck,
  CalendarDays,
  BarChart3,
  PieChart,
  Image,
  Globe,
  MessageSquare,
  Bell,
  Settings,
  ShieldCheck,
  ClipboardList,
  DatabaseBackup,
  UserCircle,
  LogOut,
} from "lucide-react";

export const sidebarData = [
  {
    title: "Overview",
    items: [
      {
        title: "Dashboard",
        icon: LayoutDashboard,
        path: "/admin/dashboard",
      },
    ],
  },

  {
    title: "Operations",
    items: [
      {
        title: "Orders",
        icon: ShoppingCart,
        path: "/admin/orders",
      },
      {
        title: "Products",
        icon: UtensilsCrossed,
        path: "/admin/products",
      },
      {
        title: "Categories",
        icon: Tags,
        path: "/admin/categories",
      },
      {
        title: "Inventory",
        icon: Package,
        path: "/admin/inventory",
      },
    ],
  },

  {
    title: "Growth",
    items: [
      {
        title: "Customers",
        icon: Users,
        path: "/admin/customers",
      },
      {
        title: "Reviews",
        icon: Star,
        path: "/admin/reviews",
      },
      {
        title: "Coupons",
        icon: TicketPercent,
        path: "/admin/coupons",
      },
      {
        title: "Offers",
        icon: BadgePercent,
        path: "/admin/offers",
      },
      {
        title: "Delivery",
        icon: Bike,
        path: "/admin/delivery",
      },
    ],
  },

  {
    title: "Team",
    items: [
      {
        title: "Employees",
        icon: UserCog,
        path: "/admin/employees",
      },
      {
        title: "Delivery Boys",
        icon: Truck,
        path: "/admin/delivery-boys",
      },
      {
        title: "Reservations",
        icon: CalendarDays,
        path: "/admin/reservations",
      },
    ],
  },

  {
    title: "Insights",
    items: [
      {
        title: "Reports",
        icon: BarChart3,
        path: "/admin/reports",
      },
      {
        title: "Analytics",
        icon: PieChart,
        path: "/admin/analytics",
      },
    ],
  },

  {
    title: "Content",
    items: [
      {
        title: "Media Library",
        icon: Image,
        path: "/admin/media-library",
      },
      {
        title: "Website Content",
        icon: Globe,
        path: "/admin/website-content",
      },
      {
        title: "Messages",
        icon: MessageSquare,
        path: "/admin/messages",
      },
      {
        title: "Notifications",
        icon: Bell,
        path: "/admin/notifications",
      },
    ],
  },

  {
    title: "System",
    items: [
      {
        title: "Settings",
        icon: Settings,
        path: "/admin/settings",
      },
      {
        title: "Roles & Permissions",
        icon: ShieldCheck,
        path: "/admin/roles-permissions",
      },
      {
        title: "Activity Logs",
        icon: ClipboardList,
        path: "/admin/activity-logs",
      },
      {
        title: "Backup",
        icon: DatabaseBackup,
        path: "/admin/backup",
      },
      {
        title: "Profile",
        icon: UserCircle,
        path: "/admin/profile",
      },
    ],
  },

  {
    title: "Account",
    items: [
      {
        title: "Logout",
        icon: LogOut,
        action: "logout",
      },
    ],
  },
];
