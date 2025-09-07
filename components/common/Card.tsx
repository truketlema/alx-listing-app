import { CardProps } from "../../interfaces";

export default function Card({ title }: CardProps) {
  return <div className="p-4 bg-gray-200 rounded shadow">{title}</div>;
}
