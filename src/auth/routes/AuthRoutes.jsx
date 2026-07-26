// src/auth/routes/AuthRoutes.jsx
import { Routes, Route } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
