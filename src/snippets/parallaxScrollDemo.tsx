"use client";
import { ParallaxScroll } from "../components/ui/parallax-scroll";

export function ParallaxScrollDemo() {
  return <ParallaxScroll images={images} />;
}

const images = [
  {
    url: "/images/eventora.png",
    title: "Eventora Ticketing Manangement System",
    description: "Eventora is a smart ticket management system that helps event organizers create, manage, and track event tickets with ease. From online sales to attendee check-ins, Eventora simplifies every step of your event experience.",
    role: "Backend Developer",
    clientLink: "https://eventora-amalitech.netlify.app",
    projectDate: "October 2025",
    technologies: ["Django DRF", "Angular", "PostgrSQL"]
  },
  {
    url: "/images/myportfolio.png",
    title: "My Personal Portfolio website",
    description: "I’m a passionate web developer focused on creating fast, user-friendly, and visually appealing digital experiences. From sleek frontends to powerful backends, I build solutions that help businesses and individuals stand out online.",
    role: "Developer",
    clientLink: "https://www.antisaac.com/",
    projectDate: "July 2025",
    technologies: ["React", "Next.js", "TailwindCSS", "Shadcn UI"]
  }
];