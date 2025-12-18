import WhatToExpect from "@/components/WhatToExpect";
import CallToAction from "@/components/CallToAction";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{backgroundImage: "url('/about-hero.png')"}}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About English Water
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
            About English Water in England
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-4">
              At English Water, we specialise in lead pipe replacement, water mains renewal, and water infrastructure services across England, serving all cities and towns including London, Birmingham, Manchester, Liverpool, Leeds, Sheffield, Bristol, Leicester, Coventry, Bradford, and beyond.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              With years of hands-on experience in the water industry, we have developed the expertise required to handle a wide range of projects, from private lead pipe replacement to full-scale commercial water main installations.
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A6B] mt-8 mb-4">
              Our Expertise and Commitment
            </h3>
            
            <p className="text-lg text-gray-700 mb-4">
              Our highly qualified team holds all the necessary certifications and credentials to provide efficient, safe, and professional services to every client. At English Water, we take pride in offering a complete in-house solution, including:
            </p>

            <ul className="list-disc pl-6 mb-6 text-lg text-gray-700">
              <li>Lead Pipe Replacement</li>
              <li>Water Supply Pipe Repairs</li>
              <li>Water Supply Pipe Installations</li>
              <li>Water Main Repairs</li>
              <li>Water Main Installations</li>
              <li>Water Leak Detection</li>
            </ul>

            <p className="text-lg text-gray-700 mb-6">
              We ensure that every project is carried out with the highest standards of workmanship, safety, and minimal disruption to your property.
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A6B] mt-8 mb-4">
              Why Choose English Water?
            </h3>

            <ol className="list-decimal pl-6 space-y-3 text-lg text-gray-700 mb-6">
              <li><strong>Qualified and Experienced:</strong> Our team is fully trained and certified to work on a variety of water infrastructure projects, ensuring compliance with all industry regulations.</li>
              <li><strong>Reliable and Honest:</strong> We believe in transparency and integrity. You can trust us to deliver top-quality services, on time and within budget.</li>
              <li><strong>Networked Across England:</strong> With established partnerships and a strong network within the water and construction industry, we have access to additional resources for specialised services when required.</li>
              <li><strong>Waterboard Approved:</strong> English Water's engineers are fully Waterboard Approved, meaning we are authorised to self-certify all our projects.</li>
              <li><strong>Expertise:</strong> With years of experience in the water industry, our team has the skills and knowledge to handle lead pipe replacement projects of any size.</li>
              <li><strong>Tailored Solutions:</strong> We understand that every property is unique. Our approach is customised to suit your specific needs.</li>
              <li><strong>Latest Technology:</strong> Our use of trenchless pipe replacement technology ensures minimal disruption to your property.</li>
              <li><strong>Commitment to Quality:</strong> We pride ourselves on providing transparent, high-quality services.</li>
            </ol>

            <p className="text-lg text-gray-700">
              English Water can carry out water supply pipe and water main work across England. To get a free quote please call us on <a href="tel:08003167322" className="text-[#1B3A6B] hover:underline">0800 316 7322</a> or email <a href="mailto:hello@englishwater.co.uk" className="text-[#1B3A6B] hover:underline">hello@englishwater.co.uk</a> to schedule a free consultation and learn how we can help with your water supply needs.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />

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
