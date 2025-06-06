import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Portfolio />
      <About />
    </div>
  );
}
