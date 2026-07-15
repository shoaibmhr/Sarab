const ProductProgress = ({ rank, name, sold, percentage }) => {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-orange-50 text-xs font-bold text-orange-600">
            {rank}
          </span>
          <span className="truncate font-medium text-slate-700">{name}</span>
        </div>
        <span className="flex-shrink-0 text-xs font-semibold text-slate-500">
          {sold.toLocaleString()} sold
        </span>
      </div>

      {/* Progress bar */}
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProductProgress;
