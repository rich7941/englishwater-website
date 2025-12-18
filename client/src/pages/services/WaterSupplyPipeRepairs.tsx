import { Phone } from "lucide-react";
import WhatToExpect from "@/components/WhatToExpect";

export default function WaterSupplyPipeRepairs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url(/water-supply-pipe-repairs-hero.webp)" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative z-10">
          <p className="text-white text-lg mb-4">Services</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Water Supply Pipe Repairs England</h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
            Water Supply Pipe Repair Experts in England
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to English Water, your trusted specialists in water supply pipe repairs across England. We deliver expert solutions for all types of underground water leaks and pipe replacement projects, providing efficient and high-quality services tailored to your needs.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            With extensive experience in handling water supply pipe issues, our services include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-8 ml-4">
            <li>Leak detection for water pipes</li>
            <li>Repairs for water supply pipes</li>
            <li>Replacement of water supply pipes</li>
          </ul>
          <p className="text-lg text-gray-700 mb-12">
            Our professional team can manage projects of any size or complexity with precision and care.
          </p>

          {/* Common Causes Section */}
          <h3 className="text-2xl font-bold text-[#1B3A6B] mb-6 mt-12">
            Common Causes of Water Supply Pipe Leaks
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            If you're dealing with a leaking water supply pipe problem we're here to help. Our engineers will assess the issue and implement long-term solutions to avoid recurring leaks or damage.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Here are some of the most common reasons why water supply pipes may leak:
          </p>

          <div className="space-y-8 mb-12">
            {/* Cause 1 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-[#1B3A6B] mb-2">1. Age and Material of Pipes</h4>
              <p className="text-lg text-gray-700">
                Older water pipes are more susceptible to corrosion, particularly if they were installed before the 1980s. Many older pipes are made of cast iron, which lacks the flexibility to withstand temperature changes effectively. Over time, this can lead to cracks and leaks in the pipe.
              </p>
            </div>

            {/* Cause 2 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-[#1B3A6B] mb-2">2. Changes in Water Pressure</h4>
              <p className="text-lg text-gray-700">
                Sudden increases in water pressure can strain supply pipes, causing damage. If the pressure exceeds the pipe's capacity, it can lead to leaks, cracks, or even a complete pipe burst. This can result in water damage, increased utility bills, and costly repairs.
              </p>
            </div>

            {/* Cause 3 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-[#1B3A6B] mb-2">3. Accidental Damage During Excavation</h4>
              <p className="text-lg text-gray-700">
                Excavation work on your property can sometimes unintentionally damage underground water supply pipes. Digging equipment or machinery can puncture or crack pipes, leading to leaks and disruption to your water supply.
              </p>
            </div>

            {/* Cause 4 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-[#1B3A6B] mb-2">4. Temperature Fluctuations</h4>
              <p className="text-lg text-gray-700">
                Extreme temperature changes can affect the integrity of water supply pipes. In cold weather, frozen ground can expand, putting additional pressure on pipes. Conversely, in hot weather, soil shifting due to drying can also stress pipes. These cycles can lead to cracks or bursts, making regular maintenance crucial to prevent failures.
              </p>
            </div>

            {/* Cause 5 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-[#1B3A6B] mb-2">5. Impact from Heavy Vehicles</h4>
              <p className="text-lg text-gray-700">
                Heavy vehicles driving over shallowly buried pipes can cause significant stress, leading to cracks or deformation. Vibrations from traffic can also destabilise the ground around the pipes, increasing the likelihood of leaks or damage. Regular inspections in high-traffic areas can help identify potential risks early.
              </p>
            </div>
          </div>

          {/* Why Choose English Water Section */}
          <h3 className="text-2xl font-bold text-[#1B3A6B] mb-6 mt-12">
            Why Choose English Water for Water Supply Pipe Repairs?
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            At English Water, we bring years of experience and innovative techniques to every water supply pipe repair job. From minor leaks to full pipe replacements, we ensure quick, effective, and long-lasting solutions.
          </p>

          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1B3A6B] text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
              <div>
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-2">Non-Invasive Repairs</h4>
                <p className="text-lg text-gray-700">
                  We use advanced methods like trenchless technology to minimise disruption to your property.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1B3A6B] text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
              <div>
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-2">Comprehensive Services</h4>
                <p className="text-lg text-gray-700">
                  From leak detection to replacement, we handle every aspect of water supply pipe repair.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1B3A6B] text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
              <div>
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-2">Experienced Professionals</h4>
                <p className="text-lg text-gray-700">
                  Our skilled engineers deliver high-quality results for projects of any complexity.
                </p>
              </div>
            </div>
          </div>

          {/* 24/7 Emergency Services Section */}
          <div className="bg-yellow-50 border-l-4 border-[#F4E04D] p-6 mb-8">
            <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">24/7 Emergency Services</h3>
            <p className="text-lg text-gray-700 mb-4">
              Water supply pipe leaks can happen at any time, and their impact can be significant, whether it's a slow leak or a sudden burst. English Water provides round-the-clock emergency repair services to address urgent issues promptly. Whether you've been alerted to a leak by your water supplier or noticed water pooling in your driveway, our team is ready to help.
            </p>
            <p className="text-lg text-gray-700">
              Our engineers use state-of-the-art tools to locate and repair leaks with minimal disruption. With a focus on speed and efficiency, we aim to resolve your issue quickly, preventing further damage or inconvenience.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="bg-[#1B3A6B] text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Contact English Water for Expert Water Supply Pipe Repairs</h3>
            <p className="text-lg mb-6">
              Don't let a leaking water supply pipe disrupt your life. For reliable, professional, and timely repair services across England, trust English Water to provide the solutions you need.
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
      <WhatToExpect />

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
            
            <a href="/services/water-leak-detection" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="/service-water-main-leak-detection.webp" 
                alt="Water Leak Detection" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#1B3A6B] transition-colors">
                  Water Leak Detection
                </h3>
              </div>
            </a>
            
            <a href="/services/water-supply-pipe-renewals" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="/service-water-supply-pipe-renewals.webp" 
                alt="Water Supply Pipe Renewals" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#1B3A6B] transition-colors">
                  Water Supply Pipe Renewals
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
          </div>
        </div>
      </section>
    </div>
  );
}
