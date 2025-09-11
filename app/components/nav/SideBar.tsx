import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
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
];

const SideBar = () => {
  return (
    <div className=" col-span-2   ">
      <div className="h-screen  sticky inset-0 py-5 px-10 flex flex-col items-start bg-black/30  text-gray-50">
        <Logo />
        {NAV_LINKS.map((navLink) => (
          <NavLink key={navLink.link} navLink={navLink} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
