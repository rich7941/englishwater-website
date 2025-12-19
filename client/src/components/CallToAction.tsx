import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="bg-[#1B3A6B] text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">Want to talk to someone?</h2>
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
  );
}
