import {axiosGetRequest, axiosPatchRequest, axiosPostRequest} from "../config/AxiosConfig";
import header from "../layout/Header";
import {accessSync} from "fs";

interface User {
    id: number,
    last_login: string,
    is_superuser: boolean,
    email: string,
    is_active: boolean,
    is_admin: boolean,
    name?: string,
    birthyear?: number,
    community?: string,
    created_date: string,
    updated_date: string,
    profile_image?: string,

}

export const getUserList = async () => {
    const result = await axiosGetRequest(`/user`);
    return result.data;
}

export const getUserDetail = async (pk:number) => {
    const result = await axiosGetRequest(`/user/${pk}`);
    return result.data;
}

export const patchUserDetail = async (pk:number, data: any, accesstoken:string) => {
    const headers = {"Content-Type": "multipart/form-data","Authorization" : "Bearer "+accesstoken }
    const result = await axiosPatchRequest(`/user/${pk}`,data);
    return result.data;
}