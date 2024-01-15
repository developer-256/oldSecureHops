import React from "react";
import Image from "next/image";
import safety from "../../public/Images/Safety.svg";
import Arrow1 from "../../public/Images/Arrow1.svg";
const SafetyTips = () => {
  return (
    <div className="">
      <div className="text-center mt-10 md:mt-20">
        <h1 className="text-3xl  font-extrabold text-[#16B198]">Safety Tips</h1>
        <p className="text-sm mt-4  text-[#333333]">
          Cybersecurity safety is crucial in the digital age to protect your
          personal and sensitive information.{" "}
        </p>
        <p className="mb-5 text-sm text-[#333333]">
          {" "}
          Here are some essential cybersecurity safety tips.
        </p>
      </div>
      <div className="flex flex-col-reverse sm:flex-row  justify-between">
        <div>
          <div className="flex mt-[3vw] sm:mt-[1.5vw] md:mt-[1.5vw]">
            <span className="flex flex-row ">
              <img
                src={Arrow1.src}
                alt="Arrow"
                className="w-[4vw] h-[4vw]  sm:w-[2vw] sm:h-[2vw] md:mt-1 md:w-[1.5vw] md:h-[1.5vw]  text-[#16B198]  rotate-360"
              />{" "}
              <p className="text-[#333333] text-[2.5vw] ml-[2vw]  sm:ml-[1vw] sm:mt-[0.3vw] sm:text-[1vw] md:ml-[1.4vw] md:mt-[0.3vw] md:text-[1vw] font-semibold">
                Create complex passwords for your online accounts
              </p>{" "}
            </span>
          </div>
          <div className="flex mt-[3vw] sm:mt-[1.5vw] md:mt-[1.5vw]">
            <span className="flex flex-row ">
              <img
                src={Arrow1.src}
                alt="Arrow"
                className="w-[4vw] h-[4vw]  sm:w-[2vw] sm:h-[2vw] md:mt-1 md:w-[1.5vw] md:h-[1.5vw]  text-[#16B198] "
              />{" "}
              <p className="text-[#333333] text-[2.5vw] ml-[2vw]  sm:ml-[1vw] sm:mt-[0.3vw] sm:text-[1vw] md:ml-[1.4vw] md:mt-[0.3vw] md:text-[1vw] font-semibold">
                Enable 2FA or multi-factor authentication wherever possible.
              </p>{" "}
            </span>
          </div>
          <div className="flex mt-[3vw] sm:mt-[1.5vw] md:mt-[1.5vw]">
            <span className="flex flex-row ">
              <img
                src={Arrow1.src}
                alt="Arrow"
                className="w-[4vw] h-[4vw]  sm:w-[2vw] sm:h-[2vw] md:mt-1 md:w-[1.5vw] md:h-[1.5vw]  text-[#16B198] "
              />{" "}
              <p className="text-[#333333] text-[2.5vw] ml-[2vw]  sm:ml-[1vw] sm:mt-[0.3vw] sm:text-[1vw] md:ml-[1.4vw] md:mt-[0.3vw] md:text-[1vw] font-semibold">
                Be cautious of unsolicited emails, messages, and links.
              </p>{" "}
            </span>
          </div>
          <div className="flex mt-[3vw] sm:mt-[1.5vw] md:mt-[1.5vw]">
            <span className="flex flex-row ">
              <img
                src={Arrow1.src}
                alt="Arrow"
                className="w-[4vw] h-[4vw]  sm:w-[2vw] sm:h-[2vw] md:mt-1 md:w-[1.5vw] md:h-[1.5vw]  text-[#16B198] "
              />{" "}
              <p className="text-[#333333] text-[2.5vw] ml-[2vw]  sm:ml-[1vw] sm:mt-[0.3vw] sm:text-[1vw] md:ml-[1.4vw] md:mt-[0.3vw] md:text-[1vw] font-semibold">
                Change default router passwords and use strong encryption
              </p>{" "}
            </span>
          </div>
          <div className="flex mt-[3vw] sm:mt-[1.5vw] md:mt-[1.5vw]">
            <span className="flex flex-row ">
              <img
                src={Arrow1.src}
                alt="Arrow"
                className="w-[4vw] h-[4vw]  sm:w-[2vw] sm:h-[2vw] md:mt-1 md:w-[1.5vw] md:h-[1.5vw]  text-[#16B198] "
              />{" "}
              <p className="text-[#333333] text-[2.5vw] ml-[2vw]  sm:ml-[1vw] sm:mt-[0.3vw] sm:text-[1vw] md:ml-[1.4vw] md:mt-[0.3vw] md:text-[1vw] font-semibold">
                Back up important data to an external drive or a cloud-based
                service.
              </p>{" "}
            </span>
          </div>
          <div className="flex mt-[3vw] sm:mt-[1.5vw] md:mt-[1.5vw]">
            <span className="flex flex-row ">
              <img
                src={Arrow1.src}
                alt="Arrow"
                className="w-[4vw] h-[4vw]  sm:w-[2vw] sm:h-[2vw] md:mt-1 md:w-[1.5vw] md:h-[1.5vw]  text-[#16B198] "
              />{" "}
              <p className="text-[#333333] text-[2.5vw] ml-[2vw]  sm:ml-[1vw] sm:mt-[0.3vw] sm:text-[1vw] md:ml-[1.4vw] md:mt-[0.3vw] md:text-[1vw] font-semibold ">
                Look for the padlock symbol in your browser's address bar.
              </p>{" "}
            </span>
          </div>
          <div className="flex mt-[3vw] sm:mt-[1.5vw] md:mt-[1.5vw]">
            <span className="flex flex-row ">
              <img
                src={Arrow1.src}
                alt="Arrow"
                className="w-[4vw] h-[4vw]  sm:w-[2vw] sm:h-[2vw] md:mt-1 md:w-[1.5vw] md:h-[1.5vw] text-[#16B198] "
              />{" "}
              <p className="text-[#333333] text-[2.5vw] ml-[2vw]  sm:ml-[1vw] sm:mt-[0.3vw] sm:text-[1vw] md:ml-[1.4vw] md:mt-[0.3vw] md:text-[1vw] font-semibold">
                Don't give personal information unless required
              </p>{" "}
            </span>
          </div>
        </div>
        <div className="mt-6">
          <Image
            className="w-full sm:w-[28vw] md:w-[28vw]  "
            src={safety}
            alt="pic"
          />
        </div>
      </div>
    </div>
  );
};

export default SafetyTips;
