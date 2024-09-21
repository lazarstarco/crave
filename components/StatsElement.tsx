



import React from "react";
import { FaArrowUp } from "react-icons/fa6";

const StatsElement = ({
  header,
  count,
  percentage,
}: {
  header: string;
  count: string;
  percentage: string;
}) => {
  return (
    <div className="w-80 h-32 bg-slate-950 text-white flex flex-col justify-center items-center rounded-3xl max-md:w-full">
      <h4 className="text-xl text-white">{header}</h4>
      <p className="text-2xl font-bold">{count}</p>
      <p className="text-green-300 flex gap-x-1 items-center">
        <FaArrowUp />
        {percentage}% Since last month
      </p>
    </div>
  );
};

export default StatsElement;
