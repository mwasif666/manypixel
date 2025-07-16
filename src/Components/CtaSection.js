import React from "react";
import styles from "./CtaSection.module.css";

const CtaSection = () => {
  return (
    <div className={styles.section_cta}>
      <div className={styles.padding_global}>
        <div className={styles.container_large}>
          <div className={styles.padding_section_medium}>
            <div className={styles.cta_component}>
              <h2 className={`${styles.heading_style_h2} ${styles.big}`}>
                Send your request today.
                <br />
                Get your design tomorrow.
              </h2>

              <div className={styles.cta_button_wrapper}>
                <a
                  href="https://app.manypixels.co/onboard"
                  target="_blank"
                  className={styles.button}
                  rel="noopener noreferrer"
                >
                  Get Started
                </a>
                <a
                  href="/demo"
                  className={`${styles.button} ${styles.is_secondary} ${styles.is_inverted}`}
                >
                  book a call
                </a>
              </div>

              <div className={styles.cta_dec_1}></div>
              <div className={styles.cta_dec_2}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
