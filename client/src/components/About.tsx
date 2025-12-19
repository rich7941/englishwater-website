import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <section className="bg-[#1B3A6B] text-white py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About English Water
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
            From residential lead pipe replacement to burst water main repairs, we're here 
            to help. We're proud to offer a 24-hour emergency response across England, 
            using the latest technology combined with good old-fashioned expertise to 
            solve a wide range of problems.
          </p>
          <Link href="/about">
            <Button 
              size="lg"
              className="bg-white text-[#1B3A6B] hover:bg-gray-100 font-semibold"
            >
              Find out more
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
