import React, { useState } from "react";
import { deleteVideoAPI, saveHistoryAPI } from "../services/allAPI";
import { toast } from "react-toastify";

export const VideoCard= ({cardData,setDeleteCardResponse,isCategory }) => {
  const [showModal, setShowModal] = useState(false);

  //deleting video card
  const handleDelete=async(videoCardId)=>{
    try {
      const result=await deleteVideoAPI(videoCardId)
      if(result.status>=200 && result.status<300){
        toast.warning('deleted your video card')
        setDeleteCardResponse(result)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleHistory=async()=>{
    const {id,caption,youtubeUrl}=cardData
    const localDate=new Date().toLocaleString()
    const historyDetails={id,caption,youtubeUrl,localDate}
    try {
      const result=await saveHistoryAPI(historyDetails)
      console.log(result)
    } catch (error) {
      console.log(error)
      
    }
  }

  const dragStart=(e,cardData)=>{
    e.dataTransfer.setData("videoCard",JSON.stringify(cardData))
  }
  return (
    <div>
      <div draggable={true} onDragStart={(e)=>dragStart(e,cardData)}
        className="cards p-4 bg-gray-200 rounded w-[100%] shadow-[0_12px_16px_rgba(0,0,0,0.5)] h-80 flex flex-col hover:bg-gray-300 hover:scale-95 hover:shadow-[0_18px_20px_rgba(0,0,0,0.9)] transition-all duration-1000  hover:rotate-3"
        onClick={() => {
          setShowModal(true),
          handleHistory()
        }}
      >
        <div className="imageSection h-[80%] ">
          <img
            src={cardData.imageUrl}
            alt=""
            className="w-[100%] h-[100%] object-cover rounded"
          />
        </div>
        <div className="cardtext flex justify-between px-4  py-2 my-auto">
          <h3 className="font-bold text-lg sm:text-xl text-gray-800">
            {cardData.caption}
          </h3>
          {!isCategory && <button className="cursor-pointer" onClick={(e)=>{e.stopPropagation(),handleDelete(cardData.id)}}>
            <i className="fa-solid fa-trash text-red-800"></i>
          </button>}
        </div>
      </div>

      <div className="modals">
        {showModal && (
          <div id="my_modal_3" className="modal modal-open  ">
            <div className="modal-box max-w-5xl ">
             
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 "
                  onClick={() => setShowModal(false)}
                >
                  ✕
                </button>
              
              <h3 className="font-bold text-lg">
                Let's cook{" "}
                <span className="text-red-600">{cardData.caption}</span>
              </h3>
              <div className="py-4">
                <iframe
                  width="914"
                  height="514"
                  src={cardData.youtubeUrl}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
