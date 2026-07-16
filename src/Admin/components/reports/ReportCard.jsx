// src/admin/components/reports/ReportCard.jsx

import {
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  ShoppingBag,
  Receipt,
  Wallet,
} from "lucide-react";

const iconMap = {
  revenue: DollarSign,
  orders: ShoppingBag,
  average: Receipt,
  profit: Wallet,
};

const colorClasses = {
  green: {
    bg: "bg-green-50",
    icon: "text-green-600",
    badge: "bg-green-100 text-green-700",
  },
  blue: {
    bg: "bg-blue-50",
    icon: "text-blue-600",
    badge: "bg-blue-100 text-blue-700",
  },
  orange: {
    bg: "bg-orange-50",
    icon: "text-orange-600",
    badge: "bg-orange-100 text-orange-700",
  },
  red: {
    bg: "bg-red-50",
    icon: "text-red-600",
    badge: "bg-red-100 text-red-700",
  },
};

const ReportCard = ({
  title,
  value,
  change,
  trend,
  color = "green",
  icon = "revenue",
}) => {
  const Icon = iconMap[icon] || DollarSign;

  const colors = colorClasses[color] || colorClasses.green;

  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* Header */}

      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-800">
            {value}
          </h3>
        </div>

        <div
          className={`
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            ${colors.bg}
          `}
        >
          <Icon className={colors.icon} size={22} />
        </div>
      </div>

      {/* Footer */}

      <div className="mt-6 flex items-center justify-between">
        <span
          className={`
            inline-flex
            items-center
            gap-1
            rounded-full
            px-2.5
            py-1
            text-xs
            font-semibold
            ${colors.badge}
          `}
        >
          {trend === "up" ? (
            <ArrowUpRight size={14} />
          ) : (
            <ArrowDownRight size={14} />
          )}

          {change}
        </span>

        <span className="text-xs text-slate-400">Compared to last period</span>
      </div>
    </div>
  );
};

export default ReportCard;
