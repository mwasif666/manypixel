import React from "react";
import DateTime from "./Data&Time";
import styles from "../style/Demo.module.css";

const Demo = () => {
  return (
    <section className={styles.Demo}>
      <div className="container">
        <div className="row">
          <div className={`${styles.demoHeadingWrapper} container`}>
            <div className={styles.scopeDec1}></div>
            <div className={styles.scopeDec2}></div>
            <div className={styles.scopeDec3}></div>
            <div className={styles.scopeDec4}></div>
            <h1 className={`${styles.heading} mb-4`}>
              Outsourcing graphic design <br /> has never been easier
            </h1>

            <div className={`${styles.subHeading} mb-4`}>
              <h4>In this one-on-one live demo, you'll learn:</h4>
            </div>

            <div className={styles.checkboxesWrapper}>
              <div
                className={`${styles.checkboxItem} d-flex align-items-center mb-3`}
              >
                <img
                  src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6478a0d8f783ccac1d9917d4_Group%204827.svg"
                  loading="lazy"
                  alt="Checkmark"
                  className={`${styles.checkbox} me-3`}
                />
                <div className={styles.checkboxText}>
                  <h5>How manypixels works</h5>
                </div>
              </div>

              <div
                className={`${styles.checkboxItem} d-flex align-items-center mb-3`}
              >
                <img
                  src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6478a0d8f783ccac1d9917d4_Group%204827.svg"
                  loading="lazy"
                  alt="Checkmark"
                  className={`${styles.checkbox} me-3`}
                />
                <div className={styles.checkboxText}>
                  <h5>A FIRST LOOK at our platform</h5>
                </div>
              </div>

              <div
                className={`${styles.checkboxItem} d-flex align-items-center mb-3`}
              >
                <img
                  src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6478a0d8f783ccac1d9917d4_Group%204827.svg"
                  loading="lazy"
                  alt="Checkmark"
                  className={`${styles.checkbox} me-3`}
                />
                <div className={styles.checkboxText}>
                  <h5>THE MOST SUITABLE PLAN FOR YOU</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <DateTime />
        </div>
      </div>
    </section>
  );
};

export default Demo;
