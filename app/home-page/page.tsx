import { FaArrowRight } from "react-icons/fa6";
import {
  MdNorthEast,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import ServicesLink from "@/components/ServicesLink";
import ServicesSlider from "@/components/ServicesSlider";
import GallorySection from "@/components/GallorySection";
import DealSectionMain from "@/components/DealSectionMain";
import EservicesSectionMain from "@/components/EservicesSectionMain";
import RserviceSectionMain from "@/components/RserviceSectionMain";

const HomePage = () => {
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
              <div className="p-12 rounded-[20px] bg-[#2A2925] h-[350px] text-white">
                <h1 className="text-[25px] font-bold leading-1.3 mt-0 mb-2">
                  Driving <span className="text-[#FFB902]">Business</span>{" "}
                  Success with <br /> Innovative{" "}
                  <span className="text-[#FFB902]">Solutions</span> Tailored{" "}
                  <br /> for You
                </h1>
                <p
                  style={{ fontFamily: "sans-serif" }}
                  className="text-[16px] mx-0 mt-[30px] mb-[34px] text-white"
                >
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
                  <div className="bg-white h-[135px] p-[25px] rounded-[10px] flex gap-4 items-center justify-center">
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
                  <div className=" bg-white h-[135px] py-[25px] px-[50px] rounded-[10px] ">
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
                    <div className="flex items-center justify-center ml-[35px] ">
                      <div>
                        <p className="text-black text-[10px] my-0 flex">
                          <Image
                            className="-ml-5 align-middle"
                            loading="lazy"
                            src={"/images/user-1.png"}
                            alt="user 1"
                            width={50}
                            height={50}
                          ></Image>
                          <Image
                            className="-ml-5 align-middle"
                            loading="lazy"
                            src={"/images/user-2.png"}
                            alt="user 1"
                            width={50}
                            height={50}
                          ></Image>
                          <Image
                            className="-ml-5 align-middle"
                            loading="lazy"
                            src={"/images/user-3.png"}
                            alt="user 1"
                            width={50}
                            height={50}
                          ></Image>
                          <Image
                            className="-ml-5 align-middle"
                            loading="lazy"
                            src={"/images/user-4.png"}
                            alt="user 1"
                            width={50}
                            height={50}
                          ></Image>
                        </p>
                      </div>
                      <div className="mx-4">
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
            <div className="text-center lg:flex-none lg:w-[50%] md:flex-none md:w-full max-w-full px-3 mt-0 relative">
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
          <div className="mb-4 mt-12 items-center justify-between flex">
            <div className="text-white items-center gap-2 flex">
              <h4 className="my-0 text-[calc(1.275rem + .3vw)] font-medium leading-1.2">
                Continue browsing{" "}
              </h4>
              <FaArrowRight />
            </div>
            <div className="[direction:initial]">
              <button className="py-[5px] px-[5px] bg-transparent text-white border border-white rounded-full text-[18px] ml-2 cursor-pointer normal-case m-0 outline-none">
                <MdOutlineKeyboardArrowLeft />
              </button>
              <button className="py-[5px] px-[5px] bg-transparent text-white border border-white rounded-full text-[18px] ml-2 cursor-pointer normal-case m-0 outline-none">
                <MdOutlineKeyboardArrowRight />
              </button>
            </div>
          </div>
          <ServicesSlider />
        </div>
      </div>
      <GallorySection />
      <DealSectionMain />
      <EservicesSectionMain />
      <RserviceSectionMain />
    </>
  );
};

export default HomePage;
