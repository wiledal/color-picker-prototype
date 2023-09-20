import Script from "next/script";

/**
 * A freestanding script that triggers theme before react hydration.
 * Becasue one cannot live wihtout dark mode ✨
 */
export const PersistentTheme = () => {
  return (
    <Script id="persistent-theme">
      {`document.documentElement.dataset.theme = localStorage.getItem("theme") || "light";`}
    </Script>
  );
};
