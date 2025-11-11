import { HoverEffect } from "../components/ui/card-hover-effect";
import {
  PiMonitor,
  PiStorefront,
  PiAppStoreLogo,
  PiPackageFill,
  PiHeadsetFill,
  PiShoppingCart
} from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Website Design & Development",
    description:
      "Custom WordPress and React/Next.js websites built for HVAC and roofing contractors. Designed to look professional, load fast, and turn visitors into paying customers.",
    icon: <PiMonitor className="w-8 h-8" />,
  },
  {
    title: "Local SEO Setup",
    description:
      "Get found on Google Maps and local search results when customers search for “HVAC near me” or “roof repair near me.” Attract more calls and leads from your area.",
    icon: <PiStorefront className="w-8 h-8" />,
  },
  {
    title: "Website Redesigns",
    description:
      "Modernize old websites with faster loading times, mobile-friendly layouts, and updated designs that keep customers engaged.",
    icon: <PiAppStoreLogo className="w-8 h-8" />,
  },
  {
    title: "Google Business Profile Itegration",
    description:
      "Optimize or set up your Google My Business profile so clients can find you, read reviews, and call instantly from search results.",
    icon: <PiPackageFill className="w-8 h-8" />,
  },
  {
    title: "Lead Generation Landing Pages",
    description:
      "High-converting landing pages for specific services, seasonal promotions, or ad campaigns that bring more inquiries directly to your inbox.",
    icon: <PiShoppingCart className="w-8 h-8" />,
  },
  {
    title: "Maintenance & Updates",
    description:
      "Keep your website secure, backed up, and performing at its best — so you never miss a potential customer.Keep your website secure, backed up, and performing.",
    icon: <PiHeadsetFill className="w-8 h-8" />,
  },
];