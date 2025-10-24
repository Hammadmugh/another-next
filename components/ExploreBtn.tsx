"use client";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import SideMenu from "./SideMenu";

const ExploreBtn = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Link
        className="cursor-pointer text-[18px] font-semibold flex items-center gap-2 w-fit text-white outline-none no-underline"
        href={"#"}
      >
        <button
          onClick={() => setOpen(!open)}
          className="text-[22px] text-white cursor-pointer"
        >
          <FaChevronDown />
        </button>
        <button onClick={() => setOpen(!open)} className="cursor-pointer">
          Explore
        </button>
      </Link>
      <div>{open ? <SideMenu open={open} setOpen={setOpen} /> : null}</div>
    </>
  );
};

export default ExploreBtn;
