import React, { useState } from 'react'
import dayjs from 'dayjs';
import Modal from './Modal';
import MeetingCard from './MeetingCard';

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function Month({ selectedDate , interviews,setOpenModal,openModal,openMeeting,setOpenMeeting }) {
   const selectedDay = dayjs(selectedDate);
  const startOfMonth = selectedDay.startOf("month");
  const endOfMonth = selectedDay.endOf("month");
  const firstDayOfWeek = startOfMonth.day(); 
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState(null);

  const days = [];


  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push(null);
  }


   for (let i = 1; i <= endOfMonth.date(); i++) {
    const currentDate = dayjs(selectedDay).date(i);
    const interviewsOnThisDay = interviews.filter((event) =>
      dayjs(event.start).isSame(currentDate, "day")
    );

    days.push({ date: currentDate, events: interviewsOnThisDay });
  }

  const EventHandler = (event) =>{
    console.log(event,"EVNT")
    setSelectedEvent(event)
   setOpenModal(true)
  }

  console.log(selectedEvent)
  const handleMouseEnter = (event, e) => {
    const rect = e.target.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    let tooltipLeft = rect.left + window.scrollX + 50; 
    let tooltipTop = rect.top + window.scrollY + 20;

    
    if (tooltipLeft + 250 > screenWidth) { 
      tooltipLeft = rect.left + window.scrollX - 220; 
    }

    
    if (tooltipTop + 150 > screenHeight) { 
      tooltipTop = rect.top + window.scrollY - 100; 
    }

    setHoveredEvent(event);
    setTooltipPosition({
      top: tooltipTop,
      left: tooltipLeft,
    });
  };

  const handleMouseLeave = () => {
    setHoveredEvent(null);
    setTooltipPosition(null);
  };

  return (
    <div>
      <div className="grid grid-cols-7 gap-2 font-bold text-center  p-2 rounded-md">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="p-2 text-blue-400">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 h-[35rem] mt-1 cursor-pointer ">
        {days.map((day, index) =>
          day ? (
            <div key={index} className={`border-r-2 border-b-2 font-light border-gray-200 text-center ${
              day ? "text-red" : "invisible" 
            }`}>
              <div className="font-bold">{day.date.date()}</div>
              {day.events.map((event, i) => (
                <div key={i} className="text-xs tooltip-top bg-[#b7d5f3] text-black p-2 rounded m-2"  onMouseEnter={(e) => handleMouseEnter(event, e)}
                  onMouseLeave={handleMouseLeave} onClick={()=>EventHandler(event)}>
                  {event.summary}
                </div>
              ))}
            </div>
          ) : (
            <div key={index} className="border p-4 rounded-lg text-center invisible"></div>
          )
        )}
      </div>
        {openModal && (<Modal selectedEvent={selectedEvent} openModal={openModal} setOpenModal={setOpenModal}/>)}
        { hoveredEvent && tooltipPosition &&
        <div className=''>
            <MeetingCard setOpenMeeting={setOpenMeeting} position={tooltipPosition} hoveredEvent={hoveredEvent} selectedEvent={selectedDate} />
        </div>
            }
    </div>
  );
};

export default Month