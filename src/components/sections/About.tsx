"use client";
import { AnimatedTestimonialsDemo } from "@/snippets/animatedTestimonialsDemo-2";


const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12"> Get 15-30 More Service Calls Every Month</h2>
                <h3>Professional websites and Google Ads for HVAC, Roofing,
                    Plumbing & Electrical companies. Stop losing jobs to competitors
                    who show up first on Google.</h3>

                {/* Include the Aceternity UI component */}
                <AnimatedTestimonialsDemo />
            </div>
        </section>
    );
};

export default About;