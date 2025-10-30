import React from "react";
import SellerCard from "./SellerCard";
import { sellerData } from "@/app/data/sellerData";

const SellerSectionMain = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1)), url('/images/faq-bg.png')",
        }}
        className="relative bg-top bg-no-repeat bg-cover py-[50px] z-1 overflow-hidden"
      >
        <div className="relative z-1 ">
          <div className="h-full xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full mx-auto px-3">
            <div className="text-center h-full flex flex-wrap -mx-6">
              <div className="m-auto md:flex-none md:w-[75%] max-w-full px-3 relative">
                <h2 className="text-[#252525] text-[40px] font-semibold mt-0 mb-5 leading-1.2">
                  Trending <span className="text-[#365953]">Sellers</span>
                </h2>
                <p className="text-[#5F5F5F] text-[16px] font-normal mt-0 mb-10">
                  Explore the most popular services from top sellers, offering
                  high-quality <br /> solutions that deliver outstanding results
                  for your business.
                </p>
              </div>
            </div>
            <div className="pt-12 justify-center h-full flex flex-wrap -mx-3 -mt-6">
              {sellerData.map((data) => {
                return (
                  <SellerCard
                    key={data.id}
                    imgSrc={data.imgSrc}
                    title={data.title}
                    description={data.description}
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

export default SellerSectionMain;
