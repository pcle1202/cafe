"use client";

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
            <h2 className="text-3xl font-semibold sm:text-4xl">About Us</h2>

            <p className="text-base leading-8 text-gray-600 sm:text-lg">
              Cafe 104 is a neighborhood cafe dedicated to bringing people
              together over great coffee, fresh brunch, and homemade desserts.
              We strive to create a welcoming space where friends, family, and
              community can gather and enjoy simple, delicious food.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
