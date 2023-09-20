import { CSSProperties, useCallback, useEffect, useState } from "react";
import styles from "./ColorShape.module.scss";
import { debounce } from "@/lib/utils/debounce";

interface ColorShapeProps {
  color: string;
}

/**
 * An animating shape for previewing a color.
 * Randomizes the shape whenever the color changes.
 */
export const ColorShape = ({ color }: ColorShapeProps) => {
  const [variant, setVariant] = useState(1);
  const [rotation, setRotation] = useState(0);

  /**
   * We debounce this effect, so that it doen't
   * flip out when the user is dragging the color picker.
   */
  const randomizeVariant = useCallback(
    debounce(() => {
      setVariant(Math.floor(Math.random() * 5) + 1);
      setRotation((rot) => rot + 180);
    }, 25),
    [setVariant, setRotation]
  );

  useEffect(randomizeVariant, [color]);

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.colorShape}
        data-variant={variant}
        style={
          {
            "--color": color,
            "--rotation": `${rotation}deg`,
          } as CSSProperties
        }
      />
    </div>
  );
};
