"use client";
import "./globals.css";
import { HeroUIProvider } from "@heroui/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="scroll-smooth">
        <HeroUIProvider>{children}</HeroUIProvider>
      </body>
    </html>
  );
}
