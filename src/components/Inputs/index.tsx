import { ChangeEventHandler, InputHTMLAttributes } from "react";
import { StyledInput } from "./styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: "small" | "large";
}

const Input = ({ inputSize, ...props }: InputProps) => {
  return <StyledInput inputSize={inputSize} {...props} /> ;
};

export default Input;
