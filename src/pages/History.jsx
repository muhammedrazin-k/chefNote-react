import React, { useEffect, useState } from 'react'
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPI'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export const History= () => {
  const [allhistory,setAllHistory]=useState([])

  useEffect(()=>{
    getHistory()
  },[])


  const getHistory=async()=>{
    try {
      const result=await getHistoryAPI()
      if(result.status>=200 && result.status<300){
        setAllHistory(result.data)
        
      }
    } catch (error) {
      console.log(error)
      
    }
  }

  const handleHistoryDelete=async(historyId)=>{
    try {
      const result=await deleteHistoryAPI(historyId)
      if(result.status>=200 && result.status<300){
        toast.warning('successfully deleted your history')
        getHistory()
      }
    } catch (error) {
      console.log(error)
      
    }
  }
  return (
    <div className='' style={{minHeight:'100vh'}}>
        <div className="historyTable pt-26 ">
          <div className='flex justify-center px-5 mb-5'>
          <h1 className='text-center text-lg sm:text-2xl font-bold w-full'>Watch History</h1>
          <Link to={'/home'} className=' text-gray-800 font-bold underline'>Home</Link>
          </div>
          <div className="tables">
          <div className="overflow-x-auto">
 {allhistory.length>0 ?  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Card Id</th>
        <th>Caption</th>
        <th>Video</th>
        <th>Date</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
    {allhistory.map((history)=>(
      <tr key={history.localDate}>
      <th>{history.id}</th>
      <td>{history.caption}</td>
      <td>{history.youtubeUrl}</td>
      <td>{history.localDate}</td>
      <td><i className="fa-solid fa-trash text-red-800" onClick={()=>handleHistoryDelete(history.id)}></i></td>
    </tr>
    ))}
     
    </tbody>
  </table>
  : <div><h2 className='text-center text-red-700'>There is No History yet</h2></div>}
</div>
          </div>
        </div>
    </div>
  )
}
