"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { servicesData } from "@/app/data/servicesData";
import ServicesCard from "./ServicesCard";

const ServicesSlider = () => {
  return (
    <div className="mt-6">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={15}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        speed={1200}
      >
        {servicesData.map((service) => (
          <SwiperSlide key={service.id}>
            <ServicesCard {...service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesSlider;
