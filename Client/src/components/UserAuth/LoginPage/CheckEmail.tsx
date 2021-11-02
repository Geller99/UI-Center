import { mockData } from "../../MockEmailData";
import { Button, LoginButton, NoAccountButton } from "./atoms/button";
import { Props } from "./LoginView";
import LoadingDots from "./../../LoadingDots/LoadingDots";
import { PasswordInput } from './atoms/input';

const CheckEmailButton = ({
  emailValue,
  passwordValue,
  handleLogin,
  routeToSignupPage,
  handlePasswordValue,
  emailCheck,
  setEmailCheck
}: Props) => {
  let newValue =
    emailValue?.length === 0 ? (
      <Button> Login / Signup </Button>
    ) : mockData.includes(emailValue as string) ? (
      <LoginButton
        emailValue={emailValue}
        passwordValue={passwordValue}
        handleLogin={handleLogin}
      />  
    ) :  (emailValue?.length as number) < 6 ? (
      <Button> <LoadingDots /> </Button>
    ) : (
      <NoAccountButton routeToSignupPage={routeToSignupPage} />
    );

  return newValue;
};

export default CheckEmailButton;
