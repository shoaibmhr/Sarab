<<<<<<< Updated upstream
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
=======
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Marquee from "./components/Mrquee"
import Category from "./components/Category"
import About from "./components/About"
import Menu from "./components/Menu"
import Sale from "./components/Sale"

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Marquee />
      <Category />
      <About/>
      <Menu />
      <Sale />
    </>
>>>>>>> Stashed changes
  );
}

export default App;