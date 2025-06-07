"use client";
import { AnimatedTestimonialsDemo } from "@/snippets/animatedTestimonialsDemo-2";


const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

                {/* Include the Aceternity UI component */}
                <AnimatedTestimonialsDemo />
            </div>
        </section>
    );
};

export default About;