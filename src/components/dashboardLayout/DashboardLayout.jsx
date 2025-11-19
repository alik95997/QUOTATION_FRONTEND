import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Logo from "../../assets/Vector.png";
import { FaPlus, FaUserFriends, FaUserPlus } from "react-icons/fa";
import { MdOutlinePentagon, MdOutlineDashboardCustomize } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";

import NotificationIcon from "../../assets/NotificationIcon.png";
import { CiSearch } from "react-icons/ci";
import NotificationButton from "../NotificationButton/NotificationButton";

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // ---------- Page Title + Subtitle ----------
  const pageInfo = {
    "/admin-create-quotation": {
      title: "Create Quotation",
      subtitle: "Generate new quotations easily",
    },
    "/admin-dashboard": {
      title: "Dashboard",
      subtitle: "Overview of your system activity",
    },
    "/admin-client-list": {
      title: "Client List",
      subtitle: "Manage and track all your clients",
    },
    "/admin-templates": {
      title: "Templates",
      subtitle: "Manage quotation templates",
    },
    "/admin-user-management": {
      title: "User Management",
      subtitle: "Manage your team member and their account permissions",
    },
    "/admin-profile": {
      title: "Profile",
      subtitle: "View and edit your profile",
    },
  };

  const currentPage = pageInfo[location.pathname] || {
    title: "Admin",
    subtitle: "",
  };

  // menu helper
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-[17%] bg-white border-r border-gray-200 p-6 flex flex-col justify-between">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <img src={Logo} alt="Logo" className="w-8" />
            <h2 className="text-xl font-semibold">SD Quotation</h2>
          </div>

          <hr className="border-gray-300 mb-6" />

          {/* Sidebar Menu */}
          <nav className="space-y-3 text-[#00000099]">
            {/* Create Quotation */}
            <div
              onClick={() => navigate("/admin-create-quotation")}
              className={`flex gap-2 py-2 px-3 rounded-lg items-center cursor-pointer transition ${
                isActive("/admin-create-quotation")
                  ? "bg-[#008CFF] text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <FaPlus />
              <p>Create Quotation</p>
            </div>

            {/* Dashboard */}
            <div
              onClick={() => navigate("/admin-dashboard")}
              className={`flex gap-2 py-2 px-3 rounded-lg items-center cursor-pointer transition ${
                isActive("/admin-dashboard")
                  ? "bg-[#1C2730] text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <MdOutlinePentagon />
              <p>Dashboard</p>
            </div>

            {/* Client List */}
            <div
              onClick={() => navigate("/admin-client-list")}
              className={`flex gap-2 py-2 px-3 rounded-lg items-center cursor-pointer transition ${
                isActive("/admin-client-list")
                  ? "bg-[#008CFF] text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <FaUserFriends />
              <p>Client List</p>
            </div>

            {/* Templates */}
            <div
              onClick={() => navigate("/admin-templates")}
              className={`flex gap-2 py-2 px-3 rounded-lg items-center cursor-pointer transition ${
                isActive("/admin-templates")
                  ? "bg-[#008CFF] text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <MdOutlineDashboardCustomize />
              <p>Templates</p>
            </div>

            {/* User Management */}
            <div
              onClick={() => navigate("/admin-user-management")}
              className={`flex gap-2 py-2 px-3 rounded-lg items-center cursor-pointer transition ${
                isActive("/admin-user-management")
                  ? "bg-[#008CFF] text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <FaUserPlus />
              <p>User Management</p>
            </div>
          </nav>
        </div>

        {/* Bottom Profile Section */}
        <div
          onClick={() => navigate("/admin-profile")}
          className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded"
        >
          <RxAvatar />
          <div className="text-center">
            <p className="font-semibold">Brown Martin</p>
            <p className="text-sm text-gray-600">Business Owner</p>
          </div>
        </div>
      </aside>

      {/* Main Section */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="flex justify-between items-center px-4 py-2   bg-white">
          <div className="flex flex-col">
            <h2 className="text-[20px] font-medium">{currentPage.title}</h2>

            {currentPage.subtitle && (
              <p className="text-[#535862] text-[14px]">
                {currentPage.subtitle}
              </p>
            )}
          </div>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative w-64">
              <input
                className="w-full border border-[#00000014] rounded pl-10 pr-3 py-2"
                type="text"
                placeholder="Search"
              />
              <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
            </div>

            {/* Notification */}
            {/* <button className="px-3 py-1 border border-[#00000014] rounded hover:bg-gray-100">
              <img src={NotificationIcon} alt="" />
            </button> */}
            <NotificationButton />
            {/* Profile */}
            <div
              onClick={() => navigate("/admin-profile")}
              className="flex items-center gap-3 cursor-pointer"
            >
              <RxAvatar className="w-3.5" />
              <div className="text-center">
                <p className="font-semibold">Brown Martin</p>
                <p className="text-sm text-gray-600">Business Owner</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
