import { HTMLProps, ReactNode } from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

export type ButtonVariant = "primary" | "secondary" | "rainbow";

interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement>, "label"> {
  label: ReactNode;
  type?: "button" | "submit";
  variant?: ButtonVariant;
}

/**
 * A button component with variants.
 */
export const Button = ({
  label,
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(className, styles.button, styles["variant--" + variant])}
      type={type}
      {...props}
    >
      {label}
    </button>
  );
};
