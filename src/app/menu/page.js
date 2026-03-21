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
    seasonal: [
      "/images/menu/seasonal.PNG",
    ],
    drinks: [
      "/images/menu/menu1.png",
      "/images/menu/menu2.png"
    ],
    brunch: [
      //"/images/menu/brunch1.jpg"
    ],
    dessert: [
      "/images/menu/menu3.png"
    ]
  };

  const images = menus[tab];

  return (
    <section
  className={`pt-0 pb-24 px-6 max-w-5xl mx-auto transition-all duration-700 ${
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
  }`}
>
      {/* Tabs */}
      <div className="flex justify-center gap-8 mb-12 flex-wrap">

        <button
          onClick={() => setTab("seasonal")}
          className={`px-4 py-2 text-base font-medium border-b-4 ${
            tab === "seasonal"
              ? "border-[#7FA695] font-medium"
              : "border-transparent opacity-60 hover:opacity-100"
          }`}
        >
          Seasonal
        </button>

        <button
          onClick={() => setTab("drinks")}
          className={`px-4 py-2 font-medium border-b-4 ${
            tab === "drinks"
              ? "border-[#7FA695] font-medium"
              : "border-transparent opacity-60 hover:opacity-100"
          }`}
        >
          Drinks
        </button>

        <button
          onClick={() => setTab("brunch")}
          className={`px-4 py-2 font-medium border-b-4 ${
            tab === "brunch"
              ? "border-[#7FA695] font-medium"
              : "border-transparent opacity-60 hover:opacity-100"
          }`}
        >
          Brunch
        </button>

        <button
          onClick={() => setTab("dessert")}
          className={`px-4 py-2 border-b-2 ${
            tab === "dessert"
              ? "border-[#7FA695] font-medium"
              : "border-transparent opacity-60 hover:opacity-100"
          }`}
        >
          Dessert
        </button>

      </div>

      {/* Menu Images */}
      <div className="space-y-10">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Cafe 104 menu"
            onClick={() => setSelectedImage(img)}
            className="w-full rounded-lg shadow-md cursor-zoom-in"
          />
        ))}
      </div>

        {selectedImage && (
        <div
            className="fixed inset-0 bg-black/90 z-50 overflow-auto cursor-zoom-out flex items-start justify-center"
            onClick={() => setSelectedImage(null)}
        >

            {/* Close icon */}
            <div className="fixed top-6 right-8 text-white text-4xl font-light pointer-events-none">
            ×
            </div>

            <img
            src={selectedImage}
            className="max-w-none w-auto h-auto"
            alt="Menu"
            />

        </div>
        )}

    </section>
  );
}
