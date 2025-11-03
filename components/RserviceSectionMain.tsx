import React from "react";
import ServicesSliderWraper from "./ServicesSliderWraper";

const RserviceSectionMain = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(54, 89, 83, 0.8), rgba(54, 89, 83, 0.8)), url('/images/hero-bg.webp')",
        }}
        className=" bg-cover relative bg-[#365953] bg-top bg-no-repeat py-[50px] z-10 overflow-hidden block [unicode-bidi:isolate]"
      >
        <div>
          <div className="h-full xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full mx-auto px-3">
            <div className="text-center h-full flex flex-wrap -mx-6">
              <div className="m-auto md:flex-none md:w-[75%] max-w-full px-3 relative">
                <h2 className="text-white text-[40px] font-semibold mt-0 mb-5 leading-1.2">
                  Ramadan Special Services
                </h2>
                <p className="text-[#D4D4D4] text-[16px] font-normal mt-0 mb-10">
                  Discover exclusive services tailored for the holy month of
                  Ramadan. From event planning to <br /> delivery services, find
                  everything you need to make this season special.
                </p>
              </div>
            </div>
            <ServicesSliderWraper />
            <ServicesSliderWraper />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RserviceSectionMain;
