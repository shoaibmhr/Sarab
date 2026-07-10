import { Routes, Route } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Orders from "../pages/Orders";
import Products from "../pages/Products";
import Categories from "../pages/Categories";
import Inventory from "../pages/Inventory";
import Customers from "../pages/Customers";
import Reviews from "../pages/Reviews";
import Coupons from "../pages/Coupons";
import Offers from "../pages/Offers";
import Delivery from "../pages/Delivery";
import Employees from "../pages/Employees";
import DeliveryBoys from "../pages/DeliveryBoys";
import Reservations from "../pages/Reservations";
import Reports from "../pages/Reports";
import Analytics from "../pages/Analytics";
import MediaLibrary from "../pages/MediaLibrary";
import WebsiteContent from "../pages/WebsiteContent";
import Messages from "../pages/Messages";
import Notifications from "../pages/Notifications";
import Settings from "../pages/Settings";
import RolesPermissions from "../pages/RolesPermissions";
import ActivityLogs from "../pages/ActivityLogs";
import Backup from "../pages/Backup";
import Profile from "../pages/Profile";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />} />
        <Route path="categories" element={<Categories />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="customers" element={<Customers />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="coupons" element={<Coupons />} />
        <Route path="offers" element={<Offers />} />
        <Route path="delivery" element={<Delivery />} />
        <Route path="employees" element={<Employees />} />
        <Route path="delivery-boys" element={<DeliveryBoys />} />
        <Route path="reservations" element={<Reservations />} />
        <Route path="reports" element={<Reports />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="media-library" element={<MediaLibrary />} />
        <Route path="website-content" element={<WebsiteContent />} />
        <Route path="messages" element={<Messages />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="settings" element={<Settings />} />
        <Route path="roles-permissions" element={<RolesPermissions />} />
        <Route path="activity-logs" element={<ActivityLogs />} />
        <Route path="backup" element={<Backup />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
