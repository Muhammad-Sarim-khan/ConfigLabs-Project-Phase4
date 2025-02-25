import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/header';
import Footer from './components/footer';
import Head from 'next/head';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "eCommerce Website",
  description: "Generated by create next app",
  viewport: "width=device-width, initial-scale=1.0"
};

export default function RootLayout({ children }) {
  return (
  
    
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
    
  );
}
