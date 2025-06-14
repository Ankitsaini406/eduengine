import type { Metadata } from "next";
import "./globals.css";
import ChildLayout from "./Childlayout";
import SplashScreen from "./SplashScreen";
import GoogleTagManagerAndAnalytics from "./GoogleAnalytics";

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
      <head>
        {/* ✅ Performance Hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ✅ Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="google-site-verification"
          content="IB0t8R-5FedJG83tCKBWn29rmG0xIfXfnYtnJKGP_2c"
        />

        <GoogleTagManagerAndAnalytics />
      </head>
      <body className="antialiased bg-background text-foreground">
        <SplashScreen />
        <ChildLayout>{children}</ChildLayout>
      </body>
    </html>
  );
}
