import React, { useState, useEffect } from "react";
import styles from "./PricingCard.module.css";
import { BsQuestionSquareFill } from "react-icons/bs";
import { FaCheck, FaLock } from "react-icons/fa";
import { Tooltip } from "bootstrap";

const PricingCard = () => {
  const [billingCycle, setBillingCycle] = useState("MONTHLY");

  useEffect(() => {
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
  }, [billingCycle]); // Re-initialize when billing cycle changes

  const pricingPlans = {
    MONTHLY: {
      Advanced: 599,
      Business: 999,
      DesignatedDesigner: 1299,
      DesignTeam: 2399,
    },
    QUARTERLY: {
      Advanced: 539, // 10% off
      Business: 899, // 10% off
      DesignatedDesigner: 1169, // 10% off
      DesignTeam: 2159, // 10% off
    },
    YEARLY: {
      Advanced: 479, // 20% off
      Business: 799, // 20% off
      DesignatedDesigner: 1039, // 20% off
      DesignTeam: 1919, // 20% off
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
      <div key={plan} className={`${styles.pricing_item} card`}>
        <div className={styles.pricing_top}>
          <h2 className={styles.heading_style_h4}>
            {plan
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (str) => str.toUpperCase())}
          </h2>
          <div className={`${styles.text_size_small} ${styles.pricing_size}`}>
            {plan === "Advanced" && "Create all of your everyday designs."}
            {plan === "Business" && "Get double the output everyday."}
            {plan === "DesignatedDesigner" &&
              "Collaborate in real time with your designer."}
            {plan === "DesignTeam" && "Get more done with your design team."}
          </div>
          <div
            className={`${styles.heading_style_h4} ${styles.text_color_primary}`}
          >
            <span className={styles.heading_style_h5}>USD</span> ${price}
            {billingCycle !== "MONTHLY" && (
              <span className={styles.billing_savings}>/mo {savings}</span>
            )}
            {billingCycle === "MONTHLY" && <span>/mo</span>}
          </div>
          {billingCycle !== "MONTHLY" && (
            <div className={styles.original_price}>
              ${monthlyPrice}/mo originally
            </div>
          )}
          <div className={styles.divider}></div>

          <div className={styles.pricing_list_wrapper}>
            <div className={styles.pricing_text_list_wrapper}>
              <h4 className={styles.heading_style_h5}>Features</h4>
              <div className={styles.pricing_list}>
                <div className={styles.pricing_list_item}>
                  <FaCheck className={styles.pricing_icon2} />
                  <div className={styles.text_size_small}>
                    {plan === "Advanced" && "1 Daily Output"}
                    {plan === "Business" && "2 Daily Output"}
                    {plan === "DesignatedDesigner" && "Designated Designer"}
                    {plan === "DesignTeam" && "2 Designated Designers"}
                  </div>
                  <div
                    className={styles.tooltip_icon}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title={
                      plan === "Advanced"
                        ? "1 designer is assigned to your account and work on your project(s) every business day."
                        : plan === "Business"
                        ? "2 designers are assigned to your account and work on your projects every business day."
                        : plan === "DesignatedDesigner"
                        ? "A dedicated designer works exclusively on your projects."
                        : "A team of 2 dedicated designers works on your projects."
                    }
                  >
                    <BsQuestionSquareFill className={styles.pricing_icon3} />
                  </div>
                </div>

                <div className={styles.pricing_list_item}>
                  <FaCheck className={styles.pricing_icon2} />
                  <div className={styles.text_size_small}>
                    {plan === "Advanced" && "1-2 Day Delivery"}
                    {plan === "Business" && "Next-Day Delivery"}
                    {plan === "DesignatedDesigner" && "Same-Day Delivery"}
                    {plan === "DesignTeam" && "Same-Day Delivery"}
                  </div>
                </div>

                <div className={styles.pricing_list_item}>
                  {plan === "Advanced" || plan === "Business" ? (
                    <FaLock
                      className={`${styles.pricing_icon} ${styles.disabled_icon}`}
                    />
                  ) : (
                    <FaCheck className={styles.pricing_icon2} />
                  )}

                  <div
                    className={`${styles.text_size_small} ${
                      plan === "Advanced" || plan === "Business"
                        ? styles.dis
                        : ""
                    }`}
                  >
                    Real Time Slack Communication
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.pricing_text_list_wrapper}>
              <h4 className={styles.heading_style_h5}>Design Services</h4>
              <div className={styles.pricing_list}>
                <div className={styles.pricing_list_item}>
                  <FaCheck className={styles.pricing_icon2} />
                  <div className={styles.text_size_small}>Graphic Design</div>
                  <div
                    className={styles.tooltip_icon}
                    data-bs-toggle="tooltip"
                    data-bs-html="true"
                    data-bs-placement="right"
                    title={graphicDesignItems.join("<br/>")}
                  >
                    <BsQuestionSquareFill className={styles.pricing_icon3} />
                  </div>
                </div>

                <div className={styles.pricing_list_item}>
                  <FaCheck className={styles.pricing_icon2} />
                  <div className={styles.text_size_small}>Web Design</div>
                  <div
                    className={styles.tooltip_icon}
                    data-bs-toggle="tooltip"
                    data-bs-html="true"
                    data-bs-placement="right"
                    title={webDesignItems.join("<br/>")}
                  >
                    <BsQuestionSquareFill className={styles.pricing_icon3} />
                  </div>
                </div>

                <div className={styles.pricing_list_item}>
                  {plan === "Advanced" ? (
                    <FaLock
                      className={`${styles.pricing_icon} ${styles.disabled_icon}`}
                    />
                  ) : (
                    <FaCheck className={styles.pricing_icon2} />
                  )}

                  <div
                    className={`${styles.text_size_small} ${
                      plan === "Advanced" ? styles.dis : ""
                    }`}
                  >
                    Illustrations
                  </div>
                </div>

                <div className={styles.pricing_list_item}>
                  {plan === "Advanced" ? (
                    <FaLock
                      className={`${styles.pricing_icon} ${styles.disabled_icon}`}
                    />
                  ) : (
                    <FaCheck className={styles.pricing_icon2} />
                  )}

                  <div
                    className={`${styles.text_size_small} ${
                      plan === "Advanced" ? styles.dis : ""
                    }`}
                  >
                    Motion Graphics
                  </div>
                </div>

                <div className={styles.pricing_list_item}>
                  {plan === "Advanced" ? (
                    <FaLock
                      className={`${styles.pricing_icon} ${styles.disabled_icon}`}
                    />
                  ) : (
                    <FaCheck className={styles.pricing_icon2} />
                  )}

                  <div
                    className={`${styles.text_size_small} ${
                      plan === "Advanced" ? styles.dis : ""
                    }`}
                  >
                    Video Editing
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.pricing_text_list_wrapper}>
              <h4 className={styles.heading_style_h5}>Tools</h4>
              <div className={styles.pricing_tools_wrapper}>
                <div className={styles.pricing_tools_item}>
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/66e07dff1802c4d7c8d94e79_image%20146.avif"
                    alt="Adobe Creative Logo"
                    className={styles.pricing_tools}
                    data-bs-toggle="tooltip"
                    title="Adobe Creative Suite"
                  />
                </div>

                <div className={styles.pricing_tools_item}>
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6481ba63af835b5134efa34e_image%2081.svg"
                    alt="Figma Logo"
                    className={styles.pricing_tools}
                    data-bs-toggle="tooltip"
                    title="Figma"
                  />
                </div>

                <div className={styles.pricing_tools_item}>
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6481ba63ce30ba841d5472e7_image%2079.svg"
                    alt="Canva logo"
                    className={styles.pricing_tools}
                    data-bs-toggle="tooltip"
                    title="Canva"
                  />
                </div>
              </div>
            </div>
          </div>

          <a
            href={
              plan === "DesignatedDesigner" || plan === "DesignTeam"
                ? "#"
                : `https://app.manypixels.co/onboard?plan=${plan}`
            }
            target="_blank"
            className={`${styles.button} ${styles.width} ${styles.auto_top}`}
            rel="noopener noreferrer"
          >
            {plan === "DesignatedDesigner" || plan === "DesignTeam"
              ? "BOOK A CALL"
              : "GET STARTED"}
          </a>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={styles.pricing_container}>
        <div className={styles.pricing_header}>
          <div className={styles.billing_cycle_selector}>
            <div className={styles.main_filter}>
              <button
                className={`${styles.billing_toggle} ${
                  billingCycle === "MONTHLY" ? styles.active : ""
                }`}
                onClick={() => setBillingCycle("MONTHLY")}
              >
                MONTHLY
              </button>
              <button
                className={`${styles.billing_toggle} ${
                  billingCycle === "QUARTERLY" ? styles.active : ""
                }`}
                onClick={() => setBillingCycle("QUARTERLY")}
              >
                QUARTERLY
                <span className={styles.savings_badge}>
                  {" "}
                  <div class={styles.pricing_dec_6}></div>
                </span>
              </button>
              <button
                className={`${styles.billing_toggle} ${
                  billingCycle === "YEARLY" ? styles.active : ""
                }`}
                onClick={() => setBillingCycle("YEARLY")}
              >
                YEARLY
                <span className={styles.savings_badge}>
                  {" "}
                  <div class={styles.pricing_dec_5}></div>
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6690f52c3a4851ffa8d01f42_Group%204953.webp"
                    alt="The most popular logo."
                    class={styles.pricing_featured_image}
                  ></img>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.pricing_grid}>
          {renderPricingCard("Advanced")}
          {renderPricingCard("Business")}
          {renderPricingCard("DesignatedDesigner")}

          {renderPricingCard("DesignTeam")}
        </div>
      </div>
    </>
  );
};

export default PricingCard;
