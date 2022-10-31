import React from "react";
import styled from "styled-components";
import Logo from "../HomePage/Images/Logo.png";

const BrandLogoContainer = styled.div`
  display: flex;
  align-item: center;
`;

const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + "px" : "4em")};
  height: ${({ size }) => (size ? size + "px" : "4em")};
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;
const title = {
  dial: "@media (max-width:203px)",
};
const LogoTitle = styled.h6`
  margin-top: 1.5rem;
  font-size: ${({ size }) => (size ? size + "px" : "3px")};
  font-size: ${({ size }) => (size ? size + "px" : "30px")};
  background: -webkit-linear-gradient(#00ffff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;

  cursor: pointer;
  ${title.dial} {
    overflow: none;
    font-size: 1.25rem;
    font-weight: bold;
  }
`;

const BoradLogo = (props) => {
  const { LogoSize, TextSize } = props;
  return (
    <>
      <BrandLogoContainer>
        <LogoImage size={LogoSize}>
          <img src={Logo} alt="SafyZoon" style={{ marginTop: ".75rem" }} />
        </LogoImage>
        <LogoTitle size={TextSize}>SafeZoon</LogoTitle>
      </BrandLogoContainer>
    </>
  );
};
export default BoradLogo;
