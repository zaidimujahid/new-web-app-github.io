import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Login from "./Login";
import Background from "../HomePage/Images/stype.jpg";
import { AccountContext } from "../Countdown/context";

const media = {
  desktop: "@media (max-width:1006px)",
  doul: "@media (max-width:868px)",
  double: "@media (max-width:768px)",
  base: "@media (max-width:625px)",
  things: "@media (max-width:445px)",
  thing: "@media (max-width:411px)",
  thumb: "@media (max-width:368px)",
  last: "@media (max-width:297px)",
};
const BoxContainer = styled.div`
  width: 280px;
  min-height: 560px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #94bce983;
  box-shadow: 0px 0px 2.7px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  margin-left: 45rem;
  margin-top: 3.25rem;
  ${media.desktop} {
    margin-left: 36rem;
  }
  ${media.doul} {
    margin-left: 30rem;
  }
  ${media.base} {
    margin-top: 7rem;
    overflow: none;
  }
  ${media.double} {
    margin-left: 10rem;
  }
  ${media.things} {
    margin-left: 5rem;
  }
  ${media.thing} {
    margin-top: 10rem;
    overflow: none;
  }
  ${media.thumb} {
    margin-left: 0.75rem;
    overflow: none;
  }
  ${media.last} {
    margin-left: 0.75rem;
    width: 12rem;
    overflow: none;
  }
`;
const dial = {
  dial: "@media (max-width:390px)",
  simple: "@media (max-width:380px)",
};
const SectionStyle = styled.div`
  width: 100%;
  height: 45rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${Background});
  ${dial.dial} {
    background-position: center;
    width: auto;
  }
  ${dial.simple} {
    background-position: center;
    width: auto;
    margin: 0rem;
  }
`;
const BackgroundFilter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const digital = {
  digital: "@media (max-width:451px)",
};
const TopContainer = styled.div`
  width: 100%;
  height: 255px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
  ${digital.digital} {
    overflow: none;
  }
`;

const BackDrop = styled(motion.div)`
  position: absolute;
  width: 160%;
  height: 550px;
  top: -640px;
right:-20px
  background: #8360c3; 
  background: -webkit-linear-gradient(
    to right,
    #2ebf91,
    #8360c3
  ); 
  background: linear-gradient(
    to right,
    #2ebf91,
    #8360c3
  ); 
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const HeaderText = styled.h2`
  font-weight: 600;
  color: #fff;
  z-index: 10;
  margin: 0;
  font-size: 30px;
  line-height: 1.24;
`;

const SmallText = styled.h5`
  font-weight: 500;
  color: #fff;
  z-index: 10;
  margin: 0;
  font-size: 13px;
  line-height: 1.24;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.7em;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

const AccountBox = (props) => {
  const { initialActive } = props;
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState(
    initialActive ? initialActive : "signin"
  );

  const playExpandingEffect = () => {
    setExpanded(true);

    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchActive = (active) => {
    setTimeout(() => setActive(active), 400);
  };

  const switchToSignup = () => {
    playExpandingEffect();
    switchActive("signup");
  };

  const switchToSignin = () => {
    playExpandingEffect();
    switchActive("signin");
  };

  const contextValue = {
    switchToSignup,
    switchToSignin,
    playExpandingEffect,
  };

  return (
    <SectionStyle>
      <BackgroundFilter>
        <AccountContext.Provider value={contextValue}>
          <BoxContainer>
            <TopContainer>
              <BackDrop
                variants={backdropVariants}
                transition={expandingTransition}
                initial={false}
                animate={isExpanded ? "expanded" : "collapsed"}
              />
              {active === "signin" && (
                <>
                  <HeaderContainer>
                    <HeaderText>Welcome</HeaderText>
                    <HeaderText>Back</HeaderText>
                  </HeaderContainer>
                  <SmallText>Please sign-in to continue!</SmallText>
                </>
              )}
              {active === "signup" && (
                <>
                  <HeaderContainer>
                    <HeaderText>Create </HeaderText>
                    <HeaderText>Account</HeaderText>
                  </HeaderContainer>
                  <SmallText>Please sign-up to continue!</SmallText>
                </>
              )}
            </TopContainer>
            <InnerContainer>{active === "signin" && <Login />}</InnerContainer>
          </BoxContainer>
        </AccountContext.Provider>
      </BackgroundFilter>
    </SectionStyle>
  );
};
export default AccountBox;
