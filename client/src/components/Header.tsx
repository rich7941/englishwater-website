import { useState } from "react";
import { Link } from "wouter";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  const services = [
    { name: "Lead Pipe Replacement", href: "/services/lead-pipe-replacement" },
    { name: "Water Supply Pipe Renewals", href: "/services/water-supply-pipe-renewals" },
    { name: "Water Supply Pipe Installations", href: "/services/water-supply-pipe-installations" },
    { name: "Water Supply Pipe Repairs", href: "/services/water-supply-pipe-repairs" },
    { name: "Water Main Installations", href: "/services/water-main-installations" },
    { name: "Water Main Renewals", href: "/services/water-main-renewals" },
    { name: "Water Main Repairs", href: "/services/water-main-repairs" },
    { name: "Water Leak Detection", href: "/services/water-leak-detection" },
    { name: "Impact Moling", href: "/services/impact-moling" },
  ];

  const helpAdvice = [
    { name: "Water Leaks", href: "/help-advice/water-leaks" },
    { name: "Lead Pipe Replacement Scheme", href: "/help-advice/lead-pipe-replacement-scheme" },
    { name: "Lead Pipe in England", href: "/help-advice/lead-pipe-in-england" },
    { name: "Low Water Pressure", href: "/help-advice/low-water-pressure" },
    { name: "Lead Pipe Replacement", href: "/help-advice/lead-pipe-replacement" },
    { name: "Water Filter", href: "/help-advice/water-filter" },
    { name: "Impact Moling Prices 2026", href: "/help-advice/impact-moling-prices-2026-england" },
  ];

  const locations = [
    { name: "London", href: "/locations/london" },
    { name: "Birmingham", href: "/locations/birmingham" },
    { name: "Manchester", href: "/locations/manchester" },
    { name: "Liverpool", href: "/locations/liverpool" },
    { name: "Leeds", href: "/locations/leeds" },
    { name: "Sheffield", href: "/locations/sheffield" },
    { name: "Bristol", href: "/locations/bristol" },
    { name: "Leicester", href: "/locations/leicester" },
    { name: "Coventry", href: "/locations/coventry" },
    { name: "Bradford", href: "/locations/bradford" },
  ];

  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="bg-[#1B3A6B] text-white text-center py-2 px-4">
        <div className="flex items-center justify-center gap-2 text-sm">
          <img src="/england-flag.png" alt="England flag" className="h-4 w-6" />
          <span>England's No.1 Water Contractor</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-[#1B3A6B] text-white">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/">
              <img 
                src="/logo.webp" 
                alt="English Water logo" 
                className="h-16 w-auto cursor-pointer"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link href="/" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-gray-300 transition-colors">
                  Services <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute left-0 top-full mt-2 w-64 bg-white text-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {services.map((service) => (
                      <Link 
                        key={service.href}
                        href={service.href} 
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Help & Advice Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-gray-300 transition-colors whitespace-nowrap">
                  Help & Advice <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute left-0 top-full mt-2 w-64 bg-white text-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {helpAdvice.map((item) => (
                      <Link 
                        key={item.href}
                        href={item.href} 
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-gray-300 transition-colors">
                  Locations <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute left-0 top-full mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {locations.map((location) => (
                      <Link
                        key={location.href}
                        href={location.href}
                        className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                      >
                        {location.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/about" className="hover:text-gray-300 transition-colors">
                About
              </Link>
              <Link href="/reviews" className="hover:text-gray-300 transition-colors">
                Reviews
              </Link>
              <Link href="/contact" className="hover:text-gray-300 transition-colors">
                Contact
              </Link>
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex flex-col gap-1 text-right">
              <a 
                href="tel:08003167322" 
                className="flex items-center justify-end gap-2 hover:text-gray-300 transition-colors"
              >
                <Phone className="h-4 w-4 scale-x-[-1]" />
                <span className="text-sm font-semibold">0800 316 7322</span>
              </a>
              <a 
                href="mailto:hello@englishwater.co.uk" 
                className="flex items-center justify-end gap-2 hover:text-gray-300 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">hello@englishwater.co.uk</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-white/20">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="hover:text-gray-300 transition-colors">
                  Home
                </Link>
                
                {/* Mobile Services */}
                <div>
                  <button 
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full hover:text-gray-300 transition-colors"
                  >
                    Services <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {servicesOpen && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {services.map((service) => (
                        <Link 
                          key={service.href}
                          href={service.href} 
                          className="text-sm hover:text-gray-300 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Help & Advice */}
                <div>
                  <button 
                    onClick={() => setHelpOpen(!helpOpen)}
                    className="flex items-center justify-between w-full hover:text-gray-300 transition-colors"
                  >
                    Help & Advice <ChevronDown className={`h-4 w-4 transition-transform ${helpOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {helpOpen && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {helpAdvice.map((item) => (
                        <Link 
                          key={item.href}
                          href={item.href} 
                          className="text-sm hover:text-gray-300 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link href="/about" className="hover:text-gray-300 transition-colors">
                  About
                </Link>
                <Link href="/reviews" className="hover:text-gray-300 transition-colors">
                  Reviews
                </Link>
                <Link href="/contact" className="hover:text-gray-300 transition-colors">
                  Contact
                </Link>
                <div className="pt-4 border-t border-white/20">
                  <a href="tel:08003167322" className="flex items-center gap-2 mb-2">
                    <Phone className="h-5 w-5 scale-x-[-1]" />
                    <span>0800 316 7322</span>
                  </a>
                  <a href="mailto:hello@englishwater.co.uk" className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    <span>hello@englishwater.co.uk</span>
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
