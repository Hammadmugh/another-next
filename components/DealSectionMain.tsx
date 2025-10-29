import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";
import DealSectionCard from "./DealSectionCard";
import { DealSectionCardData } from "@/app/data/DealSectionCardData";

const DealSectionMain = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(35, 24, 8, 0.2), rgba(45, 32, 12, 0.2)), url('/images/vision-bg.png')",
        }}
        className="relative bg-top bg-no-repeat bg-cover py-[50px] z-1 overflow-hidden"
      >
        <div>
          <div className="h-full xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full mx-auto px-3">
            <div className="text-center h-full flex flex-wrap -mx-6">
              <div className="m-auto md:flex-none md:w-[75%] max-w-full px-3 relative">
                <h2 className="text-white text-[40px] font-semibold mt-0 mb-5 leading-1.2">
                  Best deals and offers from our Service Providers
                </h2>
                <p className="text-[#D4D4D4] text-[16px] font-normal mt-0 mb-10">
                  Discover amazing deals and special offers from our top service
                  providers. Save on high-quality services tailored to your
                  business needs, ensuring you get the best value at affordable
                  prices.
                </p>
              </div>
            </div>
            <div className="h-full lg:grid lg:grid-cols-2 grid grid-cols-1 lg:-mx-19 ">
              {DealSectionCardData.map((data) => {
                return (
                  <DealSectionCard
                    key={data.id}
                    imgSrc={data.imgSrc}
                    title={data.title}
                    description={data.description}
                    sellerRank={data.sellerRank}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealSectionMain;
