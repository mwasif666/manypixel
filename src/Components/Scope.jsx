import React from "react";
import styles from "./ScopeOfServices.module.css";

const ScopeOfServices = () => {
  return (
    <div className={styles.sectionScope}>
      <div className="container">
        {/* Decorative elements */}
        <div className={styles.scopeDec1}></div>
        <div className={styles.scopeDec2}></div>
        <div className={styles.scopeDec3}></div>
        <div className={styles.scopeDec4}></div>
        <div className={`py-5 ${styles.paddingSectionScope}`}>
          <div className={`${styles.scopeComponent} position-relative`}>
            <h1 className={`${styles.headingStyleH1} ${styles.scopeHeading}`}>
              Scope of Services
            </h1>
            <p className={styles.textSizeMediumX}>
              We can help you with Graphic Design, Custom Illustrations, Web{" "}
              <br />
              Design, Motion Graphics and everything in between
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScopeOfServices;
