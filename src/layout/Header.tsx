import styled from "styled-components";

interface TitleProps {
    title: string
}

const MainHeader = styled.header`
  background: #FFF;
  z-index: 1;
  position: fixed;
  padding: 10px 10px;
  text-align: center;
  top: 0;
  width: 100%;
  height: 50px;
`


const Header = (props: TitleProps) => {
    return (
        <>
            <MainHeader>
                <h3>{props.title}</h3>
            </MainHeader>
        </>
    );
 }


 export default Header;
