import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { StorageUtil } from "../../config/BrowserUtil";
import Header from "../../layout/Header";
import { PageTagProps } from "../interface/PageInterface";

const MainPage = (props: PageTagProps) => {
    const navigate = useNavigate();
    const userProfile = {
        email: StorageUtil.local.getItem("email"),
        status: StorageUtil.local.getItem("status")
    }
    useEffect(() => {
        const accessToken = StorageUtil.local.getAccessToken()
        if (accessToken == null) {
            navigate(`/login`);
        }
    });

    const doJoin = () => {
        navigate("/join");
    }

    return (
        <>
            <Header title={props.title} />
            <main style={{textAlign: 'center'}}>
                <div>
                    <p><b>{userProfile.email}님</b>, 환영합니다.</p>
                    <div>
                        {userProfile.status === "new" ?
                            <>
                                <p>Oops! 회원가입을 마무리 하지 못했군요?</p>
                                <Button color={"primary"} onClick={e => doJoin()}>회원가입</Button>
                            </>
                            :
                            <div></div>
                        }
                    </div>
                </div>
            </main>
        </>
    )
}

export default MainPage;
