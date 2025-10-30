import Link from "next/link";
import React from "react";

const GetSectionMain = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1)), url('/images/faq-bg.png')",
        }}
        className="relative bg-top bg-no-repeat bg-cover py-[50px] z-1 overflow-hidden"
      >
        <div className="relative z-1">
          <div className=" flex justify-center mx-3">
            <div className="bg-[#375a5a] bg-[url('/images/cta-bg.png')] bg-center bg-cover bg-no-repeat w-[1015px] h-[400px] text-white flex flex-col flex-wrap justify-center items-center text-center rounded-lg p-5 box-border">
              <h2 className="text-[37px] font-normal mb-[50px] mt-0 leading-1.2">
                Ready to Get Started ?
              </h2>
              <p className="text-[14px] max-w-[800px] mb-[70px] mt-0 leading-relaxed">
                Join as a Seller or Freelancer to showcase your skills and start
                earning. Sign up free today!
              </p>
              <Link
                href={"#"}
                className="bg-[#2E90EB] text-white text-[14px] font-bold py-3 px-6 rounded-md transition-colors duration-300 hover:bg-[#0d6efd]"
              >
                Get Started it's Free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetSectionMain;
