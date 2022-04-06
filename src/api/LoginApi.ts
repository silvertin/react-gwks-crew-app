import {axiosGetRequest, axiosPostRequest} from "../config/AxiosConfig";
import header from "../layout/Header";

export const getLoginInfo = async (kakaoaccesstoken : string) => {
    const result = await axiosGetRequest(`/accounts/kakao/`, {
        code: kakaoaccesstoken
    });
    return result.data;
}
