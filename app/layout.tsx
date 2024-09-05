import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "The Sketch Pad",
  description: "Welcome to my portfolio! The Sketch Pad showcases my entire body of work, allowing you to explore my previous sketches and illustrations. You can also commission me to create a custom sketch just for you.",
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
