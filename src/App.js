import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";

// import logo from "./assets/logo.mp4";
import logo from "./assets/logo.png";
import invidmeLogo from "./assets/invidme.png";
import ScreenImage1 from "./assets/1.jpg";
import ScreenImage2 from "./assets/2.jpg";
import ScreenImage3 from "./assets/3.jpg";
import IosLogo from "./assets/apple-logo.png";
import AndroidLogo from "./assets/android-logo.png";

import Carousel from "./Carousel";
import "./App.css";

const Main = styled.div`
  padding: 0px 10%;
  @media (max-width: 464px) {
    padding: 0px 5%;
  } 
`;

const LogoHeader = styled.div`
  display: flex;
  padding-top: 25px;
  justify-content: center;
`;

const ScreenImage = styled.img`
  min-width: 125px;
  width: 10%;
  height: 275px;
  margin-right: 8px;
  @media (max-width: 464px) {
    width: 80px;
    min-width: 80px;
    margin: 4px;
  }
`;

const ScreenContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  @media (max-width: 464px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (max-width: 924px) {
    width: 100%;
    justify-content: center;
    margin-top: 16px;
  }
`;

const LogoContainer = styled.div`
  margin-right: 10%;
`;

const LogoImage = styled.img`
  width: 200px;
  height: 175px;
  @media (max-width: 464px) {
    width: 100px;
    height: 100px;
  }
`;

const AppIconContainer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
`;

const AppIcon = styled.img`
  width: 200px;
  height: 175px;
  cursor: pointer;
  @media (max-width: 464px) {
    width: 100px;
    height: 100px;
  }
`;

const IosIcon = styled.img`
  width: 175px;
  height: 175px;
  cursor: pointer;
  @media (max-width: 464px) {
    width: 100px;
    height: 100px;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <LogoHeader>
          <ScreenContainer>
            <ScreenImage src={ScreenImage1} alt="app-screen" />
            <ScreenImage src={ScreenImage2} alt="app-screen" />
            <ScreenImage src={ScreenImage3} alt="app-screen" />
          </ScreenContainer>
        </LogoHeader>
        <AppIconContainer>
          <a href="https://play.google.com/store/apps/details?id=com.invidme&hl=en_US&gl=US">
            <AppIcon src={AndroidLogo} />
          </a>
          <LogoImage src={logo} />
          <a href="https://apps.apple.com/us/app/invidme/id1391720769">
            <IosIcon src={IosLogo} />
          </a>
        </AppIconContainer>
        <Carousel />
      </Main>
    </ThemeProvider>
  );
}

export default App;
