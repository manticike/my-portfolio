"use client";
import { ParallaxScroll } from "../components/ui/parallax-scroll";

export function ParallaxScrollDemo() {
  return <ParallaxScroll images={images} />;
}

const images = [
  {
    url: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    title: "Nature Photography Series",
    description: "A collection of high-resolution nature photographs capturing the beauty of untouched landscapes. Shot with professional DSLR equipment and processed with Lightroom.",
    role: "Lead Photographer & Editor",
    clientLink: "https://naturephotography.com",
    projectDate: "June 2022 - August 2022",
    technologies: ["DSLR Photography", "Lightroom", "Photoshop"]
  },
  {
    url: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
    title: "Mountain Expedition",
    description: "Documentation of a 2-week mountain hiking expedition. This project involved planning the route, capturing time-lapses, and creating a travel blog.",
    role: "Expedition Photographer",
    clientLink: "https://mountainadventures.org",
    projectDate: "July 2023",
    technologies: ["Time-lapse Photography", "Drone Footage", "Travel Blogging"]
  },
  {
    url: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    title: "Golden Hour Collection",
    description: "Special photo series shot exclusively during golden hour. Features unique lighting techniques and composition strategies for dramatic effect.",
    role: "Photographer & Lighting Specialist",
    clientLink: "https://goldenhour.gallery",
    projectDate: "Ongoing",
    technologies: ["Natural Light Photography", "Color Grading"]
  },
  {
    url: "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    title: "Desert Adventure",
    description: "Photography project documenting the unique ecosystems of desert environments. Includes both landscape and macro photography.",
    role: "Environmental Photographer",
    clientLink: "https://desertconservancy.org",
    projectDate: "March 2023",
    technologies: ["Landscape Photography", "Macro Photography"]
  },
  {
    url: "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    title: "Waterfall Studies",
    description: "Long-exposure photography of waterfalls across different seasons. Explores the relationship between shutter speed and water texture.",
    role: "Photography Technician",
    clientLink: "https://waterfallstudies.com",
    projectDate: "2021-2022",
    technologies: ["Long Exposure", "ND Filters", "Time-lapse"]
  },
  {
    url: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    title: "Urban Landscapes",
    description: "Contrast between natural and urban environments. This series examines how architecture interacts with natural light throughout the day.",
    role: "Urban Photographer",
    clientLink: "https://urbanvisions.photo",
    projectDate: "2020-Present",
    technologies: ["Architectural Photography", "HDR Imaging"]
  },
  {
    url: "https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2640&q=80",
    title: "Floral Macro Photography",
    description: "Extreme close-up studies of floral subjects. Uses specialized macro lenses to reveal details invisible to the naked eye.",
    role: "Macro Photography Specialist",
    clientLink: "https://floralmacro.gallery",
    projectDate: "Spring 2023",
    technologies: ["Macro Lenses", "Focus Stacking"]
  },
  {
    url: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    title: "Wildlife Portfolio",
    description: "Collection of wildlife photographs taken in natural habitats. Requires patience and understanding of animal behavior.",
    role: "Wildlife Photographer",
    clientLink: "https://wildlifephotos.org",
    projectDate: "2019-Present",
    technologies: ["Telephoto Lenses", "Camouflage Techniques"]
  },
  {
    url: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
    title: "Seasonal Changes",
    description: "Documenting the same location across all four seasons to show nature's cyclical transformations.",
    role: "Landscape Photographer",
    clientLink: "https://seasonalchanges.art",
    projectDate: "2021-2022",
    technologies: ["Time-lapse", "Color Consistency"]
  },
  {
    url: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    title: "Night Sky Photography",
    description: "Astrophotography project capturing stars, planets, and celestial events. Uses specialized tracking equipment for long exposures.",
    role: "Astrophotographer",
    clientLink: "https://nightskyobservatory.com",
    projectDate: "2022-Present",
    technologies: ["Star Tracking", "Long Exposure", "Light Pollution Reduction"]
  }
];