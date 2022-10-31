import React from "react";
import styled from "styled-components";

const Dial = styled.div`
  cursor: pointer;
  font-size: 2rem;
  margin-left: 0.75rem;
  font-weight: bolder;
  color: #0d6efd;
  align-items: right;
  &:hover {
    color: black;
  }
`;
const Balance = styled.div`
  align-items: right;
  border: 2px solid;
  width: 2.55rem;
  height: 2.39rem;
  border: none;
  border-radius: 2rem;
  background-color: black;
  margin-left: 0.55rem;
  &:hover {
    background-color: #0d6efd;
  }
`;

const GoToTop = () => {
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <Balance className="top-btn" onClick={goToBtn}>
      <Dial>&#x2191;</Dial>
    </Balance>
  );
};

export default GoToTop;
