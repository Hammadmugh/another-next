import { EservicesSectionCardData } from "@/app/data/EservicesSectionCardData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import EservicesSectionCard from "./EservicesSectionCard";

const EservicesSectionMain = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1)), url('/images/faq-bg.png')",
        }}
        className="relative bg-top bg-no-repeat bg-cover py-[50px] z-1 overflow-hidden"
      >
        <div className="relative z-1">
          <div className="h-full xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full mx-auto px-3">
            <div className="text-center h-full flex flex-wrap -mx-6">
              <div className="m-auto md:flex-none md:w-[75%] max-w-full px-3 relative">
                <h2 className="text-[#000000] text-[40px] font-semibold mt-0 mb-5 leading-1.2">
                  Explore More Services
                </h2>
                <p className="text-[#000000] text-[16px] font-normal mt-0 mb-10">
                  Explore a wide range of services designed to meet your needs
                  and help your business grow.
                </p>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
              {EservicesSectionCardData.map((data) => {
                return (
                  <EservicesSectionCard
                    key={data.id}
                    imgSrc={data.imgSrc}
                    description={data.description}
                    title={data.title}
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

export default EservicesSectionMain;
