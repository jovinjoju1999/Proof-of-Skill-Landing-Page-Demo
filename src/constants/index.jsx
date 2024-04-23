import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#feature" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#price" },
  { label: "Testimonials", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "Jeff Bezos",
    company: "Amazon",
    image: user1,
    text: "Using this platform has revolutionized our talent acquisition process. The skill validation protocol is efficient and reliable, saving us time and resources. I look forward to working with them again.",
  },
  {
    user: "Leonardo DiCaprio",
    company: "Appian Way Productions",
    image: user2,
    text: "I am impressed by the accuracy and transparency of the skill verification process. It has significantly improved our hiring decisions and helped us build a stronger team.",
  },
  {
    user: "Virat Kohli",
    company: "One8",
    image: user3,
    text: "The customizable verification process allowed us to tailor the assessments to our specific needs. This flexibility was crucial in ensuring we accurately assessed candidates' skills.",
  },
  {
    user: "Giorgia Meloni",
    company: "Poste Italiane",
    image: user4,
    text: "The support team was exceptional in assisting us throughout the implementation process. Their dedication and expertise made the transition seamless and hassle-free.",
  },
  {
    user: "Vince Gilligan",
    company: "Los Pollos Hermanos",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Abel Tesfaye",
    company: "The Weeknd",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. They're the best in the business.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Skill Verification Protocol",
    description:
      "Authenticate skills transparently and efficiently, setting a new standard for talent verification.",
  },
  {
    icon: <Fingerprint />,
    text: "Decentralized Credentialing",
    description:
      "Showcase skills authentically with decentralized credentials, breaking free from traditional methods.",
  },
  {
    icon: <ShieldHalf />,
    text: "Transparent Talent Assessment",
    description:
      "Ensure fair and accurate recognition of expertise without relying on conventional credentials.",
  },
  {
    icon: <BatteryCharging />,
    text: "Seamless Integration",
    description:
      "Seamlessly integrate our platform into your workflows, streamlining talent validation processes.",
  },
  {
    icon: <PlugZap />,
    text: "Customizable Verifications",
    description:
      "Customize the verification process to your specific needs, ensuring flexibility in skill assessment.",
  },
  {
    icon: <GlobeLock />,
    text: "Data-Driven Insights",
    description:
      "Gain comprehensive insights with our analytics dashboard for informed talent optimization and decisions.",
  },
];

export const checklistItems = [
  {
    title: "Effortless Talent Accreditation",
    description:
      "Simplify and streamline the process of accrediting talent with our intuitive workflow solutions.",
  },
  {
    title: "Efficient Skill Confirmation",
    description:
      "Quickly confirm and validate skills within your workflow, enhancing productivity and accuracy.",
  },
  {
    title: "Automated Credentialing System",
    description:
      "Reduce administrative burden and ensure accuracy with our automated system for credentialing talent.",
  },
  {
    title: "Streamlined Verification Process",
    description:
      "Optimize your talent validation workflow with our streamlined process, saving time and resources.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Basic Skill Verification",
      "Limited Credentialing",
      "Standard Support",
      "Access to Community Forums",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Advanced Skill Verification",
      "Expanded Credentialing",
      "Priority Support",
      "Monthly Skill Reports",
    ],
  },
  {
    title: "Enterprise",
    price: "$100",
    features: [
      "Tailored Skill Verification Solutions",
      "Customized Credentialing Options",
      "Dedicated Account Manager",
      "24/7 VIP Support",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
