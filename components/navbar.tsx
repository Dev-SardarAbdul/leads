"use client";
import Image from "next/image";
import React, { useState } from "react";
import search from "@/assets/searchIcon.png";
import navbarFirstIcon from "@/assets/navbarFirstIcon.png";
import navbarSecondIcon from "@/assets/navbarSecondIcon.png";
import navbarThirdIcon from "@/assets/navbarThirdIcon.png";
import navbarFourthIcon from "@/assets/navbarFourthIcon.png";
import navbarLastIcon from "@/assets/navbarLastIcon.png";
import navbarProfileIcon from "@/assets/navbarProfileIcon.png";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("play");
  return (
    <div className="flex justify-between items-center bg-white h-[77px] gap-8 rounded-[42px] px-8">
      <div className="flex-1 flex justify-start items-center gap-12">
        <h2 className="text-black text-3xl font-medium">Leads</h2>
        <div className="relative flex-1">
          <Image
            src={search}
            alt="search icon"
            className="absolute top-1/2 -translate-y-1/2 left-4"
          />
          <input
            className="border-[#BEBEBE] border w-full outline-none placeholder:text-black placeholder:text-opacity-20 text-xl rounded-[34px] h-12 pl-14 pr-4"
            placeholder="Search Client, Phone Number, UCI etc."
          />
        </div>
      </div>
      <div className="flex justify-between items-center gap-8">
        <Image
          src={navbarFirstIcon}
          alt="navbar icon"
          className="cursor-pointer select-none"
          draggable={false}
        />
        <Image
          src={navbarSecondIcon}
          alt="navbar icon"
          className="cursor-pointer select-none"
          draggable={false}
        />
        <Image
          src={navbarThirdIcon}
          alt="navbar icon"
          className="cursor-pointer select-none"
          draggable={false}
        />
        <Image
          src={navbarFourthIcon}
          alt="navbar icon"
          className="cursor-pointer select-none"
          draggable={false}
        />

        <div className="h-11 flex justify-between items-start p-1 border navDivShadow rounded-full border-[#B9B9C3] w-[92px]">
          <div
            onClick={() => setActiveTab("play")}
            className={`size-9 cursor-pointer rounded-full flex justify-center items-center transition-all ${
              activeTab === "play" ? "bg-[#121226]" : ""
            }`}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3286 14.25C11.9186 14.25 11.5786 13.91 11.5786 13.5V8.5C11.5786 8.09 11.9186 7.75 12.3286 7.75C12.7386 7.75 13.0786 8.09 13.0786 8.5V13.5C13.0786 13.91 12.7386 14.25 12.3286 14.25Z"
                fill={activeTab === "play" ? "#fff" : "#5E5D6C"}
              />
              <path
                d="M12.3286 23.25C7.08861 23.25 2.82861 18.99 2.82861 13.75C2.82861 8.51 7.08861 4.25 12.3286 4.25C17.5686 4.25 21.8286 8.51 21.8286 13.75C21.8286 14.16 21.4886 14.5 21.0786 14.5C20.6686 14.5 20.3286 14.16 20.3286 13.75C20.3286 9.34 16.7386 5.75 12.3286 5.75C7.91861 5.75 4.32861 9.34 4.32861 13.75C4.32861 18.16 7.91861 21.75 12.3286 21.75C12.7386 21.75 13.0786 22.09 13.0786 22.5C13.0786 22.91 12.7386 23.25 12.3286 23.25Z"
                fill={activeTab === "play" ? "#fff" : "#5E5D6C"}
              />
              <path
                d="M15.3286 3.25H9.32861C8.91861 3.25 8.57861 2.91 8.57861 2.5C8.57861 2.09 8.91861 1.75 9.32861 1.75H15.3286C15.7386 1.75 16.0786 2.09 16.0786 2.5C16.0786 2.91 15.7386 3.25 15.3286 3.25Z"
                fill={activeTab === "play" ? "#fff" : "#5E5D6C"}
              />
              <path
                d="M16.4786 22.52C16.1286 22.52 15.8086 22.44 15.5186 22.27C14.8586 21.89 14.4786 21.12 14.4786 20.16V17.85C14.4786 16.89 14.8586 16.12 15.5186 15.74C16.1786 15.36 17.0286 15.42 17.8586 15.89L19.8586 17.05C20.6886 17.53 21.1686 18.24 21.1686 19C21.1686 19.76 20.6886 20.47 19.8586 20.95L17.8586 22.11C17.3986 22.38 16.9286 22.52 16.4786 22.52ZM16.4886 16.98C16.4086 16.98 16.3286 17 16.2686 17.03C16.0886 17.13 15.9786 17.44 15.9786 17.84V20.15C15.9786 20.55 16.0886 20.86 16.2686 20.96C16.4486 21.06 16.7686 21.01 17.1086 20.81L19.1086 19.65C19.4586 19.45 19.6686 19.2 19.6686 19C19.6686 18.8 19.4586 18.55 19.1086 18.35L17.1086 17.19C16.8786 17.05 16.6586 16.98 16.4886 16.98Z"
                fill={activeTab === "play" ? "#fff" : "#5E5D6C"}
              />
            </svg>
          </div>
          <div
            onClick={() => setActiveTab("pause")}
            className={`size-9 cursor-pointer rounded-full flex justify-center items-center transition-all ${
              activeTab === "pause" ? "bg-[#121226]" : ""
            }`}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3286 22.75C7.36476 22.75 3.32861 18.7139 3.32861 13.75C3.32861 8.78614 7.36476 4.75 12.3286 4.75C17.2925 4.75 21.3286 8.78614 21.3286 13.75C21.3286 13.8839 21.2125 14 21.0786 14C20.9448 14 20.8286 13.8839 20.8286 13.75C20.8286 9.06386 17.0148 5.25 12.3286 5.25C7.64247 5.25 3.82861 9.06386 3.82861 13.75C3.82861 18.4361 7.64247 22.25 12.3286 22.25C12.4625 22.25 12.5786 22.3661 12.5786 22.5C12.5786 22.6339 12.4625 22.75 12.3286 22.75Z"
                fill="#121226"
                stroke={activeTab === "pause" ? "#fff" : "#5E5D6C"}
              />
              <path
                d="M12.3286 13.75C12.1948 13.75 12.0786 13.6339 12.0786 13.5V8.5C12.0786 8.36614 12.1948 8.25 12.3286 8.25C12.4625 8.25 12.5786 8.36614 12.5786 8.5V13.5C12.5786 13.6339 12.4625 13.75 12.3286 13.75Z"
                fill="#121226"
                stroke={activeTab === "pause" ? "#fff" : "#5E5D6C"}
              />
              <path
                d="M15.3286 2.75H9.32861C9.19476 2.75 9.07861 2.63386 9.07861 2.5C9.07861 2.36614 9.19476 2.25 9.32861 2.25H15.3286C15.4625 2.25 15.5786 2.36614 15.5786 2.5C15.5786 2.63386 15.4625 2.75 15.3286 2.75Z"
                fill="#121226"
                stroke={activeTab === "pause" ? "#fff" : "#5E5D6C"}
              />
              <path
                d="M19.3286 22.25C18.9186 22.25 18.5786 21.91 18.5786 21.5V17.5C18.5786 17.09 18.9186 16.75 19.3286 16.75C19.7386 16.75 20.0786 17.09 20.0786 17.5V21.5C20.0786 21.91 19.7386 22.25 19.3286 22.25Z"
                fill={activeTab === "pause" ? "#fff" : "#5E5D6C"}
              />
              <path
                d="M16.3286 21.75C16.1948 21.75 16.0786 21.6339 16.0786 21.5V17.5C16.0786 17.3661 16.1948 17.25 16.3286 17.25C16.4625 17.25 16.5786 17.3661 16.5786 17.5V21.5C16.5786 21.6339 16.4625 21.75 16.3286 21.75Z"
                fill="#121226"
                stroke={activeTab === "pause" ? "#fff" : "#5E5D6C"}
              />
            </svg>
          </div>
        </div>

        <Image
          src={navbarProfileIcon}
          alt="navbar icon"
          className="cursor-pointer select-none"
          draggable={false}
        />
        <Image
          src={navbarLastIcon}
          alt="navbar icon"
          className="cursor-pointer select-none"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default Navbar;
