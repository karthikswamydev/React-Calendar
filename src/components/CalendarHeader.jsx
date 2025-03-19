import React from 'react'
import dayjs from "dayjs";
import NavigateMonth from './NavigateMonth';

function CalendarHeader({ setCurrentView, selectedDate }) {
  return (
    <>
      {/* <h2 className="text-xl font-bold text-center">{dayjs(selectedDate).format("MMMM YYYY")}</h2> */}
      <div className='flex gap-10'>
        <button onClick={() => setCurrentView("month")}>Month</button>
        <button onClick={() => setCurrentView("week")}>Week</button>
        <button onClick={() => setCurrentView("day")}>Day</button>
      </div>
    </>
  )
}

export default CalendarHeader