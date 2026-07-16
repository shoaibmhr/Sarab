import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

import { categorySalesData } from "../../constants/reportsData";

const COLORS = ["#f97316", "#3b82f6", "#22c55e", "#eab308", "#8b5cf6"];

const CategorySalesChart = () => {
  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={categorySalesData}
            dataKey="sales"
            nameKey="name"
            innerRadius={55}
            outerRadius={90}
            paddingAngle={3}
          >
            {categorySalesData.map((_, index) => (
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

          <Legend verticalAlign="bottom" iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategorySalesChart;
