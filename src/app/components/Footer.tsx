import { quicksand } from "../layout";

export default function Footer() {
  return (
    <footer
      className={`${quicksand.className} bg-[#7FA695] px-5 py-14 text-base font-medium text-white sm:px-8 sm:py-16 sm:text-lg`}
    >
      <div className="mx-auto grid max-w-6xl gap-10 text-center md:grid-cols-[2fr_1fr_1fr_1fr] md:items-start md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/images/logo.PNG"
            alt="Cafe 104"
            className="mb-6 w-44 opacity-90 sm:w-52 md:w-64"
          />

          <p className="mb-2 text-lg font-semibold sm:text-xl">
            Follow us on:
          </p>

          <a
            href="https://www.instagram.com/cafe104duluth/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition hover:scale-105"
          >
            <img src="/images/instagram.jpg" alt="Instagram" className="w-6" />
            <span className="text-base sm:text-lg">@cafe104duluth</span>
          </a>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-extrabold tracking-[0.2em] sm:text-xl">
            NAVIGATE
          </h4>

          <ul className="space-y-2">
            <li className="cursor-pointer hover:underline">Home</li>
            <li className="cursor-pointer hover:underline">Menu</li>
            <li className="cursor-pointer hover:underline">Gallery</li>
            <li className="cursor-pointer hover:underline">Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-extrabold tracking-[0.2em] sm:text-xl">
            CONTACT
          </h4>

          <div className="space-y-2">
            <a href="tel:+14703959142" className="block hover:underline">
              (470) 395-9142
            </a>

            <a
              href="mailto:cafe104duluth@gmail.com"
              className="block hover:underline"
            >
              cafe104duluth@gmail.com
            </a>

            <a
              href="https://maps.google.com/?q=3705 Old Norcross Rd Duluth GA"
              target="_blank"
              rel="noreferrer"
              className="block hover:underline"
            >
              3705 Old Norcross Rd
            </a>

            <p>Duluth, GA 30096</p>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-medium tracking-[0.2em] sm:text-xl">
            HOURS
          </h4>

          <div className="space-y-2 whitespace-nowrap">
            <p>Mon - Sun: 10 AM - 11 PM</p>
            <p>Kitchen: 10 AM - 10 PM</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
