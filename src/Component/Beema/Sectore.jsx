import React from "react";
import Backgrounds from "../HomePage/Images/power.jpg";
import styled from "styled-components";
import BrandLogo from "../Beema/BrandLogo";

const link = {
  desktop: "@media (max-width:730px)",
};
const SectionStyle = styled.div`
  width: 100%;
  height: 110vh;
  margin-top: -70px;
  font-size: 50px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${Backgrounds});
  ${link.desktop} {
    width: auto;
    height: 60%;
  }
`;

const BackgroundFilter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgba(38, 70, 83, 0.705);
`;

const media = {
  desktop: "@media (max-width:730px)",
  desktoped: "@media (max-width:391px)",
};
const InnerContainer = styled.h1`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  margin-top: -3rem;
  justify-content: space-evenly;
  ${media.desktop} {
    display: block;
    margin-top: 10rem;
  }
  ${media.desktoped} {
    margin-top: 7.91rem;
  }
`;

const channel = {
  desktop: "@media (max-width:730px)",
};
const LogoContainer = styled.h1`
  display: flex;
  flex-direction: column;
  ${channel.desktop} {
    align-items: center;
  }
`;
const channels = {
  desktop: "@media (max-width:292px)",
};
const BoardText = styled.h3`
  font-size: 1.75rem;
  color: white;
  cursor: pointer;
  ${channels.desktop} {
    text-align: center;
  }
  &:hover {
    color: orange;
  }
`;
const Button = styled.div`
  background-color: #2a9d8f;
  color: white;
  border-radius: 3px;
  font-size: 18px;
  font-weight: bold;
  outline: none;
  padding: 8px;
  width: 50%;
  border: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #1b7566;
  }
`;
const SectionAdd = () => {
  return (
    <>
      <SectionStyle>
        <BackgroundFilter>
          <InnerContainer>
            <LogoContainer>
              <BrandLogo />
              <BoardText>Find the right speciallist</BoardText>
              <BoardText>Right speciallist</BoardText>
              <BoardText>Find the Right</BoardText>
              <Button>Join Now</Button>
            </LogoContainer>
          </InnerContainer>
        </BackgroundFilter>
      </SectionStyle>
    </>
  );
};
export default SectionAdd;
