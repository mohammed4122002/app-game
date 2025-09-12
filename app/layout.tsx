import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ButtonGradient from "./components/nav/ButtonGradient";
import GridContainer from "./defaults/GridContainer";
import MaxWidthWrapper from "./defaults/MaxWidthWrapper";
import SideBar from "./components/nav/SideBar";
import NavBar from "./components/nav/NavBar";

const montserrat = Montserrat({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "X Box",
  description: "X Box game app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`background ${montserrat.className} antialiased`}>
        <main className="h-screen text-black">
          <ButtonGradient />
          <GridContainer col={12}>
            <SideBar />
            <MaxWidthWrapper className="col-span-full  lg:col-span-10">
              <NavBar />
              {children}
            </MaxWidthWrapper>
          </GridContainer>
        </main>
      </body>
    </html>
  );
}
