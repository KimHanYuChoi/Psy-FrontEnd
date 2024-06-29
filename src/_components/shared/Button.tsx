import { ComponentProps } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/classnames";

const ButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[10px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-mint text-primary-foreground hover:bg-primary/90",
        more: "bg-transparent hover:underline text-black-800",
        register: "bg-black hover:bg-gray-800 text-white",
        cancel: "bg-transparent border border-gray-300 hover:bg-gray-300 hover:text-white text-gray-500",
      },
      size: {
        default: "text-lg px-6 py-[9px]",
        small: "text-sm py-1 px-2",
        medium: "text-base py-2 px-6",
        large: "text-lg py-3 px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps extends ComponentProps<"button">, VariantProps<typeof ButtonVariants> {}

const Button = ({ variant, size, className, children, ...props }: ButtonProps) => {
  return (
    <button className={cn(ButtonVariants({ variant, size, className }))} {...props}>
      {children}
    </button>
  );
};

export default Button;
