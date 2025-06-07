"use client";
import { CardHoverEffectDemo } from "@/snippets/cardHoverEffect";


const Services = () => {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>

                {/* Include the Aceternity UI component */}
                <CardHoverEffectDemo />
            </div>
        </section>
    );
};

export default Services;