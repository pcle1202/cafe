import { quicksand } from "../layout";

export default function Footer() {
  return (
    <footer className={`${quicksand.className} bg-[#7FA695] text-white py-16 px-10 text-lg font-medium`}>

      <div className="max-w-6xl mx-auto grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 items-start">

        {/* Logo + Instagram */}
        <div>
          <img
            src="/images/logo.jpg"
            alt="Cafe 104"
            className="w-52 opacity-90 mb-6"
          />

          <p className="text-xl font-semibold mb-2">
            Follow us on:
          </p>

          <a
            href="https://www.instagram.com/cafe104duluth/"
            target="_blank"
            className="inline-flex items-center gap-2 hover:scale-105 transition"
          >
            <img
              src="/images/instagram.jpg"
              alt="Instagram"
              className="w-6"
            />
            <span className="text-lg">@cafe104duluth</span>
          </a>
        </div>

        {/* Navigate */}
        <div>
          <h4 className="text-xl font-extrabold tracking-widest mb-4">
            NAVIGATE
          </h4>

          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Menu</li>
            <li className="hover:underline cursor-pointer">Gallery</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-extrabold tracking-widest mb-4">
            CONTACT
          </h4>

          <div className="space-y-2">

            <a
              href="tel:+14703959142"
              className="hover:underline block"
            >
              (470) 395-9142
            </a>

            <a
              href="mailto:cafe104duluth@gmail.com"
              className="hover:underline block"
            >
              cafe104duluth@gmail.com
            </a>

            <a
              href="https://maps.google.com/?q=3705 Old Norcross Rd Duluth GA"
              target="_blank"
              className="hover:underline block"
            >
              3705 Old Norcross Rd
            </a>

            <p>Duluth, GA 30096</p>

          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-xl font-medium tracking-widest mb-4">
            HOURS
          </h4>

          <div className="space-y-2 whitespace-nowrap">
            <p>Mon – Sun: 10 AM – 11 PM</p>
            <p>Kitchen: 10 AM – 10 PM</p>
          </div>
        </div>

      </div>

    </footer>
  );
}