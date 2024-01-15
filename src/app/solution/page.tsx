"use client";
import { useState } from "react";
import { OurPartners, HeroSection, SolutionServices, Form, OurPortfolio, Management  } from "@/components";
import solutionHeroImg from "../../assets/Images/solutionHeroimage.svg";
import { SliderData } from "@/helpers/Helpers";

export default function solution() {
  const [currentSection, setCurrentSection] = useState(0);

  const handleNextClick = () => {
    if (currentSection < SliderData.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };


  const activeSlide = SliderData[currentSection];

  const heading = (
    <>
      <span className="text-[#16B198] text-2xl md:text-4xl">
        Introduction to <br className="hidden sm:flex md:flex" />
      </span>
      <span className="text-[#16B198] text-2xl md:text-4xl">
        {" "}
        PAM and DLP Services
      </span>
    </>
  );
  return (
    <>
      <div className="flex flex-col font-outfit mx-[5vw] sm:mx-[10vw] md:mx-[10vw] overflow-hidden   ">
        <HeroSection
          bg={true}
          title="Solution"
          heading={heading}
          subHeading="We help our customer to protect access to their critical infrastructure using PAM Solution. Our team can implement PAM solution"
          primaryBtn=""
          secondaryBtn=""
          image={solutionHeroImg}
        />
        <SolutionServices
          id={0}
          image=""
          title={""}
          subtitle={""}
        />
        <Management />
        <OurPortfolio
          activeSlide={activeSlide}
          nextClick={handleNextClick}
          backClick={handlePrevClick}
        />
        <Form />
        <OurPartners />
      </div>
    </>
  );
}
