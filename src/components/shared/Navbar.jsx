"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Caregivers", href: "/caregivers" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact" },
  ];

  const linkClass = (href) =>
    `rounded-full px-4 py-2 transition-all duration-300 ${
      pathname === href
        ? "bg-primary text-white"
        : "hover:bg-base-200 text-neutral"
    }`;

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 lg:px-8">
      {/* Left */}
      <div className="navbar-start">
        {/* Mobile menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-xl w-52"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link className={linkClass(link.href)} href={link.href}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <Logo />
      </div>

      {/* Center: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link className={linkClass(link.href)} href={link.href}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right CTA */}
      <div className="navbar-end">
        <Link
          href="/book-care"
          className="btn btn-primary rounded-full px-6 text-white"
        >
          Book Care
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
