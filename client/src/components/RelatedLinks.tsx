import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface RelatedLink {
  title: string;
  description: string;
  href: string;
}

interface RelatedLinksProps {
  title?: string;
  links: RelatedLink[];
}

export default function RelatedLinks({ title = "You May Be Interested In", links }: RelatedLinksProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer h-full border-l-4 border-[#1B3A6B]">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{link.title}</h3>
                <p className="text-gray-700 mb-4">{link.description}</p>
                <div className="flex items-center text-[#1B3A6B] font-semibold">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
