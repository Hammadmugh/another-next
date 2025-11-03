import React from "react";
import GalloryCard from "./GalloryCard";
import { prisma } from "@/lib/db";
import type { Gallory } from "@prisma/client";

const GallorySection = async () => {
  const data: Gallory[] = await prisma.gallory.findMany();
  return (
    <section>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(241, 241, 241, 0.9),rgba(241, 241, 241, 0.9)), url('/images/gallery-bg.png')",
        }}
        className="relative bg-top bg-no-repeat bg-cover py-[50px] z-1 overflow-hidden border-t-[3px] border-t-[darkorange]"
      >
        <div className="relative z-1 ">
          <div className="h-full xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full mx-auto px-3">
            <div className="text-center h-full flex flex-wrap -mx-6">
              <div className="m-auto md:flex-none md:w-[75%] max-w-full px-3 relative">
                <h2 className="text-black text-[51px] font-semibold mt-0 mb-2 leading-1.2">
                  Here are Something You'd Need
                </h2>
                <p className="text-black text-[18px] font-normal mt-0 mb-4">
                  Find everything you need in one place. From essential services
                  to exclusive deals, we offer tailored solutions designed to
                  support your business and help you grow with ease and
                  efficiency
                </p>
              </div>
            </div>
            <div className="pt-12 h-full flex flex-wrap -mx-3 mt-0 ">
              {data.map((galleryData) => {
                return (
                  <GalloryCard
                    key={galleryData.id}
                    imgSrc={galleryData.imgSrc}
                    description={galleryData.description}
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

export default GallorySection;
