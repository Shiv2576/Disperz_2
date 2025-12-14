// app/layout.tsx
import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";
import "./globals.css";
import { Web3Provider } from "../components/provider";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Disperz",
    template: "",
  },
  description: "",
  icons: {
    icon: "/Ada.svg",
    shortcut: "/Ada.svg",
    apple: "/Ada.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        {/* Grid background */}
        <div className="fixed inset-0 -z-10 grid-background" />

        <Web3Provider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <TooltipProvider>{children}</TooltipProvider>
          </ThemeProvider>
        </Web3Provider>
      </body>
    </html>
  );
}
