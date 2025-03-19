import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import Modal from "./Modal";
function EventModal({openModal,setOpenModal}) {
  return (
    <>
      <div className=" flex items-center gap-2 bg-gray-100 rounded-sm cursor-pointer relative">
        <div className="">
          <IoIosAddCircleOutline />
        </div>
        <button
          className="text-blue-500 cursor-pointer"
          onClick={() => setOpenModal(true)}
        >
          Create Event
        </button>
      <div className="fixedinset-0 flex items-center justify-center">
        {openModal && <Modal setOpenModal={setOpenModal} openModal={openModal}  />}
      </div>
      </div>
    </>
  );
}

export default EventModal;
