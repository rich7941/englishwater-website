import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WaterFilter() {
  return (
    <div className="min-h-screen">
      
      
      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/water-filter-hero.webp')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative z-10">
          <p className="text-white text-lg mb-4">Help & Advice</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Water Filter</h1>
        </div>
      </div>


        {/* Water Filters to Remove Lead */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">Water Filters to Remove Lead</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Lead has continued to be used in domestic plumbing in the UK until it was finally banned in new installations in 1969. This means that any property built or renovated before 1970 may still contain lead pipes unless they have been replaced.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                If flushing isn't practical or you're waiting for replacement works to begin, point-of-use water filters can be used as a temporary mitigation measure. These water filters are designed to remove both dissolved lead (in solution) and particulate lead (tiny flakes of metal) from drinking water.
              </p>
            </div>
          </div>
        </section>

        {/* Water Filters */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">Water Filters</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              If you rely on tap water as your main source of hydration, it may be worth considering a kitchen water filter. These water filters help remove harmful substances like chlorine, lead, and pesticides—though their effectiveness depends on the specific type of water filter used. In addition to improving safety, water filters can also enhance the taste and, in some cases, the appearance of your drinking water.
            </p>
          </div>
        </section>

        {/* Can Water Filters Remove Lead? */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">Can Water Filters Remove Lead?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Water filters are not a dependable solution for lead contamination caused by lead pipes. Even when water filters are certified, they may only reduce part of the lead content—not eliminate it entirely. Since there is no safe level of lead in drinking water, even small traces can be harmful, especially for young children and pregnant women. The only guaranteed way to remove lead from your water supply is to replace the lead pipes completely.
            </p>
          </div>
        </section>

        {/* What to Look for in a Lead Water Filter */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">What to Look for in a Lead Water Filter</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When selecting a water filter, choose one that meets the following criteria:
            </p>
            <div className="space-y-4">
              <div className="bg-white p-6 border-2 border-[#1B3A6B] rounded-lg">
                <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Independent testing certification</h3>
                <p className="text-lg text-gray-700">
                  In the UK, this is typically approved by the Water Regulations Advisory Scheme (WRAS) or similar recognised bodies.
                </p>
              </div>
              <div className="bg-white p-6 border-2 border-[#1B3A6B] rounded-lg">
                <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Multi-stage filtration</h3>
                <p className="text-lg text-gray-700">
                  The water filter should explicitly state that it removes both dissolved and particulate lead.
                </p>
              </div>
              <div className="bg-white p-6 border-2 border-[#1B3A6B] rounded-lg">
                <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Cold-water use only</h3>
                <p className="text-lg text-gray-700">
                  Water filters must be used with cold water only, as hot water can cause more lead to dissolve and may damage the water filter unit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Water Filter Types */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">Common Water Filter Types for Lead Removal</h2>
            <div className="space-y-4">
              <div className="p-6 bg-white border-2 border-[#1B3A6B] rounded-lg">
                <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Under-sink water filters</h3>
                <p className="text-lg text-gray-700">
                  Installed beneath the kitchen sink and connected directly to the cold tap.
                </p>
              </div>
              <div className="p-6 bg-white border-2 border-[#1B3A6B] rounded-lg">
                <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Tap-mounted water filters</h3>
                <p className="text-lg text-gray-700">
                  Easy to install directly on the end of the kitchen tap.
                </p>
              </div>
              <div className="p-6 bg-white border-2 border-[#1B3A6B] rounded-lg">
                <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Jug water filters</h3>
                <p className="text-lg text-gray-700">
                  Convenient and portable, but not all are rated for lead removal—choose carefully based on certified performance claims.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance and Usage */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">Maintenance and Usage</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Always follow the manufacturer's instructions for installation and cartridge replacement. Regular maintenance is essential to ensure the water filter remains effective at reducing lead levels.
            </p>
            <div className="bg-white border-2 border-[#1B3A6B] rounded-lg p-6">
              <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Note:</h3>
              <p className="text-lg text-gray-700">
                Water filters are not a substitute for full pipe replacement. They are a temporary solution to reduce exposure while long-term remedial works are arranged.
              </p>
            </div>
          </div>
        </section>

        {/* Want to Talk Section */}
        <section className="bg-[#1B3A6B] text-white py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Want to talk to someone?</h2>
                <p className="text-lg">Call us 24/7, 365 days a year</p>
              </div>
              <Button 
                size="lg"
                className="bg-[#F9E45C] text-[#1B3A6B] hover:bg-[#F9E45C]/90 text-xl font-bold px-8 py-6 h-auto"
                asChild
              >
                <a href="tel:08003167322" className="flex items-center gap-3">
                  0800 316 7322
                  <Phone className="h-6 w-6 scale-x-[-1]" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-16 bg-gray-100">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1B3A6B] mb-4">
              What to expect from English Water – Your trusted water services expert
            </h2>
            <p className="text-center text-gray-700 mb-12 text-lg">
              Here's how we'll get your house feeling like home again.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <div className="border-4 border-cyan-400 rounded-lg overflow-hidden mb-4 w-48 h-48">
                  <img 
                    src="/step1_customer_service.jpeg" 
                    alt="Step 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg text-center text-gray-700">Call us 24/7, 365, at a time that suits you.</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="border-4 border-pink-400 rounded-lg overflow-hidden mb-4 w-48 h-48">
                  <img 
                    src="/step2_couple_quote.jpeg" 
                    alt="Step 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg text-center text-gray-700">You'll get a no-obligation quote straight away.</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="border-4 border-[#1B3A6B] rounded-lg overflow-hidden mb-4 w-48 h-48">
                  <img 
                    src="/what-to-expect-van.png" 
                    alt="Step 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg text-center text-gray-700">Expert engineers will arrive and carry out the work.</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="border-4 border-orange-400 rounded-lg overflow-hidden mb-4 w-48 h-48">
                  <img 
                    src="/step4_woman_water.jpeg" 
                    alt="Step 4"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg text-center text-gray-700">We'll give you a 25-year guarantee*.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1B3A6B] mb-8">
              Here's what our happy customers have to say
            </h2>

            {/* WaterTrust Rating Badge */}
            <div className="flex justify-center mb-12">
              <img 
                src="/watertrust_rating.jpeg" 
                alt="WaterTrust 5.0 rating - Named best overall company 2024" 
                className="h-24 w-auto"
              />
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border-4 border-yellow-400 rounded-lg p-6 bg-white">
                <p className="text-lg text-gray-700 mb-4 min-h-[120px]">
                  I was impressed by the professionalism of the entire team. From the initial phone call to the completion of the water main repair, every step was handled with expertise and care. A truly first-class service.
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-[#1B3A6B]">James Thompson</p>
                  <p className="text-lg text-gray-700 text-sm mb-2">London</p>
                  <div className="flex gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                  </div>
                </div>
              </div>
              <div className="border-4 border-pink-400 rounded-lg p-6 bg-white">
                <p className="text-lg text-gray-700 mb-4 min-h-[120px]">
                  What a fantastic team! The engineers were not only skilled but also incredibly friendly and approachable. They answered all my questions and made what could have been a stressful situation very easy.
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-[#1B3A6B]">Michael Davies</p>
                  <p className="text-lg text-gray-700 text-sm mb-2">Birmingham</p>
                  <div className="flex gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                  </div>
                </div>
              </div>
              <div className="border-4 border-green-400 rounded-lg p-6 bg-white">
                <p className="text-lg text-gray-700 mb-4 min-h-[120px]">
                  We are delighted with the outcome. The new water main has significantly improved our water pressure, and the work was completed with impressive speed and precision. Thank you, English Water, for a job well done.
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-[#1B3A6B]">David Wilson</p>
                  <p className="text-lg text-gray-700 text-sm mb-2">Manchester</p>
                  <div className="flex gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* You may be interested in Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1B3A6B] mb-12">
              You may be interested in
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="/services/lead-pipe-replacement" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src="/service-lead-pipe-replacement.webp" 
                  alt="Lead Pipe Replacement" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#1B3A6B] transition-colors">
                    Lead Pipe Replacement
                  </h3>
                </div>
              </a>
              
              <a href="/help-advice/lead-pipe-replacement-scheme" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src="/service-lead-pipe-replacement-scheme.webp" 
                  alt="Lead Pipe Replacement Scheme" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#1B3A6B] transition-colors">
                    Lead Pipe Replacement Scheme
                  </h3>
                </div>
              </a>
              
              <a href="/help-advice/low-water-pressure" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src="/low-water-pressure.jpg" 
                  alt="Low Water Pressure" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#1B3A6B] transition-colors">
                    Low Water Pressure
                  </h3>
                </div>
              </a>
              
              <a href="/services/impact-moling" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src="/service-impact-moling.webp" 
                  alt="Impact Moling" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#1B3A6B] transition-colors">
                    Impact Moling
                  </h3>
                </div>
              </a>
              
              <a href="/help-advice/water-leaks" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src="/service-water-leaks.webp" 
                  alt="Water Leaks" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#1B3A6B] transition-colors">
                    Water Leaks
                  </h3>
                </div>
              </a>
              
              <a href="/services/water-supply-pipe-installations" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src="/service-water-supply-pipe-installations.webp" 
                  alt="Water Supply Pipe Installations" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#1B3A6B] transition-colors">
                    Water Supply Pipe Installations
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </section>

    </div>
  );
}
