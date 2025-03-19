import { useState } from "react";
import Day from "./Day";
import Month from "./Month";
import Week from "./Week";
import CalendarHeader from "./CalendarHeader";
import CreateEvent from "./CreateEvent";
import NavigateMonth from "./NavigateMonth";
import data from "../data/InterviewDetails.json"

function Calendar() {
  const [currView, setCurrView] = useState("month");
  const [selectedDate, setSelectedDate] = useState(new Date());
   const [openModal, setOpenModal] = useState(false);
   const [openMeeting,setOpenMeeting] = useState(false)
  return (
    <div className="p-4">
      <CreateEvent openModal={openModal} setOpenModal={setOpenModal}/>
      <div className="mt-6">
        <NavigateMonth setCurrentView={setCurrView}  selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </div>
      {currView === "month" && <Month openModal={openModal}setOpenModal={setOpenModal} setOpenMeeting={setOpenMeeting} openMeeting={openMeeting}  selectedDate={selectedDate} interviews={data} />}
      {currView === "week" && <Week selectedDate={selectedDate} />}
      {currView === "day" && <Day selectedDate={selectedDate} />}
    </div>
  );
}

export default Calendar;
