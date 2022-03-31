import { PageTagProps } from "./interface/PageInterface";

const MainPage = (props: PageTagProps) => {
    return (
        <>
            <header>
                <h3>{props.title}</h3>
            </header>
            <main>
                메인화면 입니다.
            </main>
        </>
    )
}

export default MainPage;
