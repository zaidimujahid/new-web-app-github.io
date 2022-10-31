import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

const Plan = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  margin-top: 3rem;
`;
const media = {
  desktop: "@media (max-width:767px)",
};
const Valid = styled.div`
  display: flex;
  justify-content: space-evenly;
  ${media.desktop} {
    display: block;
    overflow: none;
  }
`;

const InBut = styled.div``;
const challange = {
  desktops: "@media (max-width:237px)",
  desktop: "@media (max-width:767px)",
};
const Search = styled.input`
  background-color: rgba(38, 70, 83, 0.9);
  color: white;
  border: none;
  width: 20rem;
  height: 100%;
  overflow: none;
  padding: 0.75rem;
  ${challange.desktop} {
    width: auto;
  }
  ${challange.desktops} {
    width: 8rem;
  }
  ::placeholder {
    padding: 0.75rem;
    color: white;
  }
`;
const btn = {
  desktop: "@media (max-width:767px)",
};
const Button = styled.button`
  background-color: #2a9d8f;
  color: white;
  border-radius: 3px;
  font-size: 18px;
  font-weight: bold;
  outline: none;
  padding: 8px;
  height: auto;
  border: none;
  text-align: center;
  margin-left: 0.75rem;
  ${btn.desktop} {
    margin-top: 0.45rem;
    overflow: none;
  }
`;

const Subject = () => {
  return (
    <Container>
      <Plan>
        <Valid>
          <h3>Get Our Newsletter</h3>
          <InBut>
            <Search placeholder="Enter Your Email Address" />
            <Button>Click Here</Button>
          </InBut>
        </Valid>
      </Plan>
    </Container>
  );
};
export default Subject;
