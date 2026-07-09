import WelcomeBanner from "../../components/dashboard/welcome/WelcomeBanner";
import StatsGrid from "../../components/dashboard/stats/StatsGrid";
import MonthlySalesChart from "../../components/dashboard/charts/MonthlySalesChart";
import WeeklyOrdersChart from "../../components/dashboard/charts/WeeklyOrdersChart";
import RevenueChart from "../../components/dashboard/charts/RevenueChart";
import TopSellingProducts from "../../components/dashboard/products/TopSellingProducts";
import LatestOrders from "../../components/dashboard/orders/LatestOrders";
import NewCustomers from "../../components/dashboard/customers/NewCustomers";
import LatestReviews from "../../components/dashboard/reviews/LatestReviews";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <WelcomeBanner adminName="Admin" />

      {/* Stats Cards */}
      <StatsGrid />

      {/* Monthly Sales + Weekly Orders */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <MonthlySalesChart />
        </div>
        <div className="xl:col-span-1">
          <WeeklyOrdersChart />
        </div>
      </div>

      {/* Top Selling Products + Revenue this Month */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <TopSellingProducts />
        <RevenueChart />
      </div>

      {/* Latest Orders + New Customers + Latest Reviews */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <LatestOrders />
        </div>
        <div className="flex flex-col gap-6 xl:col-span-1">
          <NewCustomers />
          <LatestReviews />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
