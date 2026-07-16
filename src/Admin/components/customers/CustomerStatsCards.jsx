// src/admin/components/customers/CustomerStatsCards.jsx

import { Users, UserCheck, UserPlus, Crown } from "lucide-react";

const CustomerStatsCards = ({ customers }) => {
  const totalCustomers = customers.length;

  const activeCustomers = customers.filter(
    (customer) => customer.status === "Active",
  ).length;

  const newCustomers = customers.filter((customer) => {
    const joinDate = new Date(customer.joinDate);
    const currentDate = new Date();

    return (
      joinDate.getMonth() === currentDate.getMonth() &&
      joinDate.getFullYear() === currentDate.getFullYear()
    );
  }).length;

  const vipCustomers = customers.filter(
    (customer) => customer.totalOrders >= 20 || customer.totalSpent >= 30000,
  ).length;

  const cards = [
    {
      title: "Total Customers",
      value: totalCustomers,
      icon: Users,
      bg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Active",
      value: activeCustomers,
      icon: UserCheck,
      bg: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      title: "New This Month",
      value: newCustomers,
      icon: UserPlus,
      bg: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      title: "VIP Customers",
      value: vipCustomers,
      icon: Crown,
      bg: "bg-purple-50",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <div
      className="
        grid
        grid-cols-2
        gap-3.5
        lg:grid-cols-4
      "
    >
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="
              rounded-2xl
              border
              border-slate-100
              bg-white
              p-4
              shadow-sm
            "
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {card.title}
                </p>

                <h3 className="mt-2 text-1xl font-bold text-slate-800">
                  {card.value}
                </h3>
              </div>

              <div
                className={`
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  ${card.bg}
                `}
              >
                <Icon size={19} className={card.iconColor} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CustomerStatsCards;
