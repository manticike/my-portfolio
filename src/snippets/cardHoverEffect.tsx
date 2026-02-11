import { HoverEffect } from "../components/ui/card-hover-effect";
import {
  PiMegaphone,
  PiMonitor,
  PiRocketLaunch,
  PiMapPin,
  PiTrendUp,
  PiHeadsetFill
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
    title: "Google Ads Management",
    description:
      "Get your phone ringing with customers actively searching for your services right now. $1,500 setup + $1,200-1,500/month. Includes campaign setup, keyword research, ad copywriting, conversion tracking, and monthly reports. Typical results: 15-30 qualified service calls per month.",
    icon: <PiMegaphone className="w-8 h-8" />,
    badge: "MOST POPULAR"
  },
  {
    title: "Professional Website Design",
    description:
      "Mobile-friendly websites that turn visitors into paying customers 24/7. $1,500-2,500 one-time. Includes 5-7 pages, contact forms, click-to-call buttons, Google Maps integration, service area pages, and before/after photo galleries. Ready in 2 weeks.",
    icon: <PiMonitor className="w-8 h-8" />,
  },
  {
    title: "Complete Digital Presence",
    description:
      "Website + Google Ads working together to dominate your local market. $3,500 setup + $1,200/month. Everything in Website + Google Ads packages at a discounted rate. Your ads drive traffic to a high-converting website = more jobs booked.",
    icon: <PiRocketLaunch className="w-8 h-8" />,
    badge: "BEST VALUE"
  },
  {
    title: "Google Business Profile Optimization",
    description:
      "Show up in the Google Map Pack when people search \"[your service] near me\". $500 one-time setup. Includes profile optimization, review management strategy, post scheduling, and photo optimization to get more local visibility.",
    icon: <PiMapPin className="w-8 h-8" />,
  },
  {
    title: "Landing Page Optimization",
    description:
      "High-converting landing pages designed specifically for your Google Ads campaigns. Ensures every click turns into a qualified lead with clear calls-to-action, service-specific messaging, and mobile-first design.",
    icon: <PiTrendUp className="w-8 h-8" />,
  },
  {
    title: "Ongoing Support & Optimization",
    description:
      "Month-to-month support with no long-term contracts. Includes website updates, Google Ads optimization, performance monitoring, and monthly reporting. If I'm not bringing you customers, you can cancel anytime.",
    icon: <PiHeadsetFill className="w-8 h-8" />,
  },
];