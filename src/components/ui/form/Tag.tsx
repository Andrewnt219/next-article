import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import { motion } from "framer-motion";

type Props = {
  children: string;
  onClick: (tagValue: string) => void;
};

function Tag({ children, onClick }: Props): ReactElement {
  const onCrossClicked = () => {
    onClick(children);
  };

  return (
    <Container
      key={children}
      initial={{ scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0.5 }}
      transition={{
        scale: { type: "spring", stiffness: 200 },
        opacity: { type: "tween", duration: 0.15 },
      }}
    >
      {children}
      <IconWrapper onClick={onCrossClicked}>
        <CloseIcon aria-label="remove-tag" />
      </IconWrapper>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled(motion.span)<ContainerProps>`
  background: ${(p) => p.theme.palette.text.primary};
  display: inline-block;
  padding: 0.5rem 1rem;
  color: #fff;
  border-radius: 10rem;

  display: inline-flex;
  align-items: center;

  svg {
    margin-left: 0.25rem;

    transition: all 200ms ease;
    cursor: pointer;

    :hover {
      transform: scale(0.8);
    }
  }
`;

type IconWrapperProps = {};
const IconWrapper = styled.button<IconWrapperProps>`
  background: none;
  padding: none;
  border: none;
  color: #fff;
  display: inline-flex;
  align-items: center;
`;

export { Tag };
