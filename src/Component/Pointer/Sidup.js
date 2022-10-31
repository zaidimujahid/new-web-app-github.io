import React from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "../Countdown/common";
import { AccountContext } from "../Countdown/context";

const Sidup = () => {
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
        <SubmitButton>Signup</SubmitButton>
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
export default Sidup;
