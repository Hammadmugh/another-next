import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaSortDown } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ExploreBtn from "./ExploreBtn";

const Navbar = () => {
  return (
    <>
      <div className=" px-[15px] py-[15px] bg-[#2a2925] [unicode-bidi:isolate]">
        <div className="w-full mx-auto block [unicode-bidi:isolate]">
          <div className="flex items-center justify-between">
            <div className="w-[27%] flex items-center gap-5 [unicode-bidi:isolate]">
              <div className="block [unicode-bidi:isolate]">
                <Link
                  className="text-[#0d6efd] outline-none no-underline cursor-pointer"
                  href={"https://yalbaih.ae/home-page"}
                >
                  <Image
                    className="align-middle overflow-clip text-[#0d6efd] cursor-pointer"
                    style={{ overflowClipMargin: "content-box" }}
                    loading="lazy"
                    src={"/logo.svg"}
                    alt="logo"
                    width={"175"}
                    height={"88"}
                  ></Image>
                </Link>
              </div>
              <div className="block [unicode-bidi:isolate]">
                <p className="text-white text-[15px] my-0">
                  <Link
                    className="text-white underline outline-none cursor-pointer text-[15px]"
                    href={"https://yalbaih.ae/buyer/login"}
                  >
                    Login
                  </Link>
                  ' / '
                  <Link
                    className="text-white underline outline-none cursor-pointer text-[15px]"
                    href={"https://yalbaih.ae/buyer/signup"}
                  >
                    Register
                  </Link>
                </p>
              </div>
            </div>
            <div className="[@media(min-width:800px)_and_(max-width:1100px)]:pl-[75px] w-[72%] flex items-center justify-between [unicode-bidi:isolate]">
              <div className="p-2 bg-[#1f1e1e] rounded-[8px] flex items-center w-full">
                <div className="w-full relative flex flex-wrap items-stretch [unicode-bidi:isolate]">
                  <span className="bg-black text-[15px] text-white font-semibold py-[0.47rem] px-5 border border-[#4c4c4c] leading-6">
                    All
                  </span>
                  <input
                    className="bg-white border border-[#205F6E] relative flex-1 min-w-0 w-full pl-4 block  py-1.5 text-[1rem] font-normal leading-normal text-[#212529] appearance-none focus:outline-none"
                    type="text"
                    id="searchKeyword"
                    placeholder="Search Services"
                  />
                  <span id="searchProcessingIcon"></span>
                </div>
                <div id="headerSearchResults"></div>
                <button
                  className="border border-transparent py-2.75 px-2.75 transition-colors duration-150 ease-in-out text-black bg-[#f0c33c] cursor-pointer"
                  type="button"
                >
                  <FaSearch />
                </button>
              </div>
              <div id="google_translate_element">
                <div dir="ltr">
                  <div>
                    <Image
                      src={"https://www.google.com/images/cleardot.gif"}
                      alt=""
                      style={{
                        backgroundImage:
                          'url("https://translate.googleapis.com/translate_static/img/te_ctrl3.gif")',
                        backgroundPosition: "-65px 0px",
                      }}
                      width={"1"}
                      height={"1"}
                    ></Image>
                    <span style={{ verticalAlign: "middle" }}>
                      <Link
                        className="flex text-[12px] gap-2 m-3 p-2 block rounded-md bg-white text-black"
                        aria-haspopup="true"
                        href={"#"}
                      >
                        <span>Select Language</span>
                        <Image
                          src={"https://www.google.com/images/cleardot.gif"}
                          alt=""
                          width={"1"}
                          height={"1"}
                        ></Image>
                        <span className="border-l border-gray-400"></span>
                        <Image
                          src={"https://www.google.com/images/cleardot.gif"}
                          alt=""
                          width={"1"}
                          height={"1"}
                        ></Image>
                        <span
                          className="text-gray-500 text-[14px]"
                          aria-hidden="true"
                        >
                          <FaSortDown />
                        </span>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <button
                  className="flex justify-center items-center text-[25px] cursor-pointer normal-case"
                  id="cartBtn"
                >
                  <IoCartOutline />
                  {/* <span className="absolute top-0 right-[-15%] w-4 h-4 bg-red-500 p-0 m-0 text-[10px] rounded-full flex items-center justify-center"></span> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[15px] py-[5px] block bg-[#181717]">
        <div className="w-full px-3 mx-auto block">
          <ExploreBtn />
        </div>
      </div>
    </>
  );
};

export default Navbar;
