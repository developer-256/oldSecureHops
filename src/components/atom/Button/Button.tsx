import React from "react";
import { Button } from "@/interface/interface";

const Button = ({
  title,
  style,
  btnIconStyle,
  className,
  btnIcon,
  onClick
}: Button) => {
  return (
    <button onClick={onClick} className="py-3 sm:px-4 sm:py-2 md:px-[25px] md:py-[10px]  bg-primary-color text-white font-semibold rounded-full">
      {title}
    </button>
  );
};

export default Button;
