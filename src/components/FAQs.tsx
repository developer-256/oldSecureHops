"use client";
import React, { useState } from "react";
import { faqData } from "@/helpers/Helpers";

const FAQs = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const showAnswer = (index: number) => {
    setSelectedQuestion((prevSelected) =>
      prevSelected === index ? null : index
    );
  };

  return (
    <div className="my-8 md:my-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#16B198]">FAQs</h1>
        <p className="text-base mt-4 text-[#333333]">
          Navigating through our FAQ is easy – simply click on a question, and
          the answer will expand below it.
        </p>
      </div>
      {/* Cards  */}
      <div className="w-full flex flex-col items-center gap-2 mt-5">
        {/* Cards part 1 */}
        <div className="justify-center items-center gap-4 rounded-lg  
         
        md:w-full md:flex md:flex-row md:flex-wrap 
        sm:w-full sm:flex-col">
          {/* Card 1 */}
          {faqData.map((faq, index) => (
            <div
              key={index}
              onClick={() => showAnswer(index)}
              className="flex cursor-pointer mb-4 shadow-md rounded-xl group p-4 
              lg:w-5/12 lg:flex-row 
              md:w-full md:flex-col 
             
              "
            >
              <div className={`${selectedQuestion === index ? 'lg:w-full' : 'lg:w-full'
                }`}
              >
                <div className="flex  gap-2 relative items-center  ">
                  <div className="">
                    <p className="text-[#333333] rounded-md text-base text-wrap">
                      {faq.question}
                    </p>
                  </div>
                  <div className="">
                    <span className="transition-transform duration-500 ease-in-out transform ">
                      <img
                        src={faq.arrow.src}
                        alt=""
                        className={`w-4  sm:absolute sm:top-1  sm:-right-2  ${selectedQuestion === index ? "rotate-180" : ""
                          } -rotate-0 group-hover:-rotate-180`}
                      />
                    </span>
                  </div>
                </div>
                <div className="w-full">
                  {selectedQuestion === index && (
                    <p className="text-[#999999] pt-2 text-base">{faq.answer}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;

// export default FAQs;
