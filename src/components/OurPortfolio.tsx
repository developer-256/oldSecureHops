import React from "react";
import Image from "next/image";
import leftArrows from "../../public/PortfolioImages/leftArrows.svg";
interface OurPortfolio {
  activeSlide: any;
  nextClick: () => void;
  backClick: () => void;
}
const OurPortfolio = ({ activeSlide, nextClick, backClick }: OurPortfolio) => {
  return (
    <div>
      {/* Title section  */}
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl  font-extrabold text-[#16B198]">
          Our Portfolio{" "}
        </h1>
        <p className="text-base my-4  text-[#333333]">
          We are proud to showcase our extensive portfolio of work that reflects
          our expertise and dedication to excellence.
        </p>
      </div>
      {/* Image section  */}
      <div className="flex justify-center items-center">
        <div className="w-full  md:w-1/3 lg:w-1/2 ">
          <div className="hidden sm:block md:flex justify-end items-end">
            <div className=" flex justify-center sm:flex sm:ml-48 sm:justify-end items-center rounded-full ">
              <Image
                src={activeSlide.secondary.src}
                alt=" pic "
                width={800}
                height={800}
                className="rounded-full border-2 sm:w-28 sm:mt-8 sm:h-28 border-dashed md:mt-28 lg:mt-9 lg:mr-0 md:mr-12 md:w-24 md:h-24 border-black p-1 lg:w-32 lg:h-32 "
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <Image
              src={activeSlide.tertiary.src}
              alt=" pic "
              width={360}
              height={360}
              loading="lazy"
              className="rounded-full border-2  border-dashed border-[#16B198] w-32 h-32 sm:w-64 sm:h-64 md:w-64 md:h-96 lg:w-80 lg:h-80 p-2"
            />
          </div>
          <div className="hidden sm:block md:flex justify-start items-start">
            <div className="w-28 h-28 flex justify-center items-center rounded-full ">
              <Image
                src={activeSlide.primary.src}
                alt=" pic "
                width={200}
                height={200}
                className="rounded-full border-2  lg:mb-28 lg:ml-0 sm:mb-12 sm:ml-40 border-dashed border-black p-1 ml-12 w-16 h-16 "
              />
            </div>
          </div>
        </div>
      </div>
      {/* subtitle section  */}
      <div className="flex relative flex-col justify-center items-center text-center mt-10 md:mt-0 ">
        <div className="flex flex-col justify-center  items-center">
          <h1 className="text-2xl font-bold text-[#16B198]">
            {activeSlide.HeadLine}
          </h1>
          <div className="absolute right-0">
            <button className="mr-2" onClick={backClick}>
              <Image
                src={leftArrows}
                width={40}
                height={40}
                alt="Arrow"
                className="w-8 h-8 rotate-180"
              />
            </button>
            <button onClick={nextClick}>
              <Image
                src={leftArrows}
                width={40}
                height={40}
                alt="Arrow"
                className="w-8 h-8"
              />
            </button>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-base mt-4 text-[#333333]">
            {activeSlide.primaryText}
          </p>
          <p className="text-base mt-4 text-[#333333]">
            {activeSlide.secondaryText}
          </p>
        </div>
      </div>
      .{" "}
    </div>
  );
};

export default OurPortfolio;
