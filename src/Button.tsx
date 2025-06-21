import React, { PropsWithChildren } from "react";

export type Props = PropsWithChildren & {
  onClick: React.MouseEventHandler;
};

const Button: React.FC<Props> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
