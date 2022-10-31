import React from "react";
import styled from "styled-components";
import Auto from "../HomePage/Images/two.png";

const BackgroundFilter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  margin-top: 1rem;
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
    margin: 2rem;
    margin-top: -5rem;
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
    margin-bottom: -3rem;
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
        <InnerContainer>
          <StandOutImage>
            <img src={Auto} alt="" />
          </StandOutImage>
          <LogoContainer>
            <BoardText>Dislike men who are so beguiled</BoardText>
            <BoardText>"On the hand, righteous indignation</BoardText>
            <BoardText>Dislike men who are so beguiled</BoardText>
            <BoardText>Weakness which through shrinking</BoardText>
            <BoardText>He endures pains avoid worse pains</BoardText>
            <BoardText>Weakness which through shrinking</BoardText>
          </LogoContainer>
        </InnerContainer>
      </BackgroundFilter>
    </>
  );
};
export default Leader;
