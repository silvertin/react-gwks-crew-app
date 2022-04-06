import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { axiosPostRequest } from "../../config/AxiosConfig";
import { PageTagProps } from "../interface/PageInterface";
import { getLoginInfo} from "../../api/LoginApi";

async function doTokenInfo() {
    const code = new URL(window.location.href).searchParams.get("code");
    const result = await axiosPostRequest("https://kauth.kakao.com/oauth/token", {},{
        grant_type: "authorization_code",
        client_id: "5c7fe0d39ddd530bb8c5588ef3c1452a",
        redirect_uri: "http://localhost:3000/login/kakao/callback/",
        code: code,
        client_secret: "IwKQJvbH6UN40GOyG6VWSCKrPVBcIUic",
    });
    const {access_token, expires_in, refresh_token, refresh_token_expires_in} = result.data;

    const userdata = await getLoginInfo(access_token);

    localStorage.setItem("access_token", userdata.access_token);
    localStorage.setItem("refresh_token", userdata.refresh_token);
    localStorage.setItem("userid", userdata.user.pk);
    localStorage.setItem("email", userdata.user.email);
    localStorage.setItem("status", userdata.status);
    window.close()


    // @ts-ignore
    // const { Kakao } = globalThis;
    // Kakao.Auth.setAccessToken(access_token);
    //
    // const user = await Kakao.API.request({
    //     url: "/v2/user/me"
    // });
    // localStorage.setItem("kakaoUserId", user.id);
    // localStorage.setItem("kakaoUserEmail", user.kakao_account.email);
    // localStorage.setItem("kakaoUserProfile", user.kakao_account.profile.thumbnail_image_url);
    // window.close();
}

const KakaoRedirectPage = (props: PageTagProps) => {
    const [token, setToken] = useState("");
    doTokenInfo();
    return (
        <>
            로그인성공!
        </>
    );
}

export default KakaoRedirectPage;
