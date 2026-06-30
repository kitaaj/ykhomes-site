import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | YK Homes",
    default: "YK Homes | Interior Design Studio - Nairobi, Kenya",
  },
  description: "YK Homes is a founder led interior design studio established in 2020, based in Nairobi Kenya. We design thoughtful, tailored interiors that feel personal, functional, and timeless.",
  openGraph: {
    images: [
      {
        url: "/images/YKHomes_og.png",
        width: 1200,
        height: 630,
        alt: "YK Homes Interior Design Studio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
