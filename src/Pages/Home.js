import React from "react";
import HeroSection from "../Components/HeroSection";
import Achievements from "../Components/Achievement";
import AdvantagesSection from "../Components/Advantage";
import Advantage2Section from "../Components/Advantage2";
import HowItWorks from "../Components/Works";
import Technology from "../Components/Technology";
import OfferSection from "../Components/OfferSection";
import WorkGrid from "../Components/WorkGrid";
import ToolsSection from "../Components/ToolsSection";
import ReviewsSection from "../Components/Reviews";
import TestimonialsSection from "../Components/TestimonialsSection";
import CtaSection from "../Components/CtaSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Achievements />
      <AdvantagesSection />
      <Advantage2Section />
      <HowItWorks />
      <Technology />
      <OfferSection />
      <WorkGrid />
      <ToolsSection />
      <ReviewsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};

export default Home;
