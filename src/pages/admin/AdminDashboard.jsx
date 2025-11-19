import React from "react";
import DashboardLayout from "../../components/dashboardLayout/DashboardLayout";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { FaPlusSquare } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import StatCard from "../../components/StatCard/StatCard";

import Table from "../../components/Table/Table";
const AdminDashboard = () => {
  const columns = [
    { header: "#", accessor: "id" },
    { header: "Client Names", accessor: "client" },
    { header: "Date", accessor: "date" },
    { header: "Total Amount", accessor: "amount" },
    { header: "Status", accessor: "status" },
    { header: "Action", accessor: "action" },
  ];
  const data = [
    {
      id: 1,
      client: "Smith Jones",
      date: "Jan 2, 2025",
      amount: "PKR 320",
      status: (
        <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
          Sent
        </span>
      ),
    },
  ];

  const stats = [
    {
      icon: BsFillQuestionSquareFill,
      title: "Total Quotation",
      value: "12",
      trend: <FaPlusSquare />,
    },
    {
      icon: MdOutlinePendingActions,
      title: "Pending Quotation",
      value: "25%",
      trend: <FaPlusSquare />,
    },
    {
      icon: FaUsers,
      title: "New Clients",
      value: "230",
      trend: <FaPlusSquare />,
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-3">
        {/* heading for welcome  */}
        <div className="flex ">
          <h2 className="text-[20px] font-medium">Welcome Martin Brown, </h2>
        </div>
        {/* cards  */}
        <div className="grid grid-cols-3 w-full gap-2">
          {stats.map((item, i) => (
            <StatCard
              key={i}
              items={item}
              icon={item.icon}
              title={item.title}
              value={item.value}
              trend={item.trend}
            />
          ))}
        </div>

        {/* Recent Questation */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <h2 className="font-medium">Recent Questation</h2>
            <button className="text-sm underline text-blue-600">
              View All
            </button>
          </div>

          <div className="overflow-hidden rounded-lg  ">
            <Table columns={columns} data={data} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
