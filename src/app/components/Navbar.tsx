"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { deliusSwashCaps } from "../fonts";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href) => pathname === href;

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#7FA695]">
        <div className="relative mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:px-6 md:h-16 md:justify-center">
          {/* Wordmark */}
          <Link
            href="/"
            className={`${deliusSwashCaps.className} z-50 text-[1.7rem] font-black tracking-[0.02em] text-white [text-shadow:0_0_1px_currentColor,0_0_2px_currentColor] [-webkit-text-stroke:0.6px_currentColor] md:absolute md:left-6 md:top-1/2 md:-translate-y-1/2 md:text-[2rem]`}
            onClick={() => setMenuOpen(false)}
          >
            Cafe104
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12 text-xl font-medium text-white">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive(link.href)
                    ? "border-b-4 border-white pb-1"
                    : "opacity-70 hover:opacity-100 transition"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="z-50 flex h-10 w-10 flex-col items-center justify-center md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-white transition duration-300 md:bg-black ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white my-1 transition duration-300 md:bg-black ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition duration-300 md:bg-black ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Full-Screen Menu */}
        <div
  className={`fixed inset-x-0 top-[72px] z-40 flex flex-col gap-4 rounded-b-3xl border-t border-white/10 bg-[#7FA695] px-6 py-8 text-center text-lg font-semibold text-white shadow-lg transition-all duration-300 md:hidden ${            menuOpen
              ? "opacity-100 visible"
              : "pointer-events-none invisible opacity-0"
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
