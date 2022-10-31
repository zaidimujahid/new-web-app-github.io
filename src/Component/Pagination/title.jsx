import React from "react";
import { MDBPagination, MDBPaginationItem } from "mdb-react-ui-kit";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const MDBPaginationLink = styled.div`
  background-color: black;
  width: 3rem;
  text-align: center;
  color: #0d6efd;
  margin: 0.15rem;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #0d6efd;
    color: black;
    font-weight: bold;
  }
`;
const Title = () => {
  const history = useHistory();

  const Mind = () => {
    history.push("/HomePage");
  };
  const Rate = () => {
    history.push("/Countdown");
  };
  const Digits = () => {
    history.push("/Pointer");
  };
  const Beema = () => {
    history.push("/Beema");
  };

  return (
    <nav aria-label="Page navigation example">
      <MDBPagination className="mb-0" style={{ justifyContent: "center" }}>
        <MDBPaginationItem>
          <MDBPaginationLink href="/" onClick={Mind}>
            1
          </MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink onClick={Rate} href="#">
            2
          </MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href="#" onClick={Digits}>
            3
          </MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href="#" onClick={Beema}>
            4
          </MDBPaginationLink>
        </MDBPaginationItem>
      </MDBPagination>
    </nav>
  );
};
export default Title;
