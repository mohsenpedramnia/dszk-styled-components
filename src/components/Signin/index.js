import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  Logo,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SigninElements";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">
            <Logo />
          </Icon>
          <FormContent>
            <Form action="#">
              <FormH1>کوپن خود را وارد کنید</FormH1>
              <FormLabel htmlFor="for">رايانامه</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFro="for"> اسم عبور</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">ادامه</FormButton>
              <Text>فراموشی کردم</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
