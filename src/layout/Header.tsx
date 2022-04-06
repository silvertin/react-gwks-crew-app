import styled from "styled-components";
import LogoImage from '../assets/img/logo.png'

interface TitleProps {
    title: string
}

const MainHeader = styled.header`
  background: #222;
  color: #FFF;
  z-index: 1;
  position: relative;
  margin-bottom: 50px;
  text-align: center;
  top: 0;
  width: 100%;
  height: 50px;
  h3 {
    padding: 10px 10px;
  }
  .logo {
    display: flex;
  }
`


const Header = (props: TitleProps) => {
    return (
        <>
            <MainHeader>
                <div className={"logo"}>
                    <img src={LogoImage} style={{"width": "50px", "height": "50px"}}/>
                    <h3>{props.title}</h3>
                </div>
            </MainHeader>
        </>
    );
 }


 export default Header;
