import React from "react";
import { NavLink } from "react-router-dom";
import BoradLogo from "../boardLogo";
import styled from "styled-components";
import { Container, Nav, Navbar } from "react-bootstrap";

const media = {
  desktop: "@media (max-width:411px)",
  dark: "@media (max-width:274px)",
};
const AdjustHere = styled.div`
  width: 100%;
  height: 65px;
  align-item: center;
  display: flex;
  justify-content: space-between;
  padding: 0 1.2rem;
  ${media.desktop} {
    overflow: none;
    margin-left: 0rem;
  }
  ${media.dark} {
    display: block;
    overflow: none;
    margin-left: -1.45rem;
  }
`;
const Navdo = () => {
  return (
    <>
      <AdjustHere>
        <BoradLogo />
        <Navbar collapseOnSelect style={{}} expand="lg" id="made">
          <Container>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              style={{ backgroundColor: "white" }}
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto  flex-grow-1">
                <NavLink
                  className="nav-item nav-link"
                  to="/"
                  style={{
                    fontSize: "0.80rem",
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
                  Home
                </NavLink>
                <NavLink
                  className="nav-item nav-link"
                  to="/Beema"
                  style={{
                    fontSize: "0.80rem",
                    fontWeight: "bold",

                    backgroundColor: "#2a9d8f",
                    color: "white",
                    borderRadius: "3px",
                    border: "none",
                    padding: "4.4px",
                    marginRight: "10px",
                  }}
                >
                  Beema
                </NavLink>

                <NavLink
                  className="nav-item nav-link"
                  to="/CountDown"
                  style={{
                    fontSize: "0.80rem",
                    fontWeight: "bold",

                    backgroundColor: "#2a9d8f",
                    color: "white",
                    borderRadius: "3px",
                    border: "none",
                    padding: "4.4px",
                    marginRight: "10px",
                  }}
                >
                  Signin
                </NavLink>

                <NavLink
                  className="nav-item nav-link"
                  to="/Pointer"
                  style={{
                    fontSize: "0.80rem",
                    fontWeight: "bold",

                    backgroundColor: "#2a9d8f",
                    color: "white",
                    borderRadius: "3px",
                    border: "none",
                    padding: "4.4px",
                    marginRight: "10px",
                  }}
                >
                  Signup
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </AdjustHere>
    </>
  );
};
export default Navdo;
