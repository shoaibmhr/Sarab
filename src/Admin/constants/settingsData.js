// src/admin/constants/settingsData.js
export const settingsData = {
  general: {
    restaurantName: "Sarab Restaurant",
    tagline: "Restaurant Management",
    logo: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
    timezone: "Asia/Karachi",
    currency: "PKR",
  },
  business: {
    taxPercentage: 5,
    serviceCharge: 10,
    minOrderAmount: 300,
    orderPrefix: "ORD",
    autoAcceptOrders: false,
  },
  notifications: {
    emailOnNewOrder: true,
    emailOnLowStock: true,
    emailOnNewReview: false,
    smsOnNewOrder: false,
    pushNotifications: true,
  },
};