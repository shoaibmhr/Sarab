import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
