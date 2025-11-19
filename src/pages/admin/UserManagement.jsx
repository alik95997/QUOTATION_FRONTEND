import React, { useEffect } from "react";
import DashboardLayout from "../../components/dashboardLayout/DashboardLayout";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FcApprove } from "react-icons/fc";
import { CiSearch } from "react-icons/ci";
import { TbCircleLetterT } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Table from "../../components/Table/Table";
import SearchInput from "../../components/SearchInput/SearchInput";
import API from "./../../API/axios";
import Button from "../../components/CustomButton/Button";

const UserManagement = () => {
  const [selected, setSelected] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const fetchUser = async () => {
    try {
      const { data } = await API.get("/admin/users");
      setUserData(data?.user || []); // ensure it's an array
      console.log("user data", data?.user);
    } catch (error) {
      console.error("Failed to fetch users:", error);
      toast.error("Failed to load users");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // const data = [
  //   {
  //     name: "James Carter",
  //     company: "Granite Solutions",
  //     phone: "+92 3350234567",
  //     access: (
  //       <div>
  //         <button className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
  //           Data Export
  //         </button>
  //         <button className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-red-800">
  //           Data Import
  //         </button>
  //       </div>
  //     ),
  //     lastActive: "Jan.02.2023",
  //     date: "11-02-2025",
  //     amount: "2000 RS",
  //   },
  // ];

  const allSelected =
    Object.keys(selected).length === userData.length &&
    Object.values(selected).every(Boolean);

  const stats = [
    {
      icon: FaUsers,
      title: "Total Clients",
      value: "05",
    },
    {
      icon: FcApprove,
      title: "Approved Quotation",
      value: "12",
    },
    {
      icon: IoIosCloseCircleOutline,
      title: "Reject Quotation",
      value: "01",
    },
    {
      icon: TbCircleLetterT,
      title: "Total Value",
      value: "PKR 99",
    },
  ];

  const columns = [
    {
      header: (
        <input
          type="checkbox"
          checked={allSelected}
          onChange={(e) => {
            const checked = e.target.checked;
            const newSelected = {};
            userData.forEach((_, i) => (newSelected[i] = checked));
            setSelected(newSelected);
          }}
          className="h-4 w-4"
        />
      ),
      accessor: "select",
    },
    { header: "User Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Access", accessor: "access" },
    { header: "Last Active", accessor: "lastActive" },
    { header: "Date Added", accessor: "dateAdded" },
  ];

  const tableData = userData?.map((user, index) => ({
    ...user,
    select: (
      <input
        type="checkbox"
        checked={selected[index] || false}
        onChange={() =>
          setSelected((prev) => ({ ...prev, [index]: !prev[index] }))
        }
        className="h-4 w-4"
      />
    ),
    access: (
      <div className="flex gap-1">
        <button className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
          Data Export
        </button>
        <button className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
          Data Import
        </button>
      </div>
    ),
    lastActive: user.lastActive
      ? new Date(user.lastActive).toLocaleDateString()
      : "-",
    dateAdded: user.createdAt
      ? new Date(user.createdAt).toLocaleDateString()
      : "-",
  }));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/add-user", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      toast.success("User added successfully");

      setIsModalOpen(false);
      setFormData({ name: "", email: "", password: "" }); // clear form
      fetchUser();
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-center">
            <h2 className="font-medium flex-1 text-[20px]">All Users</h2>

            <SearchInput placeholder="Search" />

            <Button
              className=""
              onClick={() => setIsModalOpen(true)}
              icon={<FaPlus />}
              title="Add User"
              variant="black"
            />
          </div>

          <div className="overflow-hidden rounded-lg">
            <Table columns={columns} data={tableData} />
          </div>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-96 relative">
              <h3 className="text-lg font-medium mb-4">Add User</h3>
              <button
                className="absolute top-2 right-2 text-gray-500"
                onClick={() => setIsModalOpen(false)}
              >
                ×
              </button>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border px-3 py-2 rounded"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border px-3 py-2 rounded"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="border px-3 py-2 rounded"
                />
                <button
                  className="bg-[#1C2730] text-white p-2 rounded "
                  onClick={handleAddUser}
                >
                  Add User
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default UserManagement;
