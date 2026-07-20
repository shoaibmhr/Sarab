// src/admin/constants/backupData.js
export const backupSettings = {
  autoBackupEnabled: true,
  frequency: "Daily",
  lastBackup: "2026-07-19 03:00 AM",
};

export const backupHistoryData = [
  {
    id: 1,
    name: "backup_2026-07-19_0300.sql",
    size: "24.8 MB",
    type: "Automatic",
    date: "2026-07-19",
    time: "3:00 AM",
    status: "completed",
  },
  {
    id: 2,
    name: "backup_2026-07-18_0300.sql",
    size: "24.3 MB",
    type: "Automatic",
    date: "2026-07-18",
    time: "3:00 AM",
    status: "completed",
  },
  {
    id: 3,
    name: "backup_2026-07-17_1445.sql",
    size: "23.9 MB",
    type: "Manual",
    date: "2026-07-17",
    time: "2:45 PM",
    status: "completed",
  },
  {
    id: 4,
    name: "backup_2026-07-17_0300.sql",
    size: "23.8 MB",
    type: "Automatic",
    date: "2026-07-17",
    time: "3:00 AM",
    status: "completed",
  },
  {
    id: 5,
    name: "backup_2026-07-16_0300.sql",
    size: "23.1 MB",
    type: "Automatic",
    date: "2026-07-16",
    time: "3:00 AM",
    status: "failed",
  },
];

export const frequencyOptions = ["Daily", "Weekly", "Monthly"];
