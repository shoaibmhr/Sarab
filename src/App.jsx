import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebsiteRoutes from "./website/routes/WebsiteRoutes";
import AdminRoutes from "./Admin/routes/AdminRoutes";
import AuthRoutes from "./auth/routes/AuthRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Website pages */}
        <Route path="/*" element={<WebsiteRoutes />} />

        {/* Admin Route mapping: iske aage static "/*" wildcard lagana zaroori hai */}
        <Route path="/admin/*" element={<AdminRoutes />} />

        {/* Auth pages */}
        <Route path="/auth/*" element={<AuthRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;