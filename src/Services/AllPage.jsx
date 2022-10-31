import React from "react";
import styled from "styled-components";
import Services from "../Services/Cars";
import Garden from "../Services/Garden";
import Flower from "../Services/Flower";
import Grass from "../Services/Grass";

const SameContainer = styled.div``;
const Middle = styled.h4`
  text-align: center;
  margin: 3rem;
  font-size: 1.75rem;
  font-weight: 5rem;
`;

const btn = {
  desktop: "@media (max-width:767px)",
};
const PointerStart = styled.div`
  display: flex;
  justify-content: space-evenly;
  justify-items: center;
  ${btn.desktop} {
    display: block;
    overflow: none;
  }
`;
const digital = {
  desktop: "@media (max-width:767px)",
};
const PointerEnd = styled.div`
  display: flex;
  justify-content: space-evenly;
  justify-items: center;
  ${digital.desktop} {
    display: block;
    overflow: none;
  }
`;
const AllPage = () => {
  return (
    <>
      <SameContainer>
        <Middle>Most Used Service & More </Middle>
        <PointerStart>
          <Services />
          <Garden />
          <Flower />
        </PointerStart>
        <PointerEnd>
          <Flower />
          <Grass />
          <Garden />
        </PointerEnd>
      </SameContainer>
    </>
  );
};

export default AllPage;
