"use client";
import FAQs from "../../components/FAQs";
import homeHeroImg from "../../assets/Images/homeHeroImg.svg";
import {Form, OurTeam, OurServices, HeroSection, OurPartners, ProfessionalCard, CyberAttacks, Email, } from "@/components";

export default function Home() {
  const heading = (
    <div className="flex">
      <span className="text-[#333] text-2xl md:text-4xl ">
        Securing Today for a <br className="hidden md:flex " />
        <span className="text-primary-color  font-bold text-2xl md:text-4xl">
          Secure Tomorrow
        </span>
        <br className="hidden sm:flex md:flex" />
      </span>
    </div>
  );

  return (
    <>
      <div className="relative flex flex-col font-outfit mx-[5vw] sm:mx-[10vw] md:mx-[10vw] overflow-hidden   ">
        <HeroSection
          // bg=""
          title=""
          subHeading="With years of experience in the security industry, we're at the forefront of innovative solutions that protect you, your assets, and your data."
          heading={heading}
          primaryBtn=""
          secondaryBtn=""
          image={homeHeroImg}
        />

        <OurPartners />
        <OurServices />
        <ProfessionalCard />
        <CyberAttacks />
        <Email />
        <OurTeam />
        <FAQs />
        <Form />
      </div>
    </>
  );
}
