import Image from "next/image";

const Hero = () => {
    return (
        <div className="relative h-screen w-full">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/hero-image.jpg"
                    alt="hero section background"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    quality={100}
                    priority
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center">
                <div className="text-center text-white px-4 max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Get 15–30 More Service Calls Every Month
                    </h1>

                    <p className="text-xl md:text-2xl mb-8">
                        Professional websites and Google Ads for HVAC, Roofing,
                        Plumbing and Electrical companies. Stop losing jobs to
                        competitors who show up first on Google.
                    </p>

                    {/* CTA Button */}
                    <a
                        href="https://calendly.com/antwiisaac/new-meeting"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-xl bg-yellow-500 px-8 py-4 text-lg font-semibold text-black hover:bg-yellow-400 transition duration-300"
                    >
                        Book a Free Strategy Call
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
