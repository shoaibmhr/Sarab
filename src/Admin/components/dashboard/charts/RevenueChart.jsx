import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { revenueThisMonthData } from "../../../constants/dashboardData";

const RevenueChart = ({
  totalRevenue = "Rs 192,600",
  momChange = "+22.3% MoM",
}) => {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="text-base font-bold text-slate-800">
            Revenue this Month
          </h3>
          <p className="text-sm text-slate-500">Daily revenue snapshot</p>
        </div>

        <div className="text-right">
          <p className="text-xl font-bold text-slate-800">{totalRevenue}</p>
          <span className="text-xs font-semibold text-green-600">
            {momChange}
          </span>
        </div>
      </div>

      <div className="mt-6 h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenueThisMonthData}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f1f5f9"
            />
            <XAxis
              dataKey="day"
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
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#dc2626"
              strokeWidth={2.5}
              dot={{ r: 4, fill: "#dc2626" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
