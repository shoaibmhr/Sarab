import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { revenueTrendData } from "../../constants/reportsData";

const RevenueTrendChart = () => {
  return (
    <div className="h-[320px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={revenueTrendData}
          margin={{
            top: 10,
            right: 10,
            left: -20,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f97316" stopOpacity={0.45} />

              <stop offset="100%" stopColor="#f97316" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e2e8f0"
          />

          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tick={{
              fontSize: 12,
              fill: "#64748b",
            }}
          />

          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{
              fontSize: 12,
              fill: "#64748b",
            }}
          />

          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "none",
              boxShadow: "0 10px 30px rgba(0,0,0,.12)",
            }}
          />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#f97316"
            strokeWidth={3}
            fill="url(#revenueGradient)"
            activeDot={{
              r: 6,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueTrendChart;
