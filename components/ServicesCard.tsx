import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";

interface ServiceCardProps {
  sellerName: string;
  sellerStatus: string;
  sellerImg: string;
  serviceImg: string;
  title: string;
  description: string;
  rating: number;
  reviews: number;
  price: string;
  currency: string;
  favoriteCount: number;
}

const ServicesCard: React.FC<ServiceCardProps> = ({
  sellerName,
  sellerStatus,
  sellerImg,
  serviceImg,
  description,
  rating,
  reviews,
  price,
  currency,
  favoriteCount,
}) => {
  return (
    <div className="md:w-[220px] md:h-[380px] lg:w-[220px] lg:h-[380px] sm:w-[200px] bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-between px-4 pt-3">
        <div className="flex items-center gap-2">
          <Image
            src={sellerImg}
            alt={sellerName}
            width={36}
            height={36}
            className="rounded-full object-cover border border-gray-300"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-800">
              {sellerName}
            </span>
            <span className="text-[13px] text-[#0098FF] font-medium leading-tight">
              {sellerStatus}
            </span>
          </div>
        </div>
        <FaEllipsisVertical className="text-gray-400 text-lg cursor-pointer" />
      </div>
      <Link href="#" className="block cursor-pointer">
        <Image
          src={serviceImg}
          alt={description}
          width={260}
          height={160}
          className="rounded-xl mx-auto mt-3 w-[90%] h-[150px] object-cover"
        />
      </Link>
      <div className="px-4 pb-4 pt-3">
        <div className="flex items-center gap-1 text-gray-500 mb-2">
          <FaRegHeart className="text-gray-500" />
          <span className="text-sm">{favoriteCount}</span>
        </div>
        <Link href="#" className="no-underline">
          <h6 className="text-[#222325] text-[14px] font-medium leading-snug mb-2 hover:text-[#0098FF] transition-colors">
            {description}
          </h6>
        </Link>
        <div className="flex items-center mb-2">
          <FaStar className="text-[#F3A763] mr-1 text-sm" />
          <span className="text-[#F3A763] text-[14px] font-semibold">
            {rating}
          </span>
          <span className="text-[#6c757d] text-[13px] ml-1">({reviews})</span>
        </div>
        <p className="text-[#74767E] text-[11px] font-semibold uppercase mb-0">
          Starting at{" "}
          <span className="text-[#365953] text-[15px] font-semibold">
            {currency} {price}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
