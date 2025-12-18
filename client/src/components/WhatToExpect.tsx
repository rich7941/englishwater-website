export default function WhatToExpect() {
  const steps = [
    {
      image: "/step1_customer_service.jpeg",
      text: "Call us 24/7, 365, at a time that suits you.",
      borderColor: "border-cyan-400"
    },
    {
      image: "/step2_couple_quote.jpeg",
      text: "You'll get a no-obligation quote straight away.",
      borderColor: "border-pink-400"
    },
    {
      image: "/what-to-expect-van.png",
      text: "Expert engineers will arrive and carry out the work.",
      borderColor: "border-[#1B3A6B]"
    },
    {
      image: "/step4_woman_water.jpeg",
      text: "We'll give you a 25-year guarantee*.",
      borderColor: "border-orange-400"
    }
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-4">
            What to expect from English Water – Your trusted water services expert
          </h2>
          <p className="text-lg text-gray-600">
            Here's how we'll get your house feeling like home again.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`border-4 ${step.borderColor} rounded-lg overflow-hidden mb-4 w-48 h-48`}>
                <img 
                  src={step.image} 
                  alt={`Step ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-gray-700">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
