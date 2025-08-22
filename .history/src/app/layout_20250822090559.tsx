import "./globals.css";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import ScrollToTop from "./components/scroll-to-top";

// ... other imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ... your existing code

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={manrope.className}>
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
          {/*
            Add the DaisyUI CDN link here. It provides all the necessary
            styles for the carousel component and other DaisyUI components.
          */}
          <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.2/dist/full.min.css" rel="stylesheet" type="text/css" />
          <Header />
          {children}
          {!hideLayout && <Footer />}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}