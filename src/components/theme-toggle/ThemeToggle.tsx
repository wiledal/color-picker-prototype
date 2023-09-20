"use client";

import { Button } from "@/components/common/button/Button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";

import styles from "./ThemeToggle.module.scss";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.documentElement.dataset.theme = newTheme;
  };

  return (
    <Button
      variant="secondary"
      className={styles.themeToggle}
      onClick={toggleTheme}
      label={theme === "dark" ? <MoonIcon /> : <SunIcon />}
    />
  );
};
