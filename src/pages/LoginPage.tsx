import { PageTagProps } from "./interface/PageInterface";

const LoginPage = (props: PageTagProps) => {
    return (
        <>
            <header>
                <h3>{props.title}</h3>
            </header>
            <main>
                로그인
            </main>
        </>
    )
}


export default LoginPage;
