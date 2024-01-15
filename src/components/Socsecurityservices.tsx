import React from "react";
import Image from "next/image";
import { Socsecurityservices } from "@/interface/interface";
import { Socservicedata } from "@/app/Socservicedata";

const Socsecurityservices = ({
  title,
  subtitle,
  image,
}: Socsecurityservices) => {
  return (
    <div className="my-24 md:my-28 ">
      <div className="text-center">
        <h1 className="text-3xl  font-bold text-[#16B198]">SOC Services</h1>
        <p className="text-sm mt-4 text-[#333333]">
          Empowering your organization with comprehensive SOC (Security
          Operations Center) services to{" "}
        </p>
        <p className="text-sm text-[#333333]">
          proactively monitor, detect, and respond to security threats.
        </p>
      </div>
      <div className="gap-10  overflow-hidden  grid grid-cols-1 grid-rows-4 sm:grid sm:grid-cols-2 sm:grid-rows-4 md:grid md:grid-cols-4 md:grid-rows-2 sm:gap-[1.2vw] mt-10  ">
        {/* card1 */}
        {Socservicedata.map((card, index) => {
          return (
            <>
              <div key={index} className=" sm:text-start  md:col-span-1 md:row-span-2 rounded-2xl mx-auto w-full ">
                <Image
                  src={card.image}
                  className="mt-0 mx-auto pt-0 w-full sm:justify-start rounded-lg"
                  alt="Pic1"
                />
                <h1 className="mt-6 sm:text-[1.3vw]  font-semibold text-[#16B198]">
                  {card.title}
                </h1>
                <p className="mt-2 sm:text-[2vw] md:text-[1vw] text-black">
                  {card.subtitle}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Socsecurityservices;
