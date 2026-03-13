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
      slider.scrollLeft += .50;

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

  return (
    <section className="pt-10 pb-20">
      <Reveal>

        <div
          ref={sliderRef}
          className="flex overflow-x-scroll cursor-grab active:cursor-grabbing select-none"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          
        >

      <img src="/images/matcha.png" draggable="false" className="h-[650px] w-auto flex-shrink-0 object-cover pointer-events-none"/>
      <img src="/images/black_sesame.png" draggable="false" className="h-[650px] w-auto flex-shrink-0 object-cover pointer-events-none"/>
      <img src="/images/protein.png" draggable="false" className="h-[650px] w-auto flex-shrink-0 object-cover pointer-events-none"/>
      <img src="/images/vinchaud.png" draggable="false" className="h-[650px] w-auto flex-shrink-0 object-cover pointer-events-none"/>
      <img src="/images/burger.png" draggable="false" className="h-[650px] w-auto flex-shrink-0 object-cover pointer-events-none"/>
      <img src="/images/dubaisouffle.png" draggable="false" className="h-[650px] w-auto flex-shrink-0 object-cover pointer-events-none"/>
      <img src="/images/signaturecoffee.png" draggable="false" className="h-[650px] w-auto flex-shrink-0 object-cover pointer-events-none"/>
        </div>
      </Reveal>
    </section>
  );
}