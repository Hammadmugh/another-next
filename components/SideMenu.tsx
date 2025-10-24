// import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import React from "react";
import { RxCross2 } from "react-icons/rx";

const SideMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) => {
  return (
    <div
      className={`fixed top-0 left-0 w-[300px] min-h-screen max-h-screen overflow-y-auto bg-[#2a2928]
      transition-transform duration-500 ease-in-out z-999
      ${open ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Cross Button */}
      <div className="text-right pt-2 px-4">
        <button
          onClick={() => setOpen(!open)}
          className="text-[20px] inline-block text-white no-underline cursor-pointer"
        >
          <RxCross2 />
        </button>
      </div>

      {/* Menu Items */}
      <ul className="px-0 my-0">
        <li className="bg-[#eebf35] border-b border-b-[#4c4c4c]">
          <Link
            className="text-black font-semibold block text-left text-[15px] px-5 py-[15px] no-underline"
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="border-b border-b-[#4c4c4c]">
          <Link
            className="text-white font-semibold block text-left text-[15px] px-5 py-[15px] no-underline"
            href="#"
          >
            Deals & Offers
          </Link>
        </li>
        <li className="border-b border-b-[#4c4c4c]">
          <Link
            className="text-white font-semibold block text-left text-[15px] px-5 py-[15px] no-underline"
            href="#"
          >
            Bids & Offers
          </Link>
        </li>
        <li className="border-b border-b-[#4c4c4c]">
          <Link
            className="text-white font-semibold block text-left text-[15px] px-5 py-[15px] no-underline"
            href="#"
          >
            Manage Subscription
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
