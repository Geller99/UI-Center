import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LoginView from "../LoginView";

export type HTMLHandlers = React.ChangeEvent<HTMLInputElement>;

const Login = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const routeHistory = useHistory();

  const routeToPasswordResetPage = () => {
    return routeHistory.push("/ResetPage");
  };

  const routeToSignupPage = () => {
    return routeHistory.push("/Signup");
  };

  const handleEmailValue = (ev: HTMLHandlers) => {
    setEmailValue(ev.target.value);
    console.log(emailValue);
  };

  const handlePasswordValue = (ev: HTMLHandlers) => {
    setPasswordValue(ev.target.value);
  };

  const handleLogin = () => {
    alert("Login Not Implemented!");
  };

  return (
    <LoginView
      routeToPasswordResetPage={routeToPasswordResetPage}
      routeToSignupPage={routeToSignupPage}
      handleEmailValue={handleEmailValue}
      handlePasswordValue={handlePasswordValue}
      handleLogin={handleLogin}
      emailValue={emailValue}
      passwordValue={passwordValue}
      errorMessage={errorMessage}
    />
  );
};

export default Login;
