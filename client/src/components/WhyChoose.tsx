export default function WhyChoose() {
  const features = [
    {
      title: "24/7 Availability",
      description: "Our call center is always open to assist you with any water main services, enquiries, or emergencies—day or night."
    },
    {
      title: "Clear & Upfront Pricing",
      description: "We have a transparent pricing system, provide upfront estimates, and give quotes to explain the cost of our services."
    },
    {
      title: "Trusted Across England",
      description: "Customers across England have trusted us to handle their water mains services with reliability and professionalism."
    },
    {
      title: "1-Hour Response Time",
      description: "We respond to your call and attend your service within the hour wherever possible (subject to availability)."
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] text-center mb-12">
          Why Choose English Water
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <picture>
              <source srcSet="/why_choose_van.webp" type="image/webp" />
              <img src="/why_choose_van.png" alt="English Water van in England" className="w-full max-w-md h-auto" />
            </picture>
          </div>

          {/* Right Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
