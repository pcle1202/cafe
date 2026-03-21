"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href) => pathname === href;

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#f9f8f3] border-b border-black/5">
        <div className="relative flex items-center justify-center px-6 h-20">
          {/* Logo */}
          <Link
            href="/"
            className="absolute left-6 top-1/2 -translate-y-1/2 z-50"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src="/images/logo.PNG"
              alt="Cafe 104"
              className="h-12 w-auto md:h-14"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12 text-xl font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive(link.href)
                    ? "border-b-4 border-[#7FA695] pb-1"
                    : "opacity-70 hover:opacity-100 transition"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 z-50 flex md:hidden flex-col justify-center items-center w-10 h-10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-black transition duration-300 ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black my-1 transition duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Full-Screen Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-[#7FA695] flex flex-col items-center justify-center gap-8 text-white text-3xl font-semibold transition-all duration-300 ${
            menuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={
                isActive(link.href)
                  ? "underline underline-offset-8"
                  : "opacity-90 hover:opacity-100"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}