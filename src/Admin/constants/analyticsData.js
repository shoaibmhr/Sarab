// src/admin/constants/analyticsData.js
export const customerGrowthData = [
  { month: "Feb", newCustomers: 145, returningCustomers: 320 },
  { month: "Mar", newCustomers: 168, returningCustomers: 358 },
  { month: "Apr", newCustomers: 152, returningCustomers: 402 },
  { month: "May", newCustomers: 190, returningCustomers: 445 },
  { month: "Jun", newCustomers: 210, returningCustomers: 490 },
  { month: "Jul", newCustomers: 238, returningCustomers: 528 },
];

export const peakHoursData = [
  { hour: "10AM", orders: 12 },
  { hour: "12PM", orders: 45 },
  { hour: "2PM", orders: 38 },
  { hour: "4PM", orders: 22 },
  { hour: "6PM", orders: 58 },
  { hour: "8PM", orders: 92 },
  { hour: "10PM", orders: 64 },
];

export const topCustomersData = [
  { id: 1, name: "Ali Khan", orders: 24, totalSpent: 38240, avgOrder: 1593 },
  { id: 2, name: "Sara Ahmed", orders: 18, totalSpent: 27180, avgOrder: 1510 },
  {
    id: 3,
    name: "Bilal Hussain",
    orders: 12,
    totalSpent: 19420,
    avgOrder: 1618,
  },
  { id: 4, name: "Ayesha Malik", orders: 8, totalSpent: 11890, avgOrder: 1486 },
  { id: 5, name: "Hamza Sheikh", orders: 7, totalSpent: 9870, avgOrder: 1410 },
];

export const analyticsInsights = {
  retentionRate: 68,
  avgOrdersPerCustomer: 3.2,
  repeatCustomerPercentage: 54,
  peakHour: "8PM",
};
