// src/admin/pages/Notifications.jsx
import { useState, useMemo } from "react";
import { BellOff, CheckCheck } from "lucide-react";

import NotificationsFilter from "../components/notifications/NotificationsFilter";
import NotificationItem from "../components/notifications/NotificationItem";

import {
  notificationsData,
  notificationTypes,
} from "../constants/notificationsData";

const Notifications = () => {
  const [notifications, setNotifications] = useState(notificationsData);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredNotifications = useMemo(() => {
    if (activeFilter === "All") return notifications;
    return notifications.filter((n) => n.type === activeFilter);
  }, [notifications, activeFilter]);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const handleMarkRead = (notification) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === notification.id ? { ...n, isRead: true } : n)),
    );
  };

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-800">Notifications</h1>
          <p className="mt-1 text-sm text-slate-500">
            System alerts aur updates.
            {unreadCount > 0 && (
              <span className="ml-1.5 font-semibold text-orange-600">
                ({unreadCount} unread)
              </span>
            )}
          </p>
        </div>

        {unreadCount > 0 && (
          <button
            onClick={handleMarkAllRead}
            className="
              flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white
              px-3.5 py-2 text-sm font-semibold text-slate-700 shadow-sm
              transition-all duration-300 hover:bg-slate-50
            "
          >
            <CheckCheck size={15} />
            Mark all read
          </button>
        )}
      </div>

      <NotificationsFilter
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        types={notificationTypes}
      />

      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
              onMarkRead={handleMarkRead}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center p-10 text-center">
            <BellOff size={36} className="text-slate-300" />
            <p className="mt-3 text-sm font-medium text-slate-500">
              Koi notification nahi hai
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
