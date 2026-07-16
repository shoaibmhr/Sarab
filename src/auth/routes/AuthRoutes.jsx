
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AuthLayout from '../components/AuthLayout';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        {/* 
          Kyunki parent route "/auth/*" hai, 
          toh yahan path="login" ka matlab "/auth/login" hoga.
        */}
        <Route path="login" element={<Login />} />
        
        {/* Yahan path="register" ka matlab "/auth/register" hoga */}
        <Route path="register" element={<Register />} />
      </Route>

      {/* Agar koi wrong URL dale toh login par redirect karde */}
      <Route path="*" element={<Navigate to="login" replace />} />
    </Routes>
  );
};

export default AuthRoutes;