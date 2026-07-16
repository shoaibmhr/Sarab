import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ordersTrendData } from "../../constants/reportsData";

const OrdersTrendChart = () => {
  return (
    <div className="h-[320px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={ordersTrendData}
          margin={{
            top: 10,
            right: 10,
            left: -20,
            bottom: 0,
          }}
        >
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
            cursor={{ fill: "#f8fafc" }}
            contentStyle={{
              borderRadius: "12px",
              border: "none",
              boxShadow: "0 10px 30px rgba(0,0,0,.12)",
            }}
          />

          <Bar dataKey="orders" radius={[8, 8, 0, 0]} maxBarSize={38}>
            {ordersTrendData.map((_, index) => (
              <Cell key={index} fill="#3b82f6" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrdersTrendChart;
