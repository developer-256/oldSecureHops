"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { RxCross2 } from "react-icons/rx";
import { usePathname, useRouter } from "next/navigation";
import Securehops from "../assets/Logos/Securehops.svg";
import Button from "../components/atom/Button/Button";
import Dropdown from "./Dropdown";
import { MenuItem } from "@/interface/interface";

const menuItems: MenuItem[] = [
  { title: "Home", route: "/" },
  {
    title: "Services",
    children: [
      { title: "IT Solutions Outsourcing", route: "/services/it-solution" },
      { title: "Vulnerability Assessment", route: "/services/vulnerability" },
      { title: "Penetration Testing", route: "/services/pentesting" },
      { title: "Data Center Services", route: "/services/datacenter" },
      { title: "System Engineering", route: "/services/system-engineering" },
      { title: "IT Support", route: "/services/it-support" },
    ],
  },
  { title: "Cybersecurity", route: "/cybersecurity" },
  { title: "Solutions", route: "/solution" },
  { title: "SOC", route: "/soc" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const closeDropdown = () => {
    setToggle(false);
  };

  return (
    <div>
      <div className="my-4 md:my-6 mx-3 ">
        <nav className="block md:flex md:justify-between">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                src={Securehops}
                width={200}
                className="hidden md:block"
                alt=""
              />
              <Image
                src={Securehops}
                width={120}
                className="block md:hidden"
                alt=""
              />
            </Link>
            <div className="flex sm:hidden md:hidden">
              {toggle ? (
                <RxCross2
                  onClick={() => setToggle(!toggle)}
                  className="text-[#333333] cursor-pointer md:hidden block"
                />
              ) : (
                <MenuIcon
                  onClick={() => setToggle(!toggle)}
                  className="text-[#333333] cursor-pointer md:hidden block"
                />
              )}
            </div>
          </div>
          <ul className="hidden md:flex text-[#333] sm:gap-2 sm:px-4 sm:py-2 sm:border-[#333333] sm:border-[1px] sm:rounded-full md:gap-4 md:px-8 md:py-2">
            <li className="flex gap-2">
              {menuItems.map((item) => (
                <ul key={item.title} className="">
                  {item.children ? (
                    <Dropdown item={item} closeDropdown={closeDropdown} />
                  ) : (
                    <Link
                      href={item.route || ""}
                      passHref
                      onClick={() => {
                        setToggle(false);
                        closeDropdown();
                      }}
                      className={`text-[#333333] ${
                        pathname === item.route
                          ? "text-[#9B9B9B] text-base"
                          : "text-[#333333] text-base"
                      }`}
                    >
                      {item.title}
                    </Link>
                  )}
                </ul>
              ))}
            </li>
          </ul>
          <div className="hidden sm:flex">
            <Button title="Get Started" onClick={() => router.push("/#form")} />
          </div>
        </nav>
      </div>

      {/* Responsive navbar */}
      <div
        className={`mx-2 duration-900 text-[#333333] ${
          toggle ? "top-[0]" : "top-[-100]"
        } ${toggle ? "block" : "hidden"}`}
      >
        <ul className="p-4 w-11/12 absolute top-12 z-50 rounded-md border border-[#ebebeb] bg-[#FAFAFC]">
          {menuItems.map((item) => (
            <li
              key={item.title}
              className="mt-4 sm:text-base sm:mt-0 md:text-lg md:mt-0"
            >
              {item.children ? (
                <Dropdown item={item} closeDropdown={closeDropdown} />
              ) : (
                <Link
                  href={item.route || ""}
                  passHref
                  onClick={() => {
                    setToggle(false);
                    closeDropdown();
                  }}
                  className={`text-[#333333] ${
                    pathname === item.route
                      ? "text-[#9B9B9B] sm:text-xs md:text-sm"
                      : "text-[#333333] sm:text-xs md:text-sm"
                  }`}
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
          <button
            className="bg-teal-500 text-white py-2 rounded-full w-full mt-4"
            onClick={() => router.push("/#form")}
          >
            Get Started
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
