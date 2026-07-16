// src/admin/constants/offersData.js
export const offersData = [
  {
    id: 1,
    title: "Buy 1 Get 1 Free",
    description: "Har Pizza order pe ek Pizza bilkul free!",
    category: "Pizza",
    discountType: "bogo",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
    startDate: "2026-07-01",
    endDate: "2026-07-31",
    status: "active",
  },
  {
    id: 2,
    title: "Weekend Burger Deal",
    description: "Sab burgers pe 20% discount, sirf weekend ke liye",
    category: "Burgers",
    discountType: "percentage",
    discountValue: 20,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
    startDate: "2026-07-10",
    endDate: "2026-08-10",
    status: "active",
  },
  {
    id: 3,
    title: "Family Combo Deal",
    description: "2 Pizzas + 4 Drinks + Fries sirf Rs 2999 mein",
    category: "Combo",
    discountType: "combo",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400",
    startDate: "2026-06-01",
    endDate: "2026-06-30",
    status: "inactive",
  },
  {
    id: 4,
    title: "Free Delivery Friday",
    description: "Har Friday order pe delivery bilkul free",
    category: "All",
    discountType: "free_delivery",
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=400",
    startDate: "2026-07-01",
    endDate: "2026-12-31",
    status: "active",
  },
];

export const discountTypes = [
  { value: "percentage", label: "Percentage Discount" },
  { value: "bogo", label: "Buy 1 Get 1 Free" },
  { value: "combo", label: "Combo Deal" },
  { value: "free_delivery", label: "Free Delivery" },
];

export const offerCategories = [
  "All",
  "Pizza",
  "Burgers",
  "Beverages",
  "Desserts",
  "Combo",
];
