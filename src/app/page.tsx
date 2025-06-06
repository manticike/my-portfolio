import About from "@/components/sections/About";
import Client from "@/components/sections/Client";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <Client />
    </div>
  );
}
