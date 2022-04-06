import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import { PageTagProps } from "./interface/PageInterface";

const MainPage = (props: PageTagProps) => {
    const navigate = useNavigate();
    const profile = {
        thumbnail_image_url: ""
    }
    let userProfile = {
        email: localStorage.getItem("kakaoUserEmail"),
        profile: localStorage.getItem("kakaoUserProfile")
    };
    useEffect(() => {
        const accessToken = localStorage.getItem("access_token");
        if (accessToken == null) {
            navigate(`/login`);
        }
    });
    return (
        <>
            <Header title={props.title} />
            <main style={{textAlign: 'center'}}>
                <div>
                    <p>
                        <img src={userProfile.profile || ''} alt="카카오톡 로그인 이미지"/>
                    </p>
                    <p><b>{userProfile.email}님</b>, 환영합니다.</p>
                </div>
            </main>
        </>
    )
}

export default MainPage;
