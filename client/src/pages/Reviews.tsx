import { Phone } from "lucide-react";
import WhatToExpect from "@/components/WhatToExpect";

export default function Reviews() {
  const reviews = [
    {
      name: "James Thompson",
      location: "London",
      text: "I was impressed by the professionalism of the entire team. From the initial phone call to the completion of the water main repair, every step was handled with expertise and care. A truly first-class service."
    },
    {
      name: "Michael Davies",
      location: "Birmingham",
      text: "What a fantastic team! The engineers were not only skilled but also incredibly friendly and approachable. They answered all my questions and made what could have been a stressful situation very easy."
    },
    {
      name: "David Wilson",
      location: "Manchester",
      text: "We are delighted with the outcome. The new water main has significantly improved our water pressure, and the work was completed with impressive speed and precision. Thank you, English Water, for a job well done."
    },
    {
      name: "Sarah Mitchell",
      location: "Leeds",
      text: "The engineers from English Water were exceptional. They arrived on time, were incredibly knowledgeable, and explained the entire lead pipe replacement process clearly. The work was completed to a very high standard."
    },
    {
      name: "Robert Harrison",
      location: "Sheffield",
      text: "The quality of work is outstanding. The team was efficient, tidy, and clearly experts in their field. I have no hesitation in recommending English Water for their technical skill and professional conduct."
    },
    {
      name: "Emma Richardson",
      location: "Bristol",
      text: "The customer service was second to none. The team went out of their way to ensure we were happy and informed throughout the process. It's rare to find a company that cares so much about its customers."
    },
    {
      name: "Marcus Bennett",
      location: "Leicester",
      text: "A huge thank you to the crew who worked on our property. They were polite, respectful, and did a brilliant job. It was a pleasure to have them here, and they left everything spotless."
    },
    {
      name: "Jessica Turner",
      location: "Coventry",
      text: "I was amazed at how quickly and efficiently the work was carried out. The team used moling technology, which meant minimal disruption to our garden. The new water supply works perfectly. Highly recommended."
    },
    {
      name: "Andrew Fletcher",
      location: "Bradford",
      text: "The entire process was seamless from start to finish. The team worked quickly and effectively to resolve our water leak, and the communication was excellent throughout. A very smooth and hassle-free experience."
    },
    {
      name: "Victoria Powell",
      location: "Nottingham",
      text: "The difference in our water pressure is night and day since the new main was installed. The team was professional, explaining every step of the process. A job well done, and a service I'd highly recommend."
    },
    {
      name: "Nicholas Clarke",
      location: "Southampton",
      text: "We had a sudden and serious leak, and the English Water team responded with incredible speed. They were professional, reassuring, and had the problem fixed in no time. Can't thank them enough for their swift action."
    },
    {
      name: "Lauren Hayes",
      location: "Plymouth",
      text: "From the first call to the final sign-off, the service was impeccable. The engineers were friendly, respectful of our home, and left the work area cleaner than they found it. A truly 5-star experience."
    },
    {
      name: "Christopher Morgan",
      location: "Bournemouth",
      text: "Our business was facing significant disruption due to a major water leak. The English Water team was a lifesaver. They were on-site within hours, diagnosed the problem with impressive expertise, and carried out the repair with minimal impact on our operations. Their professionalism and efficiency were top-notch."
    },
    {
      name: "Sophie Anderson",
      location: "Stoke-on-Trent",
      text: "A fantastic service from a very professional team. The work was completed on schedule and the results are excellent. I would recommend them to anyone without hesitation."
    },
    {
      name: "Daniel Wright",
      location: "Newcastle upon Tyne",
      text: "The lead pipe replacement was a job I was dreading, but the team (led by a very helpful chap named Mark) made it completely painless. They were respectful of my property, kept me informed, and the quality of their work is second to none."
    },
    {
      name: "Olivia Grant",
      location: "Brighton and Hove",
      text: "English Water provides a truly premium service. The attention to detail and commitment to customer satisfaction were evident in every interaction. A thoroughly professional and reliable company."
    },
    {
      name: "Thomas Elliott",
      location: "Hull",
      text: "We had no water on a Sunday morning and were expecting the worst. The emergency team from English Water was incredible. They not only fixed the problem but did so with a positive and reassuring attitude. Exceptional service when we needed it most."
    },
    {
      name: "Rebecca Stone",
      location: "Derby",
      text: "I am absolutely thrilled with the work done by English Water. They replaced our old lead pipes, and the improvement in water quality and pressure is remarkable. The entire team, from the office staff to the engineers, was a pleasure to deal with. A five-star experience all around."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url(/reviews-hero.webp)" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Customer Reviews</h1>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1B3A6B] mb-12">
            Explore Some of Our Recent Customer Reviews
          </h2>
          
          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => {
              const borderColors = ['border-yellow-400', 'border-pink-400', 'border-green-400'];
              const borderColor = borderColors[index % 3];
              
              return (
                <div key={index} className={`border-4 ${borderColor} rounded-lg p-6 bg-white`}>
                  <p className="text-lg text-gray-700 mb-4 min-h-[100px]">
                    {review.text}
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-[#1B3A6B]">{review.name}</p>
                    <p className="text-gray-700 text-sm mb-2">{review.location}</p>
                    <div className="flex gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-yellow-400">★</span>
                      <span className="text-yellow-400">★</span>
                      <span className="text-yellow-400">★</span>
                      <span className="text-yellow-400">★</span>
                    </div>
                  </div>
                </div>
              );
            })}
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
