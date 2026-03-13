"use client";

import Reveal from "./animations/Reveal";

export default function About() {
  return (
    <section className="pt-20 pb-8">
      <Reveal>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

          {/* Image */}
          <img
            src="/images/test.jpg"
            alt="Cafe 104"
            className="w-full md:w-3/5 h-[550px] object-cover rounded-xl"
          />

          {/* Text */}
          <div className="md:w-2/5 space-y-6 text-center md:text-left">
            <h2 className="text-4xl font-semibold">About Us</h2>

            <p className="text-lg text-gray-600">
            Cafe 104 is a neighborhood café dedicated to bringing people 
            together over great coffee,  fresh brunch, and homemade desserts. 
            We strive to create a welcoming space where friends, family, 
            and community can gather and enjoy simple, delicious food.
            </p>
          </div>

        </div>
      </Reveal>
    </section>
  );
}