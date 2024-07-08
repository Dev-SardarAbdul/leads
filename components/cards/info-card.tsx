import Image from "next/image";
import React from "react";
import infoIcon from "@/assets/info-card-icon.png";
import copy from "@/assets/copyIcon.png";
import cross from "@/assets/btnCross.png";
import check from "@/assets/btnCheck.png";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const InfoCard = () => {
  return (
    <div className="bg-[#F8F8F8] rounded-[31px] p-6 cursor-grab select-none">
      <div className="flex justify-between items-center">
        <h4 className="text-black font-medium text-2xl">Tom Magnus</h4>
        <Image
          src={infoIcon}
          alt="Icon"
          className="select-none cursor-pointer"
          draggable={false}
        />
      </div>
      <p className="text-xl text-black text-opacity-40 font-medium">$51,421</p>
      <div className="mt-6">
        <div className="flex justify-start items-center gap-3">
          <FaPhoneAlt className="text-xl text-black text-opacity-40" />
          <p className="flex justify-start items-center gap-2 text-xl text-[#7c7c7c] font-medium">
            (505) 555-0125
            <Image
              src={copy}
              alt="Icon"
              className="select-none cursor-pointer"
              draggable={false}
            />
          </p>
        </div>
        <div className="flex justify-start items-center gap-3 mt-2">
          <HiMail className="text-2xl rounded-full text-black text-opacity-40" />

          <p className="flex justify-start items-center gap-2 text-xl text-[#7c7c7c] font-medium">
            baker@abc.com
            <Image
              src={copy}
              alt="Icon"
              className="select-none cursor-pointer"
              draggable={false}
            />
          </p>
        </div>

        <div className="mt-6 flex justify-start items-center gap-2 flex-wrap">
          <div className="bg-[#EEEEEE] w-fit py-1 px-2 rounded-[21px] text-[#7E7E7E] text-[10px] font-medium">
            Digital Marketing
          </div>
          <div className="bg-[#EEEEEE] w-fit py-1 px-2 rounded-[21px] text-[#7E7E7E] text-[10px] font-medium">
            Website
          </div>
          <div className="bg-[#EEEEEE] w-fit py-1 px-2 rounded-[21px] text-[#7E7E7E] text-[10px] font-medium">
            Referral
          </div>
        </div>
        <div className="flex justify-start mt-4 items-center gap-4">
          <button className="w-[87px] h-7 bg-[#40C4AA] rounded-lg text-white text-[10px] font-medium flex justify-center items-center gap-1">
            <Image
              src={check}
              alt="Icon"
              className="select-none cursor-pointer"
              draggable={false}
            />
            Hired
          </button>
          <button className="w-[97px] h-7 bg-[#DB6868] rounded-lg text-white text-[10px] font-medium flex justify-center items-center gap-1">
            <Image
              src={cross}
              alt="Icon"
              className="select-none cursor-pointer"
              draggable={false}
            />
            Did Not Hire
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
