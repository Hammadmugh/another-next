"use client";

import { FaSearch, FaSortDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ExploreBtn from "./ExploreBtn";

const Navbar = () => {
  return (
    <>
      <nav className="w-full bg-[#2a2925] px-4 py-3">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center justify-between w-full sm:w-auto gap-6">
            <Link href="https://yalbaih.ae/home-page" className="shrink-0">
              <Image
                src="/logo.svg"
                alt="logo"
                width={150}
                height={80}
                priority
              />
            </Link>
            <p className="text-white text-[14px] sm:text-[15px] my-0">
              <Link href="#" className="text-white underline">
                Login
              </Link>{" "}
              /{" "}
              <Link href="#" className="text-white underline">
                Register
              </Link>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <div className="flex items-center bg-[#1f1e1e] rounded-lg w-full sm:w-[400px]">
              <span className="bg-black text-white text-sm font-semibold py-2 px-4 rounded-l-lg border-r border-[#4c4c4c]">
                All
              </span>
              <input
                className="flex-1 px-3 py-2 text-sm outline-none bg-white text-black"
                type="text"
                placeholder="Search Services"
              />
              <button
                className="p-2.5 bg-[#f0c33c] text-black rounded-r-lg hover:bg-[#e5b832] transition"
                type="button"
              >
                <FaSearch />
              </button>
            </div>
            <div>
              <Link
                href="#"
                className="flex items-center gap-2 text-[13px] bg-white text-black px-3 py-1.5 rounded-md hover:bg-gray-100"
              >
                <span>Select Language</span>
                <FaSortDown className="text-gray-500 text-[14px]" />
              </Link>
            </div>
            <button
              className="relative text-white text-[26px] hover:text-[#f0c33c] transition"
              id="cartBtn"
            >
              <IoCartOutline />
            </button>
          </div>
        </div>
      </nav>
      <div className="w-full bg-[#181717] py-2 px-4">
        <div className="max-w-7xl mx-auto">
          <ExploreBtn />
        </div>
      </div>
    </>
  );
};

export default Navbar;
