import client from "./client";

//creating a new user

export const getChatMessageData = async(pageNumber : number) =>{
    try {
        const {data} = await client(`/chat?page=${pageNumber}`);
        return data;
    } catch (error) {
        const {response} = error;
        if(response?.data) return response.data;

        return ({error: error.message || error})
    }
} 