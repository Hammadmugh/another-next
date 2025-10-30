import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface sellerProps {
  imgSrc: string;
  title: string;
  description: string;
}

const SellerCard: React.FC<sellerProps> = ({ imgSrc, title, description }) => {
  return (
    <div className="lg:flex-none lg:w-1/4 md:flex-none md:w1/3 flex-none w-1/2 max-w-full px-3 mt-6">
      <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col">
        <div className="relative h-60 w-full flex items-center justify-center text-[80px] bg-[#faebd7] uppercase">
          <Image
            src={imgSrc}
            alt="img"
            fill
            loading="lazy"
            className="block object-cover align-middle"
          />
        </div>
        <div className="p-5 flex justify-between items-center">
          <div>
            <h5 className="text-[18px] m-0 text-[#252525] font-semibold leading-[1.2]">
              {title}
            </h5>
            <p className="text-[14px] text-[#9D9D9D] my-0">{description}</p>
          </div>
          <FaArrowRight className="text-[18px] text-gray-500 transition-colors duration-300 hover:text-black cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default SellerCard;
