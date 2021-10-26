import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";

// import logo from "./assets/logo.mp4";
import CoderedIcon from "./assets/CoderedIcon.png";
import InvidmeIcon from "./assets/InvidmeIcon.png";
import Facebook from "./assets/Facebook.png";
import Twitter from "./assets/Twitter.png";
import Linkedin from "./assets/Linkedin.png";
import Instagram from "./assets/Instagram.png";

import "./Header.css";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
`;

const LogoContainer = styled.div`
  padding: 0px 2%;
  position: relative;
`;

const LinkContainer = styled.div`
  padding: 0px 2%;
  position: relative;
`;

const LogoImage = styled.img`
  padding: 0px 5px;
`;

const LinkImage = styled.img`
  padding: 0px 5px;
`;

const Link = styled.a``;

function Header(props) {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link href="invidme.com">
          <LogoImage src={InvidmeIcon} alt="" />
        </Link>
        <Link href="invidme.com">
          <LogoImage src={CoderedIcon} alt="" />
        </Link>
      </LogoContainer>
      <LinkContainer>
        <Link href="invidme.com">
          <LinkImage src={Facebook} alt="" />
        </Link>
        <Link href="invidme.com">
          <LinkImage src={Linkedin} alt="" />
        </Link>
        <Link  href="invidme.com">
          <LinkImage src={Instagram} alt="" />
        </Link>
        <Link  href="invidme.com">
          <LinkImage src={Twitter} alt="" />
        </Link>
      </LinkContainer>
    </HeaderContainer>
  );
}

export default Header;
