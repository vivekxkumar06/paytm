import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import PaytmFooter from "../components/PaytmFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paytm — UPI, Recharges, Bill Payments & More",
  description:
    "India's most-trusted payments app. Recharge mobile, pay electricity bills, book tickets, and transfer money instantly using Paytm UPI.",
  keywords: [
    "Paytm",
    "UPI",
    "mobile recharge",
    "bill payment",
    "online payment",
    "FASTag",
    "DTH recharge",
    "insurance",
  ],
  openGraph: {
    title: "Paytm — UPI, Recharges, Bill Payments & More",
    description:
      "India's most-trusted payments app. Recharge mobile, pay electricity bills, book tickets, and transfer money instantly using Paytm UPI.",
    url: "https://paytm.com",
    siteName: "Paytm",
    locale: "en_IN",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
       <Navbar />
       <main  className="flex-1">
           {children}

       </main>
       <PaytmFooter />
     
        </body>
    </html>
  );
}
