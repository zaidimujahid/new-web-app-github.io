import React from "react";
import styled from "styled-components";
import Auto from "../HomePage/Images/settings.png";

const BackgroundFilter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  margin-top: 1rem;
  background-color: rgba(38, 70, 83, 0.9);
`;
const Title = styled.h4`
  margin-top: 1rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.75rem;
  color: white;
  margin-bottom: 1rem;
`;
const tick = {
  details: "@media (max-width:788px)",
};
const StandOutImage = styled.div`
  width: 11em;
  height: 8.25em;
  ${tick.details} {
    overflow: none;
    width: auto;
    align-items: center;
    margin-top: -3.45rem;
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
  margin-bottom: 1rem;

  ${data.dial} {
    align-items: center;
    overflow: none;
  }
`;

const mega = {
  dial: "@media (max-width:295px)",
};
const BoardText = styled.h3`
  font-size: 1.15rem;
  color: white;
  ${mega.dial} {
    margin: 0.5rem;
    overflow: none;
  }
  &:hover {
    color: blue;
  }
`;

const Flat = () => {
  return (
    <>
      <BackgroundFilter>
        <Title>More About Beema</Title>
        <InnerContainer>
          <StandOutImage>
            <img src={Auto} alt="" />
          </StandOutImage>
          <LogoContainer>
            <BoardText>He endures pains avoid worse pains</BoardText>
            <BoardText>Weakness which through shrinking</BoardText>
            <BoardText>Dislike men who are so beguiled</BoardText>
            <BoardText>"On the hand, righteous indignation</BoardText>
            <BoardText>He endures pains avoid worse pains</BoardText>
            <BoardText>Dislike men who are so beguiled</BoardText>
            <BoardText>Weakness which through shrinking</BoardText>
            <BoardText>Dislike men who are so beguiled</BoardText>
            <BoardText>Dislike men who are so beguiled</BoardText>
            <BoardText>"On the hand, righteous indignation</BoardText>
            <BoardText>Weakness which through shrinking</BoardText>
            <BoardText>Weakness which through shrinking</BoardText>
          </LogoContainer>
        </InnerContainer>
      </BackgroundFilter>
    </>
  );
};
export default Flat;
