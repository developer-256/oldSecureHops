"use client";
import React from "react";
import { useState } from "react";
import servicesHeroImg from "../../../assets/Images/servicesHeroImage.svg";
import {
  Form,
  OurTeam,
  OurPortfolio,
  OurPartners,
  HeroSection,
  ServicesSection,
  FAQs,
} from "@/components";
import { ITSupport, SliderData } from "@/helpers/Helpers";

const ItSupport = ({ params }: any) => {
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
      <h1 className="text-[#16B198] text-2xl md:text-4xl">
        Information Technology
        <br /> Support
      </h1>
    </>
  );
  return (
    <>
      <div className="flex flex-col font-outfit mx-[5vw] sm:mx-[10vw] md:mx-[10vw] overflow-hidden   ">
        <HeroSection
          bg={true}
          title="Services"
          heading={heading}
          subHeading="Your go-to partner for comprehensive Information Technology (IT) support services. "
          primaryBtn=""
          secondaryBtn=""
          image={servicesHeroImg}
        />
        <ServicesSection data={ITSupport} />
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
};

export default ItSupport;
