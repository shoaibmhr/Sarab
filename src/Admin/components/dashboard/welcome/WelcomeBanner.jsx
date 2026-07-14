import { Download, Plus } from "lucide-react";

const WelcomeBanner = ({ adminName = "Admin" }) => {
  return (
    <div
      className="
        flex flex-col gap-4
        sm:flex-row sm:items-center sm:justify-between
      "
    >
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-bold text-slate-800 sm:text-3xl">
          Welcombbbe back, {adminName} <span>👋</span>
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Here's what's happening in your restaurant today.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="
            flex items-center gap-2 rounded-xl border border-slate-200
            bg-white px-4 py-2.5 text-sm font-semibold text-slate-700
            transition-all duration-300 hover:bg-slate-50
          "
        >
          <Download size={16} />
          Export
        </button>

        <button
          className="
            flex items-center gap-2 rounded-xl bg-orange-600 px-4 py-2.5
            text-sm font-semibold text-white shadow-sm
            transition-all duration-300 hover:bg-orange-700
          "
        >
          <Plus size={16} />
          New Order
        </button>
      </div>
    </div>
  );
};

export default WelcomeBanner;
