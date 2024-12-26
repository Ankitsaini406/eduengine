import type { Metadata } from "next";
import "./globals.css";
import DevelopmentAlert from "@/components/DevelopmentAlert";

export const metadata: Metadata = {
  title: "Eduengine",
  description: "Eduengine Technologies Pvt. Ltd.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <DevelopmentAlert />
        {children}
      </body>
    </html>
  );
}
