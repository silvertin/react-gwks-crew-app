import styled from "styled-components";

interface TitleProps {
    title: string
}

const Header = (props: TitleProps) => {
    return (
        <>
            <header>
                <h3>{props.title}</h3>
            </header>
        </>
    );
 }


 export default Header;
