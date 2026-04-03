import { quicksand } from "../fonts";

export default function Footer() {
  return (
    <footer
      className={`${quicksand.className} bg-[#7FA695] px-4 py-10 text-lg font-medium text-white sm:px-8 sm:py-14 sm:text-lg`}
    >
      <div className="mx-auto grid max-w-4xl gap-8 text-center md:grid-cols-[1.2fr_1fr_1fr] md:items-start md:gap-4 md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/images/logo.PNG"
            alt="Cafe 104"
            className="mb-4 w-32 opacity-90 sm:mb-6 sm:w-52 md:w-64"
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
            <img src="/images/instagram.jpg" alt="Instagram" className="w-5 sm:w-6" />
            <span className="text-lg sm:text-lg">@cafe104duluth</span>
          </a>
        </div>

        <div>
          <h4 className="mb-3 text-lg font-extrabold tracking-[0.16em] sm:mb-4 sm:text-xl sm:tracking-[0.2em]">
            CONTACT:
          </h4>

          <div className="space-y-1.5 sm:space-y-2">
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
          <h4 className="mb-3 text-lg font-bold tracking-[0.16em] sm:mb-4 sm:text-xl sm:tracking-[0.2em]">
            HOURS:
          </h4>

          <div className="space-y-1.5 sm:space-y-2">
            <p>Mon - Sun: 10 AM - 11 PM</p>
            <p>Kitchen: 10 AM - 10 PM</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
