"use client";

import Reveal from "./animations/Reveal";
import { useEffect, useRef } from "react";

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
          <img
            src="/images/gallery/mojitos.PNG"
            draggable="false"
            className={imageClassName}
          />
          <img
            src="/images/gallery/blacksesame.PNG"
            draggable="false"
            className={imageClassName}
          />
          <img
            src="/images/gallery/seasonal0.PNG"
            draggable="false"
            className={imageClassName}
          />
          <img
            src="/images/gallery/seasonal1.PNG"
            draggable="false"
            className={imageClassName}
          />
          <img
            src="/images/gallery/seasonal2.PNG"
            draggable="false"
            className={imageClassName}
          />
          <img
            src="/images/gallery/seasonal3.PNG"
            draggable="false"
            className={imageClassName}
          />
          <img
            src="/images/gallery/seasonal4.PNG"
            draggable="false"
            className={imageClassName}
          />
          <img
            src="/images/gallery/seasonal5.PNG"
            draggable="false"
            className={imageClassName}
          />
        </div>
      </Reveal>
    </section>
  );
}
