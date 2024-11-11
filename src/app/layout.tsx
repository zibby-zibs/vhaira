import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: {
    default: "Vhaira | Luxury Hair Styling & Education",
    template: "%s | Vhaira",
  },
  description:
    "Through a blend of artistry and precision, Vhaira creates transformative hair experiences that celebrate your unique beauty. More than a luxury hair styling destination, we're dedicated to empowering individuals through expert education and bespoke bridal services that inspire confidence and radiate elegance.",
  keywords: [
    "Vhaira",
    "luxury hair styling",
    "bridal hair",
    "hair education",
    "hair styling courses",
    "professional hairstylist",
    "wedding hair",
    "hair styling products",
    "hair styling techniques",
    "beauty education",
    "Sijuade Omosewa",
  ],
  authors: [{ name: "Sijuade" }],
  creator: "Sijuade",
  publisher: "Vhaira",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Vhaira | Luxury Hair Styling & Education",
    description:
      "Through a blend of artistry and precision, Vhaira creates transformative hair experiences that celebrate your unique beauty. More than a luxury hair styling destination, we're dedicated to empowering individuals through expert education and bespoke bridal services.",
    url: "https://vhaira.vercel.app/",
    siteName: "Vhaira",
    images: [
      {
        url: "/vhaira-logo.png", // Make sure to add this image to your public folder
        width: 500,
        height: 500,
        alt: "Vhaira - Luxury Hair Styling",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vhaira | Luxury Hair Styling & Education",
    description:
      "Experience transformative hair styling and education at Vhaira. Where expertise meets elegance to create unforgettable beauty moments.",
    images: ["/vhaira-logo.png"], // Make sure to add this image to your public folder
    creator: "@vhaira",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  category: "Beauty & Hair Styling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-noto antialiased text-white`}>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
