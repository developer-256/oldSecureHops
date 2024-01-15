"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Arrow1 from "../../public/Images/Arrow1.svg";
import { useRouter } from "next/navigation";
import { ProfessionalSection } from "@/helpers/Helpers";

const ProfessionalCard = () => {
  const [isBoxScrolled, setIsBoxScrolled] = useState(false); // Set it to false initially
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const animatedText = document.getElementById("animatedText");
      if (animatedText) {
        const textPosition = animatedText.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        // Use the "useClient" value to control the animation
        const useClient = textPosition < screenHeight && textPosition > 0;

        setIsBoxScrolled(useClient);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Set isBoxScrolled to true after a short delay
    const timeout = setTimeout(() => {
      setIsBoxScrolled(true);
    }, 1000); // Adjust the delay as needed

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout); // Clear the timeout to prevent setting it to true after unmounting
    };
  }, []);

  return (
    <div className="my-8 md:my-16 flex">
      {ProfessionalSection.map((item) => {
        return (
          <div className="flex gap-8">
            <div className="hidden md:flex  w-1/2">
              <Image src={item.image.src} width={500} height={500} alt="pic" />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="font-bold text-[#16B198] text-2xl md:text-4xl">
                {item.heading}
              </h1>
              <p className="text-[#333] mt-3 text-base md:mt-5">
                {item.description}
              </p>

              {item.children.map((point) => {
                return (
                  <>
                    <div className="flex">
                      <img
                        src={Arrow1.src}
                        alt="Arrow"
                        className="self-start mt-3 transform translate-y-0  rotate-360 "
                      />
                      <div className="box">
                        <p
                          id="animatedText"
                          className="text-[#333] text-base my-2 ml-2"
                        >
                          {point.point}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}

              <button
                onClick={() => router.push("/services/vulnerability")}
                className="w-full md:w-1/3 p-2 md:p-3 mt-4 md:mt-8 text-base font-bold text-white bg-[#16B198] rounded-full"
              >
                {item.cta}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfessionalCard;
