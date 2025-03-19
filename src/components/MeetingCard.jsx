import React from "react";
import dayjs from "dayjs";
import { FaRegEdit } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { FaRegClock } from "react-icons/fa";


function MeetingCard({ selectedEvent, setOpenMeeting, position,hoveredEvent }) {
  return (
    <div
      className="absolute bg-white shadow-lg rounded-lg w-[20rem] border border-gray-300 p-3"
      style={{
        top: position.top + "px",
        left: position.left + "px",
        zIndex: 1000,
      }}
    >
      <div className="flex justify-between p-2 border-gray-300 border-b">
        <p className="font-bold">Meeting</p>
        <FaRegClock className="text-blue-500" />
      </div>

      <div className="p-2 border-b last:border-none">
        <div className="flex justify-between items-center mb-2">
          <p className="font-semibold">
            {hoveredEvent?.job_id?.jobRequest_Title}
          </p>
          <div className="flex gap-2">
            <FaRegEdit className="text-blue-500 cursor-pointer" />
            <CgNotes className="text-green-500 cursor-pointer" />
          </div>
        </div>

        <div className="text-sm">
          <div className="flex gap-4">
            <p className="border-r pr-2 font-medium">
              {hoveredEvent?.summary}
            </p>
            <p>
              Interviewer:{" "}
              <span className="font-medium">
                {hoveredEvent?.user_det?.handled_by?.firstName}
              </span>
            </p>
          </div>
          <div className="flex gap-4 mt-2">

          <p>
            Date:{" "}
            <span className="font-medium">
              {dayjs(hoveredEvent.start).format("DD MMM YYYY")}
            </span>
          </p>
          <p>
            Time:{" "}
            <span className="font-medium">
              {dayjs(hoveredEvent.start).format("h A")} -{" "}
              {dayjs(hoveredEvent.end).format("h A")}
            </span>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetingCard;
