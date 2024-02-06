import { commonAPI } from "./commonAPI";
import { serverUrl } from "./serverUrl";

//upload video

export const uploadVideo = async(reqBody)=>{
    //make POST http request "http://localhost:4000/videos" to add to the json server to the add component

    return await commonAPI("POST",`${serverUrl}/videos`,reqBody)
}

//get all videos from json

export const getAllVideo = async(reqBody)=>{
    //make GET http request "http://localhost:4000/videos" to get all videos from json server return response to the view Component

    return await commonAPI("GET",`${serverUrl}/videos`,"")
}

//get a video to view

export const getAVideo = async(id)=>{
    //make GET http request "http://localhost:4000/videos" to get all videos from json server return response to the view Component

    return await commonAPI("GET",`${serverUrl}/videos/${id}`,"")
}

//delete a video

export const deleteVideo = async(id)=>{
    //make GET http request "http://localhost:4000/videos" to get all videos from json server return response to the view Component

    return await commonAPI("DELETE",`${serverUrl}/videos/${id}`, {})
}


//store watch history to json server

export const addToHistory = async(videoDetails)=>{
    ////make POST http request "http://localhost:4000/videos" to store videos to the json server return response to the videocard component

    return await commonAPI("POST",`${serverUrl}/history`,videoDetails)
}

//GET watch video history to json server

export const getAllHistory = async() =>{

    ////make GET http request "http://localhost:4000/videos" to get videos from the json server return response to the watch-history component

    return await commonAPI("GET",`${serverUrl}/history`,"")
}

//delete Watch history

export const deleteHistory = async(id) =>{

    ////make DELETE http request "http://localhost:4000/videos" to Delete videos from the json server return response to the watch-history component

    return await commonAPI("DELETE",`${serverUrl}/history/${id}`,{})
}

//add to category
export const addToCategory = async(reqBody)=>{
    ////make POST http request "http://localhost:4000/categories" to store videos to the json server return response to the category component

    return await commonAPI("POST",`${serverUrl}/categores`,reqBody)
}

//get all category from json server
export const getAllCategory = async() =>{

    ////make GET http request "http://localhost:4000/categories" to get videos from the json server return response to the category component

    return await commonAPI("GET",`${serverUrl}/categores`,"")
}

//delete all category from server
export const deleteCategory = async(id) =>{

    ////make GET http request "http://localhost:4000/categories" to get videos from the json server return response to the category component

    return await commonAPI("DELETE",`${serverUrl}/categores/${id}`,{})
}

//update category from server
export const updateCategory = async(id,body) =>{

    ////make GET http request "http://localhost:4000/categories/id" to update video to the json server return response to the category component

    return await commonAPI("PUT",`${serverUrl}/categores/${id}`,body)
}


