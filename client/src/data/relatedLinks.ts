export const serviceRelatedLinks = [
  {
    title: "Lead Pipe Replacement",
    description: "Professional lead pipe replacement services to ensure safe, clean water for your property.",
    href: "/services/lead-pipe-replacement"
  },
  {
    title: "Water Supply Pipe Renewals",
    description: "Expert water supply pipe renewal services across England with minimal disruption.",
    href: "/services/water-supply-pipe-renewals"
  },
  {
    title: "Water Leak Detection",
    description: "Advanced leak detection technology to quickly identify and repair water leaks.",
    href: "/services/water-leak-detection"
  },
  {
    title: "Impact Moling",
    description: "Trenchless pipe installation using cutting-edge impact moling technology.",
    href: "/services/impact-moling"
  },
  {
    title: "Water Main Installations",
    description: "Professional water main installation services for residential and commercial properties.",
    href: "/services/water-main-installations"
  },
  {
    title: "Water Main Repairs",
    description: "24/7 emergency water main repair services across England.",
    href: "/services/water-main-repairs"
  }
];

export const helpAdviceRelatedLinks = [
  {
    title: "Lead Pipe Replacement Scheme",
    description: "Learn about the English Water lead pipe replacement scheme and how to apply.",
    href: "/help-advice/lead-pipe-replacement-scheme"
  },
  {
    title: "Lead Pipe in England",
    description: "Everything you need to know about lead pipes in English properties.",
    href: "/help-advice/lead-pipe-in-england"
  },
  {
    title: "Water Leaks",
    description: "How to identify, prevent, and deal with water leaks in your property.",
    href: "/help-advice/water-leaks"
  },
  {
    title: "Impact Moling Prices 2026",
    description: "Comprehensive guide to impact moling costs and pricing in England.",
    href: "/help-advice/impact-moling-prices-2026-england"
  },
  {
    title: "Water Filter",
    description: "Information about water filtration systems and their benefits.",
    href: "/help-advice/water-filter"
  }
];

export const getRelatedLinksForService = (currentHref: string, count: number = 3) => {
  return serviceRelatedLinks
    .filter(link => link.href !== currentHref)
    .slice(0, count);
};

export const getRelatedLinksForHelpAdvice = (currentHref: string, count: number = 3) => {
  return helpAdviceRelatedLinks
    .filter(link => link.href !== currentHref)
    .slice(0, count);
};
