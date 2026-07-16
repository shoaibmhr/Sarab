// src/admin/components/reports/PaymentMethodChart.jsx
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#ea580c", "#3b82f6", "#f59e0b", "#22c55e"];

const PaymentMethodChart = ({ data }) => {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
      <h3 className="text-base font-bold text-slate-800">Payment Methods</h3>
      <p className="text-sm text-slate-500">Revenue by payment type</p>

      <div className="mt-4 h-[220px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="amount"
              nameKey="method"
              innerRadius={45}
              outerRadius={75}
              paddingAngle={3}
            >
              {data.map((entry, index) => (
                <Cell key={entry.method} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => [`Rs ${value.toLocaleString()}`, "Revenue"]}
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #f1f5f9",
                fontSize: "13px",
              }}
            />
            <Legend
              iconType="circle"
              iconSize={8}
              formatter={(value) => (
                <span className="text-xs text-slate-600">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PaymentMethodChart;
