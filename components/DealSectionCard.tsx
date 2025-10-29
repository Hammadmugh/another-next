import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";

interface dealSectionProps {
  imgSrc: string;
  title: string;
  description: string;
  sellerRank: string;
}

const DealSectionCard: React.FC<dealSectionProps> = ({
  imgSrc,
  title,
  description,
  sellerRank,
}) => {
  return (
    <div className="mb-12 w-full px-3 mt-0 justify-center">
      <div className="bg-white p-[15px] rounded-[20px] md:w-[625px] w-full">
        <div className="flex flex-col md:flex-row gap-5 items-start">
          <div className="relative w-full md:w-[206px] aspect-square shrink-0">
            <Image
              loading="lazy"
              src={imgSrc}
              alt="img"
              fill
              className="object-cover rounded-[10px]"
            />
          </div>
          <div className="flex-1 flex flex-col gap-2.5">
            <div className="flex justify-between items-center mb-[5px]">
              <div className="flex gap-2.5 items-center">
                <Image
                  loading="lazy"
                  src="/images/hero-slider-small-img-1.png"
                  alt="img"
                  width={20}
                  height={20}
                  className="block align-middle"
                />
                <div className="flex text-[#212529] flex-col gap-0.5">
                  <span>cc__creative</span>
                  <span className="text-[#0d6efd]">{sellerRank}</span>
                </div>
              </div>
              <FaEllipsisVertical className="text-gray-600 text-lg cursor-pointer" />
            </div>

            <h6 className="text-[20px] text-[#212529] font-semibold m-0">
              {title}
            </h6>

            <p className="text-[12px] text-[#212529] m-0 whitespace-pre-line">
              {description}
            </p>

            <div className="flex flex-wrap justify-between text-[#2A2928] items-center gap-2.5">
              <span className="text-[12px] bg-[#F8F8F8] py-[5px] px-[15px] rounded-[5px]">
                Starting from
              </span>
              <h4 className="text-[20px] font-extrabold m-0">AED 0.00</h4>
              <div className="flex items-center gap-1">
                <FaStar className="text-[#FFB902]" />
                <p className="m-0">4.5</p>
                <span className="text-[10px]">(200 reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealSectionCard;
