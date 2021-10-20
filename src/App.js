import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";

// import logo from "./assets/logo.mp4";
import logo from "./assets/header-logo.png";
import FooterLogo from "./assets/Footer-logo.png";
import Video_Block_Chain from "./assets/Video_Block_Chain.png";
import AppStore from "./assets/AppStore.png";
import GooglePlay from "./assets/GooglePlay.png";
import Section_1_Graphic from "./assets/Section_1_Graphic.png";
import Section_2_Graphic from "./assets/Section_4_Image.png";
import AppScreen1 from "./assets/01.png";
import AppScreen2 from "./assets/02.png";
import AppScreen3 from "./assets/03.png";
import AppScreen4 from "./assets/04.png";
import AppScreen5 from "./assets/05.png";
import CodeRedLogo from "./assets/CodeRed.png";
import ICOGif from "./assets/ICO.gif";
import GIF1 from "./assets/giphy-1.gif";
import GIF2 from "./assets/giphy-2.gif";
import GIF3 from "./assets/giphy-3.gif";
import GIF4 from "./assets/giphy-4.gif";
import GIF5 from "./assets/giphy-5.gif";
import GIF6 from "./assets/giphy-6.gif";

import Particles from "react-particles-js";
import particlesConfig from "./particlesConfig";

import "./App.css";

const Main = styled.div`
  padding: 0px 2%;
  position: relative;
`;

const LogoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #3f3f3f;
  padding: 15px 50px;
`;

const DownloadButton = styled.div`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  font-size: 9pt;
  height: 25px;
  padding: 2px 15px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 600;
  align-self: center;
`;

const ScreenImage = styled.img`
  min-width: 125px;
  width: 10%;
  height: 275px;
  margin-right: 8px;
  @media (max-width: 464px) {
    width: 80px;
    height: 200px;
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

const LogoImage = styled.img`
  width: 250px;
  height: 45px;
  animation: move 2.5s linear infinite;
  padding-bottom: 25px;
  @media (max-width: 464px) {
    align-self: center;
  }
`;

const CodeRedLogoImage = styled.img`
  width: 250px;
  height: 45px;
  animation: move 2.5s linear infinite;
  padding-bottom: 25px;
  @media (max-width: 464px) {
    align-self: center;
  }
`;

const DownloadView = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-bottom: 10px;
`;

const DownloadContainer = styled.div`
  background-color: ${({ theme }) => theme.primary};
  padding: 15px;
  border-radius: 60px;
  align-self: center;
  display: flex;

  @media (max-width: 464px) {
    flex-direction: column;
  }
`;

const DownloadText = styled.div`
  color: ${({ theme }) => theme.secondary};
  font-size: 14px;
  font-weight: bold;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const DownloadLinkList = styled.div`
  display: flex;
  @media (max-width: 464px) {
    margin: 0px auto;
    margin-top: 7px;
  }
`;

const DownlloadLink = styled.a`
  margin-left: 10px;
`;

const StoreImage = styled.img`
  width: 100px;
  height: 30px;
`;

const Section = styled.div`
  display: flex;
  margin: 40px;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
`;

const SectionImage = styled.img`
  width: 42%;
  @media (max-width: 464px) {
    width: 100%;
    // flex-wrap: wrap;
    // justify-content: center;
  }
`;

const CryptoImage = styled.img`
  width: 42%;
  border: 7px solid #fff;
  border-radius: 5px;
  @media (max-width: 464px) {
    // width: 100%;
    // flex-wrap: wrap;
    // justify-content: center;
  }
`;

const IcoGif = styled.div`
  background-image: url(./images/CryptoBg.png);
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 500px;
  @media (max-width: 464px) {
    height: 325px;
    width: 100%;
  }
`;

const FirstRightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 75px;
  width: 42%;

  @media (max-width: 464px) {
    margin-top: 75px;
    width: 100%;
    padding-left: 0px;
  }
`;

const CreateVidText = styled.div`
  color: ${({ theme, color }) => (color ? color : theme.primary)};
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  font-family: "PoppinsSemiBold";

  @media (max-width: 464px) {
    text-align: center;
  }
`;

const SectionContent = styled.div`
  text-align: center;
  @media (max-width: 464px) {
    display: flex;
    flex-direction: column;
  }
`;

const SectionImageView = styled.div`
  width: 50%;
  background-image: url(./images/TapBg.png);
  height: 375px;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 464px) {
    width: 100%;
  }
`;

const GifRow = styled.div`
  display: flex;
  padding-top: 20px;
`;

const GifCol = styled.div`
  display: flex;
  flex-direction: column;
  ${({ marginTop }) => (marginTop ? "margin-top: " + marginTop + "px;" : "")}
