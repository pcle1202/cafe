import { Delius_Swash_Caps, Playfair_Display, Poppins, Quicksand } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const deliusSwashCaps = Delius_Swash_Caps({
  subsets: ["latin"],
  weight: ["400"],
});
