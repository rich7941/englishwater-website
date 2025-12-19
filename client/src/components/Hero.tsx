export default function Hero() {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 items-center py-12 lg:py-20">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1B3A6B] leading-tight" aria-hidden="true">
              England's Water Main Repair and Replacement Experts
            </h1>
            <p className="text-lg lg:text-xl text-gray-700">
              24/7 assistance from expert water engineers across England.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src="/hero-van.png" 
              alt="English Water van" 
              className="w-full max-w-2xl h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
