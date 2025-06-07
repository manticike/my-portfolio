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
    title: "Website",
    description:
       "Crafting modern, responsive websites that blend creativity with functionality to deliver an exceptional user experience.",
    icon: <PiMonitor className="w-8 h-8" />,
  },
  {
    title: "E-Commerce Website",
    description:
      "Building powerful online stores with seamless shopping experiences, secure payments, and scalable solutions.",
    icon: <PiStorefront className="w-8 h-8" />,
  },
  {
    title: "Mobile App",
    description:
     "Developing intuitive and high-performance mobile and web applications tailored to your business needs.",
    icon: <PiAppStoreLogo className="w-8 h-8" />,
  },
  {
    title: "Inventory Management App",
    description:
      "Creating smart inventory systems that help you track, manage, and optimize your stock efficiently in real-time.",
    icon: <PiPackageFill className="w-8 h-8" />,
  },
  {
    title: "Shopify Stores",
    description:
      "Launch your online business with a custom-designed Shopify store tailored to your brand and built to convert.",
    icon: <PiShoppingCart className="w-8 h-8" />,
  },
  {
    title: "Tech Support",
    description:
     "Providing ongoing technical support to keep your website or application running smoothly, securely, and up-to-date.",
    icon: <PiHeadsetFill className="w-8 h-8" />,
  },
];