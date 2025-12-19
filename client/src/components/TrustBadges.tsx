export default function TrustBadges() {
  return (
    <section className="bg-white py-8">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <picture>
              <source srcSet="/waterseal_logo.webp" type="image/webp" />
              <img src="/waterseal_logo.png" alt="WaterSeal logo" className="h-10 w-auto" />
            </picture>
          <picture>
              <source srcSet="/wicc_logo.webp" type="image/webp" />
              <img src="/wicc_logo.png" alt="WICC logo" className="h-24 w-auto" />
            </picture>
          <picture>
              <source srcSet="/watertrust_logo.webp" type="image/webp" />
              <img src="/watertrust_logo.png" alt="WaterTrust logo" className="h-10 w-auto" />
            </picture>
        </div>
      </div>
    </section>
  );
}
