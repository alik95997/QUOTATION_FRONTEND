import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  User,
  Settings,
  Bell,
  HelpCircle,
  Info,
  LogOut,
} from "lucide-react";

export default function ProfileSettings() {
  const [formData, setFormData] = useState({
    firstName: "Brown",
    lastName: "Martin",
    email: "brownmartin2005",
    mobile: "0800 123 7890",
    gender: "Male",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    console.log("Saved:", formData);
    alert("Changes saved successfully!");
  };

  const menuItems = [
    { icon: User, label: "My Profile", active: true },
    { icon: Settings, label: "Settings" },
    { icon: Bell, label: "Notifications" },
    { icon: HelpCircle, label: "FAQ" },
    { icon: Info, label: "About App" },
  ];

  return (
    <div className="flex h-screen   ">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-6 hidden md:block">
        {/* Profile Header */}
        <div className="flex items-center space-x-3 mb-8">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">Brown Martin</h3>
            <p className="text-xs text-gray-500">brownmartin@gmail.com</p>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="space-y-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
                item.active
                  ? "bg-gray-100 text-gray-900 font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </button>
          ))}
        </nav>

        {/* Logout */}
        <button className="w-full flex items-center space-x-3 px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg mt-auto absolute bottom-6">
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button className="p-2 bg-white rounded-lg shadow-md">
          <Settings className="w-6 h-6" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 ">
        <div className="max-w-2xl">
          {/* Profile Photo Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-md"
            />
            <div>
              <button className="text-blue-500 font-medium mb-2 block">
                Upload new photo
              </button>
              <p className="text-xs text-gray-500">
                At least 800x800 px recommended.
              </p>
              <p className="text-xs text-gray-500">JPG or PNG is allowed</p>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
            </div>

            {/* Gender */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Gender
              </label>
              <div className="flex space-x-4">
                <button
                  onClick={() => setFormData({ ...formData, gender: "Male" })}
                  className={`px-6 py-2.5 rounded-lg border-2 transition-all ${
                    formData.gender === "Male"
                      ? "border-gray-900 bg-gray-50 font-medium"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  Male
                </button>
                <button
                  onClick={() => setFormData({ ...formData, gender: "Female" })}
                  className={`px-6 py-2.5 rounded-lg border-2 transition-all ${
                    formData.gender === "Female"
                      ? "border-gray-900 bg-gray-50 font-medium"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  Female
                </button>
              </div>
            </div>

            {/* Save Button */}
            <button
              onClick={handleSave}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
