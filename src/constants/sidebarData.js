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
        path: "/dashboard",
      },
    ],
  },

  {
    title: "Operations",
    items: [
      {
        title: "Orders",
        icon: ShoppingCart,
        path: "/orders",
      },
      {
        title: "Products",
        icon: UtensilsCrossed,
        path: "/products",
      },
      {
        title: "Categories",
        icon: Tags,
        path: "/categories",
      },
      {
        title: "Inventory",
        icon: Package,
        path: "/inventory",
      },
    ],
  },

  {
    title: "Growth",
    items: [
      {
        title: "Customers",
        icon: Users,
        path: "/customers",
      },
      {
        title: "Reviews",
        icon: Star,
        path: "/reviews",
      },
      {
        title: "Coupons",
        icon: TicketPercent,
        path: "/coupons",
      },
      {
        title: "Offers",
        icon: BadgePercent,
        path: "/offers",
      },
      {
        title: "Delivery",
        icon: Bike,
        path: "/delivery",
      },
    ],
  },

  {
    title: "Team",
    items: [
      {
        title: "Employees",
        icon: UserCog,
        path: "/employees",
      },
      {
        title: "Delivery Boys",
        icon: Truck,
        path: "/delivery-boys",
      },
      {
        title: "Reservations",
        icon: CalendarDays,
        path: "/reservations",
      },
    ],
  },

  {
    title: "Insights",
    items: [
      {
        title: "Reports",
        icon: BarChart3,
        path: "/reports",
      },
      {
        title: "Analytics",
        icon: PieChart,
        path: "/analytics",
      },
    ],
  },

  {
    title: "Content",
    items: [
      {
        title: "Media Library",
        icon: Image,
        path: "/media-library",
      },
      {
        title: "Website Content",
        icon: Globe,
        path: "/website-content",
      },
      {
        title: "Messages",
        icon: MessageSquare,
        path: "/messages",
      },
      {
        title: "Notifications",
        icon: Bell,
        path: "/notifications",
      },
    ],
  },

  {
    title: "System",
    items: [
      {
        title: "Settings",
        icon: Settings,
        path: "/settings",
      },
      {
        title: "Roles & Permissions",
        icon: ShieldCheck,
        path: "/roles-permissions",
      },
      {
        title: "Activity Logs",
        icon: ClipboardList,
        path: "/activity-logs",
      },
      {
        title: "Backup",
        icon: DatabaseBackup,
        path: "/backup",
      },
      {
        title: "Profile",
        icon: UserCircle,
        path: "/profile",
      },
    ],
  },

  {
    title: "Account",
    items: [
      {
        title: "Logout",
        icon: LogOut,
        path: "/logout",
      },
    ],
  },
];
