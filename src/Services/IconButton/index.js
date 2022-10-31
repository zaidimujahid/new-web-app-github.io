import React from "react";
import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import Container from "react-bootstrap/Container";

const media = {
  desktop: "@media (max-width:670px)",
};
const Head = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2rem;
  ${media.desktop} {
    display: grid;
    overflow: none;
    background-color: rgba(38, 70, 83, 0.9);
  }
`;
const balance = {
  desktop: "@media (max-width:670px)",
};
const Blue = styled.button`
  color: black;
  background-color: #3b5998;
  border: none;
  width: 8rem;
  border-radius: 3px;
  font-weight: bold;
  height: 2rem;
  ${balance.desktop} {
    overflow: none;
    margin: 0.45rem;
  }
`;
const bounce = {
  desktop: "@media (max-width:670px)",
};
const Linkdin = styled.button`
  color: black;
  background-color: #0072b1;
  border: none;
  width: 8rem;
  border-radius: 3px;
  font-weight: bold;
  height: 2rem;
  ${bounce.desktop} {
    overflow: none;
    margin: 0.45rem;
  }
`;
const care = {
  desktop: "@media (max-width:670px)",
};
const Insta = styled.button`
  color: transparent;
  ${care.desktop} {
    overflow: none;
    margin: 0.45rem;
  }
  background: -webkit-radial-gradient(
    30% 107%,
    circle,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  background: -o-radial-gradient(
    30% 107%,
    circle,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  background: -webkit-radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  border: none;
  width: 8rem;
  border-radius: 3px;
  color: black;
  font-weight: bold;
  height: 2rem;
`;
const equality = {
  desktop: "@media (max-width:670px)",
};
const Whats = styled.button`
  color: black;
  background-color: #25d366;
  border: none;
  width: 8rem;
  border-radius: 3px;
  font-weight: bold;
  height: 2rem;
  ${equality.desktop} {
    overflow: none;
    margin: 0.45rem;
  }
`;
const equal = {
  desktop: "@media (max-width:670px)",
};
const Twit = styled.button`
  color: black;
  background-color: #00acee;
  border: none;
  width: 8rem;
  border-radius: 3px;
  font-weight: bold;
  height: 2rem;
  ${equal.desktop} {
    overflow: none;
    margin: 0.45rem;
  }
`;

const Write = styled.div`
  text-align: center;
`;

const LastPoint = styled.h6`
  font-weight: bold;
`;

const IconButton = () => {
  return (
    <>
      <Container fluid>
        <Head>
          <Blue>
            <FaFacebookF
              background-color="#3b5998"
              color="white"
              margin-right="13rem"
              className="fa-6xs"
              style={{ marginRight: "1rem" }}
            />
            Facebook
          </Blue>
          <Linkdin>
            <FaLinkedinIn
              className="ai-6xs mr-5"
              style={{
                marginRight: "1rem",
                color: "white",
              }}
            />
            Linkdin
          </Linkdin>
          <Insta>
            <BsInstagram
              className="ai-6xs mr-5"
              style={{
                marginRight: "1rem",
                color: "black",
              }}
            />
            Instagram
          </Insta>
          <Whats>
            <BsWhatsapp
              className="ai-6xs mr-5"
              style={{
                marginRight: "1rem",
              }}
            />
            Whatsapp
          </Whats>
          <Twit>
            <FiTwitter
              className="ai-6xs mr-5"
              style={{
                marginRight: "1rem",
                Color: "white",
              }}
            />
            twitter
          </Twit>
        </Head>
      </Container>
      <Container>
        <hr
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "black",
          }}
        ></hr>
        <Write>
          <LastPoint>© 2022 All Rights Reserved By SafeZoon</LastPoint>
        </Write>
      </Container>
    </>
  );
};
export default IconButton;
