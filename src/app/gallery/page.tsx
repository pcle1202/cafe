"use client";

import Reveal from "../components/animations/Reveal";

export default function GalleryPage() {
  return (
    <section className="pt-6 pb-20 px-6">

      <Reveal>
        <h1 className="text-5xl font-semibold text-center mb-16">
          Gallery
        </h1>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

        <Reveal>
          <img src="/images/matcha.png" className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"/>
        </Reveal>

        <Reveal>
          <img src="/images/black_sesame.png" className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"/>
        </Reveal>

        <Reveal>
          <img src="/images/protein.png" className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"/>
        </Reveal>

        <Reveal>
          <img src="/images/vinchaud.png" className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"/>
        </Reveal>

        <Reveal>
          <img src="/images/burger.png" className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"/>
        </Reveal>

        <Reveal>
          <img src="/images/dubaisouffle.png" className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"/>
        </Reveal>

        <Reveal>
          <img src="/images/signaturecoffee.png" className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"/>
        </Reveal>

      </div>

    </section>
  );
}