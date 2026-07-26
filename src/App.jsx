import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebsiteRoutes from "./website/routes/WebsiteRoutes";
import AdminRoutes from "./Admin/routes/AdminRoutes";
import AuthRoutes from "./auth/routes/AuthRoutes";
import { AuthProvider } from "./auth/context/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Website pages */}
          <Route path="/*" element={<WebsiteRoutes />} />

          {/* Admin Route mapping: iske aage static "/*" wildcard lagana zaroori hai */}
          <Route path="/admin/*" element={<AdminRoutes />} />

          {/* Auth pages */}
          <Route path="/auth/*" element={<AuthRoutes />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
