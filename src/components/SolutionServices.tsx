import React from "react";
import Image from "next/image";
import { SolutionServices } from "@/interface/interface";
import { SolutionData } from "@/app/SolutionData";

const SolutionServices = ({ title, subtitle, image }: SolutionServices) => {
  return (
    <div className="my-24 md:my-36  ">
      <div className="text-center">
        <h1 className="text-3xl  font-bold text-[#16B198]">
          Solution Services
        </h1>
        <p className="text-base mt-4 text-[#333333]">
          Protecting your digital assets with cutting-edge cybersecurity
          solutions to ensure your online presence remains secure and resilient.
        </p>
      </div>
      <div className="gap-10 overflow-hidden  grid grid-cols-1 grid-rows-4 sm:grid sm:grid-cols-2 sm:grid-rows-4 md:grid md:grid-cols-4 md:grid-rows-2 sm:gap-[1.2vw] mt-10  ">
        {/* card1 */}
        {SolutionData.map((card, index) => {
          return (
            <div key={index}>
              <div className=" md:col-span-1 md:row-span-2 ">
                <Image
                  src={card.image}
                  className="mt-0 pt-0  w-full sm:w-[30vw] sm:h-[20vw] md:w-[30vw] md:h-[13vw] rounded-lg "
                  alt="Pic1"
                  width={500}
                  height={400}
                />
                <h1 className="mt-6 text-[6vw] sm:text-[1.9vw] md:text-[1.3vw] text-center sm:text-start font-semibold text-[#16B198]">
                  {card.title}
                </h1>
                <p className="mt-2 text-[4vw] sm:text-[1.8vw] text-center sm:text-start md:text-[1.1vw] text-black">
                  {card.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SolutionServices;
