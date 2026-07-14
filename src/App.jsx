import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebsiteRoutes from "./website/routes/WebsiteRoutes";
import AdminRoutes from "./admin/routes/AdminRoutes";
// import AuthRoutes from "./auth/routes/AuthRoutes";

function App() {
  return (
    <BrowserRouter>
      <WebsiteRoutes />
      <AdminRoutes />
      <AuthRoutes />
    </BrowserRouter>
  );
}

export default App;
