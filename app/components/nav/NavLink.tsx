"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactElement } from "react";

const NavLink = ({ navLink }: { navLink: { link: string; label: string; icon: ReactElement<{ className?: string }> } }) => {
  const { label, icon } = navLink;
  const pathName = usePathname(); //hook that needs to be in client mode
  const isActive = pathName === navLink.link;
  return (
    <Link
      href={navLink.link}
      className={`flex items-center gap-2 p-2 my-2 rounded-md duration-200 ${
        isActive ? "text-rose-400" : "text-gray-50 hover:text-rose-400"
      }`}
    >
      {React.cloneElement(icon, { className: "w-5 h-5" })}
      {label}
    </Link>
  );
};

export default  NavLink;