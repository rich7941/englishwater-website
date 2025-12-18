import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export default function LeadPipeReplacement() {
  return (
    <div className="min-h-screen">
      
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/lead-pipe-replacement-help-hero.webp)' }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container relative z-10">
          <p className="text-white text-lg mb-4">Help & Advice</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Lead Pipe Replacement</h1>
        </div>
      </section>

      {/* Main Content */}
      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
              Lead Pipe Replacement in England: Responsibilities, Challenges, and Best Practice
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Across England, many older properties—particularly those built before 1970—still rely on outdated lead pipes to supply drinking water from the public main into homes. Replacing these pipes is the only permanent way to eliminate the risk of lead exposure from domestic water systems. However, the process can be complex due to split ownership of the pipe and various practical barriers to full lead pipe replacement.
            </p>
          </div>
        </section>

        {/* Why Lead Pipes Are a Problem */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
              Why Lead Pipes Are a Problem
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Lead is a toxic metal that was commonly used in plumbing due to its flexibility and ease of installation. However, we now know that even low levels of lead exposure can have serious health effects. When drinking water comes into contact with lead pipes, lead can dissolve into the water—particularly if the water has been sitting still for several hours.
            </p>
          </div>
        </section>

        {/* Next Steps if Lead Pipes Are Found */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-8">
              Next Steps if Lead Pipes Are Found
            </h2>
            <div className="space-y-4">
              <div className="bg-white border-l-4 border-[#1B3A6B] p-6 shadow-sm">
                <h3 className="font-bold text-[#1B3A6B] mb-2">Lead Pipe Replacement</h3>
                <p className="text-lg text-gray-700">
                  Engage a qualified plumber to replace any identified lead pipes with approved materials like copper or plastic.
                </p>
              </div>
              <div className="bg-white border-l-4 border-[#1B3A6B] p-6 shadow-sm">
                <h3 className="font-bold text-[#1B3A6B] mb-2">Inform Your Water Supplier</h3>
                <p className="text-lg text-gray-700">
                  If lead is found in the communication pipe, your water supplier will replace it free of charge upon confirmation.
                </p>
              </div>
              <div className="bg-white border-l-4 border-[#1B3A6B] p-6 shadow-sm">
                <h3 className="font-bold text-[#1B3A6B] mb-2">Seek Financial Assistance</h3>
                <p className="text-lg text-gray-700">
                  Some local councils offer grants or assistance schemes to help with the cost of replacing lead pipes. Contact your local Environmental Health Department for information.
                </p>
              </div>
              <div className="bg-white border-l-4 border-[#1B3A6B] p-6 shadow-sm">
                <h3 className="font-bold text-[#1B3A6B] mb-2">Regular Testing</h3>
                <p className="text-lg text-gray-700">
                  After the lead pipe replacement work, consider periodic water testing to ensure lead levels remain within safe limits.
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              By taking these proactive steps, you can ensure the safety of your household's drinking water and comply with UK water regulations regarding lead in domestic water supplies.
            </p>
          </div>
        </section>

        {/* England's Path Forward */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
              England's Path Forward
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              In response to growing evidence of lead's harmful effects, the UK Government and water suppliers are increasing their focus on public awareness, testing, and infrastructure upgrades.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              In the private rented sector, changes to the Repairing Standard mean that from March 2024, landlords are legally required to ensure that no lead pipes are present in the drinking water supply of any property they let.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Homeowners and buyers are also advised to check whether their property contains lead pipe and, if necessary, arrange for professional testing or inspection.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Lead pipes are a hidden danger that continue to affect homes across England. They may be buried underground or concealed behind plaster, but their impact on health is very real. While chemical treatment can help reduce risk, it is not a substitute for lead pipe replacement.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The safest and most certain way to protect your household from lead in drinking water is to replace all lead pipes with approved, modern materials. Whether you're a homeowner, landlord, or tenant, identifying and addressing lead pipe is one of the most important steps you can take for long-term water safety.
            </p>
          </div>
        </section>

        {/* Additional Mitigation Tips */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-8">
              Additional Mitigation Tips
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#1B3A6B] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">
                  Never use hot tap water for drinking or cooking. Hot water dissolves lead more readily, especially from older pipe joints and fittings.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#1B3A6B] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">
                  Clean aerators (tap filters) regularly, as these can trap lead particles.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#1B3A6B] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">
                  Avoid using tap water for baby formula unless you have confirmed the supply is lead-free or are using filtered water.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#1B3A6B] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">
                  Encourage neighbours to act too, particularly if you live in a tenement or a building with a shared supply pipe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Bottom Line */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
              The Bottom Line: Mitigation Is Temporary
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              While corrosion control, flushing, and filters are all helpful steps, they are temporary precautions, not long-term solutions. They do not remove the lead pipe—they only reduce the risk while the pipe remains in place.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The only way to guarantee safe, lead-free drinking water is carry out a full lead pipe replacement—from the public main to the kitchen tap—using approved materials like copper or polyethylene.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              If you're waiting for funding or coordinating with your water supplier, these mitigation measures can help protect your household in the meantime.
            </p>
          </div>
        </section>

        {/* Partial Replacement Warning */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
              Partial Lead Pipe Replacement: A Risky Interim Step
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Partial lead pipe replacement occurs when only one part of the lead pipe—either the communication pipe (public side) or the supply pipe (private side)—is replaced, while the other section remains in place.
            </p>
            <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6">
              <p className="text-[#1B3A6B] font-semibold mb-2">⚠️ Warning</p>
              <p className="text-lg text-gray-700">
                This approach is not recommended, and in some circumstances may temporarily increase lead levels in the water. That's because disturbing the existing lead pipe during a partial lead pipe replacement can dislodge scale and lead particles built up inside the pipe over time.
              </p>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              These fragments can then enter the household water supply and remain suspended in the system for days or even weeks.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Partial lead pipe replacement does not remove the source of contamination and may create a false sense of security if no follow-up testing is carried out. In line with UK best practice, English households are strongly advised to do full lead pipe replacement—public and private sections together—to ensure the risk is fully removed.
            </p>
          </div>
        </section>

        {/* Challenges */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-8">
              Challenges in Coordinated Lead Pipe Replacement
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              There are several obstacles to completing full lead pipe replacement in practice:
            </p>
            <div className="space-y-4">
              <div className="bg-white border-l-4 border-[#1B3A6B] p-6 shadow-sm">
                <h3 className="font-bold text-[#1B3A6B] mb-2">Cost</h3>
                <p className="text-lg text-gray-700">
                  Replacing the private section of a lead pipe can cost between £1,500 and £12,000, depending on access, pipe length, and surface materials.
                </p>
              </div>
              <div className="bg-white border-l-4 border-[#1B3A6B] p-6 shadow-sm">
                <h3 className="font-bold text-[#1B3A6B] mb-2">Property Ownership</h3>
                <p className="text-lg text-gray-700">
                  In tenement buildings, flats, or shared properties, the supply pipe may be a shared responsibility between multiple owners, requiring coordination and cost-sharing.
                </p>
              </div>
              <div className="bg-white border-l-4 border-[#1B3A6B] p-6 shadow-sm">
                <h3 className="font-bold text-[#1B3A6B] mb-2">Landlord Hesitancy</h3>
                <p className="text-lg text-gray-700">
                  Some landlords may be reluctant to fund replacement work, especially if the tenants have not complained. However, from March 2024, it will be illegal to rent a property in England with lead pipes in the drinking water supply.
                </p>
              </div>
              <div className="bg-white border-l-4 border-[#1B3A6B] p-6 shadow-sm">
                <h3 className="font-bold text-[#1B3A6B] mb-2">Access Issues</h3>
                <p className="text-lg text-gray-700">
                  Some homeowners are unwilling to allow external contractors to carry out work within their property or under paved surfaces, fearing damage or disruption. In rare cases, this has delayed wider community pipe replacement efforts.
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              To overcome these barriers, some councils in England have begun offering grants or low-interest loans to help homeowners finance private lead pipe replacement. The long-term benefits to health and property value far outweigh the short-term inconvenience.
            </p>
          </div>
        </section>

        {/* Post-Replacement */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
              Post-Lead Pipe Replacement Flushing and Safety
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Once the new pipe is installed, it is important to flush the entire internal system to remove any residual lead particles or debris that may have dislodged during the works.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">This should include:</p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#1B3A6B] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Running all cold-water taps for at least 30 minutes</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#1B3A6B] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Removing and cleaning faucet aerators</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#1B3A6B] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Flushing through toilets, showers, and appliances</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#1B3A6B] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Avoiding use of water filters, kettles, or ice machines during the flushing process</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              If your property has a water meter, work done on or near it may also require a flush. Always consult with the English Water or your water supplier to confirm that the system is safe for drinking post-lead pipe replacement.
            </p>
          </div>
        </section>

        {/* Replace Don't Delay */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
              Replace, Don't Delay
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              In England, replacing lead pipes is not just a matter of improving water quality—it's a vital step in protecting public health. While corrosion control methods like orthophosphate treatment can help reduce lead levels, they do not eliminate the source.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Only a full lead pipe replacement—coordinated between homeowners and English Water—can provide lasting protection.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              If you suspect your property has lead pipes, act now. Whether you're a homeowner, landlord, or prospective buyer, replacing them is one of the most important investments you can make for the safety and wellbeing of everyone in the household.
            </p>
          </div>
        </section>

        {/* Replacing Your Lead Pipe */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-8">
              Replacing Your Lead Pipe: What You Need to Know
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Replacing your lead supply pipe is the most effective way to eliminate lead exposure from your drinking water. Here's what you need to consider when undertaking this work in England.
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Legal Requirements</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Any new water supply pipe must comply with the Water Supply (Water Fittings) Regulations 1999. This is a legal responsibility for the property owner, occupier, or plumber. Always:
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#1B3A6B] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Use a WaterSafe, WaterSeal, WaterTrust or WIAPS-approved contractor.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#1B3A6B] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Obtain certification of compliance when work is complete.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Technical Requirements</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">The new supply pipe must:</p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#1B3A6B] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Connect from the boundary stop tap to the internal stop tap.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#1B3A6B] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Be buried between 750mm and 1350mm below ground.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#1B3A6B] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Be insulated and ducted as it enters the building.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#1B3A6B] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Be surrounded with sand, gravel or friable soil up to 250mm above the pipe, followed by general infill.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#1B3A6B] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Be installed with both ends left open for inspection by your water supplier if applicable.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Special Cases</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-3">
              If the boundary stop tap is in the street, a permit to dig may be required.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-3">
              If your home shares a supply pipe, all affected homes must replace their lead sections before your water supplier can upgrade the public-side pipe.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              If you're unable to meet any of the above conditions, contact your water supplier's lead pipe replacement team for guidance.
            </p>
          </div>
        </section>

        {/* Shared Supply Pipes */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
              Shared Supply Pipes: Your Responsibilities
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Many tenements and terraced homes in England are served by shared supply pipes. If your property shares a water supply:
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#1B3A6B] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">You must coordinate with neighbours for a joint lead pipe replacement, or</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#1B3A6B] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Request a new, separate water connection.</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              English Water can help assess your options and identify support that may be available.
            </p>
          </div>
        </section>

        {/* Ready to Replace */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-8">
              Ready to Replace Your Lead Pipe? Here's What to Do
            </h2>
            <div className="space-y-4 mb-8">
              <div className="bg-white border-l-4 border-[#1B3A6B] p-6 shadow-sm">
                <p className="text-lg text-gray-700">Inspect your property for signs of lead pipes.</p>
              </div>
              <div className="bg-white border-l-4 border-[#1B3A6B] p-6 shadow-sm">
                <p className="text-lg text-gray-700">Contact English Water.</p>
              </div>
              <div className="bg-white border-l-4 border-[#1B3A6B] p-6 shadow-sm">
                <p className="text-lg text-gray-700">Replace the full length of your private supply pipe, including underground and internal sections.</p>
              </div>
              <div className="bg-white border-l-4 border-[#1B3A6B] p-6 shadow-sm">
                <p className="text-lg text-gray-700">Contact your water supplier once the work is complete. They will inspect and replace any remaining lead in the communication pipe.</p>
              </div>
              <div className="bg-white border-l-4 border-[#1B3A6B] p-6 shadow-sm">
                <p className="text-lg text-gray-700">Flush your internal system to clear any loose particles or sediment.</p>
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
                  alt="Lead Pipe Replacement Service" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B3A6B] group-hover:text-[#1B3A6B] transition-colors">
                    Lead Pipe Replacement Service
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
