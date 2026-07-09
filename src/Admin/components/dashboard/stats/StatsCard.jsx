import { ArrowUp, ArrowDown } from "lucide-react";

const colorMap = {
  rose: { bg: "bg-rose-50", icon: "text-rose-500" },
  blue: { bg: "bg-blue-50", icon: "text-blue-500" },
  amber: { bg: "bg-amber-50", icon: "text-amber-500" },
  sky: { bg: "bg-sky-50", icon: "text-sky-500" },
  green: { bg: "bg-green-50", icon: "text-green-600" },
  red: { bg: "bg-red-50", icon: "text-red-500" },
  stone: { bg: "bg-stone-100", icon: "text-stone-500" },
};

const StatsCard = ({
  label,
  value,
  change,
  trend,
  icon: Icon,
  color = "stone",
}) => {
  const colors = colorMap[color] || colorMap.stone;

  return (
    <div
      className="
        flex flex-col justify-between
        rounded-2xl border border-slate-100 bg-white
        p-5 shadow-sm
        transition-all duration-300
        hover:-translate-y-0.5 hover:shadow-md
      "
    >
      <div className="flex items-center justify-between">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${colors.bg}`}
        >
          <Icon size={20} className={colors.icon} />
        </div>

        {change && (
          <span
            className={`
              flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold
              ${
                trend === "up"
                  ? "bg-green-50 text-green-600"
                  : "bg-red-50 text-red-500"
              }
            `}
          >
            {trend === "up" ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
            {change}
          </span>
        )}
      </div>

      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          {label}
        </p>
        <h3 className="mt-1 text-2xl font-bold text-slate-800">{value}</h3>
      </div>
    </div>
  );
};

export default StatsCard;
