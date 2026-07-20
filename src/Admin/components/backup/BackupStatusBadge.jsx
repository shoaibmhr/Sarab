// src/admin/components/backup/BackupStatusBadge.jsx
const BackupStatusBadge = ({ status }) => {
  const isCompleted = status === "completed";

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
        isCompleted ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
      }`}
    >
      {isCompleted ? "Completed" : "Failed"}
    </span>
  );
};

export default BackupStatusBadge;
