import React from "react";

const GallorySection = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(241, 241, 241, 0.8),rgba(241, 241, 241, 0.8)), url('/images/gallory-bg.png')",
        }}
        className="relative bg-top bg-no-repeat bg-cover py-[50px] z-1 overflow-hidden border-t-[3px] border-[darkorange]"
      >
        <div className="relative z-1 ">
          <div className="h-full lg:max-w-[960px] md:max-w-[720px] max-w-[540px] w-full mx-auto px-3">
            <div className="text-center h-full flex flex-wrap -mx-6">
              <div className="m-auto md:flex-none w-[75%] max-w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallorySection;
