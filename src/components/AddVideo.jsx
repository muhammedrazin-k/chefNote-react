import { useState } from "react"
import { AddVideoAPI } from "../services/allAPI"
import { toast } from "react-toastify"

export const AddVideo= ({setAddVideoResponse}) => {

    {/* state for storing inputfield data image,caption , youtubeurl */}
    const [videoDetails,setVideoDetails]=useState({caption:'',imageUrl:'',youtubeUrl:''})

    {/* making error text  */}
    const [isinvalid,setIsInvalid]=useState(false)   

    const [showModal,setShowModal]=useState(false)

    {/* making normal url to embeded url */}
    const getEmbededurl=(url)=>{
       
        if(url.includes('v=')){
            const videoId=url.split('v=')[1]
            if(videoId && videoId.length>10){
              const videoSplicId= videoId.slice(0,11)
                setVideoDetails({...videoDetails,youtubeUrl:`https://www.youtube.com/embed/${videoSplicId}?autoplay=1`})
                setIsInvalid(false)

            }
            else{
                setIsInvalid(true)
            }
        }else{
            setIsInvalid(true)
        }
            
    }
{/* handling modal show */}
const handleShow=()=>{
    setShowModal(true)
}

{/* handle upload button and puting data to backend  */}

const handleUpload=async()=>{
    const {caption,imageUrl,youtubeUrl}=videoDetails

    if(caption&&imageUrl&&youtubeUrl){
        //call api to add

        try {
            const result=await AddVideoAPI(videoDetails)
            console.log(result)
            if(result.status>=200 && result.status<300){
                handleClose()
                toast.success('successfully added your video')
                setAddVideoResponse(result)
            }
        } catch (err) {
            console.log(err)
            
        }
    }else{
        toast.warning('fill your all input fields')
    }
}

{/* handling close button */}

const handleClose=()=>{
    setShowModal(false)
    setIsInvalid(false)
    setVideoDetails({caption:'',imageUrl:'',youtubeUrl:''})
}


  return (
    <div className='flex gap-1 sm:gap-3'>
        <h2 className='font-bold my-auto text-md sm:text-xl text-gray-600'>Add Video</h2>
        <div className='rounded-full bg-gray-600 text-white w-8 h-8 flex justify-center hover:scale-95 shadow-xl' onClick={handleShow}>
        <button>+</button>
        </div>


{ showModal && <div id="my_modal_1" className="modal modal-top modal-open " >
  <div className="modal-box w-[80%]  mx-auto rounded-none">
    <h3 className="font-bold text-lg">Url Here..</h3>
    <input type="text" placeholder="Enter a caption" className="input w-full mt-2"  onChange={(e)=>setVideoDetails({...videoDetails,caption:e.target.value})}/>
    <input type="text" placeholder="Enter image url" className="input w-full mt-2"  onChange={(e)=>setVideoDetails({...videoDetails,imageUrl:e.target.value})}/>
    <input type="text" placeholder="video url" className="input w-full mt-2"  onChange={(e)=>{getEmbededurl(e.target.value)}} />
    {isinvalid && <p className="text-red-500 mt-1">invalid youtube url </p>}
        <div className="modal-action">
      
        <button className="btn mx-2" onClick={handleClose}>Close</button>
     
        <button className="btn" onClick={handleUpload} >Upload</button>
    </div>
  </div>
</div>}





    </div>
  )
}
