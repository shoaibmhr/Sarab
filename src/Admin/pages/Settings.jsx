// src/admin/pages/Settings.jsx
import { useState } from "react";

import SettingsTabs from "../components/settings/SettingsTabs";
import GeneralSettings from "../components/settings/GeneralSettings";
import BusinessSettings from "../components/settings/BusinessSettings";
import NotificationSettings from "../components/settings/NotificationSettings";

import { settingsData } from "../constants/settingsData";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [settings, setSettings] = useState(settingsData);

  const handleSaveSection = (section, data) => {
    setSettings((prev) => ({ ...prev, [section]: data }));
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-slate-800">Settings</h1>
        <p className="mt-1 text-sm text-slate-500">
          Restaurant ki settings configure karein.
        </p>
      </div>

      <SettingsTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === "general" && (
        <GeneralSettings
          data={settings.general}
          onSave={(data) => handleSaveSection("general", data)}
        />
      )}
      {activeTab === "business" && (
        <BusinessSettings
          data={settings.business}
          onSave={(data) => handleSaveSection("business", data)}
        />
      )}
      {activeTab === "notifications" && (
        <NotificationSettings
          data={settings.notifications}
          onSave={(data) => handleSaveSection("notifications", data)}
        />
      )}
    </div>
  );
};

export default Settings;
