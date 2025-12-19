import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WaterMainRepairs() {
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
      quote: "Just a quick note to thank you for all your efforts from resolving the water supply leak. You went above and beyond and your efforts really were appreciated.",
      name: "Tom Williams",
      location: "Dundee"
    },
    {
      quote: "Hopefully we will never have the need for your services again, but we would be happy to recommend you to anyone who does.",
      name: "Chris Snowden",
      location: "Dunfermline"
    },
    {
      quote: "Other Watersafe businesses were unable to help us, so it was a relief when you said you could. By Thursday evening, the leak was fixed, and we wouldn't even be able to tell that workmen had been there.",
      name: "David Bale",
      location: "Fort William"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center justify-center text-white">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img
            src="/water-main-repairs-hero.png"
            alt="Water main repair in England"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="container relative z-10">
            <p className="text-white text-lg mb-4">Services</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Water Main Repairs England</h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">Water Main Repair Specialists in England</h2>
            
            <p className="text-lg text-gray-700 mb-4">
              Welcome to English Water, England's leading water main repair specialists. We provide expert services for all types of underground water leaks and water main replacement and repair projects, ensuring efficient and high-quality solutions for our clients.
            </p>

            <p className="text-lg text-gray-700 mb-4">
              With extensive expertise in water main leaks, our services include:
            </p>

            <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
              <li>Water main repairs</li>
              <li>Water main leak detection</li>
              <li>Water main replacement</li>
            </ul>

            <p className="text-lg text-gray-700 mb-8">
              Our skilled teams can handle any task, no matter the size or complexity.
            </p>

            <h3 className="text-2xl font-bold text-[#1B3A6B] mb-6">What Causes Water Mains to Leak?</h3>

            <p className="text-lg text-gray-700 mb-6">
              Do you have a leaking water main and want to prevent further problems by identifying the cause? Our engineers can assess and fix the issue while finding a long-term solution to prevent similar breakages or leaks in the future.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              Some of the most common causes of burst water mains include:
            </p>

            <div className="space-y-6 mb-8">
            {/* Pipe Age & Material */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">1. Pipe Age & Material</h4>
              <p className="text-lg text-gray-700">
                Older water main pipes are more prone to corrosion, and if installed before the 1980s, they may be made of cast iron. While once the standard in utilities, cast iron is less durable and cannot expand and contract with changing temperatures as effectively as modern materials. This can lead to water main pipes cracking and leaking over time.
              </p>
            </div>

            {/* Water Pressure Changes */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">2. Water Pressure Changes</h4>
              <p className="text-lg text-gray-700">
                Extreme surges in water pressure can put water mains under considerable strain. If the water pressure exceeds the capability of the system, the extra force can damage pipes, leading to cracks, leaks, or even a complete rupture. Ruptured pipes can result in water damage, costly repairs, and higher water bills due to increased water usage.
              </p>
            </div>

            {/* Excavation Work */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">3. Excavation Work</h4>
              <p className="text-lg text-gray-700">
                Excavation work by contractors or property owners can accidentally damage water mains with digging equipment or machinery. Such contact can cause ruptures in your water mains, leading to significant damage.
              </p>
            </div>

            {/* Temperature Changes */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">4. Temperature Changes</h4>
              <p className="text-lg text-gray-700">
                Temperature changes can severely impact the integrity of water mains. During cold weather, the ground can freeze and subsequently expand, placing additional pressure on underground pipes. This can lead to cracks or even bursts if the material of the pipe is unable to withstand the contraction and expansion caused by the freezing and thawing cycles. Conversely, in hot weather, the ground may shift as it dries out, which can also cause movement and stress on water mains. Such temperature-induced stress makes regular maintenance and monitoring essential to prevent leaks and ensure the longevity of the water infrastructure.
              </p>
            </div>

            {/* Heavy Vehicles */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-[#1B3A6B] mb-3">5. Heavy Vehicles</h4>
              <p className="text-lg text-gray-700">
                Heavy vehicles can pose significant risks to the integrity of water mains, especially those that are shallowly buried. The immense weight of trucks, buses, and other large machinery can exert pressure on the soil above these pipes, leading to soil compaction. This increased pressure can deform or crack the water mains beneath, particularly if they are made from materials that are less flexible or if they are already weakened by age or corrosion. Moreover, the vibration caused by heavy traffic can lead to shifts in the soil that may disturb the pipes' alignment, exacerbating the risk of leaks or bursts. Regular assessment of water main routes under heavily trafficked areas is crucial to ensure their durability and to plan for necessary reinforcements or rerouting.
              </p>
            </div>
            </div>

            <h3 className="text-2xl font-bold text-[#1B3A6B] mb-6">English Water Water Main Repairs</h3>

            <p className="text-lg text-gray-700 mb-4">
              At English Water, we have decades of experience tackling even the most disastrous water main emergencies.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              When your water main breaks, you need someone who appreciates the scale of the emergency and knows how to fix it as quickly and effectively as possible. Using innovative methods of leak detection, testing, and trenchless repairs, our engineers will fix your problem in the most long-lasting and non-invasive way. Where necessary, we also have the skills and equipment to carry out full water main replacements.
            </p>

            <div className="bg-yellow-50 border-l-4 border-[#F4E04D] p-6 mb-8">
              <h4 className="text-xl font-bold text-[#1B3A6B] mb-4">24-Hour Emergency Service</h4>
              <p className="text-lg text-gray-700 mb-4">
                We understand that water leaks can be highly disruptive, whether it's a slow leak or a sudden burst water main. Your water supplier may alert you to an underground leak, or you may notice water leaking from your driveway. Water main leaks can cause flooding and costly damage. English Water is on hand to fix the problem fast.
              </p>
              <p className="text-lg text-gray-700">
                As water main specialists, our experienced engineers are always ready to deliver the best service using advanced tools and technology to examine your water main and fix the problem efficiently. That's why English Water is always available when you need us most. Our rapid response team can be on-site quickly, working to provide effective solutions with minimal disruption.
              </p>
            </div>

            {/* Contact CTA */}
            <div className="bg-[#1B3A6B] text-white p-8 rounded-lg text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Contact English Water</h3>
              <p className="text-lg mb-6">
                When water mains burst, you must act fast. For reliable, professional, and timely water main repair services across England, trust English Water to deliver exceptional results.
              </p>
              <p className="mb-6">
                English Water can carry out water main repairs across England and provide you with a free quotation for the repair. To get a free quote for your water main repair, please call us on 0800 316 7322 or email hello@englishwater.co.uk to schedule a free consultation and learn how we can help with your water main needs.
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] text-center mb-12">You may be interested in</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <a
                  key={index}
                  href={service.link}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1B3A6B] hover:text-[#7c3aed] transition-colors">
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
