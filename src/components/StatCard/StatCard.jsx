import React from "react";

const StatCard = ({ icon: Icon, title, value, trend }) => {
  return (
    <div className="flex px-4 py-[19px] flex-col gap-3 border border-[#0000003D] rounded-lg">
      <div className="flex items-center gap-3 ">
        <Icon className="text-lg" />
        <p className="font-bold text-[16px]">{title}</p>
      </div>

      <div className="flex">
        <h2 className="text-[28px] font-bold">{value}</h2>
      </div>

      <div className="flex items-center gap-2 text-[#535862] text-sm">
        {trend}
        vs last week
      </div>
    </div>
  );
};

export default StatCard;
