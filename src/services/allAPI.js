import { Category } from "../components/Category";
import commonAPI from "./common";
import base_url from "./serverUrl";

export const AddVideoAPI=async(reqbody)=>{
    return await commonAPI('POST',`${base_url}/allvideos`,reqbody)
}

export const getVideoAPI=async()=>{
    return await commonAPI('GET',`${base_url}/allvideos`,"")
}

export const deleteVideoAPI=async(videoId)=>{
    return await commonAPI('DELETE',`${base_url}/allvideos/${videoId}`)
}

export const saveHistoryAPI=async(reqbody)=>{
    return await commonAPI('POST',`${base_url}/history`,reqbody)
}
 
export const getHistoryAPI=async()=>{
    return commonAPI('GET',`${base_url}/history`,"")
}

export const deleteHistoryAPI=async(historyId)=>{
    return await commonAPI('DELETE',`${base_url}/history/${historyId}`,"")
}

export const addCategoryAPI=async(reqbody)=>{
    return await commonAPI('POST',`${base_url}/category`,reqbody)
}

export const getCategoryAPI=async()=>{
    return await commonAPI('GET',`${base_url}/category`,"")
}

export const deleteCategoryAPI=async(CategoryId)=>{
    return await commonAPI('DELETE',`${base_url}/category/${CategoryId}`,"")
}

export const updateCatagoryAPI=async(CategoryId,upadatedData)=>{
    return await commonAPI('PUT',`${base_url}/category/${CategoryId}`,upadatedData)
}