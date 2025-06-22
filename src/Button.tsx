import React, { PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren & {
  onClick: React.MouseEventHandler;
};

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};
