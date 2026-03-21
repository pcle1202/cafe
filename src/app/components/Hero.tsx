"use client";

import { useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative flex min-h-[72svh] items-center justify-center overflow-hidden px-4 py-12 sm:px-6 sm:py-16 md:min-h-[80vh]">
      <img
        src="/images/souffle.jpg"
        alt="Cafe104"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative mx-auto max-w-xl space-y-6 text-center text-white">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Cafe 104
        </h1>

        <p className="text-base font-medium sm:text-lg">
          Brunch - Dessert - K-style Drinks
        </p>

        <div className="flex justify-center gap-3 sm:gap-4">
          <Link
            href="/menu"
            className="rounded bg-white px-5 py-2 text-sm text-black hover:opacity-90 sm:px-6 sm:text-base"
          >
            View Menu
          </Link>

          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="rounded bg-[#6E8F81] px-5 py-2 text-sm text-white hover:opacity-90 sm:px-6 sm:text-base"
            >
              Order Online ▼
            </button>

            {open && (
              <div className="absolute left-1/2 top-12 z-10 flex w-[min(16rem,calc(100vw-2rem))] -translate-x-1/2 flex-col rounded border bg-white text-black shadow-lg">
                <a
                  href="https://www.clover.com/online-ordering/cafe-104-duluth-duluth"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 hover:bg-gray-100"
                >
                  Clover
                </a>

                <a
                  href="https://www.doordash.com/store/cafe104-duluth-25242440/33574562/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 hover:bg-gray-100"
                >
                  DoorDash
                </a>

                <a
                  href="https://www.ubereats.com/store/cafe-104/bp6rJX6KXVu-uTFFPFkuOA"
                  target="_blank"
                  rel="noreferrer"
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
