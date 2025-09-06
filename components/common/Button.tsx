import { ButtonProps } from "@/interfaces";

const Button = ({ label, onClick }: ButtonProps) => (
  <button onClick={onClick}>{label}</button>
);

export default Button;
