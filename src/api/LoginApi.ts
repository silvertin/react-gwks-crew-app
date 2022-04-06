import {axiosGetRequest, axiosPostRequest} from "../config/AxiosConfig";
import header from "../layout/Header";



export const getLoginInfo = async (kakaoaccesstoken : string) => {
    const result = await axiosGetRequest(`http://20.214.185.3/apis/accounts/kakao/`, {
        code: kakaoaccesstoken
    });
    return result.data;
}