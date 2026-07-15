// src/admin/constants/customersData.js

export const customerStatuses = ["All", "Active", "Inactive", "Blocked"];

export const sortOptions = ["Newest", "Most Orders", "Highest Spending"];

export const customersData = [
  {
    id: 1,
    name: "Ali Khan",
    email: "ali.khan@example.com",
    phone: "+92 300 1234567",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
    status: "Active",

    joinDate: "2026-01-12",
    lastOrder: "2026-07-14",

    totalOrders: 24,
    totalSpent: 38450,

    address: "House #12, Street #5, Satellite Town, Sargodha",

    notes: "Regular customer. Usually pays online.",

    recentOrders: [
      {
        id: "ORD-1001",
        total: 1450,
        status: "Delivered",
      },
      {
        id: "ORD-1005",
        total: 2850,
        status: "Delivered",
      },
      {
        id: "ORD-1012",
        total: 3200,
        status: "Preparing",
      },
    ],
  },

  {
    id: 2,
    name: "Sara Ahmed",
    email: "sara.ahmed@example.com",
    phone: "+92 321 9876543",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
    status: "Active",

    joinDate: "2026-02-08",
    lastOrder: "2026-07-13",

    totalOrders: 18,
    totalSpent: 27100,

    address: "Model Town Block A, Lahore",

    notes: "Prefers cash on delivery.",

    recentOrders: [
      {
        id: "ORD-1022",
        total: 2200,
        status: "Delivered",
      },
      {
        id: "ORD-1028",
        total: 1750,
        status: "Pending",
      },
    ],
  },

  {
    id: 3,
    name: "Bilal Hussain",
    email: "bilal@example.com",
    phone: "+92 333 7654321",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300",
    status: "Inactive",

    joinDate: "2025-12-15",
    lastOrder: "2026-05-19",

    totalOrders: 9,
    totalSpent: 12800,

    address: "Civil Lines, Faisalabad",

    notes: "Inactive for two months.",

    recentOrders: [
      {
        id: "ORD-0951",
        total: 1850,
        status: "Delivered",
      },
    ],
  },

  {
    id: 4,
    name: "Fatima Noor",
    email: "fatima@example.com",
    phone: "+92 301 4447788",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
    status: "Blocked",

    joinDate: "2025-11-22",
    lastOrder: "2026-04-11",

    totalOrders: 3,
    totalSpent: 4200,

    address: "Johar Town, Lahore",

    notes: "Blocked due to repeated fake orders.",

    recentOrders: [
      {
        id: "ORD-0820",
        total: 1200,
        status: "Cancelled",
      },
    ],
  },

  {
    id: 5,
    name: "Hamza Sheikh",
    email: "hamza@example.com",
    phone: "+92 312 5566778",
    avatar:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=300",
    status: "Active",

    joinDate: "2026-03-10",
    lastOrder: "2026-07-15",

    totalOrders: 31,
    totalSpent: 52400,

    address: "Race Course Road, Sargodha",

    notes: "VIP customer.",

    recentOrders: [
      {
        id: "ORD-1032",
        total: 4800,
        status: "Delivered",
      },
      {
        id: "ORD-1035",
        total: 2150,
        status: "Preparing",
      },
      {
        id: "ORD-1037",
        total: 3650,
        status: "Pending",
      },
    ],
  },

  {
    id: 6,
    name: "Ayesha Malik",
    email: "ayesha@example.com",
    phone: "+92 345 1122334",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300",
    status: "Active",

    joinDate: "2026-04-18",
    lastOrder: "2026-07-11",

    totalOrders: 12,
    totalSpent: 16900,

    address: "Canal View, Multan",

    notes: "Frequently orders desserts.",

    recentOrders: [
      {
        id: "ORD-1015",
        total: 1450,
        status: "Delivered",
      },
      {
        id: "ORD-1029",
        total: 1950,
        status: "Delivered",
      },
    ],
  },

  {
    id: 7,
    name: "Usman Tariq",
    email: "usman@example.com",
    phone: "+92 334 5566112",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300",
    status: "Inactive",

    joinDate: "2026-02-20",
    lastOrder: "2026-06-01",

    totalOrders: 6,
    totalSpent: 8900,

    address: "Gulberg III, Lahore",

    notes: "Occasional customer.",

    recentOrders: [
      {
        id: "ORD-0974",
        total: 980,
        status: "Delivered",
      },
    ],
  },

  {
    id: 8,
    name: "Zain Ali",
    email: "zain@example.com",
    phone: "+92 300 9876541",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=300",
    status: "Active",

    joinDate: "2026-05-04",
    lastOrder: "2026-07-15",

    totalOrders: 27,
    totalSpent: 45100,

    address: "DHA Phase 6, Lahore",

    notes: "Premium customer.",

    recentOrders: [
      {
        id: "ORD-1039",
        total: 5200,
        status: "Preparing",
      },
      {
        id: "ORD-1041",
        total: 1800,
        status: "Pending",
      },
    ],
  },
];
