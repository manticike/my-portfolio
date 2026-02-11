// import { AnimatedTestimonials } from "../components/ui/animated-testimonials";

// export function AnimatedTestimonialsDemo() {
//   const testimonials = [
//     {
//       quote:
//         "I build websites that don't just look good - they bring in paying customers. For HVAC contractors, roofers, and home-service pros, a website is your 24/7 sales rep. I create mobile-friendly, fast, and conversion-focused websites that attract and turn visitors into calls, leads, and booked jobs. Stop losing customers to competitors with outdated sites. Whether you nedd a new website, an upgrade to boost performance, or automation to simplify your business, I deliver solutions that grow your revenue and save you time.  With me, your business gets a website that works as hard as you do - generating leads while you focus on the job.",
//       name: "Isaac Antwi",
//       designation: "Full Stack Web Developer",
//       src: "/about-image.jpg"
//     },
//   ];
//   return <AnimatedTestimonials testimonials={testimonials} />;
// }



import { AnimatedTestimonials } from "../components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Here's what frustrates me: Great HVAC contractors, roofers, plumbers, and electricians with years of experience lose jobs to competitors simply because they don't show up on Google. Right now, when someone in Dallas searches 'emergency HVAC repair' or 'roof repair near me,' your competitors' ads show up first. They get the call. You lose a $3,000-$8,000 job. This happens 5-10 times per week. That's where I come in. I run Google Ads campaigns that put you at the top when customers are ready to buy, and I build high-converting websites that turn clicks into calls. Most of my clients see 15-30 qualified service calls per month. No long-term contracts. Results you can track. If I'm not bringing you customers, you can cancel anytime.",
      name: "Isaac Antwi",
      designation: "Google Ads & Web Design Specialist",
      src: "/about-image.jpg"
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}