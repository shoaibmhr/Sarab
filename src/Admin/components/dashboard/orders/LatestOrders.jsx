import { Link } from "react-router-dom";
import OrderRow from "./OrderRow";
import { latestOrders } from "../../../constants/dashboardData";

const LatestOrders = () => {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-800">Latest Orders</h3>
          <p className="text-sm text-slate-500">
            Recent orders from your customers
          </p>
        </div>

        <Link
          to="/admin/orders"
          className="text-sm font-semibold text-orange-600 hover:text-orange-700"
        >
          View all
        </Link>
      </div>

      <div className="mt-2">
        {latestOrders.map((order) => (
          <OrderRow key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default LatestOrders;
