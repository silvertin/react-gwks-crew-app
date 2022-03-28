import React from 'react';
import {Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import CrewListPage from './pages/CrewListPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import HomePage from './pages/HomePage';
import {TiHome, TiThMenu, TiUserOutline} from "react-icons/ti";
import Header from './layout/Header';


const Wrapper = styled(Container)`
  width: 100%;
  height: 100vh;
  display: flex;
  @media screen and (max-width: 1280px) {
    background-image: none;
    #adsWrapper {
      display: none;
    }
  }
`

const PlatformContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  padding: 75px 100px;
`

const MainSection = styled.main`
  border: 1px;
  border-style: solid;
  border-color: #DDD;
  position: relative;
  display: block;
  width: 390px;
  height: 100%;
  header {
    width: 100%;
    height: 50px;
    background: #CCC;
  }
  main {
    height: calc(100% - 130px);
    background: #DDD;
    overflow: hidden;
  }
  footer {
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: 0;
    display: flex;
    div{
      position: relative;
      display: grid;
      justify-content: center;
      align-content: center;
      width: 100%;
      height: 100%;
      border: 1px;
      border-color: blue;
      border-style: solid;
      font-size: 30px;
      padding: 10px;
      p {
        margin-bottom: 0px;
        font-size: 10px;
      }
    }
  }
`

const AdsSection = styled.section`
  position: relative;
  display: block;
  background-color: #DDD;
  width: 100%;
  height: 100%;
  div {
    display: grid;
    position: absolute;
    width: 100%;
    justify-content: center;
    align-content: center;
  }
  div#commingSoon {
    height: 150px;
  }
`

function App() {
  return (
    <div className="App">
        <Wrapper
            id="wrapper"
            className="bg-light border"
            fluid
        >
            <PlatformContainer id="adsWrapper">
                <AdsSection>
                    <div id="commingSoon">
                        <h3>💡 앱 출시 예정</h3>
                    </div>
                </AdsSection>
            </PlatformContainer>
            <PlatformContainer id="mainWrapper">
                <MainSection>
                    <header>
                        <Header />
                    </header>
                    <main>
                        <Routes>
                            <Route path={"/"} element={<HomePage />} />
                            <Route path={"/list"} element={<CrewListPage />} />
                            <Route path={"/login"} element={<LoginPage />} />
                        </Routes>
                    </main>
                    <footer>
                        <div>
                            <TiThMenu />
                            <p>List</p>
                        </div>
                        <div>
                            <TiHome />
                            <p>Home</p>
                        </div>
                        <div>
                            <TiUserOutline />
                            <p>MyPage</p>
                        </div>
                    </footer>
                </MainSection>
            </PlatformContainer>
        </Wrapper>
    </div>
  );
}

export default App;
