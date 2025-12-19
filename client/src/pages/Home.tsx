import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import TrustBadges from "@/components/TrustBadges";
import WhatToExpect from "@/components/WhatToExpect";
import CustomerReviews from "@/components/CustomerReviews";
import Services from "@/components/Services";
import Coverage from "@/components/Coverage";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import TrustedOrganizations from "@/components/TrustedOrganizations";
import LocationsSection from "@/components/LocationsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <CallToAction />
      <TrustBadges />
      <WhatToExpect />
      <CustomerReviews />
      <Services />
      <Coverage />
      <About />
      <WhyChoose />
      <TrustedOrganizations />
      <LocationsSection />
    </div>
  );
}
