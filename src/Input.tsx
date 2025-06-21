import React from "react";

export type Props = {
  onChange: React.ChangeEventHandler;
};

const Input: React.FC<Props> = ({ onChange }) => {
  return <input onChange={onChange} />;
};

export default Input;
