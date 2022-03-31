import Header from "../layout/Header";
import { PageTagProps } from "./interface/PageInterface";

const LoginPage = (props: PageTagProps) => {
    return (
        <>
            <Header title={props.title} />
            <main>
                로그인
            </main>
        </>
    )
}


export default LoginPage;
