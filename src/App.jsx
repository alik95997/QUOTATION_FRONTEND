import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/admin/AdminDashboard"; // Correct: uppercase 'A' in file path
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import AdminClientList from "./pages/admin/AdminClientList";
import UserManagement from "./pages/admin/UserManagement";
import ProfileSettings from "./pages/admin/ProfileSettings";
import AdminQuotation from "./pages/admin/AdminQuotation";
import UserQuotation from "./pages/user/UserQuotation";
import UserClientList from "./pages/user/UserClientList";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/admin-client-list" element={<AdminClientList />} />
      <Route path="/admin-user-management" element={<UserManagement />} />
      <Route path="/admin-profile" element={<ProfileSettings />} />
      <Route path="/admin-create-quotation" element={<AdminQuotation />} />

      <Route path="/user-create-quotation" element={<UserQuotation />} />
      <Route path="/user-client-list" element={<UserClientList />} />
    </Routes>
  );
}

export default App;
