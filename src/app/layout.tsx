import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amit Kumar Pal | E-commerce Manager",
  description: "Portfolio of Amit Kumar Pal, an E-commerce Manager with 10+ years of experience in catalog management, inventory tracking, Shopify store management, order processing, and multi-channel marketplace operations.",
  keywords: [
    "E-commerce Manager",
    "Marketplace Management",
    "Shopify Store Management",
    "Amazon Specialist",
    "Flipkart Account Manager",
    "Catalog Management",
    "Inventory Operations",
    "Data Analyst",
    "VLOOKUP Excel Specialist",
    "Amit Kumar Pal"
  ],
  authors: [{ name: "Amit Kumar Pal" }],
  creator: "Amit Kumar Pal",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://amitpal-portfolio.vercel.app",
    title: "Amit Kumar Pal | E-commerce Manager",
    description: "10+ Years of Experience in E-commerce Marketplace Management, Shopify, Product Listings, Inventory Operations & Data Management.",
    siteName: "Amit Kumar Pal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Kumar Pal | E-commerce Manager",
    description: "10+ Years of Experience in E-commerce Marketplace Management, Shopify, Product Listings, Inventory Operations & Data Management.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen relative">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
