import { Link } from "wouter";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function London() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/london-lead-pipe-hero.webp)' }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="container relative z-10">
            <p className="text-white text-lg mb-4">Services</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Lead Pipe Replacement<br />London
            </h1>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
              Lead Pipe Replacement Services in London
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              At English Water, we specialise in providing lead pipe replacement services across London. Given the health risks associated with lead contamination in water systems, it's crucial to ensure that your property's plumbing meets current safety standards. Our expert team is here to help you improve your water supply with our professional lead pipe replacement services.
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4 mt-12">Lead Pipes</h3>
            <p className="text-lg text-gray-700 mb-4">
              Lead pipes are a common issue in homes built before 1970 across London. Over time, these lead pipes pose a significant health risk due to the potential for lead to leach into your drinking water. If your property in London still uses lead water pipes, lead pipe replacement is the safest solution to ensure clean, safe drinking water for your household.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              At English Water, we provide professional lead pipe replacement services using advanced, trenchless technology (<Link href="/services/impact-moling" className="text-[#1B3A6B] hover:underline">impact moling</Link>) to minimise disruption while delivering long-lasting results. Our expert team operates across London, helping homeowners with lead pipe replacement to improve water quality.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h3 className="text-xl font-bold text-[#1B3A6B] mb-4">Responsibilities: Who Owns Which Pipe?</h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li><strong>Thames Water:</strong> Responsible for the water main and the communication pipe (from the main to the external stop tap).</li>
                <li><strong>Homeowners/Landlords:</strong> Responsible for the supply pipe (from the stop tap into the home) and all internal plumbing.</li>
                <li>In shared supply arrangements (e.g. shared properties), responsibility is joint between all connected property owners.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4 mt-12">Lead Pipe Replacement Service - What to Expect</h3>
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">1. Lead Pipe Inspection and Assessment</h4>
                <p className="text-lg text-gray-700">
                  We begin by carrying out a thorough inspection of your property to identify any lead pipes. Our skilled technicians assess the condition and layout of the existing lead pipes and recommend the best course of action for lead pipe replacement.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">2. Safe and Disruption-Free Lead Pipe Replacement</h4>
                <p className="text-lg text-gray-700">
                  Once lead pipes are identified, we use advanced techniques to replace them with modern, durable materials. Our trenchless technology minimises digging and disruption to your property, ensuring a smooth and efficient replacement process.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">3. Compliance with Water Safety Standards</h4>
                <p className="text-lg text-gray-700">
                  As a trusted water services provider in London, all our lead pipe replacement complies with current UK Water Regulations. We ensure that your new pipe meets the latest health and safety standards, giving you peace of mind about your drinking water.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4 mt-12">Regulation and Water Safety Standards in London</h3>
            <p className="text-lg text-gray-700 mb-4">
              In London, lead levels in drinking water are governed by the Water Supply (Water Quality) (England) Regulations 2010, which set the current legal limit at 10 micrograms per litre (10 µg/L).
            </p>
            <p className="text-lg text-gray-700 mb-4">
              This reflects a significant improvement from earlier standards:
            </p>
            <ul className="list-disc pl-6 mb-4 text-lg text-gray-700">
              <li>50 µg/L in the late 1980s</li>
              <li>25 µg/L by 2003</li>
            </ul>
            <p className="text-lg text-gray-700 mb-6">
              The long-term ambition is to reduce the limit as close to zero as possible, in line with WHO guidance. The WHO recommends a guideline value of 0.01 mg/L (10 µg/L) based on health risk, not practical implementation. Public health experts increasingly advocate adopting the EU's upcoming 5 µg/L standard, particularly for vulnerable populations like children and pregnant women.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#1B3A6B] p-6 mb-8">
              <h3 className="text-xl font-bold text-[#1B3A6B] mb-4">Testing and Taking Action</h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li><strong>Water Testing:</strong> Free testing is available if lead pipes are suspected. A sample is taken from your cold kitchen tap.</li>
                <li><strong>Results:</strong> If lead exceeds 10 µg/l, or 5 µg/l from April 2025, Thames Water may replace its section. You must replace your private section first.</li>
                <li><strong>Replacement:</strong> Use English Water to ensure compliance with UK Water Regulations.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4 mt-12">Why Replace Lead Pipes?</h3>
            <p className="text-lg text-gray-700 mb-4">
              Replacing lead pipes is essential to protect your household from potential health risks and improve the quality of your water supply. Here's why lead pipe replacement is important:
            </p>
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">1. Health Risks</h4>
                <p className="text-lg text-gray-700">
                  Lead can leach into drinking water from old lead pipes, posing serious health risks, particularly to young children and pregnant women. Lead exposure has been linked to developmental issues and other long-term health problems, making it critical to replace lead pipes as soon as possible.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">2. Improved Water Quality</h4>
                <p className="text-lg text-gray-700">
                  Replacing lead pipes eliminates the risk of lead contamination, significantly improving the safety and quality of your drinking water. Many homeowners also notice an improvement in the taste and clarity of their water after the lead pipe replacement work.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">3. Increased Property Value</h4>
                <p className="text-lg text-gray-700">
                  Modernising your plumbing system by replacing lead pipes can enhance the value of your property. Homes with updated lead-free water systems are more attractive to potential buyers and meet today's safety standards.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 mb-8">
              <h3 className="text-xl font-bold text-[#1B3A6B] mb-4">Mitigation While Awaiting Replacement</h3>
              <p className="text-lg text-gray-700 mb-4">
                While full pipe replacement is the only permanent solution, temporary steps can reduce exposure:
              </p>
              <ul className="list-disc pl-6 text-lg text-gray-700">
                <li>Use only cold water for drinking or cooking.</li>
                <li>Run taps for several minutes before use.</li>
                <li>Clean faucet aerators regularly.</li>
                <li>Use point-of-use filters certified for lead removal.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4 mt-12">The Dangers of Partial Lead Pipe Replacement</h3>
            <p className="text-lg text-gray-700 mb-6">
              Partial lead pipe replacement—replacing only the public or private section—can dislodge built-up lead particles and temporarily increase contamination. <Link href="/help-advice/lead-pipe-replacement" className="text-[#1B3A6B] hover:underline">Full lead pipe replacement</Link> of both sections is strongly advised to eliminate the risk.
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4 mt-12">After Lead Pipe Replacement</h3>
            <p className="text-lg text-gray-700 mb-4">
              Once your lead pipe replacement is complete:
            </p>
            <ul className="list-disc pl-6 mb-6 text-lg text-gray-700">
              <li>Flush your system by running all cold taps for 30 minutes.</li>
              <li>Remove and clean aerators.</li>
              <li>Avoid using kettles or ice makers during flushing.</li>
              <li>Notify Thames Water for a follow-up inspection.</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4 mt-12">How to Start the Lead Pipe Replacement Process</h3>
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">Step 1 – Contact English Water <a href="tel:08003167322" className="text-[#1B3A6B] hover:underline">0800 316 7322</a></h4>
                <p className="text-lg text-gray-700 mb-2">
                  Discuss your property's lead pipe replacement with English Water. We may ask:
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-700">
                  <li>Is it a single or shared supply?</li>
                  <li>When was the property built?</li>
                  <li>We'll confirm if the pipe is lead and explain next steps.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">Step 2 – Hire English Water</h4>
                <p className="text-lg text-gray-700">
                  Hire English Water to do your private-side lead pipe replacement. If on a shared supply, we must work with neighbours and may need to submit proof of work (e.g. a completion certificate).
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">Step 3 – Pipe Connection</h4>
                <p className="text-lg text-gray-700">
                  Once English Water completes your private side lead pipe replacement, Thames Water will replace the lead communication pipe on the public highway free of charge.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#1B3A6B] to-blue-900">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Contact English Water for Lead Pipe Replacement in London
            </h2>
            <p className="text-white text-lg mb-8 max-w-3xl mx-auto">
              If you're concerned about lead pipes in your London property, contact English Water today. Our expert team is ready to assess your property and provide a comprehensive lead pipe replacement service tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-[#1B3A6B] hover:bg-gray-100">
                <Phone className="mr-2 h-5 w-5 scale-x-[-1]" />
                <a href="tel:08003167322">0800 316 7322</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Mail className="mr-2 h-5 w-5" />
                <a href="mailto:hello@englishwater.co.uk">hello@englishwater.co.uk</a>
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
                    alt="Step 1 - Customer Service in London"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-lg text-gray-700">Call us 24/7, 365, at a time that suits you.</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="border-4 border-pink-400 rounded-lg overflow-hidden mb-4 w-48 h-48">
                  <img 
                    src="/step2_couple_quote.jpeg" 
                    alt="Step 2 - Get a Quote in London"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-lg text-gray-700">You'll get a no-obligation quote straight away.</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="border-4 border-[#1B3A6B] rounded-lg overflow-hidden mb-4 w-48 h-48">
                  <img 
                    src="/what-to-expect-van.png" 
                    alt="Step 3 - Expert Engineers in London"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-lg text-gray-700">Expert engineers will arrive and carry out the work.</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="border-4 border-orange-400 rounded-lg overflow-hidden mb-4 w-48 h-48">
                  <img 
                    src="/step4_woman_water.jpeg" 
                    alt="Step 4 - 25-Year Guarantee in London"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-lg text-gray-700">We'll give you a 25-year guarantee*.</p>
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
                  alt="Lead Pipe Replacement in London" 
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
                  alt="Water Supply Pipe Installations in London" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#1B3A6B] transition-colors">
                    Water Supply Pipe Installations
                  </h3>
                </div>
              </a>
              
              <a href="/services/water-leak-detection" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src="/service-water-main-leak-detection.webp" 
                  alt="Water Leak Detection in London" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#1B3A6B] transition-colors">
                    Water Leak Detection
                  </h3>
                </div>
              </a>
              
              <a href="/services/impact-moling" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src="/service-impact-moling.webp" 
                  alt="Impact Moling in London" 
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
                  alt="Lead Pipe Replacement Scheme in London" 
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
                  alt="Water Main Installations in London" 
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
      </main>
    </div>
  );
}
