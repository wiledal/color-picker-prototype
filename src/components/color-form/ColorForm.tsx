"use client";

import { ColorPicker } from "@/components/color-picker/ColorPicker";
import { ColorShape } from "@/components/color-shape/ColorShape";
import { useState } from "react";

import styles from "./ColorForm.module.scss";

export const ColorForm = () => {
  const [color, setColor] = useState("#ff00ff");

  return (
    <div className={styles.colorForm}>
      <div className={styles.input}>
        <ColorPicker onChange={setColor} />
      </div>
      <div className={styles.preview}>
        <ColorShape color={color} />
      </div>
    </div>
  );
};
