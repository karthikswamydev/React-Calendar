import React from "react";
import dayjs from "dayjs";
import { SlArrowLeft,SlArrowRight } from "react-icons/sl";
import CalendarHeader from "./CalendarHeader";

function NavigateMonth({ setCurrentView,selectedDate, setSelectedDate }) {
  const handlePrevMonth = () => {
    setSelectedDate(dayjs(selectedDate).subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setSelectedDate(dayjs(selectedDate).add(1, "month"));
  };

  return (
    <>
    <div className="flex gap-10 justify-between m-8">
        <div className="flex h-7  gap-10 items-center  rounded-lg">
        <button className="px-2 py-2 bg-gray-50 rounded-sm cursor-pointer hover:bg-gray-200" onClick={handlePrevMonth}>
            <SlArrowLeft />
        </button>
        <button className="px-2 py-2 bg-gray-50 rounded-sm cursor-pointer hover:bg-gray-200" onClick={handleNextMonth}>
            <SlArrowRight />
        </button>
      </div>
      <div>
        <h2 className="text-xl font-light">
          {dayjs(selectedDate).format("MMMM YYYY")}
        </h2>
      </div>
      <div>
        <CalendarHeader setCurrentView={setCurrentView} selectedDate={selectedDate}/>
      </div>
      </div>
    </>
  );
}

export default NavigateMonth;
