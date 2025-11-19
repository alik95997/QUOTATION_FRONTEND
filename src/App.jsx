import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import AdminDashboard from "./pages/admin/adminDashboard";
import ClientList from "./pages/admin/ClientList";
import UserManagement from "./pages/admin/UserManagement";
import ProfileSettings from "./pages/admin/ProfileSettings";

import UserDashboard from "./pages/user/UserDashboard";
import AdminQuotation from "./pages/admin/AdminQuotation";
import UserQuotation from "./pages/user/UserQuotation";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/admin-client-list" element={<ClientList />} />
      <Route path="/admin-user-management" element={<UserManagement />} />
      <Route path="/admin-profile" element={<ProfileSettings />} />
      <Route path="/admin-create-quotation" element={<AdminQuotation />} />
      <Route path="/user-create-quotation" element={<UserQuotation />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
    </Routes>
  );
}

export default App;
