import React from "react";
import styled from "styled-components";
import Auto from "../HomePage/Images/rocket.png";

const BackgroundFilter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  margin-top: 1rem;
`;
const Title = styled.h6`
  text-align: center;
  font-weight: bold;
  font-size: 1.75rem;
  margin-bottom: 1rem;
`;
const tick = {
  dial: "@media (max-width:788px)",
};
const StandOutImage = styled.div`
  width: 11em;
  height: 8.25em;
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
    margin-top: 2.75rem;
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

const mega = {
  dial: "@media (max-width:295px)",
};
const BoardText = styled.h3`
  font-size: 1.15rem;
  ${mega.dial} {
    margin: 0.5rem;
    overflow: none;
  }
  &:hover {
    color: blue;
  }
`;

const Leader = () => {
  return (
    <>
      <BackgroundFilter>
        <Title>What Other Say</Title>
        <InnerContainer>
          <LogoContainer>
            <BoardText>He endures pains avoid worse pains</BoardText>
            <BoardText>Dislike men who are so beguiled</BoardText>
            <BoardText>"On the hand, righteous indignation</BoardText>
            <BoardText>Dislike men who are so beguiled</BoardText>
            <BoardText>Weakness which through shrinking</BoardText>
            <BoardText>He endures pains avoid worse pains</BoardText>
            <BoardText>Weakness which through shrinking</BoardText>
            <BoardText>Dislike men who are so beguiled</BoardText>
            <BoardText>"On the hand, righteous indignation</BoardText>
            <BoardText>Dislike men who are so beguiled</BoardText>
            <BoardText>Weakness which through shrinking</BoardText>
            <BoardText>Weakness which through shrinking</BoardText>
          </LogoContainer>
          <StandOutImage>
            <img src={Auto} alt="" />
          </StandOutImage>
        </InnerContainer>
      </BackgroundFilter>
    </>
  );
};
export default Leader;
