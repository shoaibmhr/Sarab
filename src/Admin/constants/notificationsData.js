// src/admin/constants/notificationsData.js
import {
  ShoppingBag,
  AlertTriangle,
  Star,
  UserPlus,
  PackageX,
  MessageSquare,
} from "lucide-react";

export const notificationTypes = [
  { value: "order", label: "New Order", icon: ShoppingBag, color: "blue" },
  { value: "stock", label: "Low Stock", icon: AlertTriangle, color: "amber" },
  { value: "review", label: "New Review", icon: Star, color: "orange" },
  { value: "customer", label: "New Customer", icon: UserPlus, color: "green" },
  { value: "outofstock", label: "Out of Stock", icon: PackageX, color: "red" },
  {
    value: "message",
    label: "New Message",
    icon: MessageSquare,
    color: "rose",
  },
];

export const notificationsData = [
  {
    id: 1,
    type: "order",
    title: "New order received",
    description: "Order ORD-10284 placed by Ali Khan — Rs 2,450",
    time: "2 min ago",
    isRead: false,
  },
  {
    id: 2,
    type: "stock",
    title: "Low stock alert",
    description: "Zinger Burger has only 5 units left in inventory",
    time: "18 min ago",
    isRead: false,
  },
  {
    id: 3,
    type: "review",
    title: "New review submitted",
    description: "Sara Ahmed left a 4-star review on Chicken Tikka Pizza",
    time: "1 hr ago",
    isRead: false,
  },
  {
    id: 4,
    type: "message",
    title: "New contact message",
    description: "Ali Khan sent a message: 'Order delay complaint'",
    time: "2 hrs ago",
    isRead: true,
  },
  {
    id: 5,
    type: "customer",
    title: "New customer registered",
    description: "Fatima Noor created a new account",
    time: "4 hrs ago",
    isRead: true,
  },
  {
    id: 6,
    type: "outofstock",
    title: "Item out of stock",
    description: "Mango Milkshake is now out of stock",
    time: "6 hrs ago",
    isRead: true,
  },
  {
    id: 7,
    type: "order",
    title: "New order received",
    description: "Order ORD-10279 placed by Fatima Noor — Rs 1,560",
    time: "1 day ago",
    isRead: true,
  },
];
