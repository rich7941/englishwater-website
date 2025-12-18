export default function TrustBadges() {
  return (
    <section className="bg-white py-8">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <img 
            src="/waterseal_logo.png" 
            alt="WaterSeal logo" 
            className="h-10 w-auto"
          />
          <img 
            src="/wicc_logo.png" 
            alt="WICC logo" 
            className="h-24 w-auto"
          />
          <img 
            src="/watertrust_logo.png" 
            alt="WaterTrust logo" 
            className="h-10 w-auto"
          />
        </div>
      </div>
    </section>
  );
}
