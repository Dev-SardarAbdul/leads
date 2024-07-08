import React from "react";
import sidebarLogo from "@/assets/sidebarLogo.png";
import Image from "next/image";
import SidebarIcons from "./sidebarIcons";

const Sidebar = () => {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10];
  return (
    <div className="bg-white h-[calc(100vh-64px)] overflow-auto sticky top-8 w-[86px] flex-col flex justify-between items-center gap-4 py-6 rounded-[64px]">
      <Image src={sidebarLogo} alt="sidebar logo" />
      {array.map((__, index) => (
        <div className="bg-[#F9F8FB] size-14 flex flex-shrink-0 justify-center cursor-pointer items-center rounded-2xl">
          <SidebarIcons active={true} index={index} />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
