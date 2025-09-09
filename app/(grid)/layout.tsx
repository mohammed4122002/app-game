import React from "react";
import GridContainer from "../defaults/GridContainer";
import SideBar from "../components/nav/SideBar";
import NavBar from "../components/nav/NavBar";
import MaxWidthWrapper from "../defaults/MaxWidthWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen text-black ">
      <GridContainer col={12}>
        <SideBar/>
        <MaxWidthWrapper  className="col-span-full  lg:col-span-10">
         <NavBar/>
          {children}
        </MaxWidthWrapper>
      </GridContainer>
    </main>
  );
}
