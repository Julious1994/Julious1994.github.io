import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";

import logo from "./assets/header-logo.png";
import FooterLogo from "./assets/Footer-logo.png";
import Video_Block_Chain from "./assets/Video_Block_Chain.png";
import AppStore from "./assets/AppStore.png";
import GooglePlay from "./assets/GooglePlay.png";
import AppScreen1 from "./assets/01.png";
import AppScreen2 from "./assets/02.png";
import AppScreen3 from "./assets/03.png";
import AppScreen4 from "./assets/04.png";
import AppScreen5 from "./assets/05.png";
import CodeRedLogo from "./assets/CodeRed.png";
import GIF1 from "./assets/giphy-1.gif";
import GIF2 from "./assets/giphy-2.gif";
import GIF3 from "./assets/giphy-3.gif";
import GIF4 from "./assets/giphy-4.gif";
import GIF5 from "./assets/giphy-5.gif";
import GIF6 from "./assets/giphy-6.gif";
import NFTBanner from "./assets/NFTBanner.png";
import CryptoCoin from "./assets/CryptoCoin.gif";
import Header from "./Header";

import "./App.css";

const Main = styled.div`
  padding: 0px 2%;
  position: relative;
  margin: 0px 10%;
  @media (max-width: 464px) {
    margin: 0px 0%;
  }
`;

const Container = styled.div`
  position: relative;
`;

const LogoImage = styled.img`
  width: 250px;
  height: 45px;
  margin-bottom: 2px;
  @media (max-width: 464px) {
    align-self: center;
  }
`;

const CodeRedLogoImage = styled.img`
  width: 250px;
  height: 45px;
  @media (max-width: 464px) {
    align-self: center;
  }
`;

const DownloadView = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const DownloadContainer = styled.div`
  padding: 15px;
  align-self: center;
  display: flex;

  @media (max-width: 464px) {
    flex-direction: column;
  }
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

const AppStoreDownlloadLink = styled.a`
  margin-left: 2px;
`;

const StoreImage = styled.img`
  width: 100px;
  height: 30px;
`;

const Section = styled.div`
  display: flex;
  margin: 24px;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;

  @media (max-width: 464px) {
    margin: 8px 5px; 
    ${({reverse}) => reverse && `
      flex-direction: column-reverse;
      margin-top: 10px;
    `};
  }
`;

const CryptoImage = styled.img`
  width: 60%;
  @media (max-width: 464px) {
    width: 250px;
  }

  @media (max-width: 320px) {
    width: 200px;
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
  height: 425px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media (max-width: 464px) {
    height: 390px;
    width: 100%;
    margin: 0px auto;
    background-size: contain;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-repeat: unset;
    background-position: unset;
  }


  @media (max-width: 375px) {
    height: 350px;
  }

  @media (max-width: 320px) {
    height: 300px;
    width: 100%;
    margin: 0px auto;
    background-size: contain;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-repeat: unset;
    background-position: unset;
  }
`;

const FirstRightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 8%;
  width: 42%;

  @media (max-width: 464px) {
    margin-top: 16px;
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
  height: 505px;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  @media (max-width: 464px) {
    width: 100%;
    height: 425px;
    margin-top: 24px;
    background-position: unset;
  }
`;

const GifRow = styled.div`
  display: flex;
  padding-top: 20px;
  @media (max-width: 464px) {
    padding-top: 0px;
  }
`;

const GifCol = styled.div`
  display: flex;
  flex-direction: column;
  ${({ marginTop }) => (marginTop ? "margin-top: " + marginTop + "px;" : "")}
`;

const GifImage = styled.img`
  border: 4px solid
    ${({ orange, theme }) => (orange ? theme.primary : theme.secondary)};
  width: 104px;
  height: 175px;
  margin: 10px 7px;
  border-radius: 5px;

  @media (max-width: 464px) {
    width: 90px;
    height: 150px;
  }

  @media (max-width: 320px) {
    width: 75px;
    height: 150px;
  }
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
  margin: 50px 10% 25px 10%;
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
    position: initial !important;
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

const NFTBannerImage = styled.img`
  width: 250px;
  height: 75px;
  display: flex;
  margin: 0px auto;
`;

const PoweredText = styled.div`
  color: #ff0100;
  margin-bottom: 10px;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <Main>
          <Section reverse={true}>
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
                <CreateVidText>Interactive NFT Skit Creation</CreateVidText>
              </SectionContent>
              <DownloadView>
                <DownloadContainer>
                  <DownloadLinkList>
                    <AppStoreDownlloadLink href="https://apps.apple.com/us/app/invidme/id1391720769">
                      <StoreImage src={AppStore} />
                    </AppStoreDownlloadLink>
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
                <PoweredText>Powered By</PoweredText>
                <CodeRedLogoImage src={CodeRedLogo} />
                <CreateVidText color="#ff0100">
                  Earn Cryptocurrency Before The ICO
                </CreateVidText>
              </SectionContent>
            </FirstRightSection>
            <IcoGif>
              <CryptoImage src={CryptoCoin} />
            </IcoGif>
          </Section>
          <NFTBannerImage src={NFTBanner} />
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
      </Container>
    </ThemeProvider>
  );
}

export default App;
