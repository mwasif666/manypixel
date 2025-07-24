import React from "react";
import { FaCheck } from "react-icons/fa";
import styles from "./Plans.module.css";

const Plans = () => {
  const features = [
    "Unlimited Requests",
    "Unlimited Brands",
    "Unlimited Revisions",
    "Free Stock Assets",
    "Native Source Files",
  ];

  return (
    <div className={styles.sectionGuarantee}>
      <div className="container">
        <div className={`py-5 ${styles.paddingSectionMedium}`}>
          <div className={styles.guaranteeComponent}>
            <div className={styles.guaranteeWrapper}>
              <div className={styles.guaranteeRight}>
                <h2 className={` ${styles.headingStyleH3}`}>
                  All plans include
                </h2>
                {/* <div className={styles.guaranteeGrid}> */}
                <div className="row">
                  {features.map((feature, index) => (
                    <div className="col-md-4">
                      <div key={index} className={styles.pricingListItem}>
                        <FaCheck className={styles.pricingIcon} />
                        <h2 className={`${styles.textSizeLarge}`}>{feature}</h2>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
