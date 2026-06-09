import './globals.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { poppins } from "./fonts";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: 'Cafe 104',
  description: 'Cafe 104 website',
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />

        {children}

        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
