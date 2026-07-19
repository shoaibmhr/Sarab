// src/admin/components/settings/NotificationSettings.jsx
import { useState } from "react";
import ToggleRow from "./ToggleRow";

const NotificationSettings = ({ data, onSave }) => {
  const [formData, setFormData] = useState(data);
  const [saved, setSaved] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    onSave(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
      <h3 className="text-base font-bold text-slate-800">
        Notification Preferences
      </h3>
      <p className="text-sm text-slate-500">Kab aur kaise alert milen.</p>

      <div className="mt-4 space-y-3">
        <ToggleRow
          label="Email on New Order"
          checked={formData.emailOnNewOrder}
          onChange={(val) => handleChange("emailOnNewOrder", val)}
        />
        <ToggleRow
          label="Email on Low Stock"
          checked={formData.emailOnLowStock}
          onChange={(val) => handleChange("emailOnLowStock", val)}
        />
        <ToggleRow
          label="Email on New Review"
          checked={formData.emailOnNewReview}
          onChange={(val) => handleChange("emailOnNewReview", val)}
        />
        <ToggleRow
          label="SMS on New Order"
          checked={formData.smsOnNewOrder}
          onChange={(val) => handleChange("smsOnNewOrder", val)}
        />
        <ToggleRow
          label="Push Notifications"
          description="Browser/app push notifications"
          checked={formData.pushNotifications}
          onChange={(val) => handleChange("pushNotifications", val)}
        />
      </div>

      <div className="mt-4 flex items-center gap-3 border-t border-slate-50 pt-4">
        <button
          onClick={handleSave}
          className="
            rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white
            shadow-sm transition-all duration-300 hover:bg-orange-700
          "
        >
          Save Changes
        </button>
        {saved && (
          <span className="text-xs font-semibold text-green-600">
            ✓ Saved successfully
          </span>
        )}
      </div>
    </div>
  );
};

export default NotificationSettings;
