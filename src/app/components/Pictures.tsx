"use client";

import Reveal from "./animations/Reveal";
import { useEffect, useRef } from "react";

const pictureImages = [
  "/images/gallery/mojitos.jpg",
  "/images/gallery/blacksesame.jpg",
  "/images/gallery/cilantroade.jpg",
  "/images/gallery/creampasta.jpg",
  "/images/gallery/dirtycoffee.jpg",
  "/images/gallery/drinks.jpg",
  "/images/gallery/drinks2.jpg",
  "/images/gallery/dubai.jpg",
  "/images/gallery/dubaisouffle.jpg",
  "/images/gallery/dutchbaby.jpg",
  "/images/gallery/food.jpg",
  "/images/gallery/kimchipasta.jpg",
  "/images/gallery/mangosouffle.jpg",
  "/images/gallery/matcha.jpg",
  "/images/gallery/pastas.jpg",
  "/images/gallery/protein.jpg",
  "/images/gallery/seasonal0.jpg",
  "/images/gallery/seasonal1.jpg",
  "/images/gallery/seasonal2.jpg",
  "/images/gallery/seasonal3.jpg",
  "/images/gallery/seasonal4.jpg",
  "/images/gallery/seasonal5.jpg",
  "/images/gallery/signaturecoffee.jpg",
  "/images/gallery/ssam.jpg",
  "/images/gallery/strawberry matcha.jpg",
  "/images/gallery/vinchaud.jpg",
  "/images/gallery/vinchaud2.jpg",
  "/images/gallery/burger.jpg",
];

export default function Gallery() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrame: number;

    const autoScroll = () => {
      slider.scrollLeft += 0.5;

      if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        slider.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDown.current = true;
    startX.current = e.clientX;
    scrollLeft.current = sliderRef.current!.scrollLeft;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDown.current) return;

    const dx = e.clientX - startX.current;
    sliderRef.current!.scrollLeft = scrollLeft.current - dx;
  };

  const handlePointerUp = () => {
    isDown.current = false;
  };

  const imageClassName =
    "h-[360px] w-auto flex-shrink-0 object-cover pointer-events-none sm:h-[480px] md:h-[650px]";

  return (
    <section className="pb-16 pt-8 sm:pb-20 sm:pt-10">
      <Reveal>
        <div
          ref={sliderRef}
          className="flex cursor-grab overflow-x-scroll select-none active:cursor-grabbing"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          {pictureImages.map((src) => (
            <img
              key={src}
              src={src}
              draggable="false"
              className={imageClassName}
              alt="Cafe 104 food and drinks"
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
