import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterComponent = () => {
  return (
    <section className="border-t-2 border-[#d5d5d5] bg-black">
      <div className="bg-[#FDFAEB] py-10 px-5 ">
        <div className="flex flex-wrap gap-[30px] justify-between max-w-[1200px] my-0 mx-auto xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full px-3">
          <div className="flex-[1_1_300px] min-w-[200px]">
            <Image
              src={"/images/footer-logo.png"}
              loading="lazy"
              alt="logo"
              width={120}
              height={60}
              className="mb-[15px] align-middle"
            />
            <p className="text-[14px] text-black font-medium mt-0 mb-4">
              Lbaih empowers SMEs with innovative solutions, connecting
              businesses, service providers, and freelancers.
            </p>
          </div>
          <div className="flex-[1_1_200px] min-w-[200px] text-black">
            <h4 className="font-semibold mb-[15px] text-[1.5rem] leading-1.2">
              Quick links
            </h4>
            <ul className="no-underline p-0 m-0">
              <li className="mb-2.5 text-[14px] list-none">
                <Link
                  href={"#"}
                  className="text-black font-normal text-[14px] no-underline outline-none cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2.5 text-[14px] ">
                <Link
                  href={"#"}
                  className="text-black font-normal text-[14px] no-underline outline-none cursor-pointer"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-2.5 text-[14px] ">
                <Link
                  href={"#"}
                  className="text-black font-normal text-[14px] no-underline outline-none cursor-pointer"
                >
                  Services
                </Link>
              </li>
              <li className="mb-2.5 text-[14px] ">
                <Link
                  href={"#"}
                  className="text-black font-normal text-[14px] no-underline outline-none cursor-pointer"
                >
                  Our Vision
                </Link>
              </li>
              <li className="mb-2.5 text-[14px] ">
                <Link
                  href={"#"}
                  className="text-black font-normal text-[14px] no-underline outline-none cursor-pointer"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-[1_1_200px] min-w-[200px] text-black">
            <h4 className="font-semibold mb-[15px] text-[1.5rem] leading-1.2">
              Legal
            </h4>
            <ul className="list-none p-0 m-0">
              <li className="mb-2.5 text-[14px] ">
                <Link
                  href={"#"}
                  className="text-black font-normal text-[14px] no-underline outline-none cursor-pointer"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2.5 text-[14px] ">
                <Link
                  href={"#"}
                  className="text-black font-normal text-[14px] no-underline outline-none cursor-pointer"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-[1_1_200px] min-w-[200px] text-black">
            <h4 className="font-semibold mb-[15px] text-[1.5rem] leading-1.2">
              Contact Information
            </h4>
            <ul className="list-none p-0 m-0 mb-6">
              <li className="mb-2.5 text-[14px] ">
                <div className="flex justify-between">
                  <div>
                    <strong>Email:</strong> <br />
                    <Link href={"#"}>support@yourdomain.com</Link>
                  </div>
                  <Link href={"#"}>
                    <Image
                      src={"/images/facebook.png"}
                      alt="icon"
                      height={20}
                      width={20}
                      loading="lazy"
                    ></Image>
                  </Link>
                </div>
              </li>
              <li className="mb-2.5 text-[14px] ">
                <div className="flex justify-between">
                  <div>
                    <strong>Phone:</strong> <br />
                    <Link href={"#"}>+971 123 456 789</Link>
                  </div>
                  <Link href={"#"}>
                    <Image
                      src={"/images/instagram.png"}
                      alt="icon"
                      height={20}
                      width={20}
                      loading="lazy"
                    ></Image>
                  </Link>
                </div>
              </li>
              <li className="mb-2.5 text-[14px] ">
                <div className="flex justify-between">
                  <div>
                    <strong>Address:</strong> Lbaih Service and <br />
                    Content Management LLC, <br /> Abu Dhabi, UAE
                  </div>
                  <Link href={"#"}>
                    <Image
                      src={"/images/twitter.png"}
                      alt="icon"
                      height={20}
                      width={20}
                      loading="lazy"
                    ></Image>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterComponent;
