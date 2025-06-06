"use client";
import Image from "next/image";
import { ParallaxScroll } from "../ui/parallax-scroll";
import { ParallaxScrollDemo } from "@/snippets/parallaxScrollDemo";


const Portfolio = () => {
    return (
        <section id="portfolio" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Portfolio</h2>

                {/* Include the Aceternity UI component */}
                <ParallaxScrollDemo />
            </div>
        </section>
    );
};

export default Portfolio;