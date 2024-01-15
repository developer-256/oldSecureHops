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
import { ITSolutionServices, SliderData } from "@/helpers/Helpers";

const ItSolution = ({ params }: any) => {
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
        IT Solution
        <br /> Outsourcing
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
          subHeading="Outsourcing solutions for application development and maintenance, infrastructure management, help desk and technical support, and business process outsourcing."
          primaryBtn=""
          secondaryBtn=""
          image={servicesHeroImg}
        />
        <ServicesSection data={ITSolutionServices} />
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

export default ItSolution;
