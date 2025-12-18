import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export default function WaterLeakDetection() {
  const handleCallClick = () => {
    window.location.href = "tel:08003167322";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:hello@englishwater.co.uk";
  };

  return (
    <div className="min-h-screen flex flex-col">
      
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/water-leak-detection-hero.webp)" }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="container relative z-10">
            <p className="text-white text-lg mb-4">Services</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Water Leak Detection England</h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
              Underground Water Leak Detection Services in England
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Water leaks can be both costly and inconvenient, and when left undetected or unresolved can lead to large water consumption charges, reduced water pressure, material damage, and, in critical situations, loss of business or production. A moderate water main leak of around 1 litre per second could add approximately £60,000 to your annual commercial water bill.
              </p>

              <p className="text-lg text-gray-700">
                At English Water, we understand that where water appears on the surface may not actually be where the water main leak originates. Our highly trained water leak detection technicians use a range of advanced equipment to confirm the leak's exact location before any work begins.
              </p>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-8">
              What's Included in Our Water Leak Detection Site Survey
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-3">Mapping All Water Mains</h3>
                <p className="text-lg text-gray-700">
                  We identify every water main supply on your site and establish distinct zones.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-3">Recording Flow Rate and Average Daily Usage</h3>
                <p className="text-lg text-gray-700">
                  Monitoring consumption helps us spot anomalies that might indicate water main leaks.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-3">Flow and Pressure Testing</h3>
                <p className="text-lg text-gray-700">
                  We conduct comprehensive checks to measure how efficiently water is moving through your water main system.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-3">Acoustic Correlation and Ground Microphones</h3>
                <p className="text-lg text-gray-700">
                  Sounding techniques help us pinpoint the exact location of water main leaks with high accuracy.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg">
              <p className="text-lg text-gray-700">
                During these procedures, there is no disruption to your water mains or on-site operations. If any aspect of our work might affect your schedule, English Water is dedicated to being as flexible as possible. We're also available to work outside regular hours or at weekends to minimise downtime.
              </p>
            </div>
          </div>
        </section>

        {/* Techniques Section */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
              Techniques to Narrow Down and Locate Leaks
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              Once we have established the survey zones, we employ various methods to further refine the search area, typically locating water main leaks to within half a metre. These methods include:
            </p>

            <div className="space-y-6">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-3">Leakage Detection</h3>
                <p className="text-lg text-gray-700">
                  Employing open sounding, correlation, pipe tracing, and ground microphones to detect underground water main leaks.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-3">Flow and Pressure Logging</h3>
                <p className="text-lg text-gray-700">
                  Data loggers are deployed, and then the recorded information is retrieved and analysed.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-3">Pressure Management Design and Installation</h3>
                <p className="text-lg text-gray-700">
                  Ensuring optimal pressure settings to reduce the likelihood of further water main leaks.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-3">Step Testing and Zero Pressure Testing</h3>
                <p className="text-lg text-gray-700">
                  Including data logging to confirm water main leaks and their impact on the network.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-3">Leakage-Controlled Areas</h3>
                <p className="text-lg text-gray-700">
                  Setting up and designing zones to monitor and isolate water main leaks.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-3">Crisis Management</h3>
                <p className="text-lg text-gray-700">
                  Ongoing pressure checks, logging, and monitoring, as well as water balance analysis, to detect issues before they escalate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose English Water Section */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-8">
              Why Choose English Water for Water Leak Detection in England?
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1B3A6B] text-white rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B3A6B] mb-3">Minimal Disruption</h3>
                  <p className="text-lg text-gray-700">
                    We plan our work around your operations, preventing unnecessary downtime during the water leak detection process.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1B3A6B] text-white rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B3A6B] mb-3">Expert Technicians</h3>
                  <p className="text-lg text-gray-700">
                    Our water leak detection specialists are trained to use sophisticated equipment and techniques to swiftly locate and address leaks.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1B3A6B] text-white rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B3A6B] mb-3">Cost Savings</h3>
                  <p className="text-lg text-gray-700">
                    Identifying and repairing water leaks early helps you avoid steep water bills and potential property damage.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1B3A6B] text-white rounded-full flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B3A6B] mb-3">England-Focused</h3>
                  <p className="text-lg text-gray-700">
                    As an English company, we understand local regulations, geographical challenges, and weather conditions that can impact water mains.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg">
              <p className="text-lg text-gray-700">
                If you are concerned about potential water leaks or you're experiencing unexplained rises in water costs, contact English Water for professional water leak detection services. Let us help you protect your property, conserve water, and save money.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <div className="bg-[#1B3A6B] text-white p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">
                Contact English Water for Water Leak Detection and Repairs in England
              </h2>
              <p className="text-lg mb-6">
                For reliable, professional, and timely water leak detection and water main repair services across England, you can trust English Water to deliver.
              </p>
              <p className="mb-6">
                English Water can carry out water leak detection across England and provide you with a free quotation for the leak detection. To get a free quote for water leak detection, please call us on 0800 316 7322 or email hello@englishwater.co.uk to schedule a free consultation and learn how we can help with your water leak detection needs.
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
        <section className="py-16 bg-gray-50">
          <div className="container max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] text-center mb-12">You may be interested in</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <a href="/services/lead-pipe-replacement" className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/service-lead-pipe-replacement.webp" alt="Lead Pipe Replacement" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1B3A6B] hover:text-[#1B3A6B]">Lead Pipe Replacement</h3>
                </div>
              </a>
              
              <a href="/services/water-main-repairs" className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/service-water-main-repairs.png" alt="Water Main Repairs" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1B3A6B] hover:text-[#1B3A6B]">Water Main Repairs</h3>
                </div>
              </a>
              
              <a href="/services/water-supply-pipe-installations" className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/service-water-supply-pipe-installations.webp" alt="Water Supply Pipe Installations" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1B3A6B] hover:text-[#1B3A6B]">Water Supply Pipe Installations</h3>
                </div>
              </a>
              
              <a href="/services/impact-moling" className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/service-impact-moling.webp" alt="Impact Moling" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1B3A6B] hover:text-[#1B3A6B]">Impact Moling</h3>
                </div>
              </a>
              
              <a href="/help-advice/lead-pipe-replacement-scheme" className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/service-lead-pipe-replacement-scheme.webp" alt="Lead Pipe Replacement Scheme" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1B3A6B] hover:text-[#1B3A6B]">Lead Pipe Replacement Scheme</h3>
                </div>
              </a>
              
              <a href="/services/water-main-installations" className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/service-water-main-installations.webp" alt="Water Main Installations" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1B3A6B] hover:text-[#1B3A6B]">Water Main Installations</h3>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
}
// Cache bust 1763560284
