import { Button } from "reactstrap";
import Header from "../layout/Header";
import { PageTagProps } from "./interface/PageInterface";
import KakaoLogin from '../assets/img/kakao_login.png'
import styled from "styled-components";

// function loginKakao ():void {
//     const clientId = "5c7fe0d39ddd530bb8c5588ef3c1452a";
//     const redirectUrl = "http://localhost:3000/accounts/kakao/login/callback/";
// }


function loginWithKakao() {
    window.open(`/login/kakao`, "_blank", "width=500, height=800");
}

const LoginPage = (props: PageTagProps) => {
    return (
        <>
            <Header title={props.title} />
            <main>
                <a id="custom-login-btn" onClick={loginWithKakao}>
                    <img src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" alt="카카오 로그인 버튼"/>
                </a>
            </main>
        </>
    )
}


export default LoginPage;
