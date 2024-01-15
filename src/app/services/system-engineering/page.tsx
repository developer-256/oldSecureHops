"use client";
import React from "react";
import { useState } from "react";
import {
  FAQs,
  ServicesSection,
  HeroSection,
  OurPartners,
  OurPortfolio,
  OurTeam,
  Form,
} from "../../../components";
import servicesHeroImg from "../../../assets/Images/servicesHeroImage.svg";
import { SystemEngineeringServices, SliderData } from "@/helpers/Helpers";

const SystemEngineering = ({ params }: any) => {
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
        System
        <br /> Engineering
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
          subHeading="With a focus on efficiency, innovation, and reliability, we are your trusted partner in navigating the intricate landscape of system design, implementation, and maintenance"
          primaryBtn=""
          secondaryBtn=""
          image={servicesHeroImg}
        />
        <ServicesSection data={SystemEngineeringServices} />
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

export default SystemEngineering;
