import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AddVideo } from "../components/AddVideo";
import { View } from "../components/View";
import { Category } from "../components/Category";

export const Home = () => {
  // creating state for showing video card resposivly
  const [addVideoResponse,setAddVideoResponse]=useState({})
  const [catCardDeleteResponse,setCatCardDeleteResponse]=useState({})
  const [viewcardDeleteResponse,setViewCardDeleteResponse]=useState({})

  return (
    <div className=" px-10 py-30" style={{ minHeight: "100vh" }}>
      <div className="homeSection w-full flex ">
        <div className="upload  w-full ">
          <AddVideo setAddVideoResponse={setAddVideoResponse}/>
        </div>
        <div className="history w-full  text-end font-bold text-md sm:text-xl text-gray-600">
          <Link to={"/history"} >Watch History</Link>
        </div>
      </div>

      <div className="secondSection flex flex-col md:flex-row mt-16 items-center md:items-start ">
        <div className="playlist w-full md:w-[60%] ">
          <p className="text-center text-lg sm:text-2xl mb-3 font-bold text-gray-600">
            View playlist
          </p>
          <View addVideoResponse={addVideoResponse} catCardDeleteResponse={catCardDeleteResponse} setViewCardDeleteResponse={setViewCardDeleteResponse}/>
        </div>
        <div className="category w-full md:w-[40%] px-3">
          <Category setCatCardDeleteResponse={setCatCardDeleteResponse} viewcardDeleteResponse={viewcardDeleteResponse}/>
        </div>
      </div>
    </div>
  );
};
