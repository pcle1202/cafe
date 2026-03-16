"use client";
import { useEffect } from "react";

import Hero from "./components/Hero";
import About from "./components/About";
import Pictures from "./components/Pictures";

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Pictures />
    </main>
  );
}