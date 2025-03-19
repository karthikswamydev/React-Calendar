import EventDetails from "./EventDetails"




function Modal({setOpenModal,selectedEvent}) {

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-opacity-1 backdrop-blur">
      <div className="w-[36rem] min-h-[20rem] p-5 bg-white rounded-lg shadow-lg relative">
        <EventDetails selectedEvent={selectedEvent}/>
        <button
          className="btn btn-secondary absolute -top-2 -right-2 bg-blue-400 px-2 py-0.5 rounded-full cursor-pointer"
          onClick={() => setOpenModal(false)}
        >
          ✕
        </button>
      </div>
      {/* <div
        className="fixed inset-0"
        onClick={() => setOpenModal(false)}
        role="button"
        tabIndex={0}
      ></div> */}
    </div>
    </>
  )
}

export default Modal