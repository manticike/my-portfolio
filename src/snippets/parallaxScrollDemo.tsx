"use client";
import { ParallaxScroll } from "../components/ui/parallax-scroll";

export function ParallaxScrollDemo() {
  return <ParallaxScroll images={images} />;
}

const images = [
  {
    url: "/images/ercplumbing.jpg",
    title: "ERC Plumbing Website",
    description: "A mobile-friendly and SEO-optimized website for a local plumbing business in the US.",
    role: "Frontend & Backend Developer",
    clientLink: "https://ercplumbing.netlify.app/",
    projectDate: "February 2026",
    technologies: ["React", "Next.js", "TailwindCSS"]
  },
  {
    url: "/images/amroofing.jpg",
    title: "AM Roofing & Remodeling Website",
    description: "A clean and responsive website for a local roofing and remodeling business.",
    role: "Frontend & Backend Developer",
    clientLink: "https://amroofingremodelling.netlify.app/",
    projectDate: "February 2026",
    technologies: ["React", "Next.js", "TailwindCSS"]
  },
  {
    url: "/images/eventora.png",
    title: "Eventora Ticketing Management System",
    description: "Eventora is a smart ticket management system that helps event organizers create, manage, and track event tickets with ease. From online sales to attendee check-ins, Eventora simplifies every step of your event experience.",
    role: "Backend Developer",
    clientLink: "https://eventora-amalitech.netlify.app",
    projectDate: "October 2025",
    technologies: ["Django DRF", "Angular", "PostgreSQL"]
  },
  {
    url: "/images/myportfolio.png",
    title: "My Personal Portfolio Website",
    description: "I’m a passionate web developer focused on creating fast, user-friendly, and visually appealing digital experiences. From sleek frontends to powerful backends, I build solutions that help businesses and individuals stand out online.",
    role: "Developer",
    clientLink: "https://www.antisaac.com/",
    projectDate: "July 2025",
    technologies: ["React", "Next.js", "TailwindCSS", "Shadcn UI"]
  },
  {
    url: "/images/allenheating.jpg",
    title: "Allen Heating Website",
    description: "A professional website for a heating service provider, optimized for mobile and SEO.",
    role: "Frontend & Backend Developer",
    clientLink: "https://allenheating.netlify.app/",
    projectDate: "February 2026",
    technologies: ["React", "Next.js", "TailwindCSS"]
  },
  {
    url: "/images/saulramirezhvac.jpg",
    title: "Saul Ramirez HVAC Website",
    description: "A modern website for an HVAC business with responsive design and fast loading times.",
    role: "Frontend & Backend Developer",
    clientLink: "https://saulramirezhvac.netlify.app/",
    projectDate: "February 2026",
    technologies: ["React", "Next.js", "TailwindCSS"]
  }
];