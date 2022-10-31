import React from "react";

import styled from "styled-components";

const MDBContainer = styled.div`
  height: 22rem;
  background-color: rgba(38, 70, 83, 0.9);
`;
const Title = styled.h6`
  text-align: center;
  font-size: 1.75rem;
  padding: 1rem;
  color: white;
  font-weight: bold;
`;

const MDBTestimonial = styled.div``;
const MDBAvatar = styled.div`
  text-align: center;
`;
const MDBRow = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Marker = styled.h6`
  color: white;
  text-align: center;
`;

const Testimonial = () => {
  return (
    <>
      <MDBContainer>
        <Title>Testimonials</Title>
        <MDBRow>
          <MDBTestimonial>
            <MDBAvatar>
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).webp"
                alt=""
                style={{
                  width: "9rem",
                  marginTop: "1rem",
                  borderRadius: "9rem",
                }}
              />
            </MDBAvatar>
            <Marker>Anna Deynah</Marker>
            <Marker>Web Designer</Marker>
            <Marker>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              tenetur.
            </Marker>
          </MDBTestimonial>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Testimonial;
