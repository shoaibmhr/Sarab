// src/admin/constants/reportsData.js
export const revenueReportData = [
  { period: "Mon", revenue: 28000, orders: 145 },
  { period: "Tue", revenue: 32000, orders: 160 },
  { period: "Wed", revenue: 27000, orders: 140 },
  { period: "Thu", revenue: 35000, orders: 175 },
  { period: "Fri", revenue: 42000, orders: 205 },
  { period: "Sat", revenue: 58000, orders: 290 },
  { period: "Sun", revenue: 51000, orders: 260 },
];

export const categoryReportData = [
  { category: "Pizza", revenue: 185000, orders: 420, percentage: 38 },
  { category: "Burgers", revenue: 132000, orders: 380, percentage: 27 },
  { category: "Beverages", revenue: 68000, orders: 310, percentage: 14 },
  { category: "Desserts", revenue: 54000, orders: 190, percentage: 11 },
  { category: "Appetizers", revenue: 49000, orders: 160, percentage: 10 },
];

export const paymentReportData = [
  { method: "COD", amount: 195000, percentage: 40 },
  { method: "Card", amount: 146000, percentage: 30 },
  { method: "JazzCash", amount: 98000, percentage: 20 },
  { method: "EasyPaisa", amount: 49000, percentage: 10 },
];

export const reportSummary = {
  totalRevenue: 488000,
  totalOrders: 1460,
  avgOrderValue: 334,
  growthPercentage: 18.6,
};

export const dateRanges = ["Today", "This Week", "This Month", "This Year"];
