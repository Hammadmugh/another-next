// import { RxCross2 } from "react-icons/rx";
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
          <a
            className="text-black font-semibold block text-left text-[15px] px-5 py-[15px] no-underline"
            href="/"
          >
            Home
          </a>
        </li>
        <li className="border-b border-b-[#4c4c4c]">
          <a
            className="text-white font-semibold block text-left text-[15px] px-5 py-[15px] no-underline"
            href="#"
          >
            Deals & Offers
          </a>
        </li>
        <li className="border-b border-b-[#4c4c4c]">
          <a
            className="text-white font-semibold block text-left text-[15px] px-5 py-[15px] no-underline"
            href="#"
          >
            Bids & Offers
          </a>
        </li>
        <li className="border-b border-b-[#4c4c4c]">
          <a
            className="text-white font-semibold block text-left text-[15px] px-5 py-[15px] no-underline"
            href="#"
          >
            Manage Subscription
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
