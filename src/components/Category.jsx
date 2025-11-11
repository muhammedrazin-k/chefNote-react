import React, { useEffect, useState } from 'react'
import { addCategoryAPI, deleteCategoryAPI, deleteVideoAPI, getCategoryAPI, updateCatagoryAPI } from '../services/allAPI'
import { toast } from 'react-toastify'
import { VideoCard } from './VideoCard'

export const Category = ({setCatCardDeleteResponse,viewcardDeleteResponse}) => {

  const [showModal,setShowModal]=useState(false)
  const [getCategoryName,setCategoryName]=useState('')
  const [showcategory,setShowCategory]=useState([])

  const handleCategoryUpload=()=>{
    setShowModal(true)

  }
  const handleClose=()=>{
    setShowModal(false)
  }

  const handleAddCategory=async()=>{
    if(getCategoryName){
      try {
        const result=await addCategoryAPI({name:getCategoryName,videos:[]})
        if(result.status>=200 && result.status<300){
          toast.success('successfully added new category')
          setCategoryName('')
          handleClose()
          getCategory()
        }
      } catch (error) {
        console.log(error)
        
      }
    }
    else{
      toast.error('Enter a valid category Name')
    }
  }
  
  useEffect(()=>{
    getCategory()
  },[viewcardDeleteResponse])

  const getCategory=async()=>{
    try {
      const result=await getCategoryAPI()
      if(result.status>=200 && result.status<300){
        setShowCategory(result.data)
        
      }
    } catch (error) {
      console.log(error)
      
    }
  }

  const handleDeleteCategory=async(categoryId)=>{
    try {
      const result=await deleteCategoryAPI(categoryId)
      if(result.status>=200 && result.status<300){
        toast.warning('successfully deleted your category')
        getCategory()
      }      
    } catch (error) {
      console.log(error)
      
    }
  }

  const droppedData=async(e,categoryDetails)=>{
   const dragedVideo= JSON.parse(e.dataTransfer.getData('videoCard'))
   categoryDetails.videos.push(dragedVideo)
   try {
    const result=await updateCatagoryAPI(categoryDetails.id,categoryDetails)
    if(result.status>=200 && result.status<300){
      getCategory()
      toast.success( `video added to your ${categoryDetails.name} category`)
      await deleteVideoAPI(dragedVideo.id)
      setCatCardDeleteResponse(result)
      
      
    }
    
   } catch (error) {
    console.log(error)
   }
   
  }
  const dragStrated=(e,categoryDetails,videocardDetails)=>{
    e.dataTransfer.setData('catVideo',JSON.stringify({categoryDetails,videocardDetails}))

  }
  
  return (
    <div>
      <div className="category-section ">
          <div className="category-head flex justify-between mb-3">
            <h2 className='text-lg sm:text-2xl font-bold text-gray-600'>Category</h2>
            <div className='rounded-full bg-gray-600 text-white w-8 h-8 flex justify-center hover:scale-95 shadow-xl' onClick={handleCategoryUpload}>
             <button>+</button>
            </div>
          </div>

              <div className="category border-2 text-blue-200 min-h-[100vh] rounded-lg p-2" >
          {showcategory.length>0 && showcategory.map(eachCategory=>(
                <div key={eachCategory.id}>
              <div className="categorycard bg-amber-200 text-gray-700 p-4 flex justify-between mt-3 hover:bg-blue-100" onDrop={(e)=>droppedData(e,eachCategory)} onDragOver={(e)=>e.preventDefault()}>
                <h2 className='text-lg sm:text-xl'>{eachCategory.name}</h2>
                <button className='' onClick={()=>handleDeleteCategory(eachCategory.id)}><i className="fa-solid fa-trash text-red-800"></i></button>
              </div>
              <div className="items grid grid-cols-1 grid-cols-2 gap-2 ">
               {eachCategory.videos.length>0 && eachCategory.videos.map((videos)=>(
                  <div className='mt-2'key={videos.id} draggable={true} onDragStart={(e)=>dragStrated(e,eachCategory,videos)}>
                  <VideoCard cardData={videos} isCategory={true}/>
                  </div>
                )) }
                </div>
               </div>
              )) }
          </div>
      </div>

         {showModal && <div id="my_modal_1" className="modal modal-top modal-open " >
        <div className="modal-box w-[50%]  mx-auto rounded-none">
          <h3 className="font-bold text-lg">Add Category</h3>
          <input type="text" placeholder="Enter category Name" className="input w-full mt-2" onChange={(e)=>setCategoryName(e.target.value)}  />
              <div className="modal-action">
            
              <button className="btn mx-2" onClick={handleClose} >Close</button>
          
              <button className="btn" onClick={handleAddCategory} >Add</button>
          </div>
        </div>
      </div>}
    </div>
  )
}
