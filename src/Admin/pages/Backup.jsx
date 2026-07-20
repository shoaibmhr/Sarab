// src/admin/pages/Backup.jsx
import { useState } from "react";
import { Download, RotateCcw, Trash2, HardDriveDownload } from "lucide-react";

import BackupSettingsCard from "../components/backup/BackupSettingsCard";
import BackupStatusBadge from "../components/backup/BackupStatusBadge";
import ConfirmDeleteModal from "../components/common/ConfirmDeleteModal";

import { backupSettings, backupHistoryData } from "../constants/backupData";

const Backup = () => {
  const [settings, setSettings] = useState(backupSettings);
  const [history, setHistory] = useState(backupHistoryData);
  const [isCreating, setIsCreating] = useState(false);
  const [deletingBackup, setDeletingBackup] = useState(null);

  const handleCreateBackup = () => {
    setIsCreating(true);
    // ⚠️ Abhi simulate kar rahe hain — backend banne par yahan actual API call hogi
    setTimeout(() => {
      const newBackup = {
        id: Date.now(),
        name: `backup_${new Date().toISOString().split("T")[0]}_manual.sql`,
        size: "25.1 MB",
        type: "Manual",
        date: new Date().toISOString().split("T")[0],
        time: new Date().toLocaleTimeString(),
        status: "completed",
      };
      setHistory((prev) => [newBackup, ...prev]);
      setIsCreating(false);
    }, 2000);
  };

  const handleDeleteClick = (backup) => {
    setDeletingBackup(backup);
  };

  const handleConfirmDelete = () => {
    setHistory((prev) => prev.filter((b) => b.id !== deletingBackup.id));
    setDeletingBackup(null);
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-slate-800">Backup</h1>
        <p className="mt-1 text-sm text-slate-500">
          Database backups create aur manage karein.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Settings */}
        <div className="lg:col-span-1">
          <BackupSettingsCard
            settings={settings}
            onSettingsChange={setSettings}
            onCreateBackup={handleCreateBackup}
            isCreating={isCreating}
          />
        </div>

        {/* History */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-slate-100 bg-white shadow-sm">
            <div className="border-b border-slate-100 p-4 sm:p-5">
              <h3 className="text-base font-bold text-slate-800">
                Backup History
              </h3>
              <p className="text-sm text-slate-500">Purane backups ki list</p>
            </div>

            {history.length > 0 ? (
              <div className="divide-y divide-slate-50">
                {history.map((backup) => (
                  <div
                    key={backup.id}
                    className="flex items-center justify-between gap-3 p-3.5"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-slate-800">
                        {backup.name}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-400">
                        {backup.size} · {backup.type} · {backup.date}{" "}
                        {backup.time}
                      </p>
                    </div>

                    <div className="flex flex-shrink-0 items-center gap-2">
                      <BackupStatusBadge status={backup.status} />

                      {backup.status === "completed" && (
                        <>
                          <button
                            className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                            title="Download"
                          >
                            <Download size={15} />
                          </button>
                          <button
                            className="rounded-lg p-1.5 text-slate-400 transition hover:bg-blue-50 hover:text-blue-500"
                            title="Restore"
                          >
                            <RotateCcw size={15} />
                          </button>
                        </>
                      )}
                      <button
                        onClick={() => handleDeleteClick(backup)}
                        className="rounded-lg p-1.5 text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                        title="Delete"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center p-10 text-center">
                <HardDriveDownload size={36} className="text-slate-300" />
                <p className="mt-3 text-sm font-medium text-slate-500">
                  Koi backup nahi mila
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <ConfirmDeleteModal
        isOpen={!!deletingBackup}
        onClose={() => setDeletingBackup(null)}
        onConfirm={handleConfirmDelete}
        itemName={deletingBackup?.name}
      />
    </div>
  );
};

export default Backup;
