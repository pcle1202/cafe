export default function Footer() {
  return (
    <footer className="bg-neutral-100 text-gray-800 py-20 px-10">

      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.8fr_1fr_1fr_1fr] gap-14 items-start">

        {/* Logo */}
        <div>
          <img
            src="/images/logo.jpg"
            alt="Cafe 104"
            className="w-56 opacity-80"
          />
        </div>

        {/* Navigate */}
        <div>
          <h4 className="text-sm font-semibold tracking-widest mb-5">
            NAVIGATE
          </h4>

          <ul className="space-y-2 text-gray-600">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Menu</li>
            <li className="hover:underline cursor-pointer">Gallery</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* General Info */}
        <div>
          <h4 className="text-sm font-semibold tracking-widest mb-5">
            GENERAL INFO
          </h4>

          <div className="space-y-2 text-gray-600">

            <a
              href="https://maps.google.com/?q=3705 Old Norcross Rd Duluth GA"
              target="_blank"
              className="hover:underline block"
            >
              3705 Old Norcross Rd
            </a>

            <p>Duluth, GA 30096</p>

            <a
              href="tel:+14703959142"
              className="hover:underline block"
            >
              (470) 395-9142
            </a>

          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-sm font-semibold tracking-widest mb-5">
            HOURS
          </h4>

          <div className="space-y-2 text-gray-600">
            <p>Mon – Sun: 10 AM – 11 PM</p>
            <p>Kitchen: 10 AM – 10 PM</p>
          </div>

          {/* Social */}
          <div className="flex gap-4 mt-6 text-lg text-gray-700">
            <span className="cursor-pointer hover:text-black">IG</span>
            <span className="cursor-pointer hover:text-black">TT</span>
            <span className="cursor-pointer hover:text-black">FB</span>
          </div>

        </div>

      </div>

    </footer>
  );
}