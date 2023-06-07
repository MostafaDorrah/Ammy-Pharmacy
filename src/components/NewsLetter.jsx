import React from "react";
import { Send } from "@mui/icons-material";
const NewsLetter = () => {
  return (
    <div className="flex justify-center items-center h-[150px] w-[100%] flex-col bg-[#439A97]">
      <h1 className="text-[25px] font-bold">NEWSLETTER</h1>
      <h2 className="text-[15px] mt-2 mobile:text-center mobile:p-3">
        Always in touch with us, for your favourite Products.
      </h2>
      <div className="flex mt-[1rem] item-center justify-between min-w-[20rem] min-h-[2rem] bg-[#CBEDD5] border-[#CBEDD5] rounded-[5px] overflow-hidden mobile:min-w-[20rem]">
        <input
          className="border-none pl-[20px] flex-[8] bg-[#CBEDD5]"
          type="email"
          placeholder="Email"
        />
        <button className="bg-[#4caf50] flex-1">
          <Send className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
