import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebsiteRoutes from "./website/routes/WebsiteRoutes";
import AdminRoutes from "./Admin/routes/AdminRoutes";
// import AuthRoutes from "./auth/routes/AuthRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/*" element={<WebsiteRoutes />} />

       
        <Route path="/admin/*" element={<AdminRoutes />} />

       
        {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
