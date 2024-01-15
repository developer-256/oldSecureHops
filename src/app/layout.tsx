import { Navbar, Footer } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Securehops",
  description: "We are concerned about your security",
  icons: {
    icon: ["/favicon.png?v=4"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col font-outfit mx-[2vw] sm:mx-[10vw] md:mx-[10vw] overflow-hidden  ">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
