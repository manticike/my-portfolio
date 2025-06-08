import { AnimatedTestimonials } from "../components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    { 
      quote:
        "I'm a Full Stack Web Developer who helps businesses and individuals turn ideas into fully functional, responsive, and scalable web applications. From building sleek front-end interfaces to developing powerful back-end systems, I deliver custom solutions tailored to your needs. Whether you're looking to launch a new product, improve your website's performance, or automate business processes, I can help bring your vision to life with clean, efficient code and a user-first approach.",
      name: "Isaac Antwi",
      designation: "Full Stack Web Developer",
      src: "/about-image.jpg"
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}