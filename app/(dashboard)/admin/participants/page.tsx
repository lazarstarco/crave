"use client";
import { DashboardParticipantsTable, DashboardSidebar } from "@/components";
import React from "react";

const DashboardParticipants = () => {
  return (
    <div className="bg-white flex justify-start max-w-screen-2xl mx-auto h-full max-xl:flex-col max-xl:h-fit max-xl:gap-y-4">
      <DashboardSidebar />
      <DashboardParticipantsTable />
    </div>
  );
};

export default DashboardParticipants;
