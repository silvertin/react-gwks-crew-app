import Axios from 'axios';

const axioxMainInstance = async () => {
    let instance: any;
    function init() {
        return Axios.create({
            // baseURL: "http://localhost:8000",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            maxRedirects: 2,
            timeout: 10000
        })
    }

    return {
        getInstance: async () => {
            if (!instance) {
                instance = await init();
            }
            return instance;
        }
    }
}

export async function axiosGetRequest(url: string, params: any) {
    const axiosInstance = await axioxMainInstance();
    const axios = await axiosInstance.getInstance();
    return await axios.request({
        url: url,
        method: "GET",
        params: params
    })
}


export async function axiosPostRequest(url: string, params: any) {
    const axiosInstance = await axioxMainInstance();
    const axios = await axiosInstance.getInstance();
    return await axios.request({
        url: url,
        method: "POST",
        params: params
    })
}


export async function axiosPutRequest(url: string, params: any) {
    const axiosInstance = await axioxMainInstance();
    const axios = await axiosInstance.getInstance();
    return await axios.request({
        url: url,
        method: "PUT",
        params: params
    })
}


export async function axiosDeleteRequest(url: string, params: any) {
    const axiosInstance = await axioxMainInstance();
    const axios = await axiosInstance.getInstance();
    return await axios.request({
        url: url,
        method: "DELETE",
        params: params
    })
}

