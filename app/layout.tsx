import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "VvE Helder | Professioneel VvE Beheer Nederland",
    template: "%s | VvE Helder",
  },
  description:
    "Professioneel VvE beheer voor heel Nederland. Administratief, financieel en technisch beheer door ervaren specialisten.",
  keywords: ["VvE beheer", "vereniging van eigenaren", "VvE administratie", "VvE financieel", "VvE technisch"],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "VvE Helder",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
