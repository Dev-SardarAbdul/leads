"use client";

import InfoCard from "@/components/cards/info-card";
import plusIcon from "@/assets/btnPlusIcon.png";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "antd";
import AddLead from "@/components/modals/add-lead";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        footer={false}
        width={1000}
        closable={false}
      >
        <AddLead />
      </Modal>
      <main className="flex justify-between items-start gap-8">
        <div className="flex-1 bg-white rounded-[31px] p-6">
          <div className="flex justify-between items-center gap-2">
            <p className="text-black font-medium text-xl">Newly Added</p>
            <div className="bg-[#F8F8F8] w-12 h-11 rounded-[21px] flex justify-center items-center text-black font-medium text-xl">
              34
            </div>
          </div>
          <h4 className="text-black -mt-1 text-3xl font-medium">$21,421</h4>

          <div className="flex flex-col gap-8 mt-8">
            {[...Array(5)].map((__, index) => (
              <InfoCard key={index} />
            ))}
          </div>
        </div>

        <div className="flex-1 bg-white rounded-[31px] p-6">
          <div className="flex justify-between items-center gap-2">
            <p className="text-black font-medium text-xl">
              Initial Consultation Scheduled
            </p>
            <div className="bg-[#F8F8F8] w-12 h-11 rounded-[21px] flex justify-center items-center text-black font-medium text-xl">
              34
            </div>
          </div>
          <h4 className="text-black -mt-1 text-3xl font-medium">$21,421</h4>
          <div className="flex flex-col gap-8 mt-8">
            {[...Array(2)].map((__, index) => (
              <InfoCard key={index} />
            ))}
          </div>
        </div>

        <div className="flex-1 bg-white rounded-[31px] p-6">
          <div className="flex justify-between items-center gap-2">
            <p className="text-black font-medium text-xl">Follow Up Required</p>
            <div className="bg-[#F8F8F8] w-12 h-11 rounded-[21px] flex justify-center items-center text-black font-medium text-xl">
              34
            </div>
          </div>
          <h4 className="text-black -mt-1 text-3xl font-medium">$21,421</h4>
          <div className="flex flex-col gap-8 mt-8">
            {[...Array(1)].map((__, index) => (
              <InfoCard key={index} />
            ))}
          </div>
        </div>

        <div className="flex-1 bg-white rounded-[31px] p-6">
          <div className="flex justify-between items-center gap-2">
            <p className="text-black font-medium text-xl">
              Waiting on Retainer
            </p>
            <div className="bg-[#F8F8F8] w-12 h-11 rounded-[21px] flex justify-center items-center text-black font-medium text-xl">
              34
            </div>
          </div>
          <h4 className="text-black -mt-1 text-3xl font-medium">$21,421</h4>
          <div className="flex flex-col gap-8 mt-8">
            {[...Array(3)].map((__, index) => (
              <InfoCard key={index} />
            ))}
          </div>
        </div>

        <button
          onClick={showModal}
          className="w-56 font-medium h-[88px] flex justify-center shadow-homeBtnShadow items-center gap-2 bg-black fixed right-8 bottom-4 rounded-full text-white text-xl"
        >
          <Image src={plusIcon} alt="plus icon" />
          Add a Lead
        </button>
      </main>
    </>
  );
}
