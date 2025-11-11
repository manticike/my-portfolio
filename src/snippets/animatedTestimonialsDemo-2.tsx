import { AnimatedTestimonials } from "../components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "I build websites that don't just look good - they bring in paying customers. For HVAC contractors, roofers, and home-service pros, a website is your 24/7 sales rep. I create mobile-friendly, fast, and conversion-focused websites that attract and turn visitors into calls, leads, and booked jobs. Stop losing customers to competitors with outdated sites. Whether you nedd a new website, an upgrade to boost performance, or automation to simplify your business, I deliver solutions that grow your revenue and save you time.  With me, your business gets a website that works as hard as you do - generating leads while you focus on the job.",
      name: "Isaac Antwi",
      designation: "Full Stack Web Developer",
      src: "/about-image.jpg"
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}