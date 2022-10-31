import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

const media = {
  desktop: "@media (max-width:600px)",
};
const ProText = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2rem;
  margin: 1rem;
  ${media.desktop} {
    display: block;
    overflow: none;
    text-align: center;
  }
`;
const Title = styled.h6`
  font-weight: bold;
`;
const Text = styled.h6`
  font-weight: bold;
`;
const Time = styled.h6`
  font-weight: bold;
`;
const Total = styled.h6`
  font-weight: bold;
`;
const Timer = styled.h6`
  font-weight: bold;
`;
const TitleTab = styled.h6`
  font-weight: bold;
`;
const TitleTabs = styled.h6`
  font-weight: bold;
  margin-left: 1rem;
`;

const Number = styled.h4`
  color: #2a9d8f;
  font-weight: bold;
`;

const PointFoot = () => {
  return (
    <>
      <Container fluid>
        <ProText>
          <TitleTab>
            <Title>SAVE YOUR TIME</Title>
            <Number>EXACTLY</Number>
          </TitleTab>
          <TitleTabs>
            <Text>MOST USED WORD</Text>
            <Number>NICE</Number>
          </TitleTabs>
          <TitleTab>
            <Time>DONT WASTE TIME</Time>
            <Number>RIGHT</Number>
          </TitleTab>
          <TitleTab>
            <Total>TYPES OF ELEMENTS</Total>
            <Number>11493</Number>
          </TitleTab>
          <TitleTab>
            <Timer>NO TIME TO DIE</Timer>
            <Number>MOVIE</Number>
          </TitleTab>
        </ProText>
      </Container>
    </>
  );
};
export default PointFoot;
