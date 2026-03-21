"use client";

import { useState, useEffect } from "react";

export default function MenuPage() {
  const [tab, setTab] = useState("seasonal");
  const [selectedImage, setSelectedImage] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const menus = {
    seasonal: ["/images/menu/seasonal.PNG"],
    drinks: ["/images/menu/menu1.png", "/images/menu/menu2.png"],
    brunch: [],
    dessert: ["/images/menu/menu3.png"],
  };

  const images = menus[tab];

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
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Cafe 104 menu"
            onClick={() => setSelectedImage(img)}
            className="w-full cursor-zoom-in rounded-2xl shadow-md"
          />
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center overflow-auto bg-black/90 p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="pointer-events-none fixed right-5 top-4 text-4xl font-light text-white sm:right-8 sm:top-6">
            X
          </div>

          <img
            src={selectedImage}
            className="h-auto max-h-[88vh] w-full max-w-4xl rounded-xl object-contain"
            alt="Menu"
          />
        </div>
      )}
    </section>
  );
}
