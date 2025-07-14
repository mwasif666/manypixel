import React from "react";
import styles from "./OfferSection.module.css"; // Import the CSS module

const OfferSection = () => {
  return (
    <div className={styles.sectionOffer}>
      <div className="container py-5">
        <div className="text-center mb-4">
          <div className={styles.textSizeTini}>What we offer</div>
          <h2 className={styles.headingStyleH2}>
            A design solution you will love
          </h2>
        </div>

        {/* Bootstrap Grid for 2 Columns */}
        <div className="row">
          <div className="col-lg-6">
            <div className={styles.offerItem}>
              <div className="row">
                <div className="col-3 text-center">
                  <img
                    src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6476137baec639e8c2665cbe_timing%202.svg"
                    loading="lazy"
                    width="70"
                    height="70"
                    alt="Timing icon"
                    className={styles.offerIcon}
                  />
                </div>
                <div className="col-9">
                  <div className={styles.offerTextWrapper}>
                    <h3>Fast & Reliable</h3>
                    <p className={styles.textSizeSmall}>
                      Get your design back in 1-2 business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.offerItem}>
              <div className="row">
                <div className="col-3 text-center">
                  <img
                    src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6476137b5185019576792752_Fix%20Price.svg"
                    loading="lazy"
                    width="70"
                    height="70"
                    alt="Fix price icon"
                    className={styles.offerIcon}
                  />
                </div>
                <div className="col-9">
                  <div className={styles.offerTextWrapper}>
                    <h3>Fixed Monthly Rate</h3>
                    <p className={styles.textSizeSmall}>
                      Unlimited requests & revisions, same price.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.offerItem}>
              <div className="row">
                <div className="col-3 text-center">
                  <img
                    src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6476137b8f56e2685cb196a8_Pro%20Designer.svg"
                    loading="lazy"
                    width="70"
                    height="70"
                    alt="Pro designer icon"
                    className={styles.offerIcon}
                  />
                </div>
                <div className="col-9">
                  <div className={styles.offerTextWrapper}>
                    <h3>Professional Designers</h3>
                    <p className={styles.textSizeSmall}>
                      Work with battle-tested professionals only.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.offerItem}>
              <div className="row">
                <div className="col-3 text-center">
                  <img
                    src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6476137da6f2600981f804da_Flexible.svg"
                    loading="lazy"
                    width="70"
                    height="70"
                    alt="Flexible icon"
                    className={styles.offerIcon}
                  />
                </div>
                <div className="col-9">
                  <div className={styles.offerTextWrapper}>
                    <h3>Flexible & Scalable</h3>
                    <p className={styles.textSizeSmall}>
                      No contracts. Scale up or down as you go.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
