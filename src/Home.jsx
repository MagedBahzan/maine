import React from "react";
import Ads from "./componants/home-componants/Ads";
import BenefitsSection from "./componants/home-componants/BenefitsSection";
import CoursesSection from "./componants/home-componants/CoursesSection";
import FAQsection from "./componants/home-componants/FAQsection";
import HeroSection from "./componants/home-componants/HeroSection";
import PricingSection from "./componants/home-componants/PricingSection";
import TestimonialsSection from "./componants/home-componants/TestimonialsSection";
import VideoContainer from "./componants/home-componants/videoContiner";

function Home() {
  return (
    <div className="home">
      <HeroSection />
      <Ads />
      <VideoContainer src="https://b9.icdn.ru/m/maged-bahzan/4/79020034iyP.jpg" />
      <BenefitsSection />
      <CoursesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQsection />
    </div>
  );
}

export default Home;
