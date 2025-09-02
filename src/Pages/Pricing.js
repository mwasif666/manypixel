import React, { useState, useEffect } from "react";
import styles from "../style/PricingCard.module.css";
import { BsQuestionSquareFill } from "react-icons/bs";
import { FaCheck, FaLock } from "react-icons/fa";
import { Tooltip } from "bootstrap";

const PricingCard = ({loading, packages}) => {
  console.log(packages);
  
  const [billingCycle, setBillingCycle] = useState("MONTHLY");

  useEffect(() => {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
  }, [billingCycle]);

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

  const renderPricingCard = (item) => {
    // const price = pricingPlans[billingCycle][plan];
    // const monthlyPrice = pricingPlans["MONTHLY"][plan];
    // const savings =
    //   billingCycle === "QUARTERLY"
    //     ? "Save 10%"
    //     : billingCycle === "YEARLY"
    //     ? "Save 20%"
    //     : "";

    return (
      <div key={item.id} className={`${styles.pricing_item} card`}>
        <div className={styles.pricing_top}>
          <h2 className={styles.heading_style_h4}>
            {item.name
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (str) => str.toUpperCase())}
          </h2>
          <div className={`${styles.text_size_small} ${styles.pricing_size}`}>
            {item.tagline}
          </div>
          <div
            className={`${styles.heading_style_h4} ${styles.text_color_primary}`}
          >
            <span className={styles.heading_style_h5}>USD</span> ${item.mon_dol}
            {billingCycle !== "MONTHLY" && (
              <span className={styles.billing_savings}>/mo {item.savings}</span>
            )}
            {billingCycle === "MONTHLY" && <span>/mo</span>}
          </div>
          {billingCycle !== "MONTHLY" && (
            <div className={styles.original_price}>
              ${item.org_mon_dol}/mo originally
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
                    {item.features[0].name}
                  </div>
                  <div
                    className={styles.tooltip_icon}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title={item.tagline}
                  >
                    <BsQuestionSquareFill className={styles.pricing_icon3} />
                  </div>
                </div>

                <div className={styles.pricing_list_item}>
                  <FaCheck className={styles.pricing_icon2} />
                  <div className={styles.text_size_small}>
                    {item.features[1].name}
                  </div>
                </div>

                <div className={styles.pricing_list_item}>
                  {item.name === "Advanced" || item.name === "Business" ? (
                    <FaLock
                      className={`${styles.pricing_icon} ${styles.disabled_icon}`}
                    />
                  ) : (
                    <FaCheck className={styles.pricing_icon2} />
                  )}

                  <div
                    className={`${styles.text_size_small} ${
                      item.name === "Advanced" || item.name === "Business"
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
                    title={item.design_services.map(item=>item.name).join("<br/>")}
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
                    title={item.design_services.map(item=>item.name).join("<br/>")}
                  >
                    <BsQuestionSquareFill className={styles.pricing_icon3} />
                  </div>
                </div>

                <div className={styles.pricing_list_item}>
                  {item.name === "Advanced" ? (
                    <FaLock
                      className={`${styles.pricing_icon} ${styles.disabled_icon}`}
                    />
                  ) : (
                    <FaCheck className={styles.pricing_icon2} />
                  )}

                  <div
                    className={`${styles.text_size_small} ${
                      item.name === "Advanced" ? styles.dis : ""
                    }`}
                  >
                    Illustrations
                  </div>
                </div>

                <div className={styles.pricing_list_item}>
                  {item.name === "Advanced" ? (
                    <FaLock
                      className={`${styles.pricing_icon} ${styles.disabled_icon}`}
                    />
                  ) : (
                    <FaCheck className={styles.pricing_icon2} />
                  )}

                  <div
                    className={`${styles.text_size_small} ${
                      item.name === "Advanced" ? styles.dis : ""
                    }`}
                  >
                    Motion Graphics
                  </div>
                </div>

                <div className={styles.pricing_list_item}>
                  {item.name === "Advanced" ? (
                    <FaLock
                      className={`${styles.pricing_icon} ${styles.disabled_icon}`}
                    />
                  ) : (
                    <FaCheck className={styles.pricing_icon2} />
                  )}

                  <div
                    className={`${styles.text_size_small} ${
                      item.name === "Advanced" ? styles.dis : ""
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
              item.name === "Designated Designer" || item.plan === "Design Team"
                ? "#"
                : `https://app.manypixels.co/onboard?plan=${item.plan}`
            }
            target="_blank"
            className={`${styles.button} ${styles.width} ${styles.auto_top}`}
            rel="noopener noreferrer"
          >
            {item.plan === "Designated Designer" || item.plan === "Design Team"
              ? "BOOK A CALL"
              : "GET STARTED"}
          </a>
        </div>
      </div>
    );
  };

   if(loading){
      return <div>Loading...</div>
    }

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
          {packages.map((item)=>(
            renderPricingCard(item)
          ))}
        </div>
      </div>
    </>
  );
};

export default PricingCard;
