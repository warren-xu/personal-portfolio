import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Projects",
  description: "A curated selection of my personal projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="site-body">{children}</body>
    </html>
  );
}
