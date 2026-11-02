import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Penny — Your money, in focus",
  description: "A calmer way to track everyday expenses and understand your spending.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
