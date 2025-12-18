import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LowWaterPressure() {
  return (
    <div className="min-h-screen">
      
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/low-water-pressure.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container relative z-10">
          <p className="text-white text-lg mb-4">Help & Advice</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Low Water Pressure</h1>
        </div>
      </section>

        {/* Understanding Low Water Pressure */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">Understanding Low Water Pressure Issues</h2>
            <p className="text-lg text-gray-700 mb-4">
              Low water pressure can significantly impact your daily life, affecting everything from showering to washing dishes. At English Water, we understand how frustrating weak water flow can be, and we're here to help you identify the causes and find effective solutions.
            </p>
          </div>
        </section>

        {/* Common Causes */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">Common Causes of Low Water Pressure</h2>
            <p className="text-lg text-gray-700 mb-6">
              Several factors can contribute to reduced water pressure in your home:
            </p>
            <div className="space-y-6">
              <div className="bg-white border-l-4 border-[#1B3A6B] p-6 rounded">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">Pipe Blockages and Corrosion</h3>
                <p className="text-lg text-gray-700">
                  Over time, mineral deposits and sediment can accumulate inside pipes, restricting water flow. In older properties with aging infrastructure, corrosion may have narrowed the internal diameter of pipes, reducing pressure throughout your home.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#1B3A6B] p-6 rounded">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">Partially Closed Valves</h3>
                <p className="text-lg text-gray-700">
                  Sometimes the issue is as simple as a valve that hasn't been fully opened. Check your main stopcock and isolation valves to ensure they're completely open.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#1B3A6B] p-6 rounded">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">Leaking Fixtures and Pipes</h3>
                <p className="text-lg text-gray-700">
                  Hidden leaks in your plumbing system can divert water away from your taps, resulting in noticeably lower pressure. Even small leaks can accumulate to significant water loss.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#1B3A6B] p-6 rounded">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">Supply Issues from Your Water Provider</h3>
                <p className="text-lg text-gray-700">
                  Occasionally, low pressure may stem from the mains supply itself. During peak usage times or due to maintenance work, your water provider may temporarily reduce pressure in your area.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">Solutions to Restore Water Pressure</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1B3A6B] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">Check Your Isolation Valves</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Before attempting any fixes, ensure all valves in your system are fully open:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Locate your main stopcock (usually under the kitchen sink or outside your property)</li>
                    <li>Turn it fully clockwise to ensure it's completely open</li>
                    <li>Check any isolation valves near your boiler or water tank</li>
                    <li>Verify that the water company's isolation valve (if accessible) is open</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1B3A6B] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">Clean Your Aerators and Screens</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Faucet aerators and screens can accumulate mineral deposits that restrict flow:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Unscrew the aerator from the affected tap</li>
                    <li>Soak it in white vinegar for 30 minutes to dissolve mineral buildup</li>
                    <li>Rinse thoroughly under running water</li>
                    <li>Reattach and test the pressure</li>
                  </ol>
                  <p className="text-lg text-gray-700 mt-4">
                    This simple maintenance task often resolves pressure issues in specific taps without requiring professional intervention.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1B3A6B] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">Inspect for Leaks</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    A systematic inspection can reveal hidden leaks:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Check under sinks and around pipes for water stains or dampness</li>
                    <li>Look for unexplained wet patches on walls or ceilings</li>
                    <li>Monitor your water meter: if it continues running when all taps are off, you likely have a leak</li>
                    <li>Listen for unusual sounds like dripping or hissing behind walls</li>
                  </ul>
                  <p className="text-lg text-gray-700 mt-4">
                    If you suspect a leak, contact English Water's leak detection service for professional assessment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1B3A6B] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">Flush Your Pipes</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Sediment buildup in pipes can reduce flow:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Turn off your water supply at the main stopcock</li>
                    <li>Open all taps and let them run until water stops flowing</li>
                    <li>Close all taps</li>
                    <li>Turn the water supply back on</li>
                    <li>Open taps one at a time, starting with the lowest point in your home</li>
                  </ol>
                  <p className="text-lg text-gray-700 mt-4">
                    This process helps clear accumulated sediment from your pipes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1B3A6B] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">Regular Maintenance and Inspections</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Preventative maintenance helps maintain optimal water pressure:
                  </p>
                  <div className="bg-gray-50 p-4 rounded mb-4">
                    <h4 className="font-bold text-[#1B3A6B] mb-2">Monthly Checks</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Clean faucet aerators</li>
                      <li>Inspect visible pipes for leaks or corrosion</li>
                      <li>Verify all valves are fully open</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-bold text-[#1B3A6B] mb-2">Annual Professional Inspection</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Have a qualified plumber inspect your entire system</li>
                      <li>Check pressure regulator function</li>
                      <li>Identify early signs of corrosion or wear</li>
                      <li>Ensure all components are in good working order</li>
                    </ul>
                  </div>
                  <p className="text-lg text-gray-700 mt-4">
                    Regular upkeep not only maintains water pressure but also extends the lifespan of your plumbing system and prevents costly emergency repairs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* When to Contact */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">When to Contact English Water</h2>
            <p className="text-lg text-gray-700 mb-6">
              While many water pressure issues can be resolved with these DIY solutions, professional expertise is essential in certain situations:
            </p>
            
            <div className="space-y-4">
              <div className="bg-white border-2 border-[#1B3A6B] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">Persistent Low Pressure</h3>
                <p className="text-lg text-gray-700">
                  If pressure remains low after trying the steps above, the issue likely requires professional diagnosis. This could indicate problems with your pressure regulator, internal plumbing, or the mains supply itself.
                </p>
              </div>

              <div className="bg-white border-2 border-[#1B3A6B] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">Sudden Complete Loss of Water</h3>
                <p className="text-lg text-gray-700 mb-3">
                  If your taps suddenly produce little or no water, this may indicate:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>A major leak in your system</li>
                  <li>A supply issue from the mains</li>
                  <li>A serious fault in your plumbing</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-[#1B3A6B] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">Visible Leaks or Water Damage</h3>
                <p className="text-lg text-gray-700">
                  Any signs of leaking pipes, water stains, or dampness require immediate professional attention to prevent structural damage and water waste.
                </p>
              </div>

              <div className="bg-white border-2 border-[#1B3A6B] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">Complex Plumbing Issues</h3>
                <p className="text-lg text-gray-700">
                  Problems such as faulty pressure regulators, broken water valves, or suspected internal leaks require the expertise and specialized tools that professional plumbers possess.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Can Help */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">How English Water Can Help</h2>
            <p className="text-lg text-gray-700 mb-8">
              At English Water, we offer comprehensive water pressure solutions:
            </p>
            
            <div className="space-y-4">
              <div className="bg-gray-50 border-l-4 border-[#1B3A6B] p-6 rounded">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">Leak Detection Services</h3>
                <p className="text-lg text-gray-700">
                  Using advanced technology, we can locate hidden leaks in your plumbing system without invasive excavation.
                </p>
              </div>

              <div className="bg-gray-50 border-l-4 border-[#1B3A6B] p-6 rounded">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">Pipe Replacement and Repair</h3>
                <p className="text-lg text-gray-700">
                  For corroded or damaged pipes affecting pressure, we offer complete replacement using modern materials.
                </p>
              </div>

              <div className="bg-gray-50 border-l-4 border-[#1B3A6B] p-6 rounded">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">Emergency Water Services</h3>
                <p className="text-lg text-gray-700">
                  If you experience sudden pressure loss or major leaks, our 24/7 emergency team is ready to help.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">Q: What's the normal water pressure in a home?</h3>
                <p className="text-lg text-gray-700">
                  A: Typical household water pressure ranges from 1 to 3 bar (14-43 psi). If your pressure is consistently below 1 bar, you may experience noticeable flow issues.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">Q: Can I fix low pressure caused by clogged pipes myself?</h3>
                <p className="text-lg text-gray-700">
                  A: For minor blockages in aerators or screens, yes. However, blockages deep within your plumbing system require professional pipe cleaning or replacement.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">Q: What should I do if I notice a sudden drop in water pressure?</h3>
                <p className="text-lg text-gray-700">
                  A: First, check if the issue affects all taps or just specific ones. Then contact English Water to rule out supply issues or report potential leaks in your system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#1B3A6B] text-white">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch with English Water</h2>
            <p className="text-lg mb-8">
              If you're experiencing low water pressure or need professional assistance with your plumbing system, don't hesitate to contact us. Our dedicated team of experienced engineers is ready to diagnose your water pressure issues and provide tailored solutions to restore optimal flow throughout your home.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="tel:08003167322" className="flex items-center justify-center gap-2 bg-white text-[#1B3A6B] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                <Phone size={20} />
                0800 316 7322
              </a>
              <a href="mailto:hello@englishwater.co.uk" className="flex items-center justify-center gap-2 bg-white text-[#1B3A6B] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                <Mail size={20} />
                hello@englishwater.co.uk
              </a>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-16 bg-white">
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
              
              <a href="/help-advice/impact-moling-prices-2026-england" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src="/impact-moling-prices-hero.webp" 
                  alt="Impact Moling Prices 2026" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#1B3A6B] transition-colors">
                    Impact Moling Prices 2026
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
              
              <a href="/help-advice/water-filter" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src="/service-water-filter.webp" 
                  alt="Water Filter" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#1B3A6B] transition-colors">
                    Water Filter
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </section>
    </div>
  );
}
