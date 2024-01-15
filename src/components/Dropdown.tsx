"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DownArrow from "../assets/Icons/downArrow.svg";
import { MenuItem } from "@/interface/interface";

interface DropdownProps {
  item: MenuItem;
  closeDropdown: () => void;
}

export default function Dropdown(props: DropdownProps) {
  const { item, closeDropdown } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuItems = item?.children ? item.children : [];

  const toggle = () => {
    setIsOpen((old) => !old);
  };

  const transClass = isOpen ? "flex" : "hidden";

  return (
    <>
      <div className="">
        <button
          className="flex text-[#333] hover:text-gray-500"
          onClick={toggle}
        >
          {item.title}
          <Image
            className="mx-1 cursor-pointer"
            src={DownArrow}
            alt="down arrow image"
          />
        </button>
        <div
          className={`absolute top-20 z-30 w-[250px] h-fit flex flex-col py-4 bg-[#f1f1f1] border border-[#d9d9d9] rounded-md ${transClass}`}
        >
          {menuItems.map((item) => (
            <Link
              key={item.route}
              className="text-[#333] hover:bg-zinc-300 hover:text-zinc-500 px-4 py-1"
              href={item?.route || ""}
              onClick={() => { toggle(); closeDropdown(); }}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      {isOpen ? (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 z-20"
          onClick={toggle}
        ></div>
      ) : (
        <></>
      )}
    </>
  );
}
