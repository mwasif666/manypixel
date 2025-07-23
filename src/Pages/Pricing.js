import React, { useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./PricingCard.module.css"; // We'll keep the same CSS but add Bootstrap classes

const PricingCard = () => {
  const [billingCycle, setBillingCycle] = useState("MONTHLY");

  const pricingPlans = {
    MONTHLY: {
      Advanced: 599,
      Business: 899,
      DesignatedDesigner: 1299,
      DesignTeam: 2499,
    },
    QUARTERLY: {
      Advanced: 539, // 10% off
      Business: 809, // 10% off
      DesignatedDesigner: 1169, // 10% off
      DesignTeam: 2249, // 10% off
    },
    YEARLY: {
      Advanced: 479, // 20% off
      Business: 719, // 20% off
      DesignatedDesigner: 1039, // 20% off
      DesignTeam: 1999, // 20% off
    },
  };

  const graphicDesignItems = [
    "Logos",
    "Business Cards",
    "Brand Guides",
    "Posters, Billboards, Banners",
    "Stationery Design",
    "Brochures and Booklets",
    "Presentations",
    "Flyers",
    "Social Media Graphics",
    "Business Reports",
    "Digitals Ads",
    "Infographics",
    "Email Graphics",
    "Icons",
    "E-Books",
    "GIFs",
    "Blog Graphics",
  ];

  const webDesignItems = ["Websites", "Landing Pages"];

  const renderPricingCard = (plan) => {
    const price = pricingPlans[billingCycle][plan];
    const monthlyPrice = pricingPlans["MONTHLY"][plan];
    const savings =
      billingCycle === "QUARTERLY"
        ? "Save 10%"
        : billingCycle === "YEARLY"
        ? "Save 20%"
        : "";

    return (
      <div key={plan} className="col-md-3 col-sm-6 mb-4">
        <div className="card h-100 pricing-item">
          <div className="card-body pricing-top d-flex flex-column">
            <h2 className="heading-style-h4 mb-3">
              {plan
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
            </h2>
            <div className="text-size-small pricing mb-3">
              {plan === "Advanced" && "Create all of your everyday designs."}
              {plan === "Business" &&
                "For businesses with ongoing design needs."}
              {plan === "DesignatedDesigner" &&
                "Get a dedicated designer for your brand."}
              {plan === "DesignTeam" && "Full design team for large projects."}
            </div>
            <div className="heading-style-h4 text-color-primary mb-2">
              <span className="heading-style-h5">USD</span> ${price}
              {billingCycle !== "MONTHLY" && (
                <span className="billing-savings">/mo {savings}</span>
              )}
              {billingCycle === "MONTHLY" && <span>/mo</span>}
            </div>
            {billingCycle !== "MONTHLY" && (
              <div className="original-price mb-3">
                ${monthlyPrice}/mo originally
              </div>
            )}
            <div className="divider my-3"></div>

            <div className="pricing-list-wrapper">
              <div className="pricing-text-list-wrapper mb-4">
                <h4 className="heading-style-h5 mb-2">Features</h4>
                <div className="pricing-list">
                  <div className="pricing-list-item mb-2">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/648744f9869a7440bcf1c079_Group%204846.svg"
                      alt=""
                      className="pricing-icon me-2"
                    />
                    <div className="text-size-small">
                      {plan === "Advanced" && "1 Daily Output"}
                      {plan === "Business" && "2 Daily Outputs"}
                      {plan === "DesignatedDesigner" && "Unlimited Requests"}
                      {plan === "DesignTeam" && "Team of 3 Designers"}
                    </div>
                    <div
                      className="tooltip-icon ms-2"
                      data-tooltip-id={`${plan}-daily-output-tooltip`}
                      data-tooltip-place="top"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 1H4C2.34315 1 1 2.34315 1 4V16C1 17.6569 2.34315 19 4 19H16C17.6569 19 19 17.6569 19 16V4C19 2.34315 17.6569 1 16 1ZM3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V16C17 16.5523 16.5523 17 16 17H4C3.44772 17 3 16.5523 3 16V4ZM10.0673 4.90601C9.21801 4.90601 8.48068 5.10201 7.85535 5.49401V7.55201C8.18201 7.33734 8.51801 7.18334 8.86335 7.09001C9.20868 6.98734 9.53535 6.93601 9.84335 6.93601C10.45 6.93601 10.7533 7.16467 10.7533 7.62201C10.7533 7.82734 10.702 8.00934 10.5993 8.16801C10.4967 8.32667 10.338 8.51801 10.1233 8.74201C9.82468 9.07801 9.59135 9.39067 9.42335 9.68001C9.26468 9.96001 9.18535 10.3193 9.18535 10.758V11.626H10.6693L10.7673 11.052C10.814 10.8467 10.9167 10.6553 11.0753 10.478C11.234 10.3007 11.4767 10.072 11.8033 9.79201C12.2887 9.38134 12.662 8.99867 12.9233 8.64401C13.194 8.28934 13.3293 7.86467 13.3293 7.37001C13.3293 6.89401 13.1893 6.46934 12.9093 6.09601C12.6387 5.72267 12.256 5.43334 11.7613 5.22801C11.2667 5.01334 10.702 4.90601 10.0673 4.90601ZM11.2713 12.396H8.63935V15H11.2713V12.396Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <ReactTooltip id={`${plan}-daily-output-tooltip`}>
                      {plan === "Advanced"
                        ? "1 designer is assigned to your account and work on your project(s) every business day."
                        : plan === "Business"
                        ? "2 designers are assigned to your account and work on your projects every business day."
                        : plan === "DesignatedDesigner"
                        ? "A dedicated designer works exclusively on your projects with unlimited requests."
                        : "A team of 3 designers works on your projects with priority support."}
                    </ReactTooltip>
                  </div>

                  <div className="pricing-list-item mb-2">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/648744f9869a7440bcf1c079_Group%204846.svg"
                      alt=""
                      className="pricing-icon me-2"
                    />
                    <div className="text-size-small">
                      {plan === "Advanced" && "1-2 Day Delivery"}
                      {plan === "Business" && "1 Day Delivery"}
                      {plan === "DesignatedDesigner" && "Priority Delivery"}
                      {plan === "DesignTeam" && "Express Delivery"}
                    </div>
                  </div>

                  <div className="pricing-list-item mb-2">
                    <img
                      loading="lazy"
                      src={
                        plan === "DesignatedDesigner" || plan === "DesignTeam"
                          ? "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/648744f9869a7440bcf1c079_Group%204846.svg"
                          : "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/65d35bcd5e383a16df45afa6_Group%204844.svg"
                      }
                      alt=""
                      className="pricing-icon me-2"
                    />
                    <div
                      className={`text-size-small ${
                        plan === "DesignatedDesigner" || plan === "DesignTeam"
                          ? ""
                          : "dis"
                      }`}
                    >
                      Real Time Slack Communication
                    </div>
                  </div>
                </div>
              </div>

              <div className="pricing-text-list-wrapper mb-4">
                <h4 className="heading-style-h5 mb-2">Design Services</h4>
                <div className="pricing-list">
                  <div className="pricing-list-item mb-2">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/648744f9869a7440bcf1c079_Group%204846.svg"
                      alt=""
                      className="pricing-icon me-2"
                    />
                    <div className="text-size-small">Graphic Design</div>
                    <div
                      className="tooltip-icon ms-2"
                      data-tooltip-id={`${plan}-graphic-design-tooltip`}
                      data-tooltip-place="top"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 1H4C2.34315 1 1 2.34315 1 4V16C1 17.6569 2.34315 19 4 19H16C17.6569 19 19 17.6569 19 16V4C19 2.34315 17.6569 1 16 1ZM3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V16C17 16.5523 16.5523 17 16 17H4C3.44772 17 3 16.5523 3 16V4ZM10.0673 4.90601C9.21801 4.90601 8.48068 5.10201 7.85535 5.49401V7.55201C8.18201 7.33734 8.51801 7.18334 8.86335 7.09001C9.20868 6.98734 9.53535 6.93601 9.84335 6.93601C10.45 6.93601 10.7533 7.16467 10.7533 7.62201C10.7533 7.82734 10.702 8.00934 10.5993 8.16801C10.4967 8.32667 10.338 8.51801 10.1233 8.74201C9.82468 9.07801 9.59135 9.39067 9.42335 9.68001C9.26468 9.96001 9.18535 10.3193 9.18535 10.758V11.626H10.6693L10.7673 11.052C10.814 10.8467 10.9167 10.6553 11.0753 10.478C11.234 10.3007 11.4767 10.072 11.8033 9.79201C12.2887 9.38134 12.662 8.99867 12.9233 8.64401C13.194 8.28934 13.3293 7.86467 13.3293 7.37001C13.3293 6.89401 13.1893 6.46934 12.9093 6.09601C12.6387 5.72267 12.256 5.43334 11.7613 5.22801C11.2667 5.01334 10.702 4.90601 10.0673 4.90601ZM11.2713 12.396H8.63935V15H11.2713V12.396Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <ReactTooltip
                      id={`${plan}-graphic-design-tooltip`}
                      className="tooltip-content"
                    >
                      <div className="tooltip-grid">
                        {graphicDesignItems.map((item, index) => (
                          <div key={index} className="tooltip-item">
                            <div className="tooltip-bg me-2"></div>
                            <div>{item}</div>
                          </div>
                        ))}
                      </div>
                    </ReactTooltip>
                  </div>

                  <div className="pricing-list-item mb-2">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/648744f9869a7440bcf1c079_Group%204846.svg"
                      alt=""
                      className="pricing-icon me-2"
                    />
                    <div className="text-size-small">Web Design</div>
                    <div
                      className="tooltip-icon ms-2"
                      data-tooltip-id={`${plan}-web-design-tooltip`}
                      data-tooltip-place="top"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 1H4C2.34315 1 1 2.34315 1 4V16C1 17.6569 2.34315 19 4 19H16C17.6569 19 19 17.6569 19 16V4C19 2.34315 17.6569 1 16 1ZM3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V16C17 16.5523 16.5523 17 16 17H4C3.44772 17 3 16.5523 3 16V4ZM10.0673 4.90601C9.21801 4.90601 8.48068 5.10201 7.85535 5.49401V7.55201C8.18201 7.33734 8.51801 7.18334 8.86335 7.09001C9.20868 6.98734 9.53535 6.93601 9.84335 6.93601C10.45 6.93601 10.7533 7.16467 10.7533 7.62201C10.7533 7.82734 10.702 8.00934 10.5993 8.16801C10.4967 8.32667 10.338 8.51801 10.1233 8.74201C9.82468 9.07801 9.59135 9.39067 9.42335 9.68001C9.26468 9.96001 9.18535 10.3193 9.18535 10.758V11.626H10.6693L10.7673 11.052C10.814 10.8467 10.9167 10.6553 11.0753 10.478C11.234 10.3007 11.4767 10.072 11.8033 9.79201C12.2887 9.38134 12.662 8.99867 12.9233 8.64401C13.194 8.28934 13.3293 7.86467 13.3293 7.37001C13.3293 6.89401 13.1893 6.46934 12.9093 6.09601C12.6387 5.72267 12.256 5.43334 11.7613 5.22801C11.2667 5.01334 10.702 4.90601 10.0673 4.90601ZM11.2713 12.396H8.63935V15H11.2713V12.396Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <ReactTooltip
                      id={`${plan}-web-design-tooltip`}
                      className="tooltip-content"
                    >
                      <div className="tooltip-list">
                        {webDesignItems.map((item, index) => (
                          <div key={index} className="tooltip-item">
                            <div className="tooltip-bg me-2"></div>
                            <div>{item}</div>
                          </div>
                        ))}
                      </div>
                    </ReactTooltip>
                  </div>

                  <div className="pricing-list-item mb-2">
                    <img
                      loading="lazy"
                      src={
                        plan === "Advanced"
                          ? "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/65d35bcd5e383a16df45afa6_Group%204844.svg"
                          : "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/648744f9869a7440bcf1c079_Group%204846.svg"
                      }
                      alt=""
                      className="pricing-icon me-2"
                    />
                    <div
                      className={`text-size-small ${
                        plan === "Advanced" ? "dis" : ""
                      }`}
                    >
                      Illustrations
                    </div>
                  </div>

                  <div className="pricing-list-item mb-2">
                    <img
                      loading="lazy"
                      src={
                        plan === "DesignTeam"
                          ? "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/648744f9869a7440bcf1c079_Group%204846.svg"
                          : "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/65d35bcd5e383a16df45afa6_Group%204844.svg"
                      }
                      alt=""
                      className="pricing-icon me-2"
                    />
                    <div
                      className={`text-size-small ${
                        plan !== "DesignTeam" ? "dis" : ""
                      }`}
                    >
                      Motion Graphics
                    </div>
                  </div>

                  <div className="pricing-list-item mb-2">
                    <img
                      loading="lazy"
                      src={
                        plan === "DesignTeam"
                          ? "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/648744f9869a7440bcf1c079_Group%204846.svg"
                          : "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/65d35bcd5e383a16df45afa6_Group%204844.svg"
                      }
                      alt=""
                      className="pricing-icon me-2"
                    />
                    <div
                      className={`text-size-small ${
                        plan !== "DesignTeam" ? "dis" : ""
                      }`}
                    >
                      Video Editing
                    </div>
                  </div>
                </div>
              </div>

              <div className="pricing-text-list-wrapper mb-4">
                <h4 className="heading-style-h5 mb-2">Tools</h4>
                <div className="pricing-tools-wrapper d-flex gap-3">
                  <div className="pricing-tools-item">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/66e07dff1802c4d7c8d94e79_image%20146.avif"
                      alt="Adobe Creative Logo"
                      className="pricing-tools"
                      data-tooltip-id={`${plan}-adobe-tooltip`}
                    />
                    <ReactTooltip id={`${plan}-adobe-tooltip`}>
                      Adobe Creative Suite
                    </ReactTooltip>
                  </div>

                  <div className="pricing-tools-item">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6481ba63af835b5134efa34e_image%2081.svg"
                      alt="Figma Logo"
                      className="pricing-tools"
                      data-tooltip-id={`${plan}-figma-tooltip`}
                    />
                    <ReactTooltip id={`${plan}-figma-tooltip`}>
                      Figma
                    </ReactTooltip>
                  </div>

                  <div className="pricing-tools-item">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6481ba63ce30ba841d5472e7_image%2079.svg"
                      alt="Canva logo"
                      className="pricing-tools"
                      data-tooltip-id={`${plan}-canva-tooltip`}
                    />
                    <ReactTooltip id={`${plan}-canva-tooltip`}>
                      Canva
                    </ReactTooltip>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={`https://app.manypixels.co/onboard?plan=${plan}`}
              target="_blank"
              className="btn btn-dark w-100 mt-auto"
              rel="noopener noreferrer"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container pricing-container py-5">
      <div className="pricing-header text-center mb-5">
        <h1 className="mb-3">Pricing</h1>
        <p className="mb-4">
          All-inclusive plans. No contract. Cancel anytime.
        </p>

        <div className="billing-cycle-selector d-flex justify-content-center gap-2 mb-4 flex-wrap">
          <button
            className={`billing-toggle btn ${
              billingCycle === "MONTHLY"
                ? "active btn-dark"
                : "btn-outline-dark"
            }`}
            onClick={() => setBillingCycle("MONTHLY")}
          >
            MONTHLY
          </button>
          <button
            className={`billing-toggle btn position-relative ${
              billingCycle === "QUARTERLY"
                ? "active btn-dark"
                : "btn-outline-dark"
            }`}
            onClick={() => setBillingCycle("QUARTERLY")}
          >
            QUARTERLY
            <span className="savings-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              SAVE 10%
            </span>
          </button>
          <button
            className={`billing-toggle btn position-relative ${
              billingCycle === "YEARLY" ? "active btn-dark" : "btn-outline-dark"
            }`}
            onClick={() => setBillingCycle("YEARLY")}
          >
            YEARLY
            <span className="savings-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              SAVE 20%
            </span>
          </button>
        </div>
      </div>

      <div className="row">
        {renderPricingCard("Advanced")}
        {renderPricingCard("Business")}
        {renderPricingCard("DesignatedDesigner")}
        {renderPricingCard("DesignTeam")}
      </div>
    </div>
  );
};

export default PricingCard;
