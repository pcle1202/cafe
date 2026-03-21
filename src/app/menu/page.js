"use client";

import { useEffect, useRef, useState } from "react";

export default function MenuPage() {
  const [tab, setTab] = useState("seasonal");
  const [activeIndex, setActiveIndex] = useState(null);
  const [visible, setVisible] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  const menus = {
    seasonal: ["/images/menu/seasonal.PNG"],
    drinks: ["/images/menu/menu1.png", "/images/menu/menu2.png"],
    brunch: [],
    dessert: ["/images/menu/menu3.png"],
  };

  const allImages = [
    ...menus.seasonal,
    ...menus.drinks,
    ...menus.brunch,
    ...menus.dessert,
  ];

  const images = menus[tab];

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? 0 : (current + 1) % allImages.length
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? allImages.length - 1
            : (current - 1 + allImages.length) % allImages.length
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, allImages.length]);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === null
        ? allImages.length - 1
        : (current - 1 + allImages.length) % allImages.length
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === null ? 0 : (current + 1) % allImages.length
    );
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
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

  return (
    <section
      className={`mx-auto max-w-5xl px-4 pb-20 pt-4 transition-all duration-700 sm:px-6 sm:pb-24 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div className="mb-8 flex flex-wrap justify-center gap-2 rounded-2xl bg-white/70 p-2 shadow-sm sm:mb-12 sm:gap-3">
        <button
          onClick={() => setTab("seasonal")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition sm:text-base ${
            tab === "seasonal"
              ? "bg-[#7FA695] text-white"
              : "opacity-70 hover:opacity-100"
          }`}
        >
          Seasonal
        </button>

        <button
          onClick={() => setTab("drinks")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition sm:text-base ${
            tab === "drinks"
              ? "bg-[#7FA695] text-white"
              : "opacity-70 hover:opacity-100"
          }`}
        >
          Drinks
        </button>

        <button
          onClick={() => setTab("brunch")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition sm:text-base ${
            tab === "brunch"
              ? "bg-[#7FA695] text-white"
              : "opacity-70 hover:opacity-100"
          }`}
        >
          Brunch
        </button>

        <button
          onClick={() => setTab("dessert")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition sm:text-base ${
            tab === "dessert"
              ? "bg-[#7FA695] text-white"
              : "opacity-70 hover:opacity-100"
          }`}
        >
          Dessert
        </button>
      </div>

      <div className="space-y-6 sm:space-y-10">
        {images.map((img) => (
          <img
            key={img}
            src={img}
            alt="Cafe 104 menu"
            onClick={() => setActiveIndex(allImages.indexOf(img))}
            className="w-full cursor-zoom-in rounded-2xl shadow-md"
          />
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center overflow-auto bg-black/90 p-4 sm:p-6"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative flex w-full items-center justify-center"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button
              type="button"
              className="fixed right-5 top-4 z-10 text-4xl font-light text-white transition hover:opacity-80 sm:right-8 sm:top-6"
              onClick={() => setActiveIndex(null)}
              aria-label="Close menu viewer"
            >
              X
            </button>

            <button
              type="button"
              className="fixed left-3 top-1/2 z-10 -translate-y-1/2 text-6xl font-light leading-none text-white transition hover:scale-110 hover:text-[#d8e7df] sm:left-6 sm:text-7xl"
              onClick={showPrevious}
              aria-label="Previous menu"
            >
              {"<"}
            </button>

            <img
              src={allImages[activeIndex]}
              className="h-auto max-h-[88vh] w-full max-w-4xl rounded-xl object-contain"
              alt="Menu"
            />

            <button
              type="button"
              className="fixed right-3 top-1/2 z-10 -translate-y-1/2 text-6xl font-light leading-none text-white transition hover:scale-110 hover:text-[#d8e7df] sm:right-6 sm:text-7xl"
              onClick={showNext}
              aria-label="Next menu"
            >
              {">"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
