export const profile = {
  name: "Patrick Olamide",
  role: "Software engineer",
  location: "Lagos, Nigeria",
  email: "morojuoluwa24@gmail.com",
  phone: "+234 905 937 5974",
  phoneHref: "+2349059375974",
  availability: "Open to full-stack, frontend and backend roles",
  cv: "/patrick-abimbola-cv.docx",
  links: {
    github: "https://github.com/Morojuoluwa",
    linkedin: "https://www.linkedin.com/in/patrick-morojuoluwa",
    x: "https://x.com/Amorojuoluwa",
  },
} as const;

export type Project = {
  index: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  href: string;
  stack: string[];
  image?: string;
  featured?: boolean;
  internal?: boolean;
};

export const flagshipProjects: Project[] = [
  {
    index: "01",
    name: "Maraboo",
    category: "Remittances · Full-stack",
    tagline: "Fast, secure money transfers between WAEMU countries and Canada.",
    description:
      "A remittance platform for multi-currency accounts, transfers and FX conversion, built for businesses moving money across borders. Built the React frontend and most of the Go backend behind it.",
    href: "https://www.mara.boo",
    stack: ["React", "Tailwind CSS", "Go", "PostgreSQL"],
    image: "/work/maraboo.webp",
    featured: true,
  },
  {
    index: "02",
    name: "Qwid",
    category: "Payments · Web",
    tagline: "Cross-border payments, virtual accounts and multi-currency wallets.",
    description:
      "An all-in-one finance app for sending money, holding NGN and USD wallets and getting paid from anywhere. Shipped the product interface and the APIs behind wallets, cards and currency conversion.",
    href: "https://qwid.io",
    stack: ["Next.js", "Tailwind CSS"],
    image: "/work/qwid.webp",
  },
  {
    index: "03",
    name: "N.E.A.T Microcredit",
    category: "Microfinance · Internal",
    tagline: "The admin console staff use to run a microfinance business day to day.",
    description:
      "Onboarding, lending, disbursements and audit trails in one place, one record of truth. Built the React console and most of the Go banking API behind it, where the data and business rules live.",
    href: "https://cba.neatpays.com",
    stack: ["React", "Tailwind CSS", "Mantine", "Go", "Gin", "PostgreSQL"],
    image: "/work/neatpay.webp",
    internal: true,
  },
  {
    index: "04",
    name: "Flip Express",
    category: "Fintech · Web",
    tagline: "Gift cards, crypto, airtime and bills in one account.",
    description:
      "A trading app where users sell gift cards for naira, swap crypto and pay bills instantly — with zero hidden fees and payouts that land fast.",
    href: "https://www.flipexapp.com",
    stack: ["React", "Tailwind CSS", "Mantine"],
    image: "/work/flipex.webp",
  },
];

export type Experience = {
  period: string;
  company: string;
  role: string;
  location: string;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    period: "Oct 2024 — Oct 2026",
    company: "Flota Tech",
    role: "Full-stack Developer",
    location: "Remote",
    bullets: [
      "Built dynamic, reusable product interfaces with React and TypeScript across multiple applications.",
      "Maintained REST APIs with Node.js and NestJS, keeping client and server contracts in sync.",
      "Modelled PostgreSQL schemas and tuned queries for faster reads on data-heavy screens.",
      "Improved performance with lazy loading, caching and code splitting.",
      "Streamlined releases with CI/CD pipelines and Docker, cutting deployment downtime.",
    ],
    stack: ["React", "TypeScript", "NestJS", "PostgreSQL", "Docker"],
  },
  {
    period: "Nov 2023 — Aug 2024",
    company: "Merit Technologies",
    role: "Backend Engineer",
    location: "Lagos, Nigeria",
    bullets: [
      "Engineered login and signup flows with transactional data handling and secure authentication.",
      "Built admin-side analytics and reporting endpoints for internal teams.",
      "Hardened user data and optimized MongoDB queries to support core system features.",
      "Traced and fixed bugs across the stack, reducing runtime errors and support load.",
    ],
    stack: ["Node.js", "Express", "MongoDB", "REST"],
  },
  {
    period: "Aug 2022 — Oct 2023",
    company: "Goldmine Exchange",
    role: "Full-stack Developer",
    location: "Remote",
    bullets: [
      "Built reusable UI with Next.js, TypeScript and Framer Motion.",
      "Improved page performance through code splitting, lazy loading and asset optimization.",
      "Built and integrated REST APIs with Node.js and Express for frontend and backend data flow.",
      "Designed and managed MongoDB collections for high-traffic features.",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "Vue", "Nuxt", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Redux"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Go", "NestJS", "Express", "REST APIs", "GraphQL", "Authentication"],
  },
  {
    label: "Data & Infra",
    items: ["PostgreSQL", "MongoDB", "Firebase", "Docker", "CI/CD", "Vercel", "Heroku", "Netlify"],
  },
];

export const stackStrip = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Go",
  "NestJS",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
];
