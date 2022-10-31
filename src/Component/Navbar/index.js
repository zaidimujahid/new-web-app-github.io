import React from "react";
import { NavLink } from "react-router-dom";
import BoradLogo from "../boardLogo";
import styled from "styled-components";

import { Container, Nav, Navbar } from "react-bootstrap";

const media = {
  desktop: "@media (max-width:411px)",
  dark: "@media (max-width:233px)",
};
const AdjustHere = styled.div`
  width: 100%;
  height: 65px;
  align-item: center;
  display: flex;
  justify-content: space-between;
  padding: 0 1.2rem;
  ${media.desktop} {
    display: block;
    overflow: none;
    margin-left: 0rem;
  }
  ${media.dark} {
    overflow: none;
    margin-left: -1.45rem;
  }
`;

const NavDo = () => {
  return (
    <>
      <AdjustHere>
        <BoradLogo />
        <Navbar>
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto justify-content-between flex-grow-1">
                <NavLink
                  className="nav-item nav-link"
                  to="/"
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    backgroundColor: "#2a9d8f",
                    color: "white",
                    borderRadius: "3px",
                    border: "none",
                    padding: "4.4px",
                    marginRight: "10px",
                    overflow: "none;",
                  }}
                >
                  HOME
                </NavLink>

                <NavLink
                  className="nav-item nav-link"
                  to="/CountDown"
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    backgroundColor: "#2a9d8f",
                    color: "white",
                    borderRadius: "3px",
                    border: "none",
                    padding: "4.4px",
                    marginRight: "10px",
                  }}
                >
                  LOGIN
                </NavLink>
                <NavLink
                  className="nav-item nav-link"
                  to="/Pointer"
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    backgroundColor: "#2a9d8f",
                    color: "white",
                    borderRadius: "3px",
                    border: "none",
                    padding: "4.4px",
                    marginRight: "10px",
                  }}
                >
                  SIGNUP
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </AdjustHere>
    </>
  );
};
export default NavDo;
