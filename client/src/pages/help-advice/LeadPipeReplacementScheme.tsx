import { Button } from "@/components/ui/button";

export default function LeadPipeReplacementScheme() {
  const services = [
    {
      title: "Lead Pipe Replacement",
      image: "/service-lead-pipe-replacement.webp",
      link: "/services/lead-pipe-replacement",
    },
    {
      title: "Water Leak Detection",
      image: "/service-water-main-leak-detection.webp",
      link: "/services/water-leak-detection",
    },
    {
      title: "Water Supply Pipe Installations",
      image: "/service-water-supply-pipe-installations.webp",
      link: "/services/water-supply-pipe-installations",
    },
    {
      title: "Impact Moling",
      image: "/service-impact-moling.webp",
      link: "/services/impact-moling",
    },
    {
      title: "Water Leaks",
      image: "/service-water-leaks.webp",
      link: "/help-advice/water-leaks",
    },
    {
      title: "Water Main Installations",
      image: "/service-water-main-installations.webp",
      link: "/services/water-main-installations",
    },
  ];

  const reviews = [
    {
      name: "James Thompson",
      location: "London",
      text: "I had a water leak at my property and English Water came out within an hour to fix it. They were very professional and the work was completed to a high standard.",
    },
    {
      name: "Michael Davies",
      location: "Birmingham",
      text: "English Water replaced my lead pipes and the service was excellent. They kept me informed throughout the process and the work was completed on time.",
    },
    {
      name: "David Wilson",
      location: "Manchester",
      text: "I had a water main burst and English Water came out within the hour to fix it. They were very professional and the work was completed to a high standard.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/service_lead_pipe_scheme.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <p className="text-white text-lg mb-2">Help & Advice</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Lead Pipe Replacement Scheme England
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
            Lead Pipe Replacement Scheme England: Ensuring Safer Water for English Homes
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Access to clean, safe drinking water is a fundamental necessity for every household. In England, thousands of older properties still rely on outdated lead piping, which can pose serious health risks due to lead contamination. The Lead Pipe Replacement Scheme in England is a proactive initiative aimed at addressing this issue, ensuring better water quality, and safeguarding public health. Here, we explore the scheme, its benefits, and how you can take advantage of it.
          </p>
        </section>

        {/* What Is the Lead Pipe Replacement Scheme */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
            What is the Lead Pipe Replacement Scheme?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The Lead Pipe Replacement Scheme in England is designed to help homeowners replace outdated lead pipes with modern, safer alternatives. Lead pipes were commonly used in properties built before 1970. Over time, lead can leach into the water supply, especially if the water is acidic or soft, leading to potentially harmful health effects.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            This lead pipe replacement scheme focuses on encouraging property owners to modernize their plumbing systems by replacing old lead pipes with materials such as copper or plastic, which comply with current safety standards.
          </p>
        </section>

        {/* Replacing Lead Pipes in England */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
            Replacing Lead Pipes in England
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Across England, many older properties still use lead pipes to deliver drinking water. Replacing these pipes is the only permanent solution to eliminate the risk of lead contamination. While your water supplier provides high-quality, treated water free from lead, contamination can still occur if water travels through old private lead pipe.
          </p>
        </section>

        {/* Why Replace Your Lead Water Supply Pipe */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
            Why Replace Your Lead Water Supply Pipe?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Replacing lead pipes is essential for several reasons:
          </p>

          <div className="space-y-6">
            <div className="bg-white border-2 border-[#1B3A6B] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">1. Health Risks:</h3>
              <p className="text-lg text-gray-700 mb-4">
                Lead exposure can cause serious health issues, particularly in young children and pregnant women.
              </p>
              <p className="text-lg text-gray-700">
                Long-term exposure to lead can affect brain development, kidney function, and the nervous system.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1B3A6B] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">2. Improved Water Quality:</h3>
              <p className="text-lg text-gray-700">
                Modern pipes eliminate the risk of lead contamination, providing cleaner and safer drinking water.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1B3A6B] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">3. Compliance with Regulations:</h3>
              <p className="text-lg text-gray-700">
                The Water Supply (Water Quality) Regulations 2016 set strict limits on lead content in water. Upgrading your pipes ensures compliance with these standards.
              </p>
            </div>
          </div>
        </section>

        {/* Testing and Regulation */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
            Testing and Regulation
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The UK legal limit is 10 µg/L. The EU will reduce this to 5 µg/L by 2036. WHO recommends exposure as close to zero as possible.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>Lead in Schools and Public Buildings</strong> Lead pipes may be present in schools, nurseries, and older public buildings. Facilities managers should arrange for testing, especially where children are involved.
          </p>
        </section>

        {/* What If You Rent Your Home */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
            What If You Rent Your Home?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6">
            <li>Ask your landlord to inspect and replace if needed</li>
            <li>Share water test results to support your request</li>
          </ul>
        </section>

        {/* What Water Suppliers Are Doing */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
            What Water Suppliers Are Doing:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6">
            <li>Offering free replacement of the public-side lead pipe after private upgrades</li>
            <li>Monitors public buildings</li>
            <li>Treats water with orthophosphate</li>
            <li>Will begin replacing communication pipes above 5 µg/L from April 2025</li>
          </ul>
        </section>

        {/* How the Lead Pipe Replacement Scheme Works */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
            How the Lead Pipe Replacement Scheme Works
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Under the Lead Pipe Replacement Scheme in England, homeowners are encouraged to:
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Here's why it's important:
          </p>

          <div className="space-y-6">
            <div className="bg-white border-2 border-[#1B3A6B] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">1. Identify Lead Water Supply Pipes:</h3>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                <li>Check for a lead water supply pipe in older properties, particularly if your house was built before 1970.</li>
                <li>Signs include dull grey pipes that are soft and can be easily scratched to reveal shiny metal underneath.</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-[#1B3A6B] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">2. Consult Professionals:</h3>
              <p className="text-lg text-gray-700">
                Contact a certified contractor, such as English Water, to assess your home and determine whether you have a lead water supply pipe.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1B3A6B] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">3. Replace Your Lead Water Supply Pipe:</h3>
              <p className="text-lg text-gray-700">
                English Water will safely replace your lead water supply pipe with approved materials.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1B3A6B] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">4. Replace Your Lead Communication Pipe:</h3>
              <p className="text-lg text-gray-700">
                Your water supplier will then replace your lead water communication pipe at their expense.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits of Replacing Lead Pipes */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
            Benefits of Replacing Lead Pipes
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Replacing lead pipes offers numerous advantages, including:
          </p>

          <div className="space-y-6">
            <div className="bg-white border-2 border-[#1B3A6B] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Health Protection:</h3>
              <p className="text-lg text-gray-700">
                Reducing exposure to lead ensures the safety of your family.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1B3A6B] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Increased Property Value:</h3>
              <p className="text-lg text-gray-700">
                Modern plumbing systems are more attractive to potential buyers.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1B3A6B] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Improved Water Pressure and Flow:</h3>
              <p className="text-lg text-gray-700">
                Upgrading your pipes can enhance water delivery to your home.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1B3A6B] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Long-Term Savings:</h3>
              <p className="text-lg text-gray-700">
                Modern pipes are more durable and less likely to leak and cause damage or need repairs.
              </p>
            </div>
          </div>
        </section>

        {/* Identifying Lead Pipe in Your Home */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
            Identifying Lead Pipe in Your Home
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            You may have lead pipes if your property was built before 1970. To check:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6">
            <li>Locate your internal stop tap (usually under the kitchen sink).</li>
            <li>Examine the pipe feeding it—lead pipes are dull grey, soft, and reveal shiny metal when scratched.</li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            If your supply pipe resembles this material, you likely have lead pipe. Your water supplier can arrange a free test and visual inspection to confirm.
          </p>
        </section>

        {/* Next Steps if Lead Pipes Are Found */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
            Next Steps if Lead Pipes Are Found
          </h2>
          <div className="space-y-6">
            <div className="bg-white border-2 border-[#1B3A6B] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Replace Lead Pipes:</h3>
              <p className="text-lg text-gray-700">
                Engage a qualified plumber to replace any identified lead pipes with approved materials like copper or plastic.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1B3A6B] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Inform Your Water Supplier:</h3>
              <p className="text-lg text-gray-700">
                If lead is found in the communication pipe, your water supplier will replace it free of charge upon confirmation.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1B3A6B] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Seek Financial Assistance:</h3>
              <p className="text-lg text-gray-700">
                Some local councils offer grants or assistance schemes to help with the cost of replacing lead pipes.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1B3A6B] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Regular Testing:</h3>
              <p className="text-lg text-gray-700">
                After replacement, consider periodic water testing to ensure lead levels remain within safe limits.
              </p>
            </div>
          </div>
        </section>

        {/* England's Path Forward */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
            England's Path Forward
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The UK Government and water suppliers are increasing their focus on public awareness, testing, and infrastructure upgrades in response to the growing evidence of lead's harmful effects. Landlords must ensure that no lead pipes are present in drinking water systems in rental properties from March 2024 under the Repairing Standard. Homeowners and prospective buyers are also encouraged to inspect and, if necessary, replace lead pipe.
          </p>
        </section>

        {/* Additional Mitigation Tips */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
            Additional Mitigation Tips
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6">
            <li>Never use hot tap water for drinking or cooking.</li>
            <li>Clean tap aerators regularly.</li>
            <li>Avoid using tap water for baby formula unless it is confirmed lead-free or filtered.</li>
            <li>Encourage neighbours to act, especially in shared supply arrangements.</li>
          </ul>
        </section>

        {/* The Bottom Line */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
            The Bottom Line: Mitigation Is Temporary
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            While corrosion control, flushing, and filters help reduce risk, they are temporary. Only full replacement of the lead pipe—from the public main to the kitchen tap—provides a lasting solution.
          </p>
        </section>

        {/* Partial Replacement */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
            Partial Replacement: A Risky Interim Step
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Partial replacement, where only one side of the pipe is replaced, may increase lead levels by disturbing built-up scale and particles. Follow-up testing is essential in such cases. Full replacement of both public and private sections is the best practice.
          </p>
        </section>

        {/* Challenges in Coordinated Replacement */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
            Challenges in Coordinated Replacement
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6">
            <li>Cost: Private section replacement may cost £1,500 to £12,000.</li>
            <li>Property Ownership: Shared supply pipes in tenements or flats require coordination.</li>
            <li>Landlord Hesitancy: Legal changes now mandate compliance.</li>
            <li>Access Issues: Homeowner concerns may delay work.</li>
          </ul>
        </section>

        {/* Post-Replacement Flushing and Safety */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
            Post-Replacement Flushing and Safety
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6">
            <li>Run all cold-water taps for at least 30 minutes.</li>
            <li>Clean faucet aerators.</li>
            <li>Flush toilets, showers, and appliances.</li>
            <li>Avoid use of water filters or kettles during flushing.</li>
          </ul>
        </section>

        {/* Replace Don't Delay */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
            Replace, Don't Delay
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Replacing lead pipes is critical for public health. While corrosion control helps, only full replacement coordinated between homeowners and water suppliers offers complete protection.
          </p>
        </section>

        {/* Your Water Supplier's Commitment to Reducing Lead */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
            Your Water Supplier's Commitment to Reducing Lead
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Your water supplier does not use lead in its water mains or treatment processes. However, to mitigate risks from legacy lead plumbing, it:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6">
            <li>Treats water with orthophosphate to coat the inside of pipes and reduce lead leaching.</li>
            <li>Offers free water testing where lead contamination is suspected.</li>
            <li>Replaces lead communication pipes at no cost once the property owner has replaced their private lead supply pipe.</li>
            <li>Water suppliers replace their section of lead pipe if a lead water supply pipe is discovered and replaced.</li>
          </ul>
        </section>

        {/* Why Choose English Water */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
            Why Choose English Water for Lead Pipe Replacement?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            English Water specializes in lead pipe replacement across England, offering expertise and efficiency in every project. Here's why we are the trusted choice:
          </p>
          <div className="space-y-6">
            <div className="bg-white border-2 border-[#1B3A6B] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Experienced Team:</h3>
              <p className="text-lg text-gray-700">
                With years of experience in water supply solutions, we ensure high-quality service.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1B3A6B] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Advanced Techniques:</h3>
              <p className="text-lg text-gray-700">
                Using methods like trenchless technology, we minimize disruption to your property.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1B3A6B] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Free Quotes:</h3>
              <p className="text-lg text-gray-700">
                We provide transparent pricing with no hidden costs.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1B3A6B] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Compliance Guaranteed:</h3>
              <p className="text-lg text-gray-700">
                All work meets UK Water Regulations, ensuring safety and reliability.
              </p>
            </div>
          </div>
        </section>

        {/* How to Get Started */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
            How to Get Started
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            If you suspect your property has a lead water supply pipe, don't wait. Start by contacting English Water for a professional assessment. Our team will guide you through the process, from inspection to replacement, ensuring peace of mind and a safer water supply.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The Lead Pipe Replacement Scheme is a vital step toward ensuring clean and safe water for all homes in England. By taking action now, you can protect your family's health, increase your property's value, and comply with water safety regulations. English Water is here to help you every step of the way—contact us today to make the switch to safer, lead-free pipes.
          </p>
        </section>
      </div>

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
