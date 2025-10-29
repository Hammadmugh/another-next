import Image from "next/image";
import Link from "next/link";
import React from "react";

interface GalloryCardProps {
  imgSrc: string;
  description: string;
}

const GalloryCard: React.FC<GalloryCardProps> = ({ imgSrc, description }) => {
  return (
    <div className="mb-6 lg:flex-none lg:w-[25%] md:flex-none md:w-[50%] flex-none w-full max-w-full px-3 mt-0 relative">
      <Link
        href={"#"}
        className="text-[#0d6efd] outline-none no-underline cursor-pointer"
      >
        <div className="relative overflow-hidden rounded-[20px]">
          <Image
            className="block w-full h-[150px] align-middle cursor-pointer brightness-50"
            loading="lazy"
            src={imgSrc}
            alt="img"
            height={150}
            width={261}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0, 0, 0, 0.4)] rounded-[22px] z-99 "></div>
          <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[20px] font-semibold text-center mb-0 whitespace-nowrap z-999 mt-0 leading-1.2">
            {description}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default GalloryCard;
