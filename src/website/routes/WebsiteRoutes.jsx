import { Routes, Route } from "react-router-dom";

// '../pages/...' use hoga kyunke routes se bahar nikalte hi pages ka folder hai
import ExploreMore from "../pages/ExploreMore"; 
import ViewFullMenu from "../pages/ViewFullMenu"; 
import OrderNow from "../pages/OrderNow";
import Home from "../pages/Home"; 

const WebsiteRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<ExploreMore />} />
      <Route path="/menu" element={<ViewFullMenu />} />
      <Route path="/checkout" element={<OrderNow />} />
    </Routes>
  );
};

export default WebsiteRoutes;