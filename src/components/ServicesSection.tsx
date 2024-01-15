import React from "react";
import Image from "next/image";
import ServiceImg from "../../public/Images/Services1.svg";

const ServicesSection = ({ data }: any) => {
  return (
    <div className="my-8 md:my-16">
      <div className="flex flex-col items-center text-center mb-6">
        <h1 className="text-3xl font-bold text-[#16B198]">Our Services</h1>
        <p className="w-full md:w-3/4 text-base mt-4 text-[#333333]">
          Our expertise spans infrastructure design and management, networking
          solutions, cutting-edge cybersecurity, state-of-the-art alarm systems,
          and Cisco certification training.
        </p>
      </div>
      <div className="flex flex-col-reverse sm:flex-row justify-between w-[100%] gap-10">
        <div className="w-1/2 hidden md:flex">
          <Image className="w-full" src={ServiceImg} alt="pic" />
        </div>
        <div className="w-full md:w-1/2 sm:mb-0 md:mb-0 mb-5">
          <div className="flex flex-col mt-[3vw] sm:mt-[1.5vw] md:mt-[1.5vw]">
            {data?.map((service: any) => {
              return (
                <span key={service.heading} className="flex ">
                  <Image
                    src={service?.arrow.src}
                    alt="Arrow"
                    className="flex self-start mt-2 md:mt-2 rotate-360 "
                    width={50}
                    height={50}
                  />
                  <div className="">
                    <h1 className="text-[#16B198] ml-[2vw]  sm:ml-[1vw] sm:mt-[0.3vw] md:ml-[1vw]  font-semibold text-lg md:text-xl">
                      {service?.heading}
                    </h1>{" "}
                    <p className="ml-3 sm:ml-[1.2vw] text-[#333] text-base md:text-base">
                      {service?.description}
                    </p>
                  </div>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
