import React from "react";
import inputImg from "@/assets/inputImg.png";
import Image from "next/image";
import { Select } from "antd";
import { IoIosClose } from "react-icons/io";

const AddLead = ({ handleCancel }: { handleCancel: () => void }) => {
  const labelStyles = "text-xl font-medium text-[#1C1C1C]";
  const inputStyles =
    "border border-black h-[53px] w-full px-4 outline-none rounded-[19px] mt-1 text-[#1C1C1C] font-medium text-xl placeholder:text-[#1C1C1C] placeholder:text-opacity-40";

  const textAreaStyles =
    "border border-black w-full px-4 py-2 min-h-[100px] outline-none rounded-[19px] mt-1 text-[#1C1C1C] font-medium text-xl placeholder:text-[#1C1C1C] placeholder:text-opacity-40";

  return (
    <div className="bg-white 2xl:h-auto h-[500px] overflow-auto rounded-[30px] p-7 relative flex flex-col gap-4">
      <div className="flex justify-between items-center gap-2">
        <h4 className="font-semibold text-3xl">Add/Edit Lead</h4>
        <IoIosClose
          className="text-4xl text-black cursor-pointer"
          onClick={handleCancel}
        />
      </div>

      <div className="flex justify-between items-center gap-4">
        <div className="flex-1">
          <p className={labelStyles}>First Name</p>
          <input className={inputStyles} type="text" placeholder="First Name" />
        </div>
        <div className="flex-1">
          <p className={labelStyles}>Last Name</p>
          <input className={inputStyles} type="text" placeholder="Last Name" />
        </div>
      </div>

      <div className="flex justify-between items-center gap-4">
        <div className="flex-1">
          <p className={labelStyles}>Phone</p>
          <input className={inputStyles} placeholder="Phone" type="tel" />
        </div>
        <div className="flex-1">
          <p className={labelStyles}>Email</p>
          <input className={inputStyles} placeholder="email" type="email" />
        </div>
      </div>

      <div className="flex justify-between items-center gap-4">
        <div className="flex-1">
          <p className={labelStyles}>Lead Source</p>
          <div className="relative">
            <Image
              src={inputImg}
              alt="input icon"
              className="absolute top-1/2 -translate-y-1/2 left-4 mt-1"
            />
            <input
              className={`${inputStyles} !pl-12`}
              placeholder="Social Media"
              type="text"
            />
          </div>
        </div>
        <div className="flex-1">
          <p className={labelStyles}>Quotes Fees (Exclude tax)</p>
          <input className={inputStyles} placeholder="200 " type="number" />
        </div>
      </div>

      <div className="flex justify-between items-center gap-4">
        <div className="flex-1">
          <p className={labelStyles}>Notes</p>
          <textarea className={textAreaStyles} placeholder="Notes" />
        </div>
      </div>

      <div>
        <p className={labelStyles}>Country of Residence</p>

        <Select
          variant="borderless"
          placeholder="Country"
          style={{ width: "100%" }}
          className={inputStyles}
          options={[
            { value: "India", label: "India" },
            { value: "Pakistan", label: "Pakistan" },
            { value: "Japan", label: "Japan" },
          ]}
        />
      </div>

      <div>
        <p className={labelStyles}>Lead Status</p>

        <Select
          variant="borderless"
          placeholder="Lead Status"
          style={{ width: "100%" }}
          className={inputStyles}
          options={[
            { value: "new", label: "Newly Added" },
            { value: "old", label: "Previously Added" },
          ]}
        />
      </div>
    </div>
  );
};

export default AddLead;
