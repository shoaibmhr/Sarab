// src/admin/pages/Analytics.jsx
import { Users, TrendingUp, Repeat, Clock } from "lucide-react";

import InsightCard from "../components/analytics/InsightCard";
import CustomerGrowthChart from "../components/analytics/CustomerGrowthChart";
import PeakHoursChart from "../components/analytics/PeakHoursChart";
import TopCustomersTable from "../components/analytics/TopCustomersTable";

import {
  customerGrowthData,
  peakHoursData,
  topCustomersData,
  analyticsInsights,
} from "../constants/analyticsData";

const Analytics = () => {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-slate-800">Analytics</h1>
        <p className="mt-1 text-sm text-slate-500">
          Customer behavior aur trends ki deep insights.
        </p>
      </div>

      {/* Insight Cards */}
      <div className="grid grid-cols-2 gap-3.5 lg:grid-cols-4">
        <InsightCard
          label="Retention Rate"
          value={analyticsInsights.retentionRate}
          suffix="%"
          icon={Repeat}
        />
        <InsightCard
          label="Avg Orders / Customer"
          value={analyticsInsights.avgOrdersPerCustomer}
          icon={TrendingUp}
        />
        <InsightCard
          label="Repeat Customers"
          value={analyticsInsights.repeatCustomerPercentage}
          suffix="%"
          icon={Users}
        />
        <InsightCard
          label="Peak Hour"
          value={analyticsInsights.peakHour}
          icon={Clock}
        />
      </div>

      {/* Customer Growth + Peak Hours */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <CustomerGrowthChart data={customerGrowthData} />
        <PeakHoursChart data={peakHoursData} />
      </div>

      {/* Top Customers */}
      <TopCustomersTable data={topCustomersData} />
    </div>
  );
};

export default Analytics;
