import React from "react";
import Image from "next/image";
import Management from "../../public/Images/Management.svg";

const Lifecycle = () => {
  return (
    <div className=" mt-32 sm:mt-10">
      <div className="text-center mt-10 md:mt-20">
        <h1 className="text-3xl  font-extrabold text-[#16B198]">
          Privileged Access Management
        </h1>
        <p className="text-sm mt-6  text-[#333333]">
          Elevating your security posture through advanced Privileged Access
          Management solutions to safeguard critical data and systems.{" "}
        </p>
      </div>
      <div className="flex justify-center items-center my-16 sm:mt-8">
        <Image
          src={Management}
          alt="pic"
          className=" sm:w-[55vw] sm:h-[35vh]"
        />
      </div>
    </div>
  );
};

export default Lifecycle;
