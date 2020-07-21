import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { ReactElement } from "react";
import styled from "styled-components";
import { Link } from "../navigation/Link";
import { Form as BaseForm } from "../ui/form/Form";

type FormProps = {};
const Form = styled(BaseForm)<FormProps>`
  border-radius: 4px;
`;

type FooterTextProps = {};
const FooterText = styled(Link)<FooterTextProps>`
  display: inline-block;
  color: ${(p) => p.theme.palette.secondary.main};
  width: max-content;

  position: relative;
  cursor: pointer;

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0.1px;
    height: 1px;
    background: currentColor;

    transition: all 200ms ease;
  }

  :hover ::after,
  :active ::after,
  :focus ::after {
    width: 100%;
  }
`;

type ShowPasswordIconProps = {
  passwordIsShown: boolean;
  handleClick: () => void;
};
function ShowPasswordIcon({
  passwordIsShown,
  handleClick,
}: ShowPasswordIconProps): ReactElement {
  return (
    <IconButton
      style={{
        position: "absolute",
        right: "0",
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={handleClick}
    >
      {passwordIsShown ? <VisibilityIcon /> : <VisibilityOffIcon />}
    </IconButton>
  );
}

type FormComponents = {
  Form: typeof Form;
  FooterText: typeof FooterText;
  ShowPasswordIcon: typeof ShowPasswordIcon;
};

export const AuthForm: FormComponents = {
  Form,
  FooterText,
  ShowPasswordIcon,
};
