import React from "react";

export type InputProps = {
  onChange: React.ChangeEventHandler;
};

export const Input: React.FC<InputProps> = ({ onChange }) => {
  return <input onChange={onChange} placeholder="Enter text" />;
};
