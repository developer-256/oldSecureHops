import React from "react";

const Email = () => {
  return (
    <div className="my-8 md:my-16 rounded-xl bg-[url('https://raw.githubusercontent.com/arham-securehopes/logos/main/Mask%20group.jpg')] bg-no-repeat bg-cover bg-center">
      <div className=" bg-[#16B198] rounded-xl bg-opacity-90 p-8 md:p-12">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="font-bold text-white w-full md:w-1/2 mt-3 sm:mt-0 md:mt-0 sm:mx-[2vw] md:mx-0 text-2xl md:text-4xl">
            Ready to see how Cyber Security Services can help?
          </h1>
          <p className="text-white text-base w-full my-2 md:w-2/3">
            In the dynamic world of network security, staying informed about the
            latest threats, trends, and best practices is not just a choice it's
            a necessity.
          </p>
          <form className="flex flex-col w-64 md:w-96 items-center my-5">
            <div className="relative flex items-center justify-center w-full text-white">
              <input
                type="email"
                name="user_email"
                placeholder="Enter Email Address"
                className="text-base placeholder w-full h-[2.5rem] border border-white rounded-full placeholder-white bg-transparent text-white px-4 
                  focus:outline-none"
                required
              />
              <button
                className="flex items-center h-8 px-4 py-2 absolute m-0 right-1  bg-white text-[#333] rounded-full text-sm 
                lg:px-6 lg:py-2 focus:outline-none"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Email;
