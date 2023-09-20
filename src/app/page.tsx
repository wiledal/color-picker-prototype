import { ThemeToggle } from "@/components/theme-toggle/ThemeToggle";
import styles from "./page.module.scss";
import { ColorForm } from "@/components/color-form/ColorForm";
import { BackgroundText } from "@/components/background-text/BackgroundText";

export default function Home() {
  return (
    <main className={styles.main}>
      <BackgroundText />
      <ColorForm />
      <ThemeToggle />
    </main>
  );
}
