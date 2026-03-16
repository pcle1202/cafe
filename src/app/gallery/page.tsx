"use client";

import Reveal from "../components/animations/Reveal";

export default function GalleryPage() {
  return (
    <section className="pt-6 pb-20 px-6">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Reveal>
          <img src="/images/gallery/drinks.png" className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"/>
        </Reveal>
        
        <Reveal>
          <img src="/images/gallery/drinks2.png" className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"/>
        </Reveal>

        <Reveal>
          <img src="/images/gallery/dubai.png" className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"/>
        </Reveal>
        
        <Reveal>
          <img src="/images/gallery/dutchbaby.png" className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"/>
        </Reveal>
        
        <Reveal>
          <img src="/images/gallery/strawberry matcha.png" className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"/>
        </Reveal>

        <Reveal>
          <img src="/images/gallery/matcha.png" className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"/>
        </Reveal>

        <Reveal>
          <img src="/images/gallery/black_sesame.png" className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"/>
        </Reveal>

        <Reveal>
          <img src="/images/gallery/protein.png" className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"/>
        </Reveal>

        <Reveal>
          <img src="/images/gallery/vinchaud.png" className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"/>
        </Reveal>

        <Reveal>
          <img src="/images/gallery/burger.png" className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"/>
        </Reveal>

        <Reveal>
          <img src="/images/dubaisouffle.png" className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"/>
        </Reveal>

        <Reveal>
          <img src="/images/gallery/signaturecoffee.png" className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"/>
        </Reveal>

      </div>

    </section>
  );
}