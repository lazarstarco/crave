"use client";
import { DashboardSidebar, StatsElement } from "@/components";
import React, { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

const AdminDashboardPage = () => {
  return (
    <div className="bg-white flex justify-start max-w-screen-2xl mx-auto max-xl:flex-col">
      <DashboardSidebar />
      <div className="flex flex-col justify-center ml-5 gap-y-10 w-full max-xl:ml-0 max-xl:px-2 max-xl:mt-5 max-md:gap-y-1">
        <div className="flex justify-between w-full max-md:flex-col max-md:w-full max-md:gap-y-1">
          <StatsElement header="New categories" count="2" percentage="20"/>
          <StatsElement header="New products" count="14" percentage="18.3"/>
          <StatsElement header="New users" count="315" percentage="21.8"/>
        </div>
        <div className="w-full bg-slate-950 text-white h-40 flex flex-col justify-center items-center gap-y-2 rounded-3xl">
          <h4 className="text-3xl text-gray-100 max-[400px]:text-2xl">
            Number of visitors today
          </h4>
          <p className="text-3xl font-bold">163</p>
          <p className="text-green-300 flex gap-x-1 items-center">
            <FaArrowUp />
            12.5% Since last month
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
