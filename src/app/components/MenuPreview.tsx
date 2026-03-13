import Reveal from "./animations/Reveal";

export default function MenuPreview() {
  return (
    <section className="py-20 px-10">
        <Reveal>
      {/* Section Title */}
      <h2 className="text-3xl font-semibold text-center mb-12">
        Featured Menu
      </h2>

      {/* Menu Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Card 1 */}
        <div className="text-center">
          <img
            src="/images/black_sesame.png"
            alt="Black Sesame Collection"
            className="w-full h-80 object-cover rounded-lg mb-4 transition transform hover:scale-105"
          />
          <h3 className="text-lg font-medium">Black Sesame Latte</h3>
        </div>

        {/* Card 2 */}
        <div className="text-center">
          <img
            src="/images/matcha.png"
            alt="Matcha Latte Collection"
            className="w-full h-80 object-cover rounded-lg mb-4 transition transform hover:scale-105"
          />
          <h3 className="text-lg font-medium">Matcha Latte</h3>
        </div>

        {/* Card 3 */}
        <div className="text-center">
          <img
            src="/images/protein.png"
            alt="Protein Collection"
            className="w-full h-80 object-cover rounded-lg mb-4 transition transform hover:scale-105"
          />
          <h3 className="text-lg font-medium">Protein Collection</h3>
        </div>

      </div>
    </Reveal>
    </section>
  );
}