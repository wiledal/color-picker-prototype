import { PersistentTheme } from "@/components/persistent-theme/PersistentTheme";
import "@/styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Color Picker",
  description: "What's your favorite color?",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <PersistentTheme />

      <body className={inter.className}>{children}</body>
    </html>
  );
}
