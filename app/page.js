import Navbar from "./../components/landing/Navbar.js";
import HeroSection from "@/components/landing/HeroSection.js";
import ProblemSection from "@/components/landing/ProblemSection.js";
import PricingSection from "@/components/landing/PricingSection.js";
import TestimonialsSection from "@/components/landing/TestimonialsSection.js";

export default function Landing() {
  return (
    <div className="min-h-screen font-jakarta">
      <Navbar />
      <HeroSection />
      <ProblemSection /> 
      <PricingSection />
      <TestimonialsSection />
    </div>
  );
}
// import React from "react";
// import Navbar from "@/components/landing/Navbar";
// import HeroSection from "@/components/landing/HeroSection";
// import ProblemSection from "@/components/landing/ProblemSection";
// import PricingSection from "@/components/landing/PricingSection";
// import TestimonialsSection from "@/components/landing/TestimonialsSection";
// // import FeaturesSection from "@/components/landing/FeaturesSection";
// // import PricingSection from "@/components/landing/PricingSection";
// // import TestimonialsSection from "@/components/landing/TestimonialsSection";
// // import Footer from "@/components/landing/Footer";
// // import HeroSection from "@/components/landing/HeroSection";
// // import ProblemSection from "@/components/landing/ProblemSection";
// // import FeaturesSection from "@/components/landing/FeaturesSection";
// // import PricingSection from "@/components/landing/PricingSection";
// // import TestimonialsSection from "@/components/landing/TestimonialsSection";
// // import Footer from "@/components/landing/Footer";

// export default function Landing() {
//   return (
//     <div className="min-h-screen font-jakarta">
//       <Navbar />
//       <HeroSection />
//       <ProblemSection /> 
//       {/* <FeaturesSection /> */}
//       <PricingSection />
//       <TestimonialsSection />
//       {/* <Footer />  */}
//     </div>
//   );
// }


