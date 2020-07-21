import MuiButton from "@material-ui/core/Button";
import styled, { keyframes } from "styled-components";

const pop = keyframes`
  0% {
    transform: scale(1);
  }

  60% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
`;

const SubmitButton = styled(MuiButton).attrs({
  variant: "contained",
  color: "primary",
  type: "submit",
})`
  display: block;
  width: 100%;
  font-size: inherit;
  padding: 0.75rem 0;
  max-width: 35rem;
  margin: 0 auto;

  :not(:disabled) {
    animation: 300ms ${pop} linear;
  }
`;

export { SubmitButton };
