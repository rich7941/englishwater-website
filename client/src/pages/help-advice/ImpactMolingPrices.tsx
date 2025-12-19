import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import RelatedLinks from "@/components/RelatedLinks";
import { getRelatedLinksForHelpAdvice } from "@/data/relatedLinks";

export default function ImpactMolingPrices() {
  return (
    <div className="min-h-screen">
      
      
      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/impact-moling-prices-hero.webp')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative z-10">
          <p className="text-white text-lg mb-4">Help & Advice</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Moling Prices in England 2026</h1>
        </div>
      </div>


        {/* How Much Does Impact Moling Cost */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
              How Much Does Impact Moling Cost Per Metre in England?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                The cost of moling per metre can vary depending on several factors, including the location, ground conditions, pipe diameter, and the overall length of the project but prices can be higher or lower depending on the complexity of the work and local market rates.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                When planning to replace your water supply pipe, it's essential to understand your responsibilities as a homeowner. Typically, you are responsible for the pipework running from your internal stop tap to your property boundary.
              </p>
            </div>
          </div>
        </section>

        {/* Factors Affecting Cost */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
              Factors Affecting the Cost of Impact Moling
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-6 border-2 border-[#1B3A6B] rounded-lg">
                <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Ground Conditions</h3>
                <p className="text-lg text-gray-700">
                  Harder ground, such as clay or rocky soil, may require more time and specialised equipment, increasing costs.
                </p>
              </div>
              <div className="bg-white p-6 border-2 border-[#1B3A6B] rounded-lg">
                <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Pipe Diameter</h3>
                <p className="text-lg text-gray-700">
                  Larger pipes may involve more labour and materials, raising the price.
                </p>
              </div>
              <div className="bg-white p-6 border-2 border-[#1B3A6B] rounded-lg">
                <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Length of the Project</h3>
                <p className="text-lg text-gray-700">
                  Longer installations may benefit from economies of scale, reducing the per-metre cost.
                </p>
              </div>
              <div className="bg-white p-6 border-2 border-[#1B3A6B] rounded-lg">
                <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Additional Services</h3>
                <p className="text-lg text-gray-700">
                  Pre-installation surveys, reinstatement of surfaces, or additional fittings may add to the overall cost.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Moling: A Cutting-Edge Solution */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
              Impact Moling: A Cutting-Edge Solution
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We proudly employ impact moling as a revolutionary method for water supply pipe installations. This advanced technique uses a pneumatic cylinder to create a straight-line path from one pit to another, providing several key benefits:
            </p>
            <div className="space-y-4">
              <div className="p-6 bg-white border-2 border-[#1B3A6B] rounded-lg">
                <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Minimal Disruption</h3>
                <p className="text-lg text-gray-700">
                  Fewer excavations are required, reducing the impact on your property, including concrete, tarmac, or flagged driveways.
                </p>
              </div>
              <div className="p-6 bg-white border-2 border-[#1B3A6B] rounded-lg">
                <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Faster Completion</h3>
                <p className="text-lg text-gray-700">
                  Impact moling enables quicker project completion compared to traditional trenching methods, ensuring less disruption to your home or business.
                </p>
              </div>
              <div className="p-6 bg-white border-2 border-[#1B3A6B] rounded-lg">
                <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Cost-Efficiency</h3>
                <p className="text-lg text-gray-700">
                  When ground conditions are favourable, moling significantly reduces the cost of installing new water pipes compared to traditional trench excavation, while still maintaining quality and efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How Does Impact Moling Work */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">How Does Impact Moling Work?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Moling is a highly effective trenchless method for installing water supply and gas pipes. Our experienced engineers use advanced pneumatic impact moles (often called moles), powered by compressed air. These devices are launched from small excavation points, displacing soil and creating smooth boreholes in the desired direction, even in challenging ground conditions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Once the boreholes are created, small-diameter pipes are carefully aligned and pulled through, eliminating the need for extensive trenching. This streamlined process ensures efficient installation of new water pipes, connecting seamlessly to the main water supply while minimising disruption to your property.
            </p>
          </div>
        </section>

        {/* Reasons to Replace */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
              Reasons to Replace a Water Supply Pipe
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              For homeowners in England, there are several key reasons to consider replacing a main water pipe:
            </p>
            <div className="space-y-4">
              <div className="bg-white p-6 border-2 border-[#1B3A6B] rounded-lg">
                <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Lead or Iron Pipes</h3>
                <p className="text-lg text-gray-700">
                  Older homes may still have lead or iron pipes, which can pose health risks or cause corrosion, affecting water quality and reliability.
                </p>
              </div>
              <div className="bg-white p-6 border-2 border-[#1B3A6B] rounded-lg">
                <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Water Leaks</h3>
                <p className="text-lg text-gray-700">
                  Leaks in the water supply pipe can lead to water wastage, property damage such as subsidence, and increased water bills, making replacement a necessary solution.
                </p>
              </div>
              <div className="bg-white p-6 border-2 border-[#1B3A6B] rounded-lg">
                <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Insufficient Water Pressure</h3>
                <p className="text-lg text-gray-700">
                  Poor water pressure can disrupt daily activities and is often caused by ageing or damaged pipework, requiring an upgrade to ensure consistent flow.
                </p>
              </div>
              <div className="bg-white p-6 border-2 border-[#1B3A6B] rounded-lg">
                <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Poor Water Quality</h3>
                <p className="text-lg text-gray-700">
                  Pipes in poor condition can introduce impurities into your water supply, affecting both taste and safety.
                </p>
              </div>
              <div className="bg-white p-6 border-2 border-[#1B3A6B] rounded-lg">
                <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Home Renovations</h3>
                <p className="text-lg text-gray-700">
                  Projects that require relocating or upgrading the size of the water supply pipe for increased water flow provide an ideal opportunity to replace old pipes and future-proof your property.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Replace Lead Pipes */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
              Why Do Lead Water Supply Pipes Need to Be Replaced?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Although lead pipes haven't been used in over 40 years, many older properties still have lead water supply pipes. If your home is one of them, replacing these pipes with a modern water supply pipe is highly recommended to ensure safe drinking water free from lead contamination.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Lead water pipes pose a significant health risk because traces of lead can leach into your drinking water, leading to potential lead poisoning. Prolonged exposure to lead in drinking water has been linked to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6">
              <li>High blood pressure</li>
              <li>Heart problems</li>
              <li>Abdominal pain</li>
              <li>Miscarriage or pregnancy complications</li>
              <li>Memory loss</li>
              <li>Developmental issues in children</li>
              <li>Low IQ</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              Replacing your lead water supply pipe is a vital step in safeguarding your household's health and ensuring compliance with modern water quality standards if you are a landlord.
            </p>
          </div>
        </section>

        {/* Benefits of Replacing */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
              Benefits of Replacing Your Lead Water Supply Pipe
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Upgrading your water supply pipe offers several advantages:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white border-2 border-[#1B3A6B] rounded-lg">
                <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Improved Energy Efficiency</h3>
                <p className="text-lg text-gray-700">
                  Enhanced water delivery to appliances reduces energy waste.
                </p>
              </div>
              <div className="p-6 bg-white border-2 border-[#1B3A6B] rounded-lg">
                <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Increased Water Flow Rates</h3>
                <p className="text-lg text-gray-700">
                  Flexible, modern pipes provide better flow.
                </p>
              </div>
              <div className="p-6 bg-white border-2 border-[#1B3A6B] rounded-lg">
                <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Better Water Quality</h3>
                <p className="text-lg text-gray-700">
                  Plastic pipes are non-contaminating, delivering cleaner water.
                </p>
              </div>
              <div className="p-6 bg-white border-2 border-[#1B3A6B] rounded-lg">
                <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Environmentally Friendly</h3>
                <p className="text-lg text-gray-700">
                  With safer tap water, you can reduce reliance on bottled water, cutting plastic waste.
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              Replacing lead water pipes in your home is essential for protecting your health, ensuring the purity of your drinking water, and preserving the value of your property. Lead is a hazardous substance that poses serious health risks, particularly to children and pregnant women, as it can lead to developmental issues and other medical conditions with prolonged exposure.
            </p>
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
              
              <a href="/services/water-main-installations" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src="/service-water-main-installations.webp" 
                  alt="Water Main Installations" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#1B3A6B] transition-colors">
                    Water Main Installations
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
            </div>
          </div>
        </section>

    </div>
  );
}
