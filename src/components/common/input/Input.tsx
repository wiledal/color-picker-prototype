import { HTMLProps, forwardRef } from "react";

import styles from "./Input.module.scss";

interface InputProps extends HTMLProps<HTMLInputElement> {
  label: string;
  error?: string;
  help?: string;
}
/**
 * An input field with a label and optional error and help text.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, help, ...props }, forwardedRef) => {
    return (
      <div className={styles.wrapper}>
        <label className={styles.container}>
          <p className={styles.label}>{label}</p>
          <input className={styles.input} {...props} ref={forwardedRef} />
        </label>
        {help && !error && <p className={styles.help}>{help}</p>}
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
