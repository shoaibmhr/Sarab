import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import { paymentMethodsData } from "../../constants/reportsData";

const COLORS = ["#22c55e", "#3b82f6", "#f97316"];

const totalPayments = paymentMethodsData.reduce(
  (sum, item) => sum + item.value,
  0,
);

const PaymentMethodsChart = () => {
  return (
    <div className="relative h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={paymentMethodsData}
            dataKey="value"
            innerRadius={65}
            outerRadius={95}
            paddingAngle={4}
          >
            {paymentMethodsData.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              border: "none",
              borderRadius: "12px",
              boxShadow: "0 10px 25px rgba(0,0,0,.12)",
            }}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* Center Content */}

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-slate-800">
            {totalPayments}%
          </h3>

          <p className="text-sm text-slate-500">Payments</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodsChart;
