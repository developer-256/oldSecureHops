import React from "react";
import Image from "next/image";
import Framework from "../../public/Images/Framework.svg";

const NIST = () => {
  return (
    <div className="my-24 md:my-36">
      <div className="text-center mt-10 md:mt-20">
        <h1 className="text-3xl  font-extrabold text-[#16B198]">
          NIST Cybersecurity Framework
        </h1>
        <p className="text-xs mt-6  text-[#333333]">
          The National Institute of Standards and Technology (NIST)
          Cybersecurity Framework is a set of guidelines and best{" "}
        </p>
        <p className="mb-5 text-xs text-[#333333]">
          practices designed to help organizations manage and reduce
          cybersecurity risks.
        </p>
      </div>
      <div className="flex justify-center items-center mt-8">
        <Image src={Framework} alt="pic" className="w-[70vw] h-[35vh]" />
      </div>
    </div>
  );
};

export default NIST;
