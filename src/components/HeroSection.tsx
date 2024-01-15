"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { HeroSection } from "@/interface/interface";
import { useRouter } from "next/navigation";
import { Button } from ".";
import ArrowForward from "@mui/icons-material/ArrowForward";

const HeroSection = ({
  bg,
  title,
  heading,
  subHeading,
  primaryBtn,
  secondaryBtn,
  image,
}: HeroSection) => {
  const router = useRouter();

  return (
    <div
      className={
        bg
          ? "rounded-2xl md:bg-opacity-25 md:bg-[url('https://raw.githubusercontent.com/afzal212/Securehops-logo/8baac19b44c14b6d50757a9a69580dc3bc4d7689/Mask%20group%20(1).jpg')] flex-col-reverse sm:flex-row flex w-[100%] p-0 md:p-12"
          : "p-0 md:py-6 my-6 flex-col-reverse sm:flex-row flex"
      }
    >
      <div className="flex justify-between">
        <div className="w-full md:w-1/2 ">
          <p className="text-lg font-bold text-[#333] ">{title}</p>
          <h1 className="font-bold leading-4">{heading}</h1>
          <p className="flex items-center py-4 text-base text-[#333] leading-5">
            {subHeading}
          </p>
          <div className="flex flex-col sm:flex-row md:flex-row my-3 gap-5">
            <Button
              title="Get Started"
              onClick={() => router.push("/#form")}
              className=""
            />
            <div>
              <button
                onClick={() => router.push("/services/it-solution")}
                className="w-full flex items-center justify-center py-2 sm:px-3 sm:py-1 md:px-[25px] md:py-[10px]  text-[#333333] border-[1px] border-black font-medium rounded-full group"
              >
                Explore
                <span className="hidden md:flex md:ml-1">
                  <ArrowForward className="rotate-0 group-hover:-rotate-45 md:w-4 md:h-4 " />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:w-1/2 justify-end">
          <Image src={image} className="hidden md:flex" width={464} height={331} alt="hero area image" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
