import { Button } from "@/components/ui/button";

export default function LocationsSection() {
  return (
    <section className="bg-[#1B3A6B] text-white py-12">
      <div className="container text-center">
        <p className="text-lg mb-6">
          We proudly serve many cities, towns, villages and counties throughout England.
        </p>
        <Button 
          size="lg"
          className="bg-white text-[#1B3A6B] hover:bg-gray-100 font-semibold"
        >
          Click to see all our locations.
        </Button>
      </div>
    </section>
  );
}
