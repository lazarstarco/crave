









import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[700px] w-full bg-slate-950 max-lg:h-[900px] max-md:h-[750px]">
      <div className="grid grid-cols-3 items-center justify-items-center px-10 gap-x-10 max-w-screen-2xl mx-auto h-full max-lg:grid-cols-1 max-lg:py-10 max-lg:gap-y-10">
        <div className="flex flex-col gap-y-5 max-lg:order-last col-span-2">
          <h1 className="text-6xl text-white font-bold mb-3 max-xl:text-5xl max-md:text-4xl max-sm:text-3xl">
            <span className="text-red-700">RAVE</span> HARDER WITH OUR TECHNO{" "}
            <span className="text-lime-700">BASS</span>-ICS
          </h1>
          <p className="text-white max-sm:text-sm">
            Get ready to stand out with our high-energy rave essentials. From
            bold, neon styles to sleek, minimalist accessories, our collection
            is designed to keep you dancing all night long. Whether it's
            breathable fabrics for the dancefloor or statement accessories that
            turn heads, we've got you covered. Gear up and rave in style!
          </p>
          <div className="flex gap-x-1 max-lg:flex-col max-lg:gap-y-1">
            <button className="bg-white text-blue-600 font-bold px-12 py-3 max-lg:text-xl max-sm:text-lg hover:bg-gray-100">
              BUY NOW
            </button>
            <button className="bg-white text-blue-600 font-bold px-12 py-3 max-lg:text-xl max-sm:text-lg hover:bg-gray-100">
              LEARN MORE
            </button>
          </div>
        </div>
        <Image
          src="/rave_harder.jpg"
          width={400}
          height={400}
          alt="smart watch"
          className="max-md:w-[300px] max-md:h-[300px] max-sm:h-[250px] max-sm:w-[250px] w-auto h-auto rounded-tl-[300px] rounded-tr-[100px] rounded-bl-[20px] rounded-br-[210px]"
        />
      </div>
    </div>
  );
};

export default Hero;
