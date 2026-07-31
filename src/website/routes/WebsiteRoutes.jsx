import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home"; 
import MenuPage from "../pages/MenuPage";
import Checkout from "../pages/Checkout";
import WebsiteLayout from "../components/WebsiteLayout";

const WebsiteRoutes = () => {
  return (
    <Routes>
      <Route element={<WebsiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default WebsiteRoutes;