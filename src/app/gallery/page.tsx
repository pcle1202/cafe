"use client";

import Reveal from "../components/animations/Reveal";

export default function GalleryPage() {
  const imageClassName =
    "h-[320px] w-full rounded-2xl object-cover transition-transform duration-300 hover:scale-[1.02] sm:h-[360px] lg:h-[400px]";

  return (
    <section className="px-4 pb-16 pt-6 sm:px-6 sm:pb-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Reveal>
          <img src="/images/gallery/drinks.png" className={imageClassName} />
        </Reveal>

        <Reveal>
          <img src="/images/gallery/drinks2.png" className={imageClassName} />
        </Reveal>

        <Reveal>
          <img src="/images/gallery/dubai.png" className={imageClassName} />
        </Reveal>

        <Reveal>
          <img src="/images/gallery/dutchbaby.png" className={imageClassName} />
        </Reveal>

        <Reveal>
          <img
            src="/images/gallery/strawberry matcha.png"
            className={imageClassName}
          />
        </Reveal>

        <Reveal>
          <img src="/images/gallery/matcha.png" className={imageClassName} />
        </Reveal>

        <Reveal>
          <img
            src="/images/gallery/blacksesame.PNG"
            className={imageClassName}
          />
        </Reveal>

        <Reveal>
          <img src="/images/gallery/protein.png" className={imageClassName} />
        </Reveal>

        <Reveal>
          <img src="/images/gallery/vinchaud.png" className={imageClassName} />
        </Reveal>

        <Reveal>
          <img src="/images/gallery/burger.png" className={imageClassName} />
        </Reveal>

        <Reveal>
          <img
            src="/images/gallery/dubaisouffle.png"
            className={imageClassName}
          />
        </Reveal>

        <Reveal>
          <img
            src="/images/gallery/signaturecoffee.png"
            className={imageClassName}
          />
        </Reveal>

        <Reveal>
          <img
            src="/images/gallery/seasonal0.PNG"
            className={imageClassName}
          />
        </Reveal>

        <Reveal>
          <img
            src="/images/gallery/seasonal1.PNG"
            className={imageClassName}
          />
        </Reveal>
        <Reveal>
          <img
            src="/images/gallery/seasonal2.PNG"
            className={imageClassName}
          />
        </Reveal>
        <Reveal>
          <img
            src="/images/gallery/seasonal3.PNG"
            className={imageClassName}
          />
        </Reveal>

        <Reveal>
          <img
            src="/images/gallery/seasonal4.PNG"
            className={imageClassName}
          />
        </Reveal>
        <Reveal>
          <img
            src="/images/gallery/seasonal5.PNG"
            className={imageClassName}
          />
        </Reveal>
      </div>
    </section>
  );
}
