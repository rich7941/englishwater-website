import { Phone } from "lucide-react";
import WhatToExpect from "@/components/WhatToExpect";

export default function WaterMainInstallations() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url(/water-main-installations-hero.webp)" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative z-10">
          <p className="text-white text-lg mb-4">Services</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Water Main Installations England</h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
            Commercial Water Main Installation Specialists in England
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            English Water stands as the trusted authority in commercial water main installations across England. With extensive experience and a dedication to superior service, we provide efficient, reliable, and superior water infrastructure solutions to a diverse range of business sectors. If your business requires an upgrade to its water system or the installation of entirely new water mains, English Water offers comprehensive and streamlined services to meet your needs.
          </p>

          {/* Our Service Offerings Section */}
          <h3 className="text-2xl font-bold text-[#1B3A6B] mb-6 mt-12">Our Service Offerings</h3>
          
          <div className="space-y-8 mb-12">
            {/* Service 1 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">
                1. Detailed Planning and Tailored Designs
              </h4>
              <p className="text-lg text-gray-700">
                Every water main installation project begins with a thorough site evaluation to devise a custom plan that aligns perfectly with the specific needs of your commercial premises. This meticulous planning facilitates a smooth and efficient installation process for commercial water mains.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">
                2. Advanced Water Main Installation and Renewal Methods
              </h4>
              <p className="text-lg text-gray-700">
                We employ cutting-edge, trenchless technology like horizontal directional drilling and impact moling, which limits the disturbance to your operational area. Our modern water main installation methods ensure quick completion of projects with little to no impact on the surrounding environment.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">
                3. Regulatory Compliance and Certifications
              </h4>
              <p className="text-lg text-gray-700">
                As a reputable contractor in the water industry, English Water ensures that every commercial water main installation complies with stringent UK Water Regulations. We issue certificates at the end of each project to verify the safety and regulatory compliance of the newly installed or upgraded system.
              </p>
            </div>
          </div>

          {/* Installation Methods Section */}
          <h3 className="text-2xl font-bold text-[#1B3A6B] mb-6 mt-12">
            Commercial Water Main Installation Methods
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            English Water employs a range of cutting-edge renewal methods tailored to our comprehensive commercial expertise:
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-[#1B3A6B] flex-shrink-0 mt-2"></div>
              <div>
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-2">Open Cut Trenching</h4>
                <p className="text-lg text-gray-700">
                  This method is perfect for areas where full access is available, necessitating complete water main replacements. Our qualified operators manage every detail of the trenching and pipe installation process.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-[#1B3A6B] flex-shrink-0 mt-2"></div>
              <div>
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-2">Butt Fusion and Electro Fusion Welding</h4>
                <p className="text-lg text-gray-700">
                  Utilizing these techniques, we create strong, continuous connections between new pipe sections, significantly improving the structural integrity and functionality of the water main.
                </p>
              </div>
            </div>
          </div>

          {/* Trenchless Technologies Section */}
          <h4 className="text-xl font-bold text-[#1B3A6B] mb-6 mt-8">
            State-of-the-Art Trenchless Technologies for Minimal Disruption:
          </h4>

          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-[#1B3A6B] flex-shrink-0 mt-2"></div>
              <div>
                <h5 className="text-lg font-bold text-[#1B3A6B] mb-2">Directional Drilling</h5>
                <p className="text-lg text-gray-700">
                  This technique avoids surface obstacles and is particularly suitable for congested urban settings.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-[#1B3A6B] flex-shrink-0 mt-2"></div>
              <div>
                <h5 className="text-lg font-bold text-[#1B3A6B] mb-2">Pneumatic and Hydraulic Bursting</h5>
                <p className="text-lg text-gray-700">
                  A method that allows for the replacement of old mains without the need for significant digging.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-[#1B3A6B] flex-shrink-0 mt-2"></div>
              <div>
                <h5 className="text-lg font-bold text-[#1B3A6B] mb-2">Impact Moling</h5>
                <p className="text-lg text-gray-700">
                  A minimally invasive alternative, ideal for situations beneath roads or within landscaped zones.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-[#1B3A6B] flex-shrink-0 mt-2"></div>
              <div>
                <h5 className="text-lg font-bold text-[#1B3A6B] mb-2">Auger Boring and Steel Pipe Ramming</h5>
                <p className="text-lg text-gray-700">
                  These methods are highly effective for installing new mains underneath existing structures without disturbing the surface.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose English Water Section */}
          <h3 className="text-2xl font-bold text-[#1B3A6B] mb-6 mt-12">Why Choose English Water?</h3>
          
          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1B3A6B] text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">
                1
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-2">Customised Service Solutions</h4>
                <p className="text-lg text-gray-700">
                  We recognise the uniqueness of each water main installation project, providing bespoke solutions whether it's a new installation or upgrading existing water infrastructure to enhance your business operations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1B3A6B] text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">
                2
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-2">Unwavering Dedication to Quality</h4>
                <p className="text-lg text-gray-700">
                  English Water is committed to excellence, maintaining transparent processes and constant communication throughout the water main installation project duration.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1B3A6B] text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">
                3
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-2">Skilled Professional Team</h4>
                <p className="text-lg text-gray-700">
                  Our water main specialists have profound knowledge and extensive experience in executing commercial water main installations, managing both small-scale and major projects with utmost precision.
                </p>
              </div>
            </div>
          </div>

          {/* Engage English Water Section */}
          <div className="bg-[#1B3A6B] text-white p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Engage English Water for Your Commercial Water Main Needs in England
            </h3>
            <p className="text-lg mb-4">
              Choose English Water for sophisticated and efficient commercial water main installation services. We are the front-runner in England, known for our innovative approaches, quality assurance, and exceptional customer service. We prioritise the reliability and efficiency of your water main system, ensuring it upholds the highest performance and safety standards.
            </p>
            <p className="text-lg">
              English Water takes pride in being the premier provider of water main installation services across England. Our dedication to innovation, superior quality, and exceptional customer service distinguishes us from others in the field. We recognise the critical need for a dependable water supply system and are committed to ensuring that your system adheres to the highest standards of performance and safety.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="bg-[#1B3A6B] text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Get Your Free Quote Today</h3>
            <p className="text-lg mb-6">
              English Water can carry out water main installations across England and provide you with a free quotation for the installation.
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
