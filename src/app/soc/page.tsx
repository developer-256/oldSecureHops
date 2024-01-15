"use client";
import service from "../../assets/Images/servicesHeroImage.svg";
import { useState } from "react";
import {
  HeroSection,
  OurPortfolio,
  FAQs,
  OurTeam,
  Socsecurityservices,
  OurPartners,
  Form
} from "@/components";
import { SliderData } from "@/helpers/Helpers";

export default function Soc() {
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
      <span className="font-bold text-black-color text-[10vw] overflow-hidden sm:text-[3.5vw] md:text-[3vw] sm:leading-[2rem] md:leading-[2.8rem]">
        Introduction to <br className="hidden sm:flex md:flex" />
      </span>
      <span className="  font-bold text-[#16B198] text-[10vw] overflow-hidden sm:text-[3.5vw] md:text-[3vw] sm:leading-[2rem] md:leading-[2.8rem]">
        Cloud SOC
      </span>
    </>
  );

  return (
    <>
      <div className="flex flex-col font-outfit mx-[5vw] sm:mx-[10vw] md:mx-[10vw] overflow-hidden">
        <HeroSection
          bg={false}
          title="SOC"
          heading={heading}
          subHeading="We offer cost-effective cloud-based SOC services to get visibility into Information Assets with rich Next Generation and Artificial Intelligence (AI)."
          primaryBtn=""
          secondaryBtn=""
          image={service}
        />
        <Socsecurityservices
          id={0}
          image={undefined}
          title={""}
          subtitle={""}
        />
        <OurPartners />
        <OurPortfolio
          activeSlide={activeSlide}
          nextClick={handleNextClick}
          backClick={handlePrevClick}
        />
        <Form />
        <OurTeam />
        <FAQs />
      </div>
    </>
  );
}
