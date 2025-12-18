export default function TrustedOrganizations() {
  return (
    <section className="bg-white py-16">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A6B] text-center mb-12">
          English Water is trusted by leading organisations—putting you in good hands.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <img 
            src="/org_national_trust.jpeg" 
            alt="National Trust logo" 
            className="h-24 w-auto"
          />
          <img 
            src="/org_environment_agency.jpeg" 
            alt="Environment Agency logo" 
            className="h-16 w-auto"
          />
          <img 
            src="/org_ministry_defence.jpeg" 
            alt="Ministry of Defence logo" 
            className="h-20 w-auto"
          />
          <img 
            src="/org_babcock.jpeg" 
            alt="Babcock logo" 
            className="h-12 w-auto"
          />
        </div>
      </div>
    </section>
  );
}
