import { CardProps } from "@/interfaces";

const Card = ({ title, content }: CardProps) => (
  <div>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

export default Card;
