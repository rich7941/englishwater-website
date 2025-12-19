import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export default function WaterMainRenewals() {
  const handleCall = () => {
    window.location.href = "tel:08003167322";
  };

  const handleEmail = () => {
    window.location.href = "mailto:hello@englishwater.co.uk";
  };

  const services = [
    {
      title: "Lead Pipe Replacement",
      image: "/service-lead-pipe-replacement.webp",
      link: "/services/lead-pipe-replacement"
    },
    {
      title: "Water Leak Detection",
      image: "/service-water-main-leak-detection.webp",
      link: "/services/water-leak-detection"
    },
    {
      title: "Water Supply Pipe Installations",
      image: "/service-water-supply-pipe-installations.webp",
      link: "/services/water-supply-pipe-installations"
    },
    {
      title: "Impact Moling",
      image: "/service-impact-moling.webp",
      link: "/services/impact-moling"
    },
    {
      title: "Lead Pipe Replacement Scheme",
      image: "/service-lead-pipe-replacement-scheme.webp",
      link: "/help-advice/lead-pipe-replacement-scheme"
    },
    {
      title: "Water Main Installations",
      image: "/service-water-main-installations.webp",
      link: "/services/water-main-installations"
    }
  ];

  const reviews = [
    {
      quote: "The workmen were exceptional. They were extremely helpful, courteous, hardworking and professional.",
      name: "Alex Bailey",
      location: "Paisley"
    },
    {
      quote: "As promised, it is very difficult to tell where the holes had been dug as they replaced everything, including the block paving, expertly.",
      name: "Laura Young",
      location: "East Kilbride"
    },
    {
      quote: "We are delighted with the outcome. The new water main has significantly improved our water pressure, and the work was completed with impressive speed and precision. Thank you, English Water, for a job well done.",
      name: "Gordan James",
      location: "Aberdeen"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/water-main-renewals-hero.webp')" }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="container relative z-10">
            <p className="text-white text-lg mb-4">Services</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Water Main Renewals England</h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
              Commercial Water Main Renewal Services by English Water
            </h2>
            
            <p className="text-lg text-gray-700 mb-8">
              For businesses experiencing issues with commercial water mains, whether it's due to leaks, decreased water flow or pressure, or the need to upgrade outdated infrastructure, English Water is equipped to provide specialised commercial solutions. When modifying commercial water mains on your property, English Water has the experience to undertake modifications, repairs or replacements.
            </p>

            {/* Factors Influencing Water Flow */}
            <h3 className="text-2xl font-bold text-[#1B3A6B] mb-6 mt-12">
              Factors Influencing Water Flow or Pressure in Commercial Settings
            </h3>
            
            <p className="text-lg text-gray-700 mb-6">
              The efficiency of water delivery to your commercial property is crucial and can be influenced by several factors related to your water main:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">Diameter of the Water Main</h4>
                <p className="text-lg text-gray-700">Restricted water flow can result from narrower water mains, affecting operations.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">Corrosion and Build-up</h4>
                <p className="text-lg text-gray-700">Particularly in older iron water mains, internal corrosion can significantly decrease the diameter, reducing flow.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">Demand Variability</h4>
                <p className="text-lg text-gray-700">Peak business hours can drastically increase water usage, stressing the water system.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">Length of the Water Main</h4>
                <p className="text-lg text-gray-700">Longer water mains may experience greater pressure drops, impacting water delivery across larger properties.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">Leaks in the Water Main</h4>
                <p className="text-lg text-gray-700">These can lead to significant water loss and decreased operational efficiency.</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-4">Additional considerations include:</p>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">System Pressure</h4>
                <p className="text-lg text-gray-700">The pressure from the municipal water supply directly impacts your flow rate.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">Configuration of Water Main Fittings</h4>
                <p className="text-lg text-gray-700">Components like meters, stop taps, and bends are critical in managing the flow.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">Integrity of the Water Main</h4>
                <p className="text-lg text-gray-700">Issues such as partial closures, blockages, or aging infrastructure can severely affect service quality.</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-8">
              Addressing these issues through water main renewal can lead to improved performance and reliability. For a consultation and free quote on commercial water main renewal, reach out to us.
            </p>

            {/* Renewal Techniques */}
            <h3 className="text-2xl font-bold text-[#1B3A6B] mb-6 mt-12">
              Commercial Water Main Renewal Techniques
            </h3>

            <p className="text-lg text-gray-700 mb-6">
              English Water recommends the most effective renewal techniques based on our extensive commercial expertise:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">Open Cut Trenching</h4>
                <p className="text-lg text-gray-700">Ideal for accessible areas requiring full water main replacement. Our certified operators handle all aspects of trenching and pipe installation.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">Butt Fusion and Electro Fusion Welding</h4>
                <p className="text-lg text-gray-700">These methods ensure a secure and seamless connection between new pipe sections, enhancing the main's integrity and function.</p>
              </div>
            </div>

            <h4 className="text-xl font-bold text-[#1B3A6B] mb-4">Advanced Trenchless Technologies</h4>
            <p className="text-lg text-gray-700 mb-6">Offer minimal disruption:</p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#1B3A6B] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="text-lg font-semibold text-[#1B3A6B]">Directional Drilling:</span>
                  <span className="text-lg text-gray-700"> Bypasses surface obstacles, ideal for urban environments.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#1B3A6B] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="text-lg font-semibold text-[#1B3A6B]">Pneumatic and Hydraulic Bursting:</span>
                  <span className="text-lg text-gray-700"> Efficiently replaces old mains without extensive excavation.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#1B3A6B] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="text-lg font-semibold text-[#1B3A6B]">Impact Moling:</span>
                  <span className="text-lg text-gray-700"> Offers a less invasive option for under roads or landscaped areas.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#1B3A6B] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="text-lg font-semibold text-[#1B3A6B]">Auger Boring and Steel Pipe Ramming:</span>
                  <span className="text-lg text-gray-700"> Effective for installing mains under existing structures.</span>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-[#1B3A6B] text-white p-8 rounded-lg text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">
                Partner with English Water for Reliable Water Main Renewal Solutions
              </h3>
              <p className="text-lg mb-6">
                English Water is committed to providing state-of-the-art water main renewal services that minimise downtime and maximise efficiency for your business.
              </p>
              <p className="mb-6">
                English Water can carry out water main renewals across England and provide you with a free quotation for the renewal. To get a free quote for your water main renewal, please call us on 0800 316 7322 or email hello@englishwater.co.uk to schedule a free consultation and learn how we can help with your water main needs.
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
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1B3A6B] mb-12">
              You may be interested in
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <a 
                  key={index}
                  href={service.link}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-[#1B3A6B] group-hover:text-[#1B3A6B] transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
}
