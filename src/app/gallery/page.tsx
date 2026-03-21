"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "../components/animations/Reveal";

const galleryImages = [
  "/images/gallery/blacksesame.PNG",
  "/images/gallery/burger.png",
  "/images/gallery/cilantroade.jpg",
  "/images/gallery/creampasta.jpg",
  "/images/gallery/dirtycoffee.jpg",
  "/images/gallery/drinks.png",
  "/images/gallery/drinks2.png",
  "/images/gallery/dubai.png",
  "/images/gallery/dubaisouffle.png",
  "/images/gallery/dutchbaby.png",
  "/images/gallery/food.jpg",
  "/images/gallery/kimchipasta.jpg",
  "/images/gallery/mangosouffle.jpg",
  "/images/gallery/matcha.png",
  "/images/gallery/mojitos.PNG",
  "/images/gallery/pastas.jpg",
  "/images/gallery/protein.png",
  "/images/gallery/seasonal0.PNG",
  "/images/gallery/seasonal1.PNG",
  "/images/gallery/seasonal2.PNG",
  "/images/gallery/seasonal3.PNG",
  "/images/gallery/seasonal4.PNG",
  "/images/gallery/seasonal5.PNG",
  "/images/gallery/signaturecoffee.png",
  "/images/gallery/ssam.jpg",
  "/images/gallery/strawberry matcha.png",
  "/images/gallery/vinchaud.jpg",
  "/images/gallery/vinchaud2.jpg",
];

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? 0 : (current + 1) % galleryImages.length
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? galleryImages.length - 1
            : (current - 1 + galleryImages.length) % galleryImages.length
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === null
        ? galleryImages.length - 1
        : (current - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === null ? 0 : (current + 1) % galleryImages.length
    );
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const startX = touchStartX.current;
    const endX = event.changedTouches[0]?.clientX ?? null;
    touchStartX.current = null;

    if (startX === null || endX === null) return;

    const deltaX = endX - startX;

    if (Math.abs(deltaX) < 40) return;

    if (deltaX < 0) {
      showNext();
    } else {
      showPrevious();
    }
  };

  const imageClassName =
    "block w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-[1.06]";

  return (
    <section className="px-4 pb-16 pt-6 sm:px-6 sm:pb-20">
      <div className="mx-auto max-w-6xl columns-1 gap-2 space-y-2 sm:columns-2 sm:gap-3 sm:space-y-3 lg:columns-3 lg:gap-4 lg:space-y-4">
        {galleryImages.map((src, index) => (
          <div key={src} className="mb-2 break-inside-avoid sm:mb-3 lg:mb-4">
            <Reveal>
              <img
                src={src}
                className={imageClassName}
                alt="Cafe 104 gallery"
                onClick={() => setActiveIndex(index)}
              />
            </Reveal>
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/92"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative flex h-full w-full items-center justify-center p-4 sm:p-6"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button
              type="button"
              className="absolute right-4 top-4 z-10 text-4xl font-light text-white transition hover:opacity-80 sm:right-6 sm:top-6"
              onClick={() => setActiveIndex(null)}
              aria-label="Close image viewer"
            >
              X
            </button>

            <button
              type="button"
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 text-6xl font-light leading-none text-white transition hover:scale-110 hover:text-[#d8e7df] sm:left-6 sm:text-7xl"
              onClick={showPrevious}
              aria-label="Previous image"
            >
              {"<"}
            </button>

            <img
              src={galleryImages[activeIndex]}
              alt="Cafe 104 gallery enlarged"
              className="max-h-[88vh] max-w-[88vw] object-contain"
            />

            <button
              type="button"
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 text-6xl font-light leading-none text-white transition hover:scale-110 hover:text-[#d8e7df] sm:right-6 sm:text-7xl"
              onClick={showNext}
              aria-label="Next image"
            >
              {">"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
