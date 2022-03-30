import React from 'react';
import {Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import CrewListPage from './pages/CrewListPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import {TiHome, TiThMenu, TiUserOutline} from "react-icons/ti";
import './assets/css/main.scss';
import {Button, ButtonGroup } from 'reactstrap';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
`

const CrewSection = styled.div`
  width: 100%;
`

const AdsContainer = styled(CrewSection)`
  @media screen and (max-width: 1280px) {
    display: none;
  }
`

const MainContainer = styled(CrewSection)`
  display: block;
  header {
    background: #FFF;
    z-index: 1;
    position: fixed;
    padding: 10px 10px;
    text-align: center;
    top: 0;
    width: 100%;
    height: 50px;
    
  }
  main {
    color: var(--bs-white);
    width: 100%;
    margin-top: 50px;
    position: relative;
    background: #222;
    overflow: scroll;
    padding: 10px 10px;
  }
  footer {
    width: 100%;
    position: fixed;
    bottom: 0px;
    display: flex;
    justify-content: space-between;
    background: #FFF;
    z-index: 1;
  }
`

const MainButtonGroup = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  a {
    text-decoration: none;
    text-align: center;
    width: 100%;
    font-size: 20px;
    color: var(--grey-dark);
    p {
      padding-top: 0px;
      font-size: 10px;
    }
  }
`

function App() {
  const innerHeight = window.innerHeight;
  return (
    <div className="App">
        <Wrapper>
            <AdsContainer>
                💡 앱 출시 예정
            </AdsContainer>
            <MainContainer>
                <header>
                    <h3>광성마당 크루앱</h3>
                </header>
                <main>
                    <Routes>
                        <Route path={"/"} element={<HomePage />} />
                        <Route path={"/list"} element={<CrewListPage />} />
                        <Route path={"/login"} element={<LoginPage />} />
                    </Routes>
                </main>
                <footer>
                    <MainButtonGroup>
                        <Link to="/">
                            <TiHome />
                            <p>HOME</p>
                        </Link>
                        <Link to="/list">
                            <TiThMenu />
                            <p>LIST</p>
                        </Link>
                        <Link to="/main">
                            <TiUserOutline />
                            <p>MYPAGE</p>
                        </Link>
                    </MainButtonGroup>
                </footer>
            </MainContainer>
        </Wrapper>
    </div>
  );
}

export default App;
