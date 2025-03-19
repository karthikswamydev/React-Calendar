import EventModal from "./EventModal"


function CreateEvent({openModal,setOpenModal}) {
  return (
    <>
    <div className="h-7">
        <div className="flex justify-between">
           <p className="text-xl font-mono">Your Todo's</p> 
           <EventModal openModal={openModal} setOpenModal={setOpenModal}/>
        </div>
    </div>
    </>
    
  )
}

export default CreateEvent