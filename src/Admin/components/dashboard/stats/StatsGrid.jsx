import StatsCard from "./StatsCard";
import { statsData } from "../../../constants/dashboardData";

const StatsGrid = () => {
  return (
    <div
      className="
        grid grid-cols-1
        gap-4
        sm:grid-cols-2
        md:grid-cols-3
        xl:grid-cols-6
      "
    >
      {statsData.map((stat) => (
        <StatsCard
          key={stat.id}
          label={stat.label}
          value={stat.value}
          change={stat.change}
          trend={stat.trend}
          icon={stat.icon}
          color={stat.color}
        />
      ))}
    </div>
  );
};

export default StatsGrid;
