import { Routes, Route } from "react-router-dom";
import AuthLayout from "../components/AuthLayout"; // apna sahi path lagana

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />} />
    </Routes>
  );
};

export default AuthRoutes;