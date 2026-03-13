"use client";

import { useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative h-[80vh] flex items-center justify-center">

      {/* Background image */}
      <img
        src="/images/souffle.jpg"
        alt="Cafe 104"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay (optional but makes text readable) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Hero content */}
      <div className="relative text-center text-white space-y-6">

        <h1 className="text-5xl font-semibold">
          Cafe 104
        </h1>

        <p className="text-lg">
          Specialty Coffee & Brunch
        </p>

        <div className="flex justify-center gap-4">

          {/* View Menu */}
          <Link
            href="/menu"
            className="bg-white text-black px-6 py-2 rounded hover:opacity-90"
          >
            View Menu
          </Link>

          {/* Order Online */}
          <div className="relative">

            <button
              onClick={() => setOpen(!open)}
              className="bg-black text-white px-6 py-2 rounded"
            >
              Order Online ▼
            </button>

            {open && (
              <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-white text-black border shadow-lg rounded flex flex-col">

                <a
                  href="https://www.clover.com/online-ordering/cafe-104-duluth-duluth"
                  target="_blank"
                  className="px-5 py-2 hover:bg-gray-100"
                >
                  Clover
                </a>

                <a
                  href="https://www.doordash.com/store/cafe104-duluth-25242440/33574562/"
                  target="_blank"
                  className="px-5 py-2 hover:bg-gray-100"
                >
                  DoorDash
                </a>

                <a
                  href="https://www.ubereats.com/store/cafe-104/bp6rJX6KXVu-uTFFPFkuOA"
                  target="_blank"
                  className="px-5 py-2 hover:bg-gray-100"
                >
                  Uber Eats
                </a>

              </div>
            )}

          </div>

        </div>

      </div>

    </section>
  );
}