import React from "react";
import { Marginer } from "../marginer/index";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "../Countdown/common";
import { AccountContext } from "../Countdown/context";
const Login = () => {
  const { switchToSignup } = AccountContext;

  return (
    <>
      <BoxContainer>
        <FormContainer>
          <Input placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </FormContainer>
        <MutedLink href="/">Forgot Password?</MutedLink>
        <Marginer direction="vertical" margin="1em" />
        <SubmitButton>Login</SubmitButton>
        <Marginer direction="vertical" margin={5} />
        <MutedLink href="/">
          Dont have an Account?
          <BoldLink href="#" onClick={switchToSignup}>
            sign up
          </BoldLink>
        </MutedLink>
      </BoxContainer>
    </>
  );
};
export default Login;
