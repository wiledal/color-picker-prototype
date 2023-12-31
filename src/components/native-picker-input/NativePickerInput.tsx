import clsx from "clsx";
import { PaletteIcon } from "lucide-react";
import { CSSProperties, HTMLProps } from "react";

import styles from "./NativePickerInput.module.scss";

/**
 * A button that triggers a native color picker.
 */
export const NativePickerInput = ({
  className,
  ...props
}: HTMLProps<HTMLInputElement>) => {
  return (
    <label className={clsx(styles.nativePickerInput, className)}>
      <PaletteIcon className={styles.icon} />
      <input className={styles.input} type="color" {...props} />
    </label>
  );
};
