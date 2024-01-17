import { Inter } from "next/font/google";
import localfont from "next/font/google";

("use client");
import React, { useState } from "react";
import Image from "next/image";
import "../../public/OurPartners.css";
import Partners from "../../public//Images/Partners.svg";
import OurPartnersImages from "./OurPartnersImages";

const OurPartners = () => {
  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? OurPartnersImages.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === OurPartnersImages.length - 1 ? 0 : curr + 1));

  return (
    <div className="my-6">
      <div className="text-center ">
        <h1 className="text-2xl md:text-4xl font-bold text-[#16B198]">
          Partnering for Productivity
        </h1>
        <p className="text-base my-4  text-[#333333]">
          We acquire our essential tools from a carefully chosen consortium of
          industry leaders, each distinguished for their unwavering dedication
          to excellence.
        </p>
      </div>
      <div
        className="mt-20x sm:mt-28 transition-transform ease-linear duration-700"
        style={{ transform: `translateX(-${curr * 30}%)` }}
      >
        <OurPartnersImages />
      </div>
      <div className="flex justify-end items-end mt-9 gap-3">
        <Image onClick={prev} className="rotate-180" src={Partners} alt="" />
        <Image onClick={next} src={Partners} alt="" />
      </div>
    </div>
  );
};

export default OurPartners;
