"use client";

import Reveal from "./animations/Reveal";
import { useEffect, useRef, useState } from "react";

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
  "/images/gallery/strawberry-matcha.jpg",
  "/images/gallery/vinchaud.jpg",
  "/images/gallery/vinchaud2.jpg",
  "/images/gallery/burger.jpg",
];

export default function Gallery() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const mobileTrackRef = useRef<HTMLDivElement>(null);

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileIndex, setMobileIndex] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const syncViewport = () => setIsMobile(mediaQuery.matches);

    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);

    return () => mediaQuery.removeEventListener("change", syncViewport);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || isMobile) return;

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
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) return;

    const interval = window.setInterval(() => {
      setMobileIndex((currentIndex) => (currentIndex + 1) % pictureImages.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile || !mobileTrackRef.current) return;

    mobileTrackRef.current.style.transform = `translateX(-${mobileIndex * 100}%)`;
  }, [isMobile, mobileIndex]);

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
        <>
          <div className="overflow-hidden bg-[#f7f3ee] md:hidden">
            <div
              ref={mobileTrackRef}
              className="flex transition-transform duration-700 ease-out"
            >
              {pictureImages.map((src) => (
                <div key={src} className="flex h-[360px] w-full flex-shrink-0 items-center justify-center">
                  <img
                    src={src}
                    draggable="false"
                    className="h-full w-full object-contain"
                    alt="Cafe 104 food and drinks"
                  />
                </div>
              ))}
            </div>
          </div>

          <div
            ref={sliderRef}
            className="hidden cursor-grab overflow-x-scroll select-none active:cursor-grabbing md:flex"
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
        </>
      </Reveal>
    </section>
  );
}
