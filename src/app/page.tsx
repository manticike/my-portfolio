import About from "@/components/sections/About";
import Client from "@/components/sections/Client";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";


export default function Home() {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="testimonials">
        <Client />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}