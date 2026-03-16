import './globals.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Quicksand } from "next/font/google";
import { Poppins } from "next/font/google";
import { Outfit } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400","500","600","700"],
});

export const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: 'Cafe 104',
  description: 'Cafe 104 website',
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
};
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400","500","600","700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  )
}