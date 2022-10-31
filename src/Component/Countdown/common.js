import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MutedLink = styled.a`
  color: rgba(170, 170, 170, 1);
  font-size: 11px;
  font-weight: 500;
  margin: 10px 0;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  color: #0c2340;
  font-weight: 600;
  font-size: 11px;
  text-decoration: none;
  margin: 0 3px;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: none;
  padding: 0 10px;
  margin-top: 0.75rem;
  border-radius: 100px 100px 100px 100px;

  transition: all, 200ms ease-in-out;
  box-sizing: border-box;
  border-bottom: 1.4px solid transparent;
  &::placeholder {
    color: rgba(170, 170, 170, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.4px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    //box-shadow: 0px 0px 2px rgba(200, 200, 200, 1);
    border-bottom: 2px solid #5963c3;
  }
`;

export const SubmitButton = styled.button`
  padding: 11px 40%;
  width: 100%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: #8360c3;
  background: -webkit-linear-gradient(to right, #2e92bf, #c37260);
  background: linear-gradient(to right, #0aeba3, #5325a8);
  &:focus {
    outline: none;
  }
  &:hover {
    filter: brightness(1.03);
  }
`;
