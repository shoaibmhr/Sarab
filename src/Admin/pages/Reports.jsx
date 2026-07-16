import { useMemo, useState } from "react";

import {
  reportSummary,
  reportPeriods,
  topSellingProducts,
  recentTransactions,
} from "../constants/reportsData";

import ReportCard from "../components/reports/ReportCard";
import ReportFilters from "../components/reports/ReportFilters";

import RevenueTrendChart from "../components/reports/RevenueTrendChart";
import OrdersTrendChart from "../components/reports/OrdersTrendChart";
import CategorySalesChart from "../components/reports/CategorySalesChart";
import PaymentMethodsChart from "../components/reports/PaymentMethodsChart";

import {
  TrendingUp,
  ShoppingBag,
  Receipt,
  Wallet,
} from "lucide-react";

const cardIcons = [
  "revenue",
  "orders",
  "average",
  "profit",
];

const Reports = () => {
  const [search, setSearch] = useState("");
  const [period, setPeriod] = useState("Last 30 Days");

  // =====================================
  // Filter Products
  // =====================================

  const filteredProducts = useMemo(() => {
    return topSellingProducts.filter((item) =>
      item.product.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  // =====================================
  // Filter Transactions
  // =====================================

  const filteredTransactions = useMemo(() => {
    return recentTransactions.filter((item) =>
      item.customer.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <div className="space-y-6">
      {/* =====================================
            Header
      ===================================== */}

      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-slate-800">Reports</h1>

        <p className="text-sm text-slate-500">
          Analyze restaurant revenue, sales performance, customer payments and
          business insights.
        </p>
      </div>

      {/* =====================================
            Filters
      ===================================== */}

      <ReportFilters
        search={search}
        setSearch={setSearch}
        period={period}
        setPeriod={setPeriod}
        periods={reportPeriods}
      />

      {/* =====================================
            Summary Cards
      ===================================== */}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {reportSummary.map((item, index) => (
          <ReportCard
            key={item.id}
            title={item.title}
            value={item.value}
            change={item.change}
            trend={item.trend}
            color={item.color}
            icon={cardIcons[index]}
          />
        ))}
      </div>

      {/* =====================================
            Charts
      ===================================== */}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* Revenue */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-800">
                Revenue Trend
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Monthly revenue overview
              </p>
            </div>

            <div className="rounded-xl bg-orange-50 p-3">
              <TrendingUp size={22} className="text-orange-600" />
            </div>
          </div>

          <RevenueTrendChart />
        </div>

        {/* Orders */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-800">
                Orders Trend
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Monthly orders overview
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-3">
              <ShoppingBag size={22} className="text-blue-600" />
            </div>
          </div>

          <OrdersTrendChart />
        </div>
      </div>

      {/* =====================================
            Category Sales & Payment Methods
      ===================================== */}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* Category Sales */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-800">
                Sales by Category
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Product category performance
              </p>
            </div>

            <div className="rounded-xl bg-amber-50 p-3">
              <Receipt size={22} className="text-amber-600" />
            </div>
          </div>

          <CategorySalesChart />
        </div>

        {/* Payment Methods */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-800">
                Payment Methods
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Cash, Card and Online payment insights
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-3">
              <Wallet size={22} className="text-green-600" />
            </div>
          </div>

          <PaymentMethodsChart />
        </div>
      </div>

      {/* =====================================
            Top Selling Products
      ===================================== */}

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
          <div>
            <h2 className="text-lg font-semibold text-slate-800">
              Top Selling Products
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Best performing menu items
            </p>
          </div>

          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
            {filteredProducts.length} Products
          </span>
        </div>

        {/* Desktop Table */}

        <div className="hidden overflow-x-auto lg:block">
          <table className="min-w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Product
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Category
                </th>

                <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Sold
                </th>

                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Revenue
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-slate-100 transition hover:bg-slate-50 last:border-0"
                >
                  <td className="px-6 py-5 font-semibold text-slate-800">
                    {product.product}
                  </td>

                  <td className="px-6 py-5 text-slate-600">
                    {product.category}
                  </td>

                  <td className="px-6 py-5 text-center font-medium text-slate-700">
                    {product.sold}
                  </td>

                  <td className="px-6 py-5 text-right font-semibold text-green-600">
                    {product.revenue}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}

        <div className="space-y-4 p-4 lg:hidden">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-xl border border-slate-200 bg-white p-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-800">
                  {product.product}
                </h3>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  {product.revenue}
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-400">Category</p>

                  <p className="mt-1 font-medium text-slate-700">
                    {product.category}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-slate-400">Sold</p>

                  <p className="mt-1 font-semibold text-slate-800">
                    {product.sold}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}

        {filteredProducts.length === 0 && (
          <div className="py-16 text-center">
            <h3 className="text-lg font-semibold text-slate-700">
              No Products Found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try searching with another keyword.
            </p>
          </div>
        )}
      </div>

      {/* =====================================
            Recent Transactions
      ===================================== */}

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
          <div>
            <h2 className="text-lg font-semibold text-slate-800">
              Recent Transactions
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Latest customer payments
            </p>
          </div>

          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
            {filteredTransactions.length} Transactions
          </span>
        </div>

        {/* Desktop Table */}

        <div className="hidden overflow-x-auto lg:block">
          <table className="min-w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Transaction ID
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Customer
                </th>

                <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Payment
                </th>

                <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Status
                </th>

                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Date
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="border-b border-slate-100 transition hover:bg-slate-50 last:border-0"
                >
                  <td className="px-6 py-5 font-medium text-slate-700">
                    {transaction.id}
                  </td>

                  <td className="px-6 py-5">
                    <div>
                      <p className="font-semibold text-slate-800">
                        {transaction.customer}
                      </p>

                      <p className="text-sm text-slate-500">
                        {transaction.method}
                      </p>
                    </div>
                  </td>

                  <td className="px-6 py-5 text-center font-semibold text-slate-700">
                    {transaction.amount}
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        transaction.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : transaction.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>

                  <td className="px-6 py-5 text-right text-slate-500">
                    {transaction.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}

        <div className="space-y-4 p-4 lg:hidden">
          {filteredTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="rounded-xl border border-slate-200 bg-white p-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-slate-800">
                    {transaction.customer}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {transaction.id}
                  </p>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    transaction.status === "Paid"
                      ? "bg-green-100 text-green-700"
                      : transaction.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  {transaction.status}
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-400">Payment Method</p>

                  <p className="mt-1 font-medium text-slate-700">
                    {transaction.method}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-slate-400">Amount</p>

                  <p className="mt-1 font-semibold text-green-600">
                    {transaction.amount}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Date</p>

                  <p className="mt-1 text-slate-700">{transaction.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}

        {filteredTransactions.length === 0 && (
          <div className="py-16 text-center">
            <h3 className="text-lg font-semibold text-slate-700">
              No Transactions Found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try another search keyword.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reports;