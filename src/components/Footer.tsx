import React from "react";
import Image from "next/image";
import Link from "next/link";
import Securehops2 from "../assets/Logos/Securehops2.svg";
import { FooterData } from "@/helpers/Helpers";

const Footer = () => {
  return (
    <footer className="bg-[#333] font-outfit grid grid-cols-1 md:grid-cols-4 gap-4 p-8 md:p-28 ">
      <div className="flex flex-col">
        <div className="flex justify-center md:block md:justify-start">
          <Image src={Securehops2} width={200} alt="" />
        </div>
        <p className="text-white text-center md:text-start  font-light">
          Our team of experts maintains robust network solutions, ensuring
          seamless connectivity.
        </p>
        <div className="flex justify-between md:block">
          {FooterData.socialLinks.map((link) => {
            return (
              <>
                <span className="text-white flex items-center mt-4 md:my-0">
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <span className="ml-2 md:ml-0">{link.name}</span>
                    <Image
                      className="ml-2 mt-1 md:mt-0"
                      src={link.arrow}
                      alt="pic2"
                      width={10}
                    />
                  </Link>
                </span>
              </>
            );
          })}
        </div>
      </div>
      <div className="hidden md:block">
        <h3 className="font-medium text-[#16B198]">Quick Links</h3>
        <div className="flex flex-row md:flex-col justify-between">
          {FooterData.quickLinks.map((link) => {
            return (
              <span className="flex flex-row md:flex-col">
                <Link href={link.url} className=" text-white ml-2 md:ml-0">
                  {link.name}
                </Link>
              </span>
            );
          })}
        </div>
      </div>
      <div className="hidden md:block">
        <h3 className="font-medium text-[#16B198]">Digital Services</h3>
        {FooterData.digitalServices.map((link) => {
          return (
            <>
              <Link
                href={link.url}
                className="flex flex-col font-light text-white"
              >
                {link.name}
              </Link>
            </>
          );
        })}
      </div>
      <div>
        {FooterData.contact.map((contact) => {
          return (
            <>
              <div>
                <h3 className="text-[#16B198] font-medium">{contact.name}</h3>
                <span className="text-white ml-2 md:ml-0 font-light">
                  {contact.value}
                </span>
              </div>
            </>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
