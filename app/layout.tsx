import type { Metadata } from "next";
import { Montserrat } from "next/font/google"
import "./globals.css";

const montserrat = Montserrat({
  weight: ['300', '400', '700'],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "app game",
  description: "app game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`background ${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
