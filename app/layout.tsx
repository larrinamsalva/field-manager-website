import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Field Manager",
  description: "Field service business software built for the people who actually do the work.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
