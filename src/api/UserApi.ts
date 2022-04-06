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
    const result = await axiosGetRequest(`http://20.214.185.3/apis/user/`, {});
    return result.data;
}

export const getUserDetail = async (pk:number) => {
    const result = await axiosGetRequest('http://20.214.185.3/apis/user/<int:pk>',{});
    return result.data;
}

export const patchUserDetail = async (pk:number, data: any, accesstoken:string) => {
    // var data = new FormData()

    // data.append('name': "은석")
    // data.append('birthyear': 87)
    // data.append('community': "신혼브릿지")
    const headers = {"Content-Type": "multipart/form-data","Authorization" : "Bearer "+accesstoken }

    const result = await axiosPatchRequest('http://20.214.185.3/apis/user/<int:pk>',headers,data);
    return result.data;
}