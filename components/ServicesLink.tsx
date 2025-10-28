import Link from "next/link";
import React from "react";

const ServicesLink = () => {
  return (
    <div className="md:mx-3.5 bg-[#FFB902] p-[15px] rounded-[10px] ">
      <div className="gap-5 py-0 pr-10 pl-[15px] items-center md:flex md:justify-between lg:flex lg:justify-between flex-col justify-center flex-wrap">
        <Link
          className="text-black font-normal text-[16px] outline-0 no-underline cursor-pointer "
          href={"#"}
        >
          Artists And Digital Services
        </Link>
        <Link
          className="text-black font-normal text-[16px] outline-0 no-underline cursor-pointer "
          href={"#"}
        >
          Animal/ Pets Services
        </Link>
        <Link
          className="text-black font-normal text-[16px] outline-0 no-underline cursor-pointer "
          href={"#"}
        >
          Cleaning Service
        </Link>
        <Link
          className="text-black font-normal text-[16px] outline-0 no-underline cursor-pointer "
          href={"#"}
        >
          Carpentry
        </Link>
        <Link
          className="text-black font-normal text-[16px] outline-0 no-underline cursor-pointer "
          href={"#"}
        >
          Automobile Services
        </Link>
        <Link
          className="text-black font-normal text-[16px] outline-0 no-underline cursor-pointer "
          href={"#"}
        >
          Concierge Services
        </Link>
        <Link
          className="text-black font-normal text-[16px] outline-0 no-underline cursor-pointer "
          href={"#"}
        >
          Event Services
        </Link>
      </div>
    </div>
  );
};

export default ServicesLink;
