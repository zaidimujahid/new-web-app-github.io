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
  const { switchToSignin } = AccountContext;

  return (
    <>
      <BoxContainer>
        <FormContainer>
          <Input placeholder="Full Name" />
          <Input placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
        </FormContainer>
        <Marginer direction="vertical" margin="1em" />
        <SubmitButton>Signup</SubmitButton>
        <Marginer direction="vertical" margin={5} />
        <MutedLink href="#">
          Already have an account?
          <BoldLink href="#" onClick={switchToSignin}>
            sign in
          </BoldLink>
        </MutedLink>
      </BoxContainer>
    </>
  );
};
export default Login;
