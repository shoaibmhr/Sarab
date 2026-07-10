import { Construction } from "lucide-react";

const ComingSoon = ({ title }) => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50">
        <Construction size={28} className="text-orange-500" />
      </div>

      <h2 className="mt-4 text-lg font-bold text-slate-800">{title}</h2>
      <p className="mt-2 max-w-sm text-sm text-slate-500">
        Ye page abhi under development hai — jald hi is par kaam shuru hoga.
      </p>
    </div>
  );
};

export default ComingSoon;
