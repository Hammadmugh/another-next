import Image from "next/image";
import Link from "next/link";
import React from "react";

interface EservicesSectionProps {
  imgSrc: string;
  title: string;
  description: string;
}

const EservicesSectionCard: React.FC<EservicesSectionProps> = ({
  imgSrc,
  title,
  description,
}) => {
  return (
    <div className="overflow-hidden flex flex-col">
      <div className="bg-[#faebd7] w-[400px] h-[400px] relative">
        <Image
          loading="lazy"
          src={imgSrc}
          alt="img"
          className="object-cover"
          fill
        ></Image>
      </div>
      <div className="p-5 text-center text-black">
        <div>
          <h5 className="font-bold mt-0 mb-2 leading-1.2 text-[19px]">
            {title}
          </h5>
          <p className="text-[12px] mt-0 mb-4">{description}</p>
        </div>
        <div>
          <Link
            href={"#"}
            className="text-[15px] text-white bg-[#365953] rounded-lg text-center cursor-pointer select-none py-1.5 px-3 hover:bg-black"
          >
            Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EservicesSectionCard;
