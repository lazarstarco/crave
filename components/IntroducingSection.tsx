









import Link from "next/link";
import React from "react";

const IntroducingSection = () => {
  return (
    <div className="py-20 pt-24 bg-gradient-to-r from-slate-950 to-gray-700">
      <div className="text-center flex flex-col gap-y-5 items-center">
        <h2 className="text-white text-7xl font-extrabold text-center mb-2 max-md:text-6xl max-[480px]:text-4xl">
        THE QUALITY YOU <span className="text-red-700">C</span><span className="text-lime-700">RAVE</span>, DELIVERED.
        </h2>
        <div>
          <p className="text-white text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base">
            Buy only the best accessories.
          </p>
          <p className="text-white text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base">
            The best clothing brands You deserve!
          </p>
          <Link href="/shop" className="block text-blue-600 bg-white font-bold px-12 py-3 text-xl hover:bg-gray-100 w-96 mt-5  max-md:text-lg max-md:w-72 max-[480px]:w-60 mx-auto">
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroducingSection;
