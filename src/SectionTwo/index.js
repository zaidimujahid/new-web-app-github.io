import React from "react";
import styled from "styled-components";
import Auto from "../Component/HomePage/Images/thumbnails/farming.png";
import BorderLogoMix from "../Component/borderLogoMix";

const BackgroundFilter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  background-color: rgba(38, 70, 83, 0.9);
`;
const tick = {
  dial: "@media (max-width:788px)",
};
const StandOutImage = styled.div`
  width: 13em;
  height: 10em;
  ${tick.dial} {
    overflow: none;
    width: auto;
    align-items: center;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const dial = {
  dial: "@media (max-width:788px)",
};
const InnerContainer = styled.h1`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
  ${dial.dial} {
    display: block;
    margin-top: 5rem;
    overflow: none;
  }
`;

const data = {
  dial: "@media (max-width:788px)",
};
const LogoContainer = styled.h1`
  display: flex;
  flex-direction: column;
  ${data.dial} {
    align-items: center;

    overflow: none;
  }
`;

const BoardText = styled.h3`
  font-size: 1.75rem;
  color: white;
  &:hover {
    color: blue;
  }
`;
const draw = {
  dial: "@media (max-width:625px)",
};
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
  ${draw.dial} {
    margin-left: 0.15rem;
    overflow: none;
  }

  &:hover {
    background-color: #1b7566;
  }
`;
const SectionTwo = () => {
  return (
    <>
      <BackgroundFilter>
        <InnerContainer>
          <LogoContainer>
            <BorderLogoMix />
            <BoardText>Find the right speciallist</BoardText>
            <BoardText>Find the job</BoardText>
            <Button>Registor Now</Button>
          </LogoContainer>
          <StandOutImage>
            <img src={Auto} alt="" />
          </StandOutImage>
        </InnerContainer>
      </BackgroundFilter>
    </>
  );
};
export default SectionTwo;
