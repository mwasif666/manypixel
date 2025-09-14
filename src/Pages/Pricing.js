import React, { useState, useEffect, useContext } from "react";
import styles from "../style/PricingCard.module.css";
import { BsQuestionSquareFill } from "react-icons/bs";
import { FaCheck, FaLock } from "react-icons/fa";
import { Tooltip } from "bootstrap";
import { PricingContext } from "../contexts/PricingContext";

const PricingCard = ({ setShowModal }) => {
  const {
    packages,
    loading,
    setSelectedPackage,
    billingCycle,
    setBillingCycle,
    isUSD,
  } = useContext(PricingContext);

  useEffect(() => {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
  }, [billingCycle]);

  const safeParseInt = (val) => {
    const num = parseInt(val, 10);
    return isNaN(num) ? 0 : num;
  };

  const renderPricingCard = (item) => {
    const calculateDiscount = (
      dollAmount,
      dollPercentage,
      aedAmount,
      aedPercentage
    ) => {
      const dAmt = safeParseInt(dollAmount);
      const dPct = safeParseInt(dollPercentage);
      const aAmt = safeParseInt(aedAmount);
      const aPct = safeParseInt(aedPercentage);

      if (isUSD) {
        return dAmt - (dAmt * dPct) / 100;
      } else {
        return aAmt - (aAmt * aPct) / 100;
      }
    };

    const discountedAmount = (item) => {
      switch (billingCycle) {
        case "MONTHLY":
          return calculateDiscount(
            item.mon_dol,
            item.mon_dol_discount,
            item.mon_aed,
            item.mon_aed_discount
          );
        case "QUARTERLY":
          return calculateDiscount(
            item.quar_dol,
            item.quar_dol_discount,
            item.quar_aed,
            item.quar_aed_discount
          );
        case "YEARLY":
          return calculateDiscount(
            item.y_dol,
            item.y_dol_discount,
            item.y_aed,
            item.y_aed_discount
          );
        default:
          return 0;
      }
    };

    const checkValidity = (val) => {
      return val !== undefined && val !== "" && val !== null;
    };

    const isDiscountAvailable = (item) => {
      switch (billingCycle) {
        case "MONTHLY":
          return isUSD
            ? checkValidity(item.mon_dol_discount)
            : checkValidity(item.mon_aed_discount);
        case "QUARTERLY":
          return isUSD
            ? checkValidity(item.quar_dol_discount)
            : checkValidity(item.quar_aed_discount);
        case "YEARLY":
          return isUSD
            ? checkValidity(item.y_dol_discount)
            : checkValidity(item.y_aed_discount);
        default:
          return false;
      }
    };

    const getActuallAmount = (item) => {
      switch (billingCycle) {
        case "MONTHLY":
          return isUSD ? safeParseInt(item.mon_dol) : safeParseInt(item.mon_aed);
        case "QUARTERLY":
          return isUSD ? safeParseInt(item.quar_dol) : safeParseInt(item.quar_aed);
        case "YEARLY":
          return isUSD ? safeParseInt(item.y_dol) : safeParseInt(item.y_aed);
        default:
          return 0;
      }
    };

    const getSavingAmount = (item) => {
      let discount = discountedAmount(item);
      switch (billingCycle) {
        case "MONTHLY":
          return Math.floor(
            isUSD
              ? safeParseInt(item.mon_dol) - discount
              : safeParseInt(item.mon_aed) - discount
          );
        case "QUARTERLY":
          return Math.floor(
            isUSD
              ? (safeParseInt(item.quar_dol) - discount) * 3
              : (safeParseInt(item.quar_aed) - discount) * 3
          );
        case "YEARLY":
          return Math.floor(
            isUSD
              ? (safeParseInt(item.y_dol) - discount) * 12
              : (safeParseInt(item.y_aed) - discount) * 12
          );
        default:
          return 0;
      }
    };

    const setPackage = (item) => {
      setSelectedPackage(item);
      if (setShowModal) {
        setShowModal(false);
      }
    };

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
            <span className={styles.heading_style_h5}>
              {isUSD ? "USD" : "AED"}
            </span>{" "}
            {isUSD && "$"}
            {isDiscountAvailable(item)
              ? discountedAmount(item)
              : getActuallAmount(item)}
            {isDiscountAvailable(item) && (
              <span className={styles.billing_savings}>
                /mo {getSavingAmount(item)}
                {isUSD ? "$" : "AED"}
              </span>
            )}
            {!isDiscountAvailable(item) && <span>/mo</span>}
          </div>

          {isDiscountAvailable(item) && (
            <div className={styles.original_price}>
              {isUSD ? `$${item.mon_dol}` : `${item.mon_aed} AED.`}
              /mo originally
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
                    {item.features[0]?.name}
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
                    {item.features[1]?.name}
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
                    title={item.design_services
                      .map((item) => item.name)
                      .join("<br/>")}
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
                    title={item.design_services
                      .map((item) => item.name)
                      .join("<br/>")}
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

          <button
            className={`${styles.button} ${styles.width} ${styles.auto_top}`}
            onClick={() => setPackage(item)}
          >
            GET STARTED
          </button>
        </div>
      </div>
    );
  };

  if (loading) {
    return <div>Loading...</div>;
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
                  <div className={styles.pricing_dec_6}></div>
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
                  <div className={styles.pricing_dec_5}></div>
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6690f52c3a4851ffa8d01f42_Group%204953.webp"
                    alt="The most popular logo."
                    className={styles.pricing_featured_image}
                  ></img>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.pricing_grid}>
          {packages?.map((item) => renderPricingCard(item))}
        </div>
      </div>
    </>
  );
};

export default PricingCard;
