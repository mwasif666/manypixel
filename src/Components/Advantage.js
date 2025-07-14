import React from "react";
import styles from "./Advantage.module.css";

const AdvantagesSection = () => {
  return (
    <div className={styles.section_advatages}>
      <div className={`${styles.padding_global} container`}>
        <div className={styles.container_large}>
          <div className={styles.padding_section_medium}>
            <div className="row">
              <div className="col-lg-6">
                <img
                  className={styles.advantages_image}
                  src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6474e102f522e723a6380cd1_frame_6878.avif"
                  width="488"
                  height="467"
                  alt="Hiring a designer should be simple image"
                  sizes="(max-width: 479px) 93vw, (max-width: 991px) 297px, (max-width: 1919px) 3vw, 2vw"
                  id="w-node-_508df22f-3f74-8c15-a8fb-3fe56add23db-918f42ed"
                  loading="eager"
                  srcSet="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6474e102f522e723a6380cd1_frame_6878-p-500.avif 500w, https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6474e102f522e723a6380cd1_frame_6878-p-800.avif 800w, https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6474e102f522e723a6380cd1_frame_6878-p-1080.avif 1080w, https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6474e102f522e723a6380cd1_frame_6878.avif 1787w"
                />
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <div id="w-node" className={styles.advantages_text_wrapper}>
                  <div className={styles.advantages_heading_text}>
                    <h4 className={styles.text_size_tini}>
                      NEED A DESIGnER ASAP?
                    </h4>
                    <h2
                      className={`${styles.heading_style_h2} ${styles.smaller}`}
                    >
                      Hiring a designer should be simple
                    </h2>
                  </div>
                  <p
                    className={`${styles.text_size_large} ${styles.padding_right}`}
                  >
                    Finding quality and reliable freelancers takes a lot of time
                    and luck. In-house hires are expensive and can create HR
                    drama.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSection;
