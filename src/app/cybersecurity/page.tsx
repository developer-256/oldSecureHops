import React from "react";
import cybersecurity from "../../assets/Images/cybersecurityHeroImg.svg";
import {
  Form,
  NIST,
  SafetyTips,
  CybersecurityServices,
  FAQs,
  HeroSection,
  OurPartners,
  OurTeam,
} from "@/components";

const Cybersecurity = () => {
  const heading = (
    <div className="mb-2">
      <span className="  text-black-color font-bold text-2xl md:text-4xl">
        Introduction to <br className="hidden md:flex" />
      </span>
      <span className="text-primary-color font-bold text-2xl md:text-4xl ">
        Cyber Security
      </span>
    </div>
  );

  return (
    <>
      <div className="flex flex-col font-outfit mx-[5vw] sm:mx-[10vw] md:mx-[10vw] overflow-hidden   ">
        <HeroSection
          bg={false}
          title="Cybersecurity"
          heading={heading}
          subHeading="We help our customer to protect access to their critical infrastructure using PAM Solution. Our team can implement PAM solution"
          primaryBtn=""
          secondaryBtn=""
          image={cybersecurity}
        />
        <CybersecurityServices
          id={0}
          image={cybersecurity}
          title={""}
          subtitle={""}
        />
        <SafetyTips />
        <NIST />
        <OurPartners />
        <Form />
        <OurTeam />
        <FAQs />
      </div>
    </>
  );
};

export default Cybersecurity;
