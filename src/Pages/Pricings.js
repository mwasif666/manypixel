import React from "react";
import Plans from "../Components/Plans";
import WorkGrid from "../Components/WorkGrid";
import ReviewsSection from "../Components/Reviews";
import FAQ from "../Components/FAQ";
import PricingCard from "./Pricing";
import PricingHeader from "./PricingHeader";

const Pricings = () => {
  return (
    <>
      <div className="container">
        <PricingHeader />
        <PricingCard />
        <Plans />
        <WorkGrid />
      </div>
      <ReviewsSection />
      <FAQ />
    </>
  );
};

export default Pricings;
