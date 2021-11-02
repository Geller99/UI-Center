import styled from "styled-components";
import { Props } from "../LoginView";

export const Button = styled.button`
  background-color: papayawhip;
  color: black;
  text-align: center;
  font-weight: 700;
  border: 1px solid #fff;
  border-radius: 5px;
  height: 50%;
  width: 10%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;  

  &:hover {
    border-bottom: 1px solid blanchedalmond;
  }

  &:disabled {
    background: #e8ab9e;
  }
`;

export const LoginButton = ({
  emailValue,
  passwordValue,
  handleLogin,
}: Props) => {
  return (
    <Button disabled={!emailValue || !passwordValue} onClick={handleLogin}>
      Log in
    </Button>
  );
};

export const ForgotPasswordButton = ({ routeToPasswordResetPage }: Props) => {
  return (
    <Button onClick={routeToPasswordResetPage}>
      Forgot Password? Click Here!
    </Button>
  );
};

export const NoAccountButton = ({ routeToSignupPage }: Props) => {
  return (
    <Button onClick={routeToSignupPage}>Don't have an account? Signup!</Button>
  );
};
