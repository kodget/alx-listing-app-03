import { ButtonProps } from "@/interfaces";
import HomeIcon from "./HomeIcon";

const Button = ({ label, onClick, type, className }: ButtonProps) => (
  <button type={type} onClick={onClick} className={className}>
    {/* Text (hidden on small screens) */}
    <span className="max-[600px]:hidden inline">{label}</span>

    {/* Icon (only visible on small screens) */}
    <HomeIcon />
  </button>
);

export default Button;
