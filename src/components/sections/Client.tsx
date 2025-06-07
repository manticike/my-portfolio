"use client";
import { AnimatedTestimonialsDemo } from "@/snippets/animatedTestimonialsDemo";


const Client = () => {
    return (
        <section id="portfolio" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">My Happy Clients</h2>

                {/* Include the Aceternity UI component */}
                <AnimatedTestimonialsDemo />
            </div>
        </section>
    );
};

export default Client;