import React from "react";
import styles from "../style/PricingCard.module.css";

const PricingHeader = () => {
  return (
    <>
      <div className={styles.pricing_header}>
        <h1>Pricing</h1>
        <p>All-inclusive plans. No contract. Cancel anytime.</p>
        <div className={styles.workBgWrapper}>
          <img
            src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/647884ab1f140c6821c5fa09_Group%204823.svg"
            loading="lazy"
            alt=""
            className={styles.work_dec_1}
          />
          <img
            src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/647884aba97aaae67c2a5ea2_Group%204822.svg"
            loading="lazy"
            alt=""
            className={styles.work_dec_4}
          />
          <img
            src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/647884ab33e01215443f94d9_Group%204824.svg"
            loading="lazy"
            alt=""
            className={styles.work_dec_2}
          />
          <img
            src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/64789a0a94d2fcfd0eb19717_Frame%2048311.svg"
            loading="lazy"
            alt=""
            className={styles.work_dec_3}
          />

          <img
            src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/647884ab33593e56fc75b54e_Ellipse%20164.svg"
            loading="lazy"
            alt=""
            className={styles.work_dec_5}
          />
        </div>
      </div>
    </>
  );
};

export default PricingHeader;
