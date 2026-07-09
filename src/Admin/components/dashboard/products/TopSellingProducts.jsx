import ProductProgress from "./ProductProgress";
import { topSellingProducts } from "../../../constants/dashboardData";

const maxSold = Math.max(...topSellingProducts.map((p) => p.sold));

const TopSellingProducts = () => {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
      <div>
        <h3 className="text-base font-bold text-slate-800">
          Top Selling Pizzas
        </h3>
        <p className="text-sm text-slate-500">Best performers this month</p>
      </div>

      <div className="mt-5 space-y-4">
        {topSellingProducts.map((product, index) => (
          <ProductProgress
            key={product.id}
            rank={index + 1}
            name={product.name}
            sold={product.sold}
            percentage={Math.round((product.sold / maxSold) * 100)}
          />
        ))}
      </div>
    </div>
  );
};

export default TopSellingProducts;
