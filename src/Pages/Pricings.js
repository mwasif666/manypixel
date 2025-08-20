import React from "react";
import Plans from "../Components/Plans";
import WorkGrid from "../Components/WorkGrid";
import ReviewsSection from "../Components/Reviews";
import FAQ from "../Components/FAQ";
import PricingCard from "./Pricing";

const Pricings = () => {
  return (
    <>
      <div className="container">
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
