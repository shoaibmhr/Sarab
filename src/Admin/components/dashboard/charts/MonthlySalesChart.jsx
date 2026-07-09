import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { monthlySalesData } from "../../../constants/dashboardData";

const MonthlySalesChart = () => {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h3 className="text-base font-bold text-slate-800">Monthly Sales</h3>
          <p className="text-sm text-slate-500">
            Revenue trend across the year
          </p>
        </div>
        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
          ↗ 18.6% vs last year
        </span>
      </div>

      <div className="mt-6 h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={monthlySalesData}>
            <defs>
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ea580c" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#ea580c" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f1f5f9"
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#94a3b8" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#94a3b8" }}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #f1f5f9",
                fontSize: "13px",
              }}
              formatter={(value) => [`Rs ${value.toLocaleString()}`, "Revenue"]}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#ea580c"
              strokeWidth={2.5}
              fill="url(#salesGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlySalesChart;
