"use client";
import React from "react";
import { useState } from "react";
import servicesHeroImg from "../../../assets/Images/servicesHeroImage.svg";
import {Form, OurTeam, OurPortfolio, OurPartners, HeroSection, ServicesSection, FAQs} from "@/components";
import { DataCenterServices, SliderData } from "@/helpers/Helpers";

const DataCenter = ({params}: any) => {

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
        Data Center
        <br /> Services
      </h1>
    </>
  );
  return (
    <>
      <div className="flex flex-col font-outfit mx-[5vw] sm:mx-[10vw] md:mx-[10vw]   ">
        <HeroSection
          bg={true}
          title="Services"
          heading={heading}
          subHeading="With a focus on scalability, security, and state-of-the-art infrastructure, we are your trusted partner in managing and optimizing your data center environment"
          primaryBtn=""
          secondaryBtn=""
          image={servicesHeroImg}
        />
        <ServicesSection data={DataCenterServices} />
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

export default DataCenter;
