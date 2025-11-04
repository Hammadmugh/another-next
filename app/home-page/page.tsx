import { MdNorthEast } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import ServicesLink from "@/components/ServicesLink";
import GallorySection from "@/components/GallorySection";
import DealSectionMain from "@/components/DealSectionMain";
import EservicesSectionMain from "@/components/EservicesSectionMain";
import RserviceSectionMain from "@/components/RserviceSectionMain";
import SellerSectionMain from "@/components/SellerSectionMain";
import DoubtSectionMain from "@/components/DoubtSectionMain";
import Users from "@/components/Users";
import GetSectionMain from "@/components/GetSectionMain";
import NewsLetterSection from "@/components/NewsLetterSection";
import FooterComponent from "@/components/FooterComponent";
import ServicesSliderWraper from "@/components/ServicesSliderWraper";
import { userImgsData } from "../data/usersImgs";
// import { prisma } from "@/lib/db";
// import type { Imgs } from "@prisma/client";

const HomePage = async () => {
  // const data: Imgs[] = await prisma.imgs.findMany();
  return (
    <>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(54, 89, 83, 0.8), rgba(54, 89, 83, 0.8)), url('/images/hero-bg.webp')",
        }}
        className=" bg-cover relative bg-[#365953] bg-top bg-no-repeat py-[50px] z-10 overflow-hidden block [unicode-bidi:isolate]"
      >
        <div className="relative z-1 pb-[30px] ">
          <ServicesLink />
        </div>
        <div className="relative z-1 lg:max-w-[1140px] md:max-w-[720px] max-w-[540px]  w-full px-1.5 mx-auto">
          <div className="items-center flex flex-wrap -mx-3 mt-0">
            <div className="relative text-white lg:flex-none lg:w-[50%] md:flex-none md:w-full sm:flex-none sm:w-[50%] max-w-full px-3 mt-0">
              <div className="p-12 rounded-[20px] bg-[#2A2925] lg:h-[350px] md:h-[350px] text-white">
                <h1 className="text-[25px] font-bold leading-1.3 mt-0 mb-2">
                  Driving <span className="text-[#FFB902]">Business</span>{" "}
                  Success with <br /> Innovative{" "}
                  <span className="text-[#FFB902]">Solutions</span> Tailored{" "}
                  <br /> for You
                </h1>
                <p className="text-[16px] mx-0 mt-[30px] mb-[34px] text-white">
                  Transforming the service market for small and medium-sized
                  businesses. Discover cutting-edge solutions crafted to
                  optimize your operations, simplify your service needs, and
                  accelerate your growth.
                </p>
                <div className="gap-2 items-center flex text-white">
                  <Link
                    className="text-black bg-[#fcd500] border border-[#fcd500] rounded-[10px] py-3.5 px-[25px] font-light inline-block text-[0.8125rem] leading-1.5 text-center align-middle cursor-pointer select-none outline-none no-underline "
                    href={"#"}
                  >
                    Get Started
                  </Link>
                  <div
                    className="bg-[#fcd500] py-2.5 px-[15px] rounded-full text-black
antialiased inline-block not-italic leading-none font-black font-[var(--fa-style-family,'Font Awesome 6 Free')]"
                  >
                    <MdNorthEast />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap -mx-3 text-white">
                <div className="relative lg:flex-none lg:w-[50%] flex-none w-[50%] max-w-full px-3 mt-0 text-white">
                  <div className="bg-white h-[150px] p-[25px] rounded-[10px] flex gap-4 items-center justify-center">
                    <div>
                      <h3 className="mb-[5px] text-2xl font-bold text-black mt-0 leading-1.2">
                        20+
                      </h3>
                      <p className="text-[14px] font-light text-black my-0 ">
                        Partners
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-[5px] text-2xl font-bold text-black mt-0 leading-1.2">
                        92+
                      </h3>
                      <p className="text-[14px] font-light text-black my-0 ">
                        Sellers
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-[5px] text-2xl font-bold text-black mt-0 leading-1.2">
                        87
                      </h3>
                      <p className="text-[14px] font-light text-black my-0 ">
                        Services
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:flex-none lg:w-[50%] flex-none w-[50%] max-w-full px-3 mt-0 relative ">
                  <div className=" bg-white h-[150px] py-[25px] px-[50px] rounded-[10px] ">
                    <div className="mb-2 items-center gap-4 flex ">
                      <h3 className=" text-2xl font-bold text-black my-0 ">
                        4.9
                      </h3>
                      <div className="gap-1 flex">
                        <li className="inline-block align-middle leading-none text-[#FFB902]">
                          <FaStar />
                        </li>
                        <li className="inline-block align-middle leading-none text-[#FFB902]">
                          <FaStar />
                        </li>
                        <li className="inline-block align-middle leading-none text-[#FFB902]">
                          <FaStar />
                        </li>
                        <li className="inline-block align-middle leading-none text-[#FFB902]">
                          <FaStar />
                        </li>
                        <li className="inline-block align-middle leading-none text-[#FFB902]">
                          <FaStar />
                        </li>
                      </div>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-10 lg:grid lg:grid-cols-2 lg:gap-10 flex flex-col items-center justify-center ml-[35px] ">
                      <div>
                        <p className="text-black text-[10px] my-0 flex">
                          {userImgsData.map((data) => {
                            return <Users key={data.id} imgSrc={data.imgSrc} />;
                          })}
                        </p>
                      </div>
                      <div className="mx-4 md:block md:gap-0 lg:block lg:gap-0 flex gap-1 justify-center items-center ">
                        <h4 className="text-black text-[14px] font-bold my-0 leading-1.2">
                          100k
                        </h4>
                        <p className="text-black text-[10px] my-0 ">
                          Customer <br /> Satisfaction
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:flex-none lg:w-[50%] md:flex-none md:w-full max-w-full px-3 mt-2 relative">
              <Image
                className="mt-0 md:mt-7 lg:mt-0 w-full object-fill max-w-full h-auto align-middle"
                loading="lazy"
                src={"/images/hero-main.webp"}
                alt="Macbook"
                height={456}
                width={365}
              ></Image>
            </div>
          </div>
          <ServicesSliderWraper />
        </div>
      </div>
      <GallorySection />
      <DealSectionMain />
      <EservicesSectionMain />
      <RserviceSectionMain />
      <SellerSectionMain />
      <DoubtSectionMain />
      <GetSectionMain />
      <NewsLetterSection />
      <FooterComponent />
    </>
  );
};

export default HomePage;
