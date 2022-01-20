import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";

// import logo from "./assets/logo.mp4";
import CoderedIcon from "./assets/CoderedIcon.png";
import InvidmeIcon from "./assets/InvidmeIcon.png";
import Facebook from "./assets/Facebook.svg";
import Twitter from "./assets/Twitter.svg";
import Discord from "./assets/Discord.svg";
import Reddit from "./assets/Reddit.svg";
import Telegram from "./assets/Telegram.svg";
import Youtube from "./assets/Youtube.svg";
import Instagram from "./assets/Instagram.svg";

import "./Header.css";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 12%;
  position: sticky;
  left: 0;
  right: 0;
  z-index: 999;
  top: 0;
  background-color: black;

  @media (max-width: 464px) {
    position: initial;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px 0%;
  }
`;

const LogoContainer = styled.div`
  padding: 0px 2%;
  position: relative;

  @media (max-width: 464px) {
    padding-bottom: 16px;
  }
`;

const LinkContainer = styled.div`
  padding: 0px 2%;
  position: relative;
`;

const LogoImage = styled.img`
  padding: 0px 5px;
`;

const LinkImage = styled.img`
  padding: 8px 8px;
  width: 16px;
  height: 16px;
  margin-right: 7px;
  border: 2px solid #FF8434;
  border-radius: 5px;
`;

const Link = styled.a``;

function Header(props) {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link href="https://www.invidme.com">
          <LogoImage src={InvidmeIcon} alt="" />
        </Link>
        <Link href="https://www.coderedcrypto.com">
          <LogoImage src={CoderedIcon} alt="" />
        </Link>
      </LogoContainer>
      <LinkContainer>
        <Link href="https://www.facebook.com/invidme">
          <LinkImage src={Facebook} alt="" />
        </Link>
        <Link href="https://www.reddit.com/r/InVidMe/">
          <LinkImage src={Reddit} alt="" />
        </Link>
        <Link  href="https://www.instagram.com/invidme/">
          <LinkImage src={Instagram} alt="" />
        </Link>

        <Link  href="https://twitter.com/InVidMe1">
          <LinkImage src={Twitter} alt="" />
        </Link>
        <Link  href="https://t.me/CodeRedCrypto">
          <LinkImage src={Telegram} alt="" />
        </Link>
        <Link  href="https://discord.com/channels/895697799960735834/895697799960735837">
          <LinkImage src={Discord} alt="" />
        </Link>
        <Link  href="https://www.youtube.com/channel/UCVjIWrf4x5XQznbzD4clz0A">
          <LinkImage src={Youtube} alt="" />
        </Link>
      </LinkContainer>
    </HeaderContainer>
  );
}

export default Header;
