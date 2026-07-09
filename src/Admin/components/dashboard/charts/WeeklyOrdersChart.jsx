import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { weeklyOrdersData } from "../../../constants/dashboardData";

const HIGHLIGHT_DAY = "Sat";

const WeeklyOrdersChart = () => {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
      <div>
        <h3 className="text-base font-bold text-slate-800">Weekly Orders</h3>
        <p className="text-sm text-slate-500">Orders per day this week</p>
      </div>

      <div className="mt-6 h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={weeklyOrdersData}>
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
            />
            <Bar dataKey="orders" radius={[6, 6, 0, 0]} maxBarSize={40}>
              {weeklyOrdersData.map((entry) => (
                <Cell
                  key={entry.day}
                  fill={entry.day === HIGHLIGHT_DAY ? "#dc2626" : "#f97316"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklyOrdersChart;
