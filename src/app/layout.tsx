import type { Metadata } from "next";
import "./globals.css";
import ChildLayout from "./Childlayout";
import SplashScreen from "./SplashScreen";
import GoogleTagManagerAndAnalytics from "./GoogleAnalytics";

export const metadata: Metadata = {
  title: "Eduengine | Expert Digital Solutions Agency | Web, App, Cloud, AI",
  description: "Powerful digital services: web & app development, AI, cloud, cybersecurity & design. Scalable tech solutions to grow your business. Get a free consultation!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Preconnect for Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ✅ SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Eduengine, Web Development, App Development, Cloud Services, UI/UX, Cyber Security, Digital Solutions" />
        <meta name="author" content="Eduengine Technologies Pvt. Ltd." />

        {/* ✅ Open Graph Tags */}
        <meta property="og:title" content="Eduengine | Smart Digital Solutions for Modern Businesses" />
        <meta property="og:description" content="Eduengine provides full-stack IT services including web/app/cloud development, cybersecurity, and design." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eduengine.in" />
        <meta property="og:image" content="https://eduengine.in/og-home.jpg" />
        <meta property="og:site_name" content="Eduengine" />

        {/* ✅ Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eduengine | Web, App & Cloud Services" />
        <meta name="twitter:description" content="Discover full-stack digital services by Eduengine — tailored for growth, security, and performance." />
        <meta name="twitter:image" content="https://eduengine.in/og-home.jpg" />
        <meta name="twitter:site" content="@Eduengine" />

        {/* ✅ Google Verification */}
        <meta
          name="google-site-verification"
          content="IB0t8R-5FedJG83tCKBWn29rmG0xIfXfnYtnJKGP_2c"
        />

        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* ✅ GTM/Analytics */}
        <GoogleTagManagerAndAnalytics />
      </head>
      <body className="antialiased bg-background text-foreground">
        <SplashScreen />
        <ChildLayout>{children}</ChildLayout>
      </body>
    </html>
  );
}
