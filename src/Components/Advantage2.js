import React from "react";
import styles from "./Advantage2.module.css";

const Advantage2Section = () => {
  return (
    <div className={styles.section_advantages}>
      <div className={`${styles.padding_global} container`}>
        <div className={styles.container_large}>
          <div className={`${styles.padding_section_medium} ${styles.home}`}>
            <div className={`${styles.twelve_col_grid} ${styles.home}`}>
              <div className="row align-items-center">
                {/* Text Content - Order changes on mobile */}
                <div className="col-lg-6 d-flex align-items-center">
                  <div id="w-node" className={styles.advantages_text_wrapper}>
                    <div className={styles.advantages_heading_text}>
                      <h4 className={styles.text_size_tini}>
                        WHAT IF THERE WAS A BETTER SOLUTION?
                      </h4>
                      <h2
                        className={`${styles.heading_style_h2} ${styles.smaller}`}
                      >
                        Meet your virtual design team
                      </h2>
                    </div>
                    <p
                      className={`${styles.text_size_large} ${styles.smaller} ${styles.width}`}
                    >
                      ManyPixels provides you with vetted designers for a flat
                      monthly fee. No hiring, no contracts, no stress.
                    </p>
                  </div>
                </div>

                {/* Image - Order changes on mobile */}
                <div className="col-lg-6 d-flex justify-content-end">
                  <img
                    className={`${styles.advantages_image} ${styles.image_2}`}
                    src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6474e1026ecae38538626f70_group_4775%20(1).avif"
                    width="488"
                    height="467"
                    alt="Meet your virtual design team image"
                    sizes="(max-width: 479px) 87vw, (max-width: 991px) 382px, 3vw"
                    id="w-node-d3ca20d3-45a2-b08f-7d3b-86916c9bffdc-918f42ed"
                    loading="lazy"
                    srcSet="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6474e1026ecae38538626f70_group_4775%20(1)-p-500.avif 500w, https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6474e1026ecae38538626f70_group_4775%20(1)-p-800.avif 800w, https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6474e1026ecae38538626f70_group_4775%20(1)-p-1080.avif 1080w, https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6474e1026ecae38538626f70_group_4775%20(1).avif 1985w"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage2Section;
