import React from "react";
import styles from "./HomeSection.module.css";

const Technology = () => {
  return (
    <section className={styles.sectionAboutHome}>
      <div className={`container-lg ${styles.paddingGlobal}`}>
        <div className={styles.paddingSectionMedium}>
          <div className={styles.aboutHomeComponent}>
            <div className={`${styles.aboutHomeItem} ${styles.maxWidthTablet}`}>
              <div className={styles.aboutHomeHeadingWrapper}>
                <div className={styles.textSizeTini}>POWERED BY TECHNOLOGY</div>
                <h2 className={`${styles.headingStyleH2} ${styles.smaller}`}>
                  Manage everything from one simple platform
                </h2>
              </div>

              <div className={styles.aboutHomeList}>
                <div className={styles.aboutHomeListItem}>
                  <div className={styles.aboutHomeListIcon}></div>
                  <div className={styles.textSizeLarge}>
                    Submit and prioritize your requests
                  </div>
                </div>
                <div className={styles.aboutHomeListItem}>
                  <div className={styles.aboutHomeListIcon}></div>
                  <div className={styles.textSizeLarge}>
                    Manage your different brands
                  </div>
                </div>
                <div className={styles.aboutHomeListItem}>
                  <div className={styles.aboutHomeListIcon}></div>
                  <div className={styles.textSizeLarge}>
                    Communicate directly with your designer
                  </div>
                </div>
                <div className={styles.aboutHomeListItem}>
                  <div className={styles.aboutHomeListIcon}></div>
                  <div className={styles.textSizeLarge}>
                    Invite your team and collaborate together
                  </div>
                </div>
              </div>

              <button className={`btn btn-primary ${styles.createRequestBtn}`}>
                Create request
              </button>
            </div>

            <div className={styles.aboutHomeGif}>
              {/* Replace with your actual Lottie animation component */}
              <div className={styles.lottieAnimation}>
                <div className="d-flex justify-content-end">
                  <img
                    src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6474e1026ecae38538626f70_group_4775%20(1)-p-500.avif"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
