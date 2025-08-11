import { Link } from "react-router-dom";
import { cn } from "@utils/cn";

const Button = ({ to, variant = "primary", children, className }) => {
  return (
    <Link
      to={to}
      className={cn(
        "uppercase px-11 py-3.5 md:text-base transition duration-300",
        variant === "primary" && "bg-primary text-white hover:bg-primary/90",
        variant === "secondary" &&
          "border border-white text-white hover:bg-white hover:text-black",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default Button;
