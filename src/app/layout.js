import './globals.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export const metadata = {
  title: 'Cafe 104',
  description: 'Cafe 104 website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  )
}