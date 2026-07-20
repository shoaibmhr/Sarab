// src/admin/pages/ActivityLogs.jsx
import { useState, useMemo } from "react";
import { History } from "lucide-react";

import ActivityLogsFilter from "../components/activity-logs/ActivityLogsFilter";
import ActivityLogItem from "../components/activity-logs/ActivityLogItem";

import { activityLogsData, actionTypes } from "../constants/activityLogsData";

const ActivityLogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [actionFilter, setActionFilter] = useState("All");

  const filteredLogs = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return activityLogsData.filter((log) => {
      const matchesSearch =
        log.user.toLowerCase().includes(term) ||
        log.description.toLowerCase().includes(term);
      const matchesAction =
        actionFilter === "All" || log.action === actionFilter;
      return matchesSearch && matchesAction;
    });
  }, [searchTerm, actionFilter]);

  // Date ke hisaab se group karna (Today, Yesterday, etc. jaisa dikhega)
  const groupedByDate = useMemo(() => {
    const groups = {};
    filteredLogs.forEach((log) => {
      if (!groups[log.date]) groups[log.date] = [];
      groups[log.date].push(log);
    });
    return groups;
  }, [filteredLogs]);

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-slate-800">Activity Logs</h1>
        <p className="mt-1 text-sm text-slate-500">
          System mein hui sab activities ka record.
        </p>
      </div>

      <ActivityLogsFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        actionFilter={actionFilter}
        onActionChange={setActionFilter}
        actionTypes={actionTypes}
      />

      {filteredLogs.length > 0 ? (
        <div className="space-y-5">
          {Object.entries(groupedByDate).map(([date, logs]) => (
            <div
              key={date}
              className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5"
            >
              <p className="mb-3.5 text-xs font-bold uppercase tracking-wide text-slate-400">
                {date}
              </p>
              <div>
                {logs.map((log, index) => (
                  <ActivityLogItem
                    key={log.id}
                    log={log}
                    isLast={index === logs.length - 1}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-10 text-center shadow-sm">
          <History size={36} className="text-slate-300" />
          <p className="mt-3 text-sm font-medium text-slate-500">
            Koi activity nahi mili
          </p>
        </div>
      )}
    </div>
  );
};

export default ActivityLogs;
