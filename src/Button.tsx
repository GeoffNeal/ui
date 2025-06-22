import * as React from "react";
import styled from "styled-components";
import classnames from "classnames";

type ButtonSizes = {
  size?: "sm" | "md" | "lg";
};

const BaseButton = styled.button<ButtonSizes>`
  font-family: var(--font-family);
  font-size: var(--font-size-sm);
  padding: var(--mid-padding) var(--default-padding);
  border: none;
  cursor: pointer;
  transition: background-color var(--default-transition-time)
    var(--default-transition-type);
  box-shadow: var(--default-box-shadow);
  border-radius: var(--default-border-radius);

  &.sm {
    font-size: var(--font-size-xs);
    padding: var(--small-padding) var(--default-padding);
  }

  &.lg {
    font-size: var(--font-size-md);
    padding: var(--default-padding);
  }

  &.fullWidth {
    width: 100%;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const ButtonPrimary = styled(BaseButton)`
  background-color: var(--brand-01-100);
  color: var(--off-white);

  &.inverted {
    background-color: var(--off-white);
    color: var(--brand-01-100);
  }

  &:hover {
    background-color: var(--brand-01-120);
  }

  &:hover.inverted {
    background-color: var(--brand-01-05);
    color: var(--brand-01-120);
  }

  &:disabled {
    background-color: var(--brand-01-10);
  }

  &:disabled.inverted {
    background-color: var(--off-white);
    color: var(--brand-01-10);
  }
`;

export const ButtonSecondary = styled(BaseButton)`
  background-color: var(--brand-02-100);
  color: var(--off-white);

  &.inverted {
    background-color: var(--off-white);
    color: var(--brand-02-100);
  }

  &:hover {
    background-color: var(--brand-02-120);
  }

  &:hover.inverted {
    background-color: var(--brand-02-05);
    color: var(--brand-02-120);
  }

  &:disabled {
    background-color: var(--brand-02-10);
  }

  &:disabled.inverted {
    background-color: var(--off-white);
    color: var(--brand-02-10);
  }
`;

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: "primary" | "secondary";
  fullWidth?: boolean;
  inverted?: boolean;
} & ButtonSizes;

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  theme = "primary",
  size = "md",
  fullWidth,
  inverted,
  className,
  children,
  ...props
}) => {
  if (!["primary", "secondary"].includes(theme)) {
    throw new Error(`Invalid theme \`${theme}\` provided`);
  }
  const classes = classnames({
    sm: size === "sm",
    lg: size === "lg",
    fullWidth,
    inverted,
  });
  const ButtonType = theme === "primary" ? ButtonPrimary : ButtonSecondary;
  return (
    <ButtonType
      className={`${className ? className : ""} ${classes}`}
      {...props}
    >
      {children}
    </ButtonType>
  );
};
