import React from "react";
import DashboardLayout from "../../components/dashboardLayout/DashboardLayout";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FcApprove } from "react-icons/fc";
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import StatCard from "../../components/StatCard/StatCard";
import Table from "../../components/Table/Table";
import { FaPlusSquare } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
import { TbCircleLetterT } from "react-icons/tb";

import { FaUsers } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import SearchInput from "../../components/SearchInput/SearchInput";
import BasicSelect from "../../components/BasicSelect/BasicSelect";
import { useState } from "react";
const ClientList = () => {
  const [statusFilter, setStatusFilter] = useState("");

  const columns = [
    { header: "Client Name", accessor: "client" },
    { header: "Company Name", accessor: "company" },
    { header: "Phone Number", accessor: "phone" },
    { header: "Status", accessor: "status" },
    { header: "Date", accessor: "date" },
    { header: "Amount", accessor: "amount" },
  ];

  const data = [
    {
      client: "James Carter",
      company: "Granite Solutions",
      phone: "+92 3350234567",
      status: <button className="text-green-600">Approved</button>,
      date: (
        <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
          11-02-2025
        </span>
      ),
      amount: "2000 RS",
    },
  ];

  const stats = [
    {
      icon: FaUsers,
      title: "Total Clients",
      value: "05",
      trend: <FaPlusSquare />,
    },
    {
      icon: FcApprove,
      title: "Approved Quotation",
      value: "12",
      trend: <FaPlusSquare />,
    },
    {
      icon: IoIosCloseCircleOutline,
      title: "Reject Quotation",
      value: "01",
      trend: <FaPlusSquare />,
    },
    {
      icon: TbCircleLetterT,
      title: "Total Value",
      value: "PKR 99",
      trend: <FaPlusSquare />,
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-3">
        {/* cards  */}
        <div className="grid grid-cols-4 w-full gap-2">
          {stats.map((item, i) => (
            <StatCard
              key={i}
              icon={item.icon}
              title={item.title}
              value={item.value}
              trend={item.trend}
            />
          ))}
        </div>

        {/* Recent Questation */}
        <div className="flex flex-col ">
          <div className="flex justify-between">
            <BasicSelect
              label="filer"
              value={statusFilter}
              options={["Approved", "Pending", "Rejected"]}
              onChange={setStatusFilter}
            />
            <div className="relative w-64">
              {/* <input
                className="w-full border border-[#00000014] rounded pl-10 pr-3 py-2 focus:outline-none"
                type="text"
                placeholder="Search"
              /> */}
              <SearchInput placeholder="Search" />
            </div>
          </div>

          <div className="overflow-hidden rounded-lg">
            <Table columns={columns} data={data} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ClientList;