`;

const GifImage = styled.img`
  width: 50px;
  height: 85px;
  border: 4px solid
    ${({ orange, theme }) => (orange ? theme.primary : theme.secondary)};
  width: 104px;
  height: 175px;
  margin: 10px 7px;
  border-radius: 5px;
`;

const VidBlockChainText = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  font-family: "PoppinsSemiBold";
`;

const VidBlockImage = styled.img`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const AppScreenImage = styled.img`
  width: 190px;
  margin-top: ${({ order }) => order * 30}px;
  max-height: 450px;

  @media (max-width: 464px) {
    margin-top: 0px;
    margin-bottom: 25px;
    width: 225px;
  }
`;

const AppScreenView = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 25px;
  margin-bottom: 25px;
  margin-top: 50px;
  position: relative;
  @media (max-width: 464px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const FooterLogoImage = styled.img`
  position: absolute;
  width: 100px;
  bottom: 0;
  margin: 0px auto;
  left: 0;
  right: 0;
  @media (max-width: 464px) {
    position: initial;
    width: unset;
    margin: 25px;
    margin-bottom: 0px;
  }
`;

const FooterView = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #3f3f3f;
  padding-top: 7px;
  padding-bottom: 7px;
`;
const LeftFooter = styled.div``;
const RightFooter = styled.div``;
const FooterLinkText = styled.span`
  color: ${({ theme }) => theme.secondary};
  font-size: 7pt;
  font-family: "OpenSansRegular";
`;
const FooterLink = styled.a`
  text-decoration: none;
`;
const PrivacyLink = styled.a`
  text-decoration: none;
  margin-right: 25px;
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
        <div style={{ position: "absolute" }}>
          <Particles height="100vh" width="100%" params={particlesConfig} />
        </div>
        <Section>
          <SectionImageView>
            <GifRow>
              <GifCol>
                <GifImage src={GIF1} alt="gif1" />
                <GifImage src={GIF2} alt="gif2" orange={true} />
              </GifCol>
              <GifCol marginTop={30}>
                <GifImage src={GIF4} alt="gif4" orange={true} />
                <GifImage src={GIF3} alt="gif3" />
              </GifCol>
              <GifCol>
                <GifImage src={GIF5} alt="gif5" />
                <GifImage src={GIF6} alt="gif6" orange={true} />
              </GifCol>
            </GifRow>
          </SectionImageView>
          <FirstRightSection>
            <SectionContent>
              <LogoImage src={logo} />
              <CreateVidText>Interactive Video Creation</CreateVidText>
            </SectionContent>
            <DownloadView>
              <DownloadContainer>
                <DownloadLinkList>
                  <DownlloadLink href="https://apps.apple.com/us/app/invidme/id1391720769">
                    <StoreImage src={AppStore} />
                  </DownlloadLink>
                  <DownlloadLink href="https://play.google.com/store/apps/details?id=com.invidme&hl=en_US&gl=US">
                    <StoreImage src={GooglePlay} />
                  </DownlloadLink>
                </DownloadLinkList>
              </DownloadContainer>
            </DownloadView>
          </FirstRightSection>
        </Section>
        <Section>
          <FirstRightSection>
            <SectionContent>
              <CodeRedLogoImage src={CodeRedLogo} />
              <CreateVidText color="#ff0100">
                Earn Cryptocurrency Before The ICO
              </CreateVidText>
            </SectionContent>
          </FirstRightSection>
          <IcoGif>
            <CryptoImage src={ICOGif} />
          </IcoGif>
        </Section>
        <VidBlockChainText>
          Video Scenes With Actors & Influencers
        </VidBlockChainText>
      </Main>
      <VidBlockImage src={Video_Block_Chain} />
      <AppScreenView>
        <AppScreenImage src={AppScreen1} order={4} />
        <AppScreenImage src={AppScreen2} order={2} />
        <AppScreenImage src={AppScreen3} order={0} />
        <AppScreenImage src={AppScreen4} order={2} />
        <AppScreenImage src={AppScreen5} order={4} />
        <FooterLogoImage src={FooterLogo} />
      </AppScreenView>
      <FooterView>
        <LeftFooter>
          <PrivacyLink href="www.invidme.com">
            <FooterLinkText>Privacy</FooterLinkText>
          </PrivacyLink>
          <FooterLink href="www.invidme.com">
            <FooterLinkText>Terms and Conditions</FooterLinkText>
          </FooterLink>
        </LeftFooter>
        <RightFooter>
          <FooterLink href="www.invidme.com">
            <FooterLinkText>Copyright &copy; 2021 INVIDMEDesign</FooterLinkText>
          </FooterLink>
        </RightFooter>
      </FooterView>
    </ThemeProvider>
  );
}

export default App;
