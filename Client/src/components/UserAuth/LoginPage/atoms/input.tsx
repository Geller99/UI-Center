import styled from "styled-components";
import { Props } from "../LoginView";

export const Input = styled.input`
  font-size: 14px;
  text-overflow: ellipsis;
  color: rgb(38, 35, 39);
  border: 1px solid rgb(167, 214, 249);
  background: rgba(232, 237, 249, 0.5);
  border-radius: 8px;
  transition: border-color 0.2s ease 0s;
  padding: 17px 16px;
  width: 15%;
  height: 15%;
  display: block;

  &:focus {
    outline: none;
  }
`;

export const EmailInput = ({ emailValue, handleEmailValue }: Props) => {
  return (
    <Input
      type="text"
      value={emailValue}
      onChange={handleEmailValue}
      placeholder="example@email.com"
    />
  );
};

export const PasswordInput = ({
  passwordValue,
  handlePasswordValue,
}: Props) => {
  return (
    <Input
      type="password"
      value={passwordValue}
      onChange={handlePasswordValue}
      placeholder="1munfortgettab13..."
    />
  );
};
