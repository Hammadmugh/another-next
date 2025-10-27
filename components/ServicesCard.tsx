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
  price: number;
  currency: string;
  favoriteCount: number;
}

const ServicesCard: React.FC<ServiceCardProps> = ({
  sellerName,
  sellerStatus,
  sellerImg,
  serviceImg,
  title,
  description,
  rating,
  reviews,
  price,
  currency,
  favoriteCount,
}) => {
  return (
    <div className="w-[297px] block bg-white rounded-[20px] mb-[30px] overflow-hidden relative mr-[15px] float-left h-full min-h-px ">
      <div className="px-4 py-2 items-center justify-between flex">
        <div className="items-center gap-2 flex rounded-full bg-[#ededed] object-cover align-middle">
          <Image
            className="transition-all duration-400 ease-in-out block"
            loading="lazy"
            src={sellerImg}
            alt="img"
            height={30}
            width={30}
          ></Image>
          <div className="flex-col flex">
            <span title={sellerName} className="">
              {title}
            </span>
            <span className="text-[#0d6efd]">{sellerStatus}</span>
          </div>
        </div>
        <i className="inline-block not-italic leading-none">
          <FaEllipsisVertical />{" "}
        </i>
      </div>
      <Link
        className="text-[#0d6efd] outline-none no-underline cursor-pointer"
        href={"#"}
        tabIndex={-1}
      >
        <div className="overflow-hidden relative">
          <Image
            src={serviceImg}
            loading="lazy"
            alt="img"
            className="transition-all duration-400 ease-in-out block w-full p-2.5 rounded-[20px] object-cover object-center align-middle"
            height={140}
            width={277}
          ></Image>
        </div>
      </Link>
      <div className="p-[15px] relative">
        <div className="mb-2 items-center gap-2 flex">
          <div>
            <i className="font-normal inline-block not-italic normal-case leading-none antialiased select-none">
              <FaRegHeart />
            </i>
            <span className="text-[#6c757d]">{favoriteCount}</span>
          </div>
        </div>
        <Link href={"#"} tabIndex={-1}>
          <h6 className="text-[#222325] text-[15px] min-h-9 mb-2 mt-0 font-medium leading-1.2 cursor-pointer">
            {description}
          </h6>
        </Link>
        <span className="text-[#F3A763]">
          <i className="inline-block not-italic normal-case leading-none antialiased font-black select-none">
            <FaStar />
          </i>
          {rating}
          <span className="text-[#6c757d]">({reviews})</span>
        </span>
        <h3 className="text-[#365953] text-[15px] mb-0 mt-1 font-medium leading-1.2 ">
          <span className="text-[#74767E] text-[10px] font-semibold leading-1.2 ">
            STARTING AT
          </span>
          <strong>{currency}</strong>
          {price}
        </h3>
      </div>
    </div>
  );
};

export default ServicesCard;
