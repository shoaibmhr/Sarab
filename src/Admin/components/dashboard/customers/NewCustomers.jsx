import { Link } from "react-router-dom";
import CustomerCard from "./CustomerCard";
import { newCustomers } from "../../../constants/dashboardData";

const NewCustomers = () => {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-slate-800">New Customers</h3>
        <Link
          to="/admin/customers"
          className="text-sm font-semibold text-orange-600 hover:text-orange-700"
        >
          All
        </Link>
      </div>

      <div className="mt-2">
        {newCustomers.map((customer) => (
          <CustomerCard key={customer.id} customer={customer} />
        ))}
      </div>
    </div>
  );
};

export default NewCustomers;
