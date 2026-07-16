// src/admin/constants/reportsData.js

// ==============================
// Report Summary Cards
// ==============================

export const reportSummary = [
  {
    id: 1,
    title: "Total Revenue",
    value: "$48,920",
    change: "+12.8%",
    trend: "up",
    color: "green",
  },
  {
    id: 2,
    title: "Total Orders",
    value: "1,248",
    change: "+8.2%",
    trend: "up",
    color: "blue",
  },
  {
    id: 3,
    title: "Average Order",
    value: "$39.20",
    change: "+4.1%",
    trend: "up",
    color: "orange",
  },
  {
    id: 4,
    title: "Net Profit",
    value: "$17,680",
    change: "-2.3%",
    trend: "down",
    color: "red",
  },
];

// ==============================
// Filter Options
// ==============================

export const reportPeriods = [
  "Today",
  "Yesterday",
  "Last 7 Days",
  "Last 30 Days",
  "This Month",
  "Last Month",
  "This Year",
];

// ==============================
// Revenue Trend
// ==============================

export const revenueTrendData = [
  { month: "Jan", revenue: 6200 },
  { month: "Feb", revenue: 7400 },
  { month: "Mar", revenue: 6800 },
  { month: "Apr", revenue: 8100 },
  { month: "May", revenue: 9200 },
  { month: "Jun", revenue: 10800 },
  { month: "Jul", revenue: 12400 },
];

// ==============================
// Orders Trend
// ==============================

export const ordersTrendData = [
  { month: "Jan", orders: 120 },
  { month: "Feb", orders: 158 },
  { month: "Mar", orders: 171 },
  { month: "Apr", orders: 198 },
  { month: "May", orders: 236 },
  { month: "Jun", orders: 284 },
  { month: "Jul", orders: 331 },
];

// ==============================
// Category Sales
// ==============================

export const categorySalesData = [
  {
    name: "Burgers",
    sales: 34,
  },
  {
    name: "Pizza",
    sales: 25,
  },
  {
    name: "Drinks",
    sales: 16,
  },
  {
    name: "Desserts",
    sales: 11,
  },
  {
    name: "Fries",
    sales: 14,
  },
];

// ==============================
// Payment Methods
// ==============================

export const paymentMethodsData = [
  {
    name: "Cash",
    value: 42,
  },
  {
    name: "Card",
    value: 36,
  },
  {
    name: "Online",
    value: 22,
  },
];

// ==============================
// Top Selling Products
// ==============================

export const topSellingProducts = [
  {
    id: 1,
    product: "Zinger Burger",
    category: "Burger",
    sold: 438,
    revenue: "$5,694",
  },
  {
    id: 2,
    product: "Pepperoni Pizza",
    category: "Pizza",
    sold: 321,
    revenue: "$7,062",
  },
  {
    id: 3,
    product: "Chicken Wrap",
    category: "Wrap",
    sold: 286,
    revenue: "$3,432",
  },
  {
    id: 4,
    product: "French Fries",
    category: "Snacks",
    sold: 251,
    revenue: "$2,510",
  },
  {
    id: 5,
    product: "Cold Coffee",
    category: "Drinks",
    sold: 228,
    revenue: "$2,964",
  },
];

// ==============================
// Recent Transactions
// ==============================

export const recentTransactions = [
  {
    id: "#TX-1001",
    customer: "Ali Khan",
    amount: "$82.00",
    method: "Card",
    status: "Paid",
    date: "Today",
  },
  {
    id: "#TX-1002",
    customer: "Sara Ahmed",
    amount: "$43.50",
    method: "Cash",
    status: "Paid",
    date: "Today",
  },
  {
    id: "#TX-1003",
    customer: "Hamza Sheikh",
    amount: "$61.20",
    method: "Online",
    status: "Paid",
    date: "Yesterday",
  },
  {
    id: "#TX-1004",
    customer: "Ayesha Malik",
    amount: "$28.40",
    method: "Cash",
    status: "Refunded",
    date: "Yesterday",
  },
  {
    id: "#TX-1005",
    customer: "Bilal Hussain",
    amount: "$134.00",
    method: "Card",
    status: "Paid",
    date: "2 Days Ago",
  },
];

// ==============================
// Peak Sales Hours
// ==============================

export const peakHoursData = [
  {
    hour: "10 AM",
    orders: 18,
  },
  {
    hour: "12 PM",
    orders: 64,
  },
  {
    hour: "2 PM",
    orders: 92,
  },
  {
    hour: "4 PM",
    orders: 58,
  },
  {
    hour: "6 PM",
    orders: 138,
  },
  {
    hour: "8 PM",
    orders: 166,
  },
  {
    hour: "10 PM",
    orders: 104,
  },
];
