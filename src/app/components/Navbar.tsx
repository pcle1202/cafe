"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="relative flex justify-center gap-10 text-lg py-6">

      {/* Logo (top left) */}
      <Link href="/" className="absolute left-6 top-1/2 -translate-y-1/2">
        <img
          src="/images/logo.jpg"
          alt="Cafe 104"
          className="h-23 w-auto"
        />
      </Link>

      <Link
        href="/"
        className={pathname === "/" 
          ? "border-b-2 border-black pb-1"
          : "opacity-70 hover:opacity-100"}
      >
        Home
      </Link>

      <Link
        href="/menu"
        className={pathname === "/menu" 
          ? "border-b-2 border-black pb-1"
          : "opacity-70 hover:opacity-100"}
      >
        Menu
      </Link>

      <Link
        href="/gallery"
        className={pathname === "/gallery"
          ? "border-b-2 border-black pb-1"
          : "opacity-70 hover:opacity-100"}
      >
        Gallery
      </Link>

    </nav>
  );
}