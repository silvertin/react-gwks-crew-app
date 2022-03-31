import Header from "../layout/Header";
import { PageTagProps } from "./interface/PageInterface";

const MainPage = (props: PageTagProps) => {
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
