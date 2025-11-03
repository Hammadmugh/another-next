import React from "react";
import { prisma } from "@/lib/db";
import ServicesSlider from "./ServicesSlider";

const ServicesSliderWraper = async () => {
  const data = await prisma.services.findMany();
  return <ServicesSlider data={data} />;
};

export default ServicesSliderWraper;
