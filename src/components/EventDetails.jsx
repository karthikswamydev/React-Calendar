import { SiGooglemeet } from "react-icons/si";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import dayjs from "dayjs";

function EventDetails({selectedEvent}) {
   const StartData = dayjs(selectedEvent?.start).format("DD-MM-YYYY")
   const startTime = dayjs(selectedEvent?.start).format("h A")
  return (
    <div className="flex w-full mt-8 border-1 border-gray-300 gap-[6rem]">
      <div className=" flex-col w-[18rem] items-start border-r-1 border-gray-300 justify-center h-[18rem] p-4 ">
        <p className="font-semibold">
          Interview with : <span className="ml-2 font-light text-sm">{selectedEvent?.user_det?.handled_by.firstName}</span>
        </p>
        <p className="font-semibold">
          Position : <span className="ml-2 font-light text-sm">{selectedEvent?.user_det?.job_id.jobRequest_Role}</span>
        </p>
        {/* <p className="font-semibold">
          Created By : <span className="ml-2 font-light text-sm" >karthik</span>
        </p> */}
        <p className="font-semibold">
          Interview date : <span className="ml-2 font-light text-sm">{StartData}</span>
        </p>
        <p className=" font-semibold">
          Interview time : <span className="ml-2 font-light text-sm">{startTime}</span>
        </p>
        <p className="font-semibold">
          Interview Via : <span className="ml-2 font-light text-sm">Google Meet</span>
        </p>
        <div className="flex justify-evenly border h-[3rem] mt-2 border-blue-500">
            <p className="text-sm p-3 text-blue-400">Resume.docs</p>
            <div className="flex items-center gap-3">

            <IoMdEye scale={200} />
            <MdOutlineFileDownload />
            </div>
        </div>
        <div className=" flex justify-evenly  border mt-1 h-[3rem] border-blue-500">
             <p className="text-sm justify start p-3 text-blue-400">Adhar Card</p>
             <div className="flex items-center gap-3">

               <IoMdEye scale={200} />
            <MdOutlineFileDownload />
             </div>
        </div>
      </div>
      <div className="flex-col scale-200 justify-center items-center mt-[7rem] ">
        <SiGooglemeet size={70} />
        <div className="h-[2rem] w-[4rem] border border-blue-500 bg-blue-500 rounded-sm ">
            <p className="text-white text-center text-sm p-1">JOIN</p>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
