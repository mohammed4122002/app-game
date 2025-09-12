import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import NavLink from "./NavLink";
import Logo from "@/app/defaults/logo";
export const NAV_LINKS = [
  {
    link: "/",
    label: "Home",
    icon: <GoHomeFill />,
  },
  {
    link: "/category",
    label: "Category",
    icon: <MdDashboard />,
  },
  {
    link: "/games",
    label: "Games",
    icon: <MdDashboard />,
  },
  {
    link: "/wishlist",
    label: "Wishlist",
    icon: <FaHeart />,
  },
  {
    link: "/friends",
    label: "Friends",
    icon: <BsFillPeopleFill />,
  },
  {
    link: "/settings",
    label: "Settings",
    icon: <FiSettings />,
  },
  {
    link: "/help",
    label: "Help",
    icon: <FiHelpCircle />,
  },
];

const SideBar = () => {
  return (
    <div className=" hidden md:block col-span-2">
      <div className="h-screen sticky inset-0 py-5 px-6 lg:px-10 flex flex-col items-start bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition duration-300 text-gray-50">
        <Logo />
        {NAV_LINKS.map((navLink) => (
          <NavLink key={navLink.link} navLink={navLink} />
        ))}

        <div className="mt-auto text-sm text-gray-500">
          &copy; {new Date().getFullYear()} GameHub. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default SideBar;
