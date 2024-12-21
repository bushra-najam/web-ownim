import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navigation/Navbar";

export const metadata: Metadata = {
  title: "Ownim",
  description: "we own your trust",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      style={{overflowX:'hidden'}}
      >
    <Navbar/>
        {children}
      </body>
    </html>
  );
}
