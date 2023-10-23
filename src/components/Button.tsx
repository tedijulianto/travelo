import { ButtonHTMLAttributes, ReactNode } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

type Props = {
  children: ReactNode | string;
  className?: string;
  fullWidth?: boolean;
  outlined?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  variant?: "primary" | "google" | "facebook";
};

const Button = ({
  children,
  className = "",
  fullWidth,
  outlined = false,
  type,
  variant = "primary",
}: Props) => {
  return (
    <button
      type={type}
      className={`
      ${className}
      ${fullWidth && "w-full"} 
      ${outlined ? "border-2 border-blue-100 bg-white text-blue-100" : "bg-blue-100 text-white"}
      ${variant === "primary" && "bg-blue-100"} 
      ${variant === "google" && "bg-red-100"} 
      ${variant === "facebook" && "bg-facebook"}
      font-label font-bold p-3 h-[45px] text-sm rounded-md flex justify-center items-center`}
    >
      {variant === "facebook" && <FaFacebookF className="text-white h-6 w-6 mr-2" />}
      {variant === "google" && <FaGoogle className="text-white h-6 w-6 mr-2" />}
      {children}
    </button>
  );
};

export default Button;
