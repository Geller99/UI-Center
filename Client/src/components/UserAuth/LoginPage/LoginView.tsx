import { HTMLHandlers } from "./molecules/Login";
import { EmailInput, PasswordInput } from "./atoms/input";
import styled from "styled-components";
import CheckEmailButton from "./CheckEmail";
import { useDebounce } from "../../../hooks/useDebounce";
import { useEffect } from "react";
import { useState } from "react";
import LoadingDots from "../../LoadingDots/LoadingDots";
import { mockData } from "../../MockEmailData";
import { LoginButton, NoAccountButton } from "./atoms/button";

export interface Props {
  emailValue?: string;
  handleEmailValue?: (ev: HTMLHandlers) => void;
  passwordValue?: string;
  handlePasswordValue?: (ev: HTMLHandlers) => void;
  routeToPasswordResetPage?: () => void;
  routeToSignupPage?: () => void;
  handleLogin?: () => void;
  errorMessage?: string;
  emailCheck?: any
  setEmailCheck?: any
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 60%;
`;

const LoginView = ({
  emailValue,
  handleEmailValue,
  passwordValue,
  handlePasswordValue,
  routeToPasswordResetPage,
  routeToSignupPage,
  handleLogin,
  errorMessage,
}: Props) => {
  const [emailCheck, setEmailCheck] = useState(false);
  const deBounceUserInput = useDebounce(emailValue, 1000 / 100);

  useEffect(() => {
    (deBounceUserInput as string).length === 0
      ? setEmailCheck(false)
      : setEmailCheck(true);
  }, [deBounceUserInput]);

  return (
    <Form onSubmit={(ev) => ev.preventDefault()}>
      <h1> Log in </h1>
      {errorMessage && <div className="error-message"> {errorMessage} </div>}
      <EmailInput emailValue={emailValue} handleEmailValue={handleEmailValue} />
        
      <CheckEmailButton
        emailValue={emailValue}
        passwordValue={passwordValue}
        handleLogin={handleLogin}
        routeToSignupPage={routeToSignupPage}
        emailCheck={emailCheck}
        setEmailCheck = {setEmailCheck}
      />
    </Form>
  );
};

export default LoginView;
