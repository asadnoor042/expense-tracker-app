import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Dashboard from "@/pages/Dashboard";
import Home from "@/pages/Home";
import Notfound from "@/pages/Notfound";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "@/layouts/dashboard-layout/DashboardLayout";
import Transactions from "@/pages/Transactions";
import Budgets from "@/pages/Budgets";
import Settings from "@/pages/Settings";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        {/* Nested Route for Dashboard */}
        <Route path='dashboard' element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='transactions' element={<Transactions />} />
          <Route path='budgets' element={<Budgets />} />
          <Route path='settings' element={<Settings />} />
        </Route>
        <Route path='*' element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
