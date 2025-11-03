"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import ServicesCard from "./ServicesCard";
import type { Services } from "@prisma/client";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const ServicesSlider = ({ data }: { data: Services[] }) => {
  const prevBtnRef = useRef<HTMLButtonElement | null>(null);
  const nextBtnRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <div className="mb-4 mt-12 items-center justify-between flex">
        <div className="text-white items-center gap-2 flex">
          <h4 className="my-0 text-[calc(1.275rem + .3vw)] font-medium leading-1.2">
            Continue browsing{" "}
          </h4>
          <FaArrowRight />
        </div>

        <div className="flex items-center gap-2 z-10">
          <button
            ref={prevBtnRef}
            className="py-[5px] px-[5px] bg-transparent text-white border border-white rounded-full text-[18px] cursor-pointer outline-none"
            aria-label="prev"
            type="button"
          >
            <MdOutlineKeyboardArrowLeft />
          </button>

          <button
            ref={nextBtnRef}
            className="py-[5px] px-[5px] bg-transparent text-white border border-white rounded-full text-[18px] cursor-pointer outline-none"
            aria-label="next"
            type="button"
          >
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </div>

      <div className="mt-6">
        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          speed={1200}
          onInit={(swiper) => {
            // @ts-ignore:
            swiper.params.navigation.prevEl = prevBtnRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextBtnRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {data.map((service) => (
            <SwiperSlide key={service.id}>
              <ServicesCard {...service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ServicesSlider;
