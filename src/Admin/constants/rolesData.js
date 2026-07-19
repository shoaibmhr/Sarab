// src/admin/constants/rolesData.js
export const permissionModules = [
  "Dashboard",
  "Orders",
  "Products",
  "Categories",
  "Customers",
  "Reports",
  "Settings",
];

export const permissionActions = ["view", "add", "edit", "delete"];

export const rolesData = [
  {
    id: 1,
    name: "Super Admin",
    description: "Full access to all modules",
    userCount: 1,
    isSystemRole: true,
    permissions: permissionModules.reduce((acc, module) => {
      acc[module] = { view: true, add: true, edit: true, delete: true };
      return acc;
    }, {}),
  },
  {
    id: 2,
    name: "Manager",
    description: "Can manage orders, products, and view reports",
    userCount: 1,
    isSystemRole: false,
    permissions: {
      Dashboard: { view: true, add: false, edit: false, delete: false },
      Orders: { view: true, add: true, edit: true, delete: false },
      Products: { view: true, add: true, edit: true, delete: false },
      Categories: { view: true, add: false, edit: true, delete: false },
      Customers: { view: true, add: false, edit: false, delete: false },
      Reports: { view: true, add: false, edit: false, delete: false },
      Settings: { view: false, add: false, edit: false, delete: false },
    },
  },
  {
    id: 3,
    name: "Cashier",
    description: "Can view and update orders only",
    userCount: 2,
    isSystemRole: false,
    permissions: {
      Dashboard: { view: true, add: false, edit: false, delete: false },
      Orders: { view: true, add: true, edit: true, delete: false },
      Products: { view: true, add: false, edit: false, delete: false },
      Categories: { view: true, add: false, edit: false, delete: false },
      Customers: { view: true, add: false, edit: false, delete: false },
      Reports: { view: false, add: false, edit: false, delete: false },
      Settings: { view: false, add: false, edit: false, delete: false },
    },
  },
];
