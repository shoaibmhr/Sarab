// src/auth/components/AuthLayout.jsx
import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AuthBanner from "./AuthBanner";

const AuthLayout = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FFF8F2] p-4 sm:p-6">
      <motion.div
        layout
        transition={{
          layout: { type: "spring", stiffness: 200, damping: 24 },
        }}
        className="
          flex w-full max-w-4xl overflow-hidden rounded-3xl
          border border-slate-100 bg-white shadow-xl
        "
      >
        {/* Left Panel — Banner */}
        <AuthBanner />

        {/* Right Panel — Form */}
        <div className="flex w-full flex-1 items-center justify-center overflow-hidden p-6 sm:p-10">
          <AnimatePresence initial={false}>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8, position: "absolute" }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="w-full max-w-sm"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthLayout;
