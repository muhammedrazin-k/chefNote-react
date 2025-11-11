import React, { useEffect, useState } from 'react'
import { VideoCard } from './VideoCard'
import { AddVideoAPI, getVideoAPI, updateCatagoryAPI } from '../services/allAPI'


export const View=({addVideoResponse,catCardDeleteResponse,setViewCardDeleteResponse}) => {

  const [getallvideo,setGetallvideo]=useState([])
  const [deleteCardResponse,setDeleteCardResponse]=useState({})

  useEffect(()=>{
    getVideo()
  },[addVideoResponse,deleteCardResponse,catCardDeleteResponse])

  const getVideo=async()=>{
    const result=await getVideoAPI()
    if(result.status>=200 && result.status<300){
      setGetallvideo(result.data)
    }
  }

  const droppedData=async(e)=>{
    const categoryVideo=JSON.parse(e.dataTransfer.getData('catVideo'))
    const {categoryDetails,videocardDetails}=categoryVideo
   categoryDetails.videos= categoryDetails.videos.filter((video)=>video.id!==videocardDetails.id)
    
    try {
      const result=await AddVideoAPI(videocardDetails,categoryDetails.videos)
      if(result.status>=200 && result.status<300){
       const result= await updateCatagoryAPI(categoryDetails.id,categoryDetails)
       if(result.status>=200 && result.status<300){
        setViewCardDeleteResponse(result)
        getVideo()
       }
      }
    } catch (error) {
      console.log(error)
      
    }

  }
  return (
    <div>
        <div className="cardBorder border-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-4 min-h-[100vh] rounded-lg border-red-200 mb-8" onDragOver={(e)=>e.preventDefault()} onDrop={(e)=>droppedData(e)}>
            
            {getallvideo.length>0 ? getallvideo.map(video=>(
              <div key={video.id}>
              <VideoCard cardData={video} setDeleteCardResponse={setDeleteCardResponse}/>
            </div>
            )):<div className=''> <h3 className='text-red-500 font-bold text-center'>There is no videos yet</h3> </div>
            }
        </div>
    </div>
  )
}
