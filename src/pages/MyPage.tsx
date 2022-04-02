import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import { PageTagProps } from "./interface/PageInterface";

const MainPage = (props: PageTagProps) => {
    const accessToken = sessionStorage.getItem("accessToken");
    const navigate = useNavigate();
    if (accessToken == null) {
        navigate(`/login`);
    }
    return (
        <>
            <Header title={props.title} />
            <main>
                메인화면 입니다.
            </main>
        </>
    )
}

export default MainPage;
