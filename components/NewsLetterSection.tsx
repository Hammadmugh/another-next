import React from "react";

const NewsLetterSection = () => {
  return (
    <section className="bg-[#365953] py-[35px] px-0">
      <div className="xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full mx-auto px-3 py-0">
        <div className="items-center flex flex-wrap mt-0 -mx-3">
          <div className="mb-0 lg:mb-0 lg:flex-none lg:w-1/2 max-w-full px-3 mt-0 relative">
            <p className="text-[15px] font-bold text-white mb-2 mt-0">
              Subscribe to our newsletter for exclusive offers and insights.
            </p>
            <p className="text-[15px] font-medium text-white m-0">
              Stay updated with the latest news, offers, and updates.
            </p>
          </div>
          <div className="lg:flex-none lg:w-1/2 max-w-full px-3 mt-0 relative">
            <form
              noValidate
              className="flex flex-nowrap gap-4 mb:mt-0 lg:mt-0 mt-6"
            >
              {/* <input
                type="hidden"
                name="_token"
                value={"CVgVxzuIekUPuKQkNh6l09ujCHnUqWxIaV9T4xKo"}
              /> */}
              <div className="flex-[1_1_auto] mb-0">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  className="py-2.5 px-[15px] rounded-[10px] outline-none min-w-0 bg-white text-black block w-full"
                />
              </div>
              <button
                type="submit"
                className="border border-white py-2.5 px-5 rounded-[10px] font-semibold transition-colors duration-300 hover:bg-black hover:border-black cursor-pointer"
              >
                {" "}
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterSection;
