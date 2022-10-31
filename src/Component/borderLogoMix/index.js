import React from "react";
import styled from "styled-components";
import Logo from "../HomePage/Images/Logo.png";

const BrandLogoContainer = styled.div`
  display: flex;
  align-item: center;
`;

const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + "px" : "1.75em")};
  height: ${({ size }) => (size ? size + "px" : "1.75em")};
  img {
    width: 100%;
    height: 100%;
  }
`;
const tick = {
  dial: "@media (max-width:180px)",
};
const LogoTitle = styled.h6`
  margin-top: 1rem;
  font-size: ${({ size }) => (size ? size + "px" : "3px")};
  font-size: ${({ size }) => (size ? size + "px" : "30px")};
  background: -webkit-linear-gradient(#00ffff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${tick.dial} {
    overflow: none;
    width: auto;
  }
`;

const BorderLogoMix = (props) => {
  const { LogoSize, TextSize } = props;
  return (
    <>
      <BrandLogoContainer>
        <LogoImage size={LogoSize}>
          <img src={Logo} alt="SafyZoon" />
        </LogoImage>
        <LogoTitle size={TextSize}>SafeZoon</LogoTitle>
      </BrandLogoContainer>
    </>
  );
};
export default BorderLogoMix;
