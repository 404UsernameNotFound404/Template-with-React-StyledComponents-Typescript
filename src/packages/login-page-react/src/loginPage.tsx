import React, { useState } from "react";
import styled from "styled-components";
import {
  TextField,
  Button,
  FormControl,
  Input,
  OutlinedInput,
} from "@material-ui/core";
import logo from "../assets/logo.png";
import { AppTheme } from "../../../App";

const Page = styled.div`
  width: 65rem;
  min-height: 100vh;
  margin: auto;
  display: flex;
  justify-content: center;
  @media ${(props) => props.theme.screenSizes.mobile} {
    width: 90%;
  }
`;

const Content = styled.div`
  width: 40%;
  margin: auto;
  display: block;
  @media ${(props) => props.theme.screenSizes.mobile} {
    width: 100%;
  }
`;

const Logo = styled.img`
  width: 100%;
  margin: auto;
  margin-bottom: 3rem;
  display: block;
  @media ${(props) => props.theme.screenSizes.mobile} {
    width: 90%;
  }
`;

const StyledFormControl = styled(FormControl)`
  && {
    display: block;
    margin: 1rem auto;
    width: 80%;
    color: ${(props) => props.theme.colors.primaryText} !important;
  }
`;

const StyledOutlinedInput = styled(OutlinedInput)`
  && {
    width: 100%;
  }
  && input {
    color: ${(props) => props.theme.colors.primaryText};
  }
  && fieldset {
    border-color: ${(props) => props.theme.colors.primaryText} !important;
  }
`;

const StyledButton = styled(Button)`
  && {
    width: 40%;
    background-color: ${(props) => props.theme.colors.success};
    color: ${(props) => props.theme.colors.primaryBackground} !important;
    margin: auto;
    margin-top: 2rem;
    display: block;
    height: 3rem;
    font-size: 1.25rem;
  }

  &&:hover {
    background-color: ${(props) => props.theme.colors.success} !important;
    opacity: 0.8;
  }
`;

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onEmailChange = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(ev.target.value);
  const onPasswordChange = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(ev.target.value);

  return (
    <Page>
      <Content>
        <Logo src={logo} />
        <StyledFormControl variant={"outlined"}>
          <StyledOutlinedInput
            style={{ color: AppTheme.colors.primaryText }}
            fullWidth
            placeholder={"Email"}
            value={email}
            onChange={onEmailChange}
          />
        </StyledFormControl>
        <StyledFormControl variant={"outlined"}>
          <StyledOutlinedInput
            fullWidth
            placeholder={"Password"}
            value={password}
            type={"password"}
            onChange={onPasswordChange}
          />
        </StyledFormControl>
        <StyledButton variant={"contained"}>Login</StyledButton>
      </Content>
    </Page>
  );
};
