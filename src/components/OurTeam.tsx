import React from "react";
import Image from "next/image";
import { OurTeamData } from "@/helpers/Helpers";

const OurTeam = () => {
  return (
    <div className="my-8 md:my-16">
      <div className="text-center flex justify-center items-center flex-col">
        <h1 className="text-3xl font-bold text-[#16B198]">Our Team</h1>
        <p className="text-base text-center w-full md:w-2/3 mt-4 text-[#333333]">
          We take pride in introducing you to the professionals who bring their
          expertise, passion, and commitment to deliver the best solutions for
          your needs.
        </p>
      </div>
      <div className="flex flex-wrap gap-10 my-10 justify-center">
        {OurTeamData.map((team, index) => {
          return (
            <>
              <div
                key={index}
                className="flex justify-center items-center text-center flex-col hover:shadow-md w-[300px] py-8 rounded-xl "
              >
                <div className="rounded-full">
                  <Image
                    src={team.image.src}
                    alt=""
                    className="rounded-full "
                    width={100}
                    height={100}
                  />
                </div>
                <h1 className="mt-3 text-center text-base">
                  Hi, I'm{" "}
                  <span className="font-semibold text-lg text-[#333333]">
                    {team.name}
                  </span>
                </h1>
                <p className="text-base text-[#333] m-0 p-0 text-center">
                  {team.designation}
                </p>
                <p className="text-center text-[#666] mx-3 text-sm md:text-base mt-1">
                  {team.description}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default OurTeam;
