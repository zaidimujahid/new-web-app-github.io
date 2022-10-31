import React from "react";
import Background from "./Images/pic.jpg";
import PicTwo from "./Images/pictwo.png";
import styled from "styled-components";
import BorderLogoMix from "./../borderLogoMix/index";

const link = {
  madel: "@media (max-width:1430px)",
  desktop: "@media (max-width:730px)",
};
const SectionStyle = styled.div`
  width: 100%;
  height: 110vh;
  margin-top: -70px;
  font-size: 50px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${Background});
  ${link.desktop} {
    width: auto;
    height: auto;
  }
  ${link.madel} {
    height: 40rem;
  }
`;

const BackgroundFilter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgba(38, 70, 83, 0.9);
`;

const deal = {
  desktop: "@media (max-width:730px)",
};
const StandOutImage = styled.div`
  width: 13em;
  height: 10em;
  overflow: none;
  ${deal.desktop} {
    overflow: none;
    width: auto;
    align-items: center;
  }

  img {
    width: 100%;
    height: 100%;
  }
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
const BoardText = styled.h3`
  font-size: 1.75rem;
  color: white;
  &:hover {
    color: blue;
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
              <BorderLogoMix />
              <BoardText>Find the right speciallist</BoardText>
              <BoardText>Find the job</BoardText>
              <Button>Join Now</Button>
            </LogoContainer>
            <StandOutImage>
              <img src={PicTwo} alt="" />
            </StandOutImage>
          </InnerContainer>
        </BackgroundFilter>
      </SectionStyle>
    </>
  );
};
export default SectionAdd;
