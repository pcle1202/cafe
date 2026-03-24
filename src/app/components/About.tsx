"use client";

import { playfairDisplay } from "../fonts";
import Reveal from "./animations/Reveal";

export default function About() {
  return (
    <section className="px-4 pb-10 pt-14 sm:px-6 sm:pb-12 sm:pt-20">
      <Reveal>
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 sm:gap-10 md:flex-row md:gap-16">
          <img
            src="/images/test.jpg"
            alt="Cafe 104"
            className="h-[320px] w-full rounded-2xl object-cover shadow-sm sm:h-[420px] md:h-[550px] md:w-3/5"
          />

          <div className="space-y-5 text-center md:w-2/5 md:text-left">
            <h2
              className={`${playfairDisplay.className} whitespace-nowrap text-2xl font-semibold leading-tight text-gray-800 sm:text-3xl`}
            >
              "Awaken Your Senses with Every Bite"
            </h2>

            <div className="space-y-4 text-base leading-7 text-gray-600 sm:text-lg">
              <p>
                Our commitment to premium ingredients and traditional craftsmanship is at the
                heart of everything we do. At CAFE 104, we bring you the perfect balance of
                flavors from our cloud-like Souffle Pancakes to our satisfying Korean-fusion
                sandwiches.
              </p>

              <p>
                Enjoy a moment of relaxation with our refined desserts and seasonal specialty
                beverages, all thoughtfully crafted to highlight rich, natural depths over
                artificial sweetness. We strive to be a curated space that adds a touch of
                brilliance to your everyday routine.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
