// src/admin/constants/deliveryData.js
export const deliveryZonesData = [
  {
    id: 1,
    area: "Satellite Town",
    deliveryFee: 100,
    estimatedTime: "25-35 min",
    freeDeliveryMin: 1500,
    status: "active",
  },
  {
    id: 2,
    area: "Civil Lines",
    deliveryFee: 80,
    estimatedTime: "15-25 min",
    freeDeliveryMin: 1200,
    status: "active",
  },
  {
    id: 3,
    area: "Model Town",
    deliveryFee: 120,
    estimatedTime: "30-40 min",
    freeDeliveryMin: 1500,
    status: "active",
  },
  {
    id: 4,
    area: "Race Course Road",
    deliveryFee: 100,
    estimatedTime: "25-35 min",
    freeDeliveryMin: 1500,
    status: "active",
  },
  {
    id: 5,
    area: "Farooq Colony",
    deliveryFee: 150,
    estimatedTime: "40-50 min",
    freeDeliveryMin: 2000,
    status: "inactive",
  },
];

export const deliverySettings = {
  minOrderAmount: 300,
  defaultDeliveryFee: 100,
  isDeliveryEnabled: true,
};
