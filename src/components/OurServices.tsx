import React, { useState } from "react";
import Image from "next/image";
import security from "../../public/Images/Security.svg";
import datacenter from "../../public/Images/datacenter.svg";
import enterprise from "../../public/Images/enterprise.svg";
import whitehat from "../../public/Images/whitehat.svg";
import Arrow from "../../public/Images/Arrow1.svg";
import { useRouter } from "next/navigation";

const OurServices = () => {
  const router = useRouter();

  return (
    <div className="w-[100%] my-6">
      <div className="text-center  font-outfit">
        <h1 className="text-2xl md:text-4xl font-bold text-[#16B198]">Our Services</h1>
        <p className="text-base mt-4 text-[#333333]">
          We have the expertise to ensure that your network infrastructure is
          secure, efficient, and ready to meet the challenges of the future.
        </p>
      </div>
      <div className="md:grid md:grid-cols-4 md:grid-rows-2 md:gap-[1vw] mt-10  ">
        {/* card 1*/}
        <div
          onClick={() => router.push("/services/it-solution")}
          className="bg-[#f5f5f5] flex flex-col justify-between hover:cursor-pointer hover:bg-[#16B19820] md:col-span-2 md:row-span-1 rounded-2xl group p-6"
        >
          <div>
            <div className="rounded-full w-10 md:w-16 h-10 md:h-16 flex content-center justify-center bg-[#16B198]">
              <Image
                src={enterprise}
                alt=""
                className="rounded-full w-6 md:w-10"
              />
            </div>
            <h1 className="font-bold mt-2 text-lg md:text-2xl text-[#16B198]">
              Information Technology Solutions Outsourcing
            </h1>
            <p className="hidden md:flex mt-1 text-[#333] text-base ">
              As a premier provider of Information Technology Solutions
              Outsourcing (ITSO) services, our organization takes pride in
              offering tailored solutions designed to empower businesses in the
              ever-evolving digital landscape. With a focus on seamless
              integration and process optimization, we specialize in managing
              and maintaining IT infrastructure, cybersecurity, and digital
              transformation initiatives. Our expert team ensures that clients
              benefit from cutting-edge technologies while enjoying
              cost-efficiency through outsourcing.
            </p>
            <p className="flex md:hidden mt-1 text-[#333] text-base ">
              As a premier provider of Information Technology Solutions
              Outsourcing (ITSO) services, our organization takes pride in
              offering tailored solutions designed to empower businesses in the
              ever-evolving digital landscape...
            </p>
          </div>
          <div className="flex justify-between pt-2">
            <p className="font-medium text-base text-[#333]">Read More</p>
            <Image
              src={Arrow}
              alt=""
              width={20}
              height={20}
              className="rotate-45 group-hover:-rotate-0"
            />
          </div>
        </div>
        {/* card 2 */}
        <div
          onClick={() => router.push("/services/vulnerability")}
          className="bg-[#f5f5f5] flex flex-col justify-between hover:cursor-pointer hover:bg-[#16B19820] group mt-5 md:mt-0 md:col-span-1 md:row-span-1  rounded-2xl group p-6"
        >
          <div>
            <div className="rounded-full w-10 md:w-16 h-10 md:h-16 flex content-center justify-center bg-[#16B198]">
              <Image
                src={security}
                alt=""
                className="rounded-full w-6 md:w-10"
              />
            </div>
            <h1 className="font-bold mt-2  text-lg md:text-2xl text-[#16B198]">
              Vulnerability Assessment
            </h1>
            <p className="hidden md:flex text-[#333] text-base">
              We are your trusted partners in ensuring the security of your
              digital assets. Our experienced team of cybersecurity experts
              specializes in providing top-tier vulnerability assessment and
              consultancy services.
            </p>
            <p className="flex md:hidden mt-1 text-[#333] text-base ">
            We are your trusted partners in ensuring the security of your
              digital assets. Our experienced team of cybersecurity experts
              specializes in providing top-tier vulnerability assessment...
            </p>
          </div>
          <div className="flex justify-between pt-2">
            <p className="font-medium text-base text-[#333]">Read More</p>
            <Image
              src={Arrow}
              alt=""
              width={20}
              height={20}
              className="rotate-45 group-hover:-rotate-0"
            />
          </div>
        </div>
        {/* card 3 */}
        <div
          onClick={() => router.push("/services/pentesting")}
          className="bg-[#f5f5f5] flex flex-col justify-between hover:cursor-pointer hover:bg-[#16B19820] mt-5 md:mt-0  md:row-span-2  rounded-2xl group p-6 "
        >
          <div>
            <div className="rounded-full w-10 md:w-16 h-10 md:h-16 flex content-center justify-center bg-[#16B198]">
              <Image
                src={whitehat}
                alt=""
                className="rounded-full w-6 md:w-10"
              />
            </div>
            <h1 className="font-bold mt-2 text-lg md:text-2xl text-[#16B198]">
              Penetration Testing
            </h1>
            <p className="hidden md:flex text-[#333] text-base py-1">
              We specialize in providing expert penetration testing services to
              help safeguard your digital assets and protect your organization
              from cyber threats.
            </p>

            <p className="hidden md:flex text-[#333] text-base py-1">
              Our team of experienced ethical hackers conducts thorough
              assessments to identify vulnerabilities, assess risks, and fortify
              your cybersecurity defenses.
            </p>
            <p className="hidden md:flex text-[#333] text-base py-1">
              In-depth assessments of your network infrastructure to uncover
              vulnerabilities that could be exploited by malicious actors. we
              are providing valuable insights into potential points of
              exploitation that malicious actors could target.
            </p>
            <p className="hidden md:flex text-[#333] text-base py-1">
              As a provider of Penetration Testing services, our commitment lies
              in helping organizations proactively secure their digital assets.
            </p>
            <p className="flex md:hidden text-[#333] text-base py-1">
              We specialize in providing expert penetration testing services to
              help safeguard your digital assets and protect your organization
              from cyber threats...
            </p>
          </div>
          <div className="flex justify-between pt-2">
            <p className="font-medium text-base text-[#333]">Read More</p>
            <Image
              src={Arrow}
              alt=""
              width={20}
              height={20}
              className="rotate-45 group-hover:-rotate-0"
            />
          </div>
        </div>
        {/* card 4 */}
        <div
          onClick={() => router.push("/services/datacenter")}
          className="bg-[#f5f5f5] flex flex-col justify-between hover:cursor-pointer hover:bg-[#16B19820] mt-5 md:mt-0   md:col-span-1 md:row-span-1  rounded-2xl group p-6 "
        >
          <div>
            <div className="rounded-full w-10 md:w-16 h-10 md:h-16 flex content-center justify-center bg-[#16B198]">
              <Image
                src={datacenter}
                alt=""
                className="rounded-full w-6 md:w-10"
              />
            </div>
            <h1 className="font-bold mt-2 text-lg md:text-2xl text-[#16B198]">
              Data Center Services
            </h1>
            <p className="hidden md:flex text-[#333] text-base">
              It’s a representation of the bedrock for a resilient and
              high-performing IT ecosystem, offering organizations the
              foundational support needed to navigate the complexities of the
              digital era with confidence and agility.
            </p>
            <p className="flex md:hidden text-[#333] text-base">
              It’s a representation of the bedrock for a resilient and
              high-performing IT ecosystem, offering organizations the
              foundational support needed to navigate the complexities of the
              digital era with confidence and agility...
            </p>
          </div>
          <div className="flex justify-between pt-2">
            <p className="font-medium text-base text-[#333]">Read More</p>
            <Image
              src={Arrow}
              alt=""
              width={20}
              height={20}
              className="rotate-45 group-hover:-rotate-0"
            />
          </div>
        </div>
        {/* card 5 */}
        <div
          onClick={() => router.push("/services/system-engineering")}
          className="bg-[#f5f5f5] flex flex-col justify-between hover:cursor-pointer hover:bg-[#16B19820] mt-5 md:mt-0 md:col-span-2 md:row-span-1  rounded-2xl group p-6 "
        >
          <div>
            <div className="rounded-full w-10 md:w-16 h-10 md:h-16 flex content-center md:mt-0 justify-center bg-[#16B198]">
              <Image
                src={security}
                alt=""
                className="rounded-full w-6 md:w-10"
              />
            </div>
            <h1 className="font-bold mt-2 text-lg md:text-2xl md:mt-5 text-[#16B198]">
              System Engineering
            </h1>
            <p className="flex md:hidden text-[#333] text-base">
              Our team of experienced system engineers is dedicated to
              designing, building, and optimizing complex systems that meet your
              organization's needs and objectives. Tailored system designs that
              align with your specific business goals and technical
              requirements...
            </p>
            <p className="hidden md:flex text-[#333] text-base">
              Our team of experienced system engineers is dedicated to
              designing, building, and optimizing complex systems that meet your
              organization's needs and objectives. Tailored system designs that
              align with your specific business goals and technical
              requirements.
            </p>
            <p className="hidden md:flex text-[#333] text-base pt-1">
              Expert execution and integration of hardware and software
              components into a cohesive and efficient system. We ensure your
              systems are secure. Our systems are designed to adapt, ensuring a
              sustainable and cost-effective investment.
            </p>
          </div>
          <div className="flex justify-between pt-2">
            <p className="font-medium text-base text-[#333]">Read More</p>
            <Image
              src={Arrow}
              alt=""
              width={20}
              height={20}
              className="rotate-45 group-hover:-rotate-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
