import Image from "next/image";
import Link from "next/link";
import React from "react";
import { servicesData } from "@/app/data/servicesData";
import { FaRegHeart, FaStar } from "react-icons/fa";
import ServicesCard from "./ServicesCard";

const ServicesSlider = () => {
  return (
    <div className="ltr select-none touch-pan-y relative block mt-6">
      <div className="transform-gpu translate-x-0 translate-y-0 overflow-hidden m-0 p-0 relative block">
        <div className="opacity-100 w-[4992px] transform-gpu -translate-x-[3120px] translate-y-0 relative block top-0 left-0 ">
          {servicesData.map((service) => {
            return <ServicesCard key={service.id} {...service} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesSlider;
