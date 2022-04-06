import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { StorageUtil } from "../config/BrowserUtil";
import Header from "../layout/Header";
import { PageTagProps } from "./interface/PageInterface";

const MainPage = (props: PageTagProps) => {
    const navigate = useNavigate();
    const userProfile = {
        email: StorageUtil.local.getItem("email")
    }
    useEffect(() => {
        const accessToken = StorageUtil.local.getAccessToken()
        if (accessToken == null) {
            navigate(`/login`);
        }
    });
    return (
        <>
            <Header title={props.title} />
            <main style={{textAlign: 'center'}}>
                <div>
                    <p><b>{userProfile.email}님</b>, 환영합니다.</p>
                </div>
            </main>
        </>
    )
}

export default MainPage;
