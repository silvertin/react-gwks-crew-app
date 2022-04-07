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
    const result = await axiosGetRequest(`/crew`, {});
    return result.data;
}

export const getCrewDetail = async (pk:number) => {
    // '/crew/' + pk
    // `/crew/${pk}`
    const result = await axiosGetRequest(`/crew/${pk}`,{});
    return result.data;
}

export const postCrewJoin = async (pk:number, data:any, accesstoken:string) => {
    const result = await axiosPatchRequest(`/crew/${pk}`,data);
    return result.data;
}
