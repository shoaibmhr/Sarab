// src/admin/pages/Reports.jsx
import { useState } from "react";
import { DollarSign, ShoppingBag, TrendingUp, Receipt } from "lucide-react";

import ReportsToolbar from "../components/reports/ReportsToolbar";
import SummaryCard from "../components/reports/SummaryCard";
import RevenueTrendChart from "../components/reports/RevenueTrendChart";
import PaymentMethodChart from "../components/reports/PaymentMethodChart";
import CategoryReportTable from "../components/reports/CategoryReportTable";

import {
  revenueReportData,
  categoryReportData,
  paymentReportData,
  reportSummary,
} from "../constants/reportsData";

const Reports = () => {
  const [dateRange, setDateRange] = useState("This Week");

  const handleExport = () => {
    // ⚠️ Abhi placeholder — backend banne par PDF/CSV generate karega
    alert("Export feature backend connect hone ke baad kaam karega.");
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-slate-800">Reports</h1>
        <p className="mt-1 text-sm text-slate-500">
          Business performance ka detailed analysis.
        </p>
      </div>

      <ReportsToolbar
        dateRange={dateRange}
        onDateRangeChange={setDateRange}
        onExport={handleExport}
      />

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-3.5 lg:grid-cols-4">
        <SummaryCard
          label="Total Revenue"
          value={`Rs ${reportSummary.totalRevenue.toLocaleString()}`}
          icon={DollarSign}
          trend={`${reportSummary.growthPercentage}%`}
        />
        <SummaryCard
          label="Total Orders"
          value={reportSummary.totalOrders.toLocaleString()}
          icon={ShoppingBag}
        />
        <SummaryCard
          label="Avg Order Value"
          value={`Rs ${reportSummary.avgOrderValue}`}
          icon={Receipt}
        />
        <SummaryCard
          label="Growth"
          value={`${reportSummary.growthPercentage}%`}
          icon={TrendingUp}
        />
      </div>

      {/* Revenue Trend + Payment Methods */}
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RevenueTrendChart data={revenueReportData} />
        </div>
        <div className="xl:col-span-1">
          <PaymentMethodChart data={paymentReportData} />
        </div>
      </div>

      {/* Category Breakdown */}
      <CategoryReportTable data={categoryReportData} />
    </div>
  );
};

export default Reports;
