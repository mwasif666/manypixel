import React from "react";
import styles from "./Works.module.css";

const HowItWorks = () => {
  return (
    <div className={styles.section_howitworks}>
      <div className={`${styles.padding_global} container`}>
        <div className="container">
          <div className={styles.padding_section_medium}>
            <div className={styles.howitworks_components}>
              {/* Heading Section */}
              <div
                className={`${styles.heading_wrapper} ${styles.max_width_tablet}`}
              >
                <h4 className={styles.text_size_tini}>HOW IT WORKS</h4>
                <h2 className={`${styles.heading_style_h2} ${styles.smaller}`}>
                  Get your designs done in 1-2 days, not weeks
                </h2>
              </div>

              {/* Steps Grid */}
              <div className={`${styles.howitworks_grid} row`}>
                {/* Step 1 */}
                <div className="col-md-4">
                  <div
                    id="w-node-_33171eff-e6f4-1e2c-3f2b-deeb914ebb2a-914ebb1f"
                    className={styles.howitworks_item}
                  >
                    <img
                      src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6476092fa947b640e4b7711f_Group%204810.svg"
                      loading="lazy"
                      width="104"
                      height="104"
                      alt="Submit your request illustration"
                      className={styles.howitworks_icon}
                    />
                    <div className={styles.howitworks_item_text}>
                      <h3>Submit your request</h3>
                      <p className={styles.text_size_small}>
                        Let us know what you need. Share references and upload
                        your brand assets.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="col-md-4">
                  <div
                    id="w-node-_33171eff-e6f4-1e2c-3f2b-deeb914ebb31-914ebb1f"
                    className={styles.howitworks_item}
                  >
                    <img
                      src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6476092fc91007c933836c58_Group%204811.svg"
                      loading="lazy"
                      width="104"
                      height="104"
                      alt="Your designers gets to work illustration"
                      className={styles.howitworks_icon}
                    />
                    <div className={styles.howitworks_item_text}>
                      <h3>Your designers gets to work</h3>
                      <p className={styles.text_size_small}>
                        Get instantly matched with the best designers for the
                        job.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="col-md-4">
                  <div
                    id="w-node-_33171eff-e6f4-1e2c-3f2b-deeb914ebb38-914ebb1f"
                    className={styles.howitworks_item}
                  >
                    <img
                      src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6476092f6b8c519b822eb495_Group%204812.svg"
                      loading="lazy"
                      width="104"
                      height="104"
                      alt="Receive your design illustration"
                      className={styles.howitworks_icon}
                    />
                    <div className={styles.howitworks_item_text}>
                      <h3>Receive your design</h3>
                      <p className={styles.text_size_small}>
                        Give us your feedback. We will revise your designs as
                        many times as needed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://app.manypixels.co/onboard"
                target="_blank"
                className={`${styles.button} btn btn-primary`}
                rel="noopener noreferrer"
              >
                GET STARTED
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
