import {axiosGetRequest, axiosPatchRequest} from "../config/AxiosConfig";
import header from "../layout/Header";

interface Crew {
    id: number,
    name: string,
    description: string,
    create_date: string,
    meeting_type: string,
    meeting_time: string,
    meeting_limit?: string,
    community: string,
    member_limit: number,
    image?: string,
    image_thumbnail?: string,
    manager: number,
    member?: null

}

export const getCrewList = async () => {
    const result = await axiosGetRequest(`http://20.214.185.3/apis/crew/`, {});
    return result.data;
}

export const getCrewDetail = async (pk:number) => {
    const result = await axiosGetRequest('http://20.214.185.3/apis/crew/<int:pk>',{});
}

export const postCrewJoin= async (pk:number, data:any, accesstoken:string) => {
    //var data = new FormData();
    //members = [...,] + user.id or - user.id;

    const headers = {"Content-Type": "multipart/form-data","Authorization" : "Bearer "+accesstoken };
    const result = await axiosPatchRequest('http://20.214.185.3/apis/crew/<int:pk>', headers,data);
    return result.data;
}