import React from "react";

const Button = ({ text }: { text: string }) => {
  return (
    <button className=" text-xs w-[80px] h-[45px] rounded-lg shadow-sm shadow-slate-500 bg-[#2b203b] text-white font-semibold tracking-wide flex justify-center items-center">
      {text}
    </button>
  );
};

export default Button;
