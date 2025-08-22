import Link from "next/link";
import React from "react";
import { StickyBanner } from "../ui/sticky-banner";
type NavItems = {
  href: string;
  label: string;
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
      href: "/#contact",
      label: "Contact",
    },
    {
      href: "/#menu",
      label: "Menu",
    },
  ];
  return (
    <header className="sticky top-0 z-10 mx-auto max-w-md border-2 border-yellow-300 bg-primary p-8 text-white">
      <nav className="flex items-center justify-center">
        <ul className="flex items-center justify-center space-x-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
