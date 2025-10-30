import React from "react";

const DoubtSectionMain = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(54, 89, 83, 0.8), rgba(54, 89, 83, 0.8)), url('/images/service-bg.webp')",
        }}
        className=" bg-cover relative bg-[#365953] bg-top bg-no-repeat py-[50px] z-10 overflow-hidden block [unicode-bidi:isolate]"
      >
        <div className="h-full xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full mx-auto px-3">
          <div className="text-center h-full flex flex-wrap -mx-6">
            <div className="m-auto md:flex-none md:w-[75%] max-w-full px-3 relative">
              <h2 className="text-white text-[40px] font-semibold mt-0 mb-5 leading-1.2">
                Have Some Doubts To Get Started?
              </h2>
              <p className="text-[#D4D4D4] text-[16px] font-normal mt-0 mb-10">
                Not sure where to begin? We're here to help! Reach out with your{" "}
                <br /> questions, and we'll guide you through.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <h5 className="text-[1.25rem]">"No News or Blogs Found"</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoubtSectionMain;
