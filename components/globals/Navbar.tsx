import Link from "next/link";
import React from "react";
import Image from "next/image";
type NavItems = {
  href: string;
  label: string;
  icon?: string;
};
const Navbar = () => {
  const navItems: NavItems[] = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/#about",
      label: "About",
    },
    {
      href: "/",
      label: "Contact",
      icon: "/logo.svg",
    },
    {
      href: "/#contact",
      label: "Contact",
    },
    {
      href: "/#menu",
      label: "Menu",
    },
  ];
  return (
    <header className="relative top-0 z-50 mt-14 max-w-md rounded-full border-2 border-none bg-[#2d5a27] px-10 py-4 text-white backdrop-blur-lg">
      <nav className="flex items-center justify-center">
        <ul className="flex items-center justify-center space-x-4 text-white">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.icon ? item.icon : item.href}>
                {item.icon ? (
                  <Image src={item.icon} width={30} height={30} alt="logo" />
                ) : (
                  item.label
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
