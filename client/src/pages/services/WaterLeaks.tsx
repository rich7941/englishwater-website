import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function WaterLeaks() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/water-leaks-hero.webp')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container relative z-10">
          <p className="text-white text-lg mb-4">Help & Advice</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Water Leaks England</h1>
        </div>
      </section>

      {/* Main Content */}
      {/* Water Leaks at Home */}
      <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">Water Leaks at Home</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Water leaks might not always be immediately noticeable, but early detection is key to preventing serious issues. At English Water, we encourage our customers in England to stay vigilant by routinely checking their water bills, monitoring water pressure, and recognising the common signs of leaks. Taking proactive measures to identify and address signs of internal water leakage can safeguard your home, reduce costly repairs, and help conserve water. Regular maintenance, thorough inspections, and leveraging advanced detection technologies are essential strategies to avert significant water damage and preserve the integrity of your home's plumbing infrastructure.
            </p>
            
            <p className="text-lg text-gray-700 mb-4">
              Should you encounter a water-related problem, it's important to quickly assess its severity. Determine whether the issue could escalate rapidly, causing extensive damage. Is the problem isolated to a specific appliance, like a toilet or washing machine? Immediate action may be necessary. For more severe situations, we recommend contacting a professional plumber to ensure safe and effective resolution.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              If it's a minor issue that you feel confident handling, you might consider shutting off the water supply to the specific appliance while you prepare for repairs. For more critical issues, however, it's wise to shut off the main water supply to your home. This stops all water flow, helping to minimize further damage and potential hazards.
            </p>
          </div>
        </section>

        {/* How to Detect a Water Leak at Home */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">How to Detect a Water Leak at Home</h2>
            
            <p className="text-lg text-gray-700 mb-8">
              Detecting water leaks within your home can often be challenging, especially when there are no obvious signs of leakage. At English Water, we suggest a few practical methods to help our customers across England stay alert to hidden water leaks:
            </p>

            <div className="space-y-6">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-3">Monitor Your Water Bill</h3>
                <p className="text-lg text-gray-700">
                  Regularly review your water usage by checking your water bill. Look for unexpected spikes that can't be accounted for by ordinary activities, like hosting guests or increased use of your garden hose during warmer weather. Consider signing up for online account access or requesting monthly statements from your water supplier to keep a close eye on your consumption patterns.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-3">Check Water Pressure</h3>
                <p className="text-lg text-gray-700">
                  A drop in water pressure when filling your bathtub or during a shower can often signal a leak. You can conduct a straightforward test by shutting off all water fixtures in your home and then turning one back on. If the water pressure seems unusually high initially, it might indicate a hidden leak.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-3">Observe Water Heater/Boiler Activity</h3>
                <p className="text-lg text-gray-700">
                  Pay attention to how frequently your water heater or boiler activates. If it appears to run more continuously than normal, this could point to a leak in your hot water system. Such leaks, particularly those underground, are generally more difficult to detect and require specific attention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Places to Find a Water Leak */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">Common Places to Find a Water Leak</h2>
            
            <p className="text-lg text-gray-700 mb-8">
              If you're concerned about potential water leaks in your home and don't have access to a leak detector, there are several common areas you should inspect to prevent water damage and save on utility costs. Here at English Water, we recommend regularly checking these critical spots in your home:
            </p>

            <div className="space-y-6">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-3">Water Tank/Boiler</h3>
                <p className="text-lg text-gray-700">
                  Examine the valves managing the flow into and out of your boiler or water tank for any visible signs of leakage, such as water dripping or pooling. If you don't see an active leak, look for indirect signs like staining or a persistent hissing sound from the valves. For central heating boilers, it's crucial to involve a specialist as these symptoms could indicate a more severe issue.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-3">Toilets</h3>
                <p className="text-lg text-gray-700">
                  Toilets are prone to leaks due to their frequent use. A simple way to check for toilet leaks is to add some food colouring (dye) to the tank and wait about ten minutes. If the water in the bowl turns the colour of the dye without flushing, you likely have a leak that needs fixing.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-3">Showerheads</h3>
                <p className="text-lg text-gray-700">
                  Regular usage can also wear out showerheads, leading to leaks. Signs of a leaky showerhead include low water pressure and water not flowing uniformly. Inspecting and cleaning your showerhead regularly can help identify and resolve these issues early.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-3">Appliances</h3>
                <p className="text-lg text-gray-700">
                  Appliances like washing machines and dishwashers are often moved or vibrate during use, which can loosen connections over time. Make it a routine to check the hoses and fittings on your appliances to ensure they're tight and leak-free.
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-700 mt-8">
              While these checks can help you identify leaks inside your home, it's equally important to monitor for leaks outside, such as in outdoor taps or irrigation systems. Keeping an eye on these areas can help maintain the efficiency and safety of your home's plumbing system, protecting your property and conserving water.
            </p>
          </div>
        </section>

        {/* Common Indicators of Water Leaks */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">Common Indicators of Water Leaks</h2>
            
            <p className="text-lg text-gray-700 mb-8">
              If you're concerned about potential leaks in your home, staying vigilant for certain signs can help you catch issues early, potentially saving on costly repairs and water waste. At English Water, we advise our customers to be on the lookout for the following common indicators of water leaks:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border-l-4 border-[#1B3A6B]">
                <p className="text-lg text-gray-700">Unexpected Increase in Water Usage or Bill</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-[#1B3A6B]">
                <p className="text-lg text-gray-700">Damp Spots on Walls, Floors, or Ceilings</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-[#1B3A6B]">
                <p className="text-lg text-gray-700">Mould or Mildew Growth</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-[#1B3A6B]">
                <p className="text-lg text-gray-700">Water Stains or Discolouration</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-[#1B3A6B]">
                <p className="text-lg text-gray-700">Reduced Water Pressure</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-[#1B3A6B]">
                <p className="text-lg text-gray-700">Constant Sound of Running Water</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-[#1B3A6B]">
                <p className="text-lg text-gray-700">Musty or Unpleasant Odours</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-[#1B3A6B]">
                <p className="text-lg text-gray-700">Puddles or Pooling Water</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-[#1B3A6B]">
                <p className="text-lg text-gray-700">Cracks in Walls or Foundations</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-[#1B3A6B]">
                <p className="text-lg text-gray-700">High Humidity Levels</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Check for Water Leaks with Your Water Meter */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
              How to Check for Water Leaks at Home with Your Water Meter (DIY Method)
            </h2>
            
            <p className="text-lg text-gray-700 mb-8">
              Checking for water leaks on your own can be a straightforward process if you have a water meter. At English Water, we encourage our customers to follow these DIY steps to determine if there's a leak in their plumbing system:
            </p>

            <div className="space-y-6">
              {[
                {
                  number: "1",
                  title: "Stop All Water Usage",
                  description: "Ensure no water is being used in your home. This means all taps, showers, and appliances such as dishwashers and washing machines should be turned off."
                },
                {
                  number: "2",
                  title: "Find Your Water Meter",
                  description: "Your water meter is typically located near the front of your property on the pavement in a ground-level box."
                },
                {
                  number: "3",
                  title: "Record the Current Meter Reading",
                  description: "Note down the reading from your water meter before you start the test."
                },
                {
                  number: "4",
                  title: "Wait",
                  description: "Refrain from using any water for a few hours or, ideally, overnight, to ensure accurate results."
                },
                {
                  number: "5",
                  title: "Check the Meter Again",
                  description: "After the waiting period, read the water meter again. If the reading has changed despite no water use, it likely indicates a leak."
                },
                {
                  number: "6",
                  title: "Isolate the House Supply",
                  description: "To further investigate, turn off the main water supply to your house at the internal stop valve. After doing so, check the meter once more. If the reading still changes, the leak might be on the underground water supply pipe."
                },
                {
                  number: "7",
                  title: "Seek Professional Help",
                  description: "If you confirm a leak in your underground water supply pipe, English Water is here to help."
                }
              ].map((step) => (
                <div key={step.number} className="bg-white border-2 border-[#1B3A6B] p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-[#1B3A6B] mb-2">{step.number}. {step.title}</h4>
                  <p className="text-lg text-gray-700">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Need Help Section */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <div className="bg-[#1B3A6B] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Help with Water Leak Detection and Repairs? Contact English Water Today
              </h2>
              <p className="text-lg mb-6">
                We are trusted experts in England for all water leak detection and water supply pipe repair services. Our skilled team, backed by years of experience, employs advanced technology to pinpoint even the most concealed water leaks in your property. For underground pipe issues, our team has the expertise and specialised equipment to locate and repair leaks effectively.
              </p>
              <p className="mb-6">
                English Water can carry out water leak detection and repairs across England. To get a free quote please call us on 0800 316 7322 or email hello@englishwater.co.uk to schedule a free consultation and learn how we can help with your water supply needs.
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
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1B3A6B] mb-12">
              You may be interested in
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
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
                  title: "Water Supply Pipe Renewals",
                  image: "/service-water-supply-pipe-renewals.webp",
                  link: "/services/water-supply-pipe-renewals",
                },
                {
                  title: "Water Main Installations",
                  image: "/service-water-main-installations.webp",
                  link: "/services/water-main-installations",
                },
              ].map((service) => (
                <Link key={service.title} href={service.link}>
                  <a className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl text-[#1B3A6B] group-hover:text-[#1B3A6B] transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>
    </div>
  );
}
