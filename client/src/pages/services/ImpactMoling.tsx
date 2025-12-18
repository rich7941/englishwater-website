import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ImpactMoling() {
  return (
    <div className="min-h-screen flex flex-col">
      
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/impact-moling-hero.webp)" }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="container relative z-10">
            <p className="text-white text-lg mb-4">Services</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Impact Moling England</h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">Impact Moling Specialists in England</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              English Water offers professional Impact Moling services across England, providing a precise, non-invasive solution for installing underground water supply pipes. This advanced trenchless technique allows us to work efficiently while preserving your property's landscaping and hardscapes, making it the ideal choice for water supply pipe installations and replacements.
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">What is Impact Moling?</h3>
            <p className="text-lg text-gray-700 mb-8">
              Impact Moling is a modern method of installing water supply pipes underground without the need for large trenches. By creating a tunnel beneath the surface, we can install new pipes with minimal disturbance to your property, reducing disruption and saving time.
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">How Does Impact Moling Work?</h3>
            <p className="text-lg text-gray-700 mb-8">
              Using a pneumatically driven tool, known as a soil displacement hammer or "mole," our equipment creates a narrow tunnel underground. This tunnel allows water pipes to be laid without extensive digging. Small launch and retrieval pits are excavated at strategic points, and the mole moves through the soil, leaving a clear path for the new pipe to be installed. This efficient process minimizes mess and keeps your property intact.
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A6B] mb-6">Why Choose Impact Moling Over Traditional Trenching Methods?</h3>
            
            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">1. Moling Creates Minimal Property Disruption</h4>
                <p className="text-lg text-gray-700">Avoid large-scale excavation with our trenchless moling techniques, which protect gardens, driveways, and other features.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">2. Moling is Fast and Reliable</h4>
                <p className="text-lg text-gray-700">Impact Moling speeds up the installation work, reducing project timelines compared to traditional excavation methods.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">3. Moling is Cost-Effective</h4>
                <p className="text-lg text-gray-700">Lower restoration and reinstatement costs from moling save you money.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">4. Moling is Eco-Friendly</h4>
                <p className="text-lg text-gray-700">Trenchless installations reduce waste and protect the environment because moling requires less energy.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#1B3A6B] mb-6">Key Benefits of Impact Moling</h3>
            
            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">1. Moling Preserves Landscaping</h4>
                <p className="text-lg text-gray-700">Moling keeps your gardens and paved areas intact.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">2. Moling Reduces Downtime</h4>
                <p className="text-lg text-gray-700">Projects that are moled are completed faster with less disruption.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">3. Moling is Versatile</h4>
                <p className="text-lg text-gray-700">Moling is suitable for various ground conditions and property layouts.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">4. Moling is Accurate and Safe</h4>
                <p className="text-lg text-gray-700">Advanced moling tools ensure precision and protect existing utilities.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#1B3A6B] mb-6">Our Impact Moling Process</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1B3A6B] text-white flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">Assessment and Planning</h4>
                  <p className="text-lg text-gray-700">We evaluate your site and map out underground utilities to ensure a safe installation.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1B3A6B] text-white flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">Launch and Retrieval Pits</h4>
                  <p className="text-lg text-gray-700">Small pits are excavated at points of entry and exit for the moling tool.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1B3A6B] text-white flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">Moling and Installation</h4>
                  <p className="text-lg text-gray-700">The mole creates a tunnel, and the new water pipe is pulled through seamlessly.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1B3A6B] text-white flex items-center justify-center font-bold text-lg">4</div>
                <div>
                  <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">Connection and Certification</h4>
                  <p className="text-lg text-gray-700">The new water supply pipe is connected to your system, and we provide a certificate confirming compliance with UK Water Regulations.</p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-[#1B3A6B] text-white p-8 rounded-lg text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Contact English Water for Impact Moling in England</h3>
              <p className="text-lg mb-6">
                For reliable, professional, and timely impact moling services across England, you can trust English Water to deliver.
              </p>
              <p className="mb-6">
                English Water can carry out impact moling across England and provide you with a free quotation for the moling work. To get a free quote for impact moling, please call us on 0800 316 7322 or email hello@englishwater.co.uk to schedule a free consultation and learn how we can help with your water main needs.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <a 
                  href="tel:08003167322"
                  className="bg-[#F4E04D] hover:bg-[#E5D13D] text-[#1B3A6B] font-bold px-8 py-4 rounded-lg text-xl flex items-center gap-3 transition-colors"
                >
                  0800 316 7322
                  <Phone className="w-6 h-6 scale-x-[-1]" />
                </a>
                <a 
                  href="mailto:hello@englishwater.co.uk"
                  className="bg-white hover:bg-gray-100 text-[#1B3A6B] font-bold px-8 py-4 rounded-lg text-xl transition-colors"
                >
                  hello@englishwater.co.uk
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Want to Talk Section */}
        <div className="bg-[#1B3A6B] py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Want to talk to someone?</h2>
                <p className="text-xl">Call us 24/7, 365 days a year</p>
              </div>
              <a 
                href="tel:08003167322"
                className="bg-[#F4E04D] hover:bg-[#E5D13D] text-[#1B3A6B] font-bold px-8 py-4 rounded-lg text-xl flex items-center gap-3 transition-colors"
              >
                0800 316 7322
                <Phone className="w-6 h-6 scale-x-[-1]" />
              </a>
            </div>
          </div>
        </div>

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
                  <p className="text-gray-700 text-sm mb-2">London</p>
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
                  <p className="text-gray-700 text-sm mb-2">Birmingham</p>
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
                  <p className="text-gray-700 text-sm mb-2">Manchester</p>
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

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1B3A6B] mb-12">You may be interested in</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <a href="/services/lead-pipe-replacement" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/service-lead-pipe-replacement.webp" alt="Lead Pipe Replacement" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B3A6B] hover:text-[#1B3A6B]">Lead Pipe Replacement</h3>
                </div>
              </a>

              <a href="/services/water-leak-detection" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/service-water-main-leak-detection.webp" alt="Water Leak Detection" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B3A6B] hover:text-[#1B3A6B]">Water Leak Detection</h3>
                </div>
              </a>

              <a href="/services/water-supply-pipe-installations" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/service-water-supply-pipe-installations.webp" alt="Water Supply Pipe Installations" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B3A6B] hover:text-[#1B3A6B]">Water Supply Pipe Installations</h3>
                </div>
              </a>

              <a href="/services/water-supply-pipe-renewals" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/service-water-supply-pipe-renewals.webp" alt="Water Supply Pipe Renewals" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B3A6B] hover:text-[#1B3A6B]">Water Supply Pipe Renewals</h3>
                </div>
              </a>

              <a href="/help-advice/lead-pipe-replacement-scheme" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/service-lead-pipe-replacement-scheme.webp" alt="Lead Pipe Replacement Scheme" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B3A6B] hover:text-[#1B3A6B]">Lead Pipe Replacement Scheme</h3>
                </div>
              </a>

              <a href="/services/water-main-installations" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/service-water-main-installations.webp" alt="Water Main Installations" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B3A6B] hover:text-[#1B3A6B]">Water Main Installations</h3>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
}
