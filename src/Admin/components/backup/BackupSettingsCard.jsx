// src/admin/components/backup/BackupSettingsCard.jsx
import { useState } from "react";
import { DatabaseBackup } from "lucide-react";
import { frequencyOptions } from "../../constants/backupData";

const BackupSettingsCard = ({
  settings,
  onSettingsChange,
  onCreateBackup,
  isCreating,
}) => {
  const [localSettings, setLocalSettings] = useState(settings);

  const handleToggle = () => {
    const updated = {
      ...localSettings,
      autoBackupEnabled: !localSettings.autoBackupEnabled,
    };
    setLocalSettings(updated);
    onSettingsChange(updated);
  };

  const handleFrequencyChange = (e) => {
    const updated = { ...localSettings, frequency: e.target.value };
    setLocalSettings(updated);
    onSettingsChange(updated);
  };

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex items-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50">
          <DatabaseBackup size={18} className="text-orange-500" />
        </div>
        <div>
          <h3 className="text-base font-bold text-slate-800">
            Backup Settings
          </h3>
          <p className="text-xs text-slate-400">
            Last backup: {localSettings.lastBackup}
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-3.5">
        <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3.5 py-3">
          <div>
            <p className="text-sm font-medium text-slate-700">
              Automatic Backup
            </p>
            <p className="text-xs text-slate-400">
              Regular intervals pe khud backup ho
            </p>
          </div>
          <button
            type="button"
            onClick={handleToggle}
            className={`
              relative inline-flex h-6 w-11 flex-shrink-0 items-center
              rounded-full border-0 p-0 outline-none transition-colors duration-300
              ${localSettings.autoBackupEnabled ? "bg-orange-600" : "bg-slate-300"}
            `}
          >
            <span
              className={`
                inline-block h-5 w-5 transform rounded-full bg-white shadow-sm
                transition-transform duration-300
                ${localSettings.autoBackupEnabled ? "translate-x-5" : "translate-x-0.5"}
              `}
            />
          </button>
        </div>

        {localSettings.autoBackupEnabled && (
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Backup Frequency
            </label>
            <select
              value={localSettings.frequency}
              onChange={handleFrequencyChange}
              className="
                w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
                text-sm text-slate-700 outline-none transition-all duration-300
                focus:border-orange-400 focus:ring-2 focus:ring-orange-100
              "
            >
              {frequencyOptions.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <button
        onClick={onCreateBackup}
        disabled={isCreating}
        className="
          mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600
          py-2.5 text-sm font-semibold text-white shadow-sm
          transition-all duration-300 hover:bg-orange-700
          disabled:cursor-not-allowed disabled:opacity-60
        "
      >
        <DatabaseBackup size={16} />
        {isCreating ? "Creating Backup..." : "Create Backup Now"}
      </button>
    </div>
  );
};

export default BackupSettingsCard;
