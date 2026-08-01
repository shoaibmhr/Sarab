// src/admin/components/layout/Header/NotificationsDropdown.jsx
import { useNavigate } from "react-router-dom";
import { Bell } from "lucide-react";
import {
  notificationsData,
  notificationTypes,
} from "../../../constants/notificationsData";

const colorMap = {
  blue: { bg: "bg-blue-50", icon: "text-blue-500" },
  amber: { bg: "bg-amber-50", icon: "text-amber-500" },
  orange: { bg: "bg-orange-50", icon: "text-orange-500" },
  green: { bg: "bg-green-50", icon: "text-green-600" },
  red: { bg: "bg-red-50", icon: "text-red-500" },
  rose: { bg: "bg-rose-50", icon: "text-rose-500" },
};

const NotificationsDropdown = ({ onClose }) => {
  const navigate = useNavigate();
  const recentNotifications = notificationsData.slice(0, 4);
  const unreadCount = notificationsData.filter((n) => !n.isRead).length;

  const handleViewAll = () => {
    navigate("/admin/notifications");
    onClose();
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="
        absolute right-0 top-11 z-50 w-80 overflow-hidden rounded-2xl
        border border-slate-100 bg-white shadow-xl
      "
    >
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
        <h3 className="text-sm font-bold text-slate-800">Notifications</h3>
        {unreadCount > 0 && (
          <span className="rounded-full bg-orange-50 px-2 py-0.5 text-xs font-semibold text-orange-600">
            {unreadCount} new
          </span>
        )}
      </div>

      <div className="max-h-72 overflow-y-auto">
        {recentNotifications.map((notification) => {
          const typeConfig = notificationTypes.find(
            (t) => t.value === notification.type,
          );
          const Icon = typeConfig?.icon || Bell;
          const colors = colorMap[typeConfig?.color] || colorMap.blue;

          return (
            <div
              key={notification.id}
              className={`
                flex items-start gap-2.5 border-b border-slate-50 px-4 py-3 last:border-none
                ${!notification.isRead ? "bg-orange-50/30" : ""}
              `}
            >
              <div
                className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${colors.bg}`}
              >
                <Icon size={15} className={colors.icon} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-slate-700">
                  {notification.title}
                </p>
                <p className="truncate text-xs text-slate-400">
                  {notification.description}
                </p>
                <p className="mt-0.5 text-[11px] text-slate-400">
                  {notification.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={handleViewAll}
        className="
          block w-full border-t border-slate-100 px-4 py-2.5 text-center
          text-xs font-semibold text-orange-600 transition hover:bg-orange-50
        "
      >
        View all notifications
      </button>
    </div>
  );
};

export default NotificationsDropdown;
