// src/admin/components/notifications/NotificationItem.jsx
import { notificationTypes } from "../../constants/notificationsData";

const colorMap = {
  blue: { bg: "bg-blue-50", icon: "text-blue-500" },
  amber: { bg: "bg-amber-50", icon: "text-amber-500" },
  orange: { bg: "bg-orange-50", icon: "text-orange-500" },
  green: { bg: "bg-green-50", icon: "text-green-600" },
  red: { bg: "bg-red-50", icon: "text-red-500" },
  rose: { bg: "bg-rose-50", icon: "text-rose-500" },
};

const NotificationItem = ({ notification, onMarkRead }) => {
  const typeConfig = notificationTypes.find(
    (t) => t.value === notification.type,
  );
  const Icon = typeConfig?.icon;
  const colors = colorMap[typeConfig?.color] || colorMap.blue;

  return (
    <button
      onClick={() => onMarkRead(notification)}
      className={`
        flex w-full items-start gap-3 border-b border-slate-50 p-3.5 text-left
        transition-all duration-300 last:border-none hover:bg-slate-50
        ${!notification.isRead ? "bg-orange-50/40" : "bg-white"}
      `}
    >
      <div
        className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl ${colors.bg}`}
      >
        {Icon && <Icon size={17} className={colors.icon} />}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <p
            className={`text-sm ${
              notification.isRead
                ? "font-medium text-slate-700"
                : "font-bold text-slate-800"
            }`}
          >
            {notification.title}
          </p>
          {!notification.isRead && (
            <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-orange-600" />
          )}
        </div>
        <p className="mt-0.5 text-sm text-slate-500">
          {notification.description}
        </p>
        <p className="mt-1 text-xs text-slate-400">{notification.time}</p>
      </div>
    </button>
  );
};

export default NotificationItem;
