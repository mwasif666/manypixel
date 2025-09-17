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
                        HERES THE EASY SOULTION
                      </h4>
                      <h2
                        className={`${styles.heading_style_h2} ${styles.smaller}`}
                      >
                        Meet your personal design team
                      </h2>
                    </div>
                    <p
                      className={`${styles.text_size_large} ${styles.smaller} ${styles.width}`}
                    >
                      Roots provides you with proffesional desingers and account
                      managers for a fixed fee, no extra hassle
                    </p>
                  </div>
                </div>

                {/* Image - Order changes on mobile */}
                <div className="col-lg-6 d-flex justify-content-end ">
                  {/* <video src="./manypixel.mp4" autoPlay loop muted></video> */}

                  <img
                    className={`${styles.advantages_image} ${styles.image_2}`}
                    src="./gif.gif"
                    width="100%"
                    height="100%"
                    alt="Meet your virtual design team image"
                    sizes="(max-width: 479px) 87vw, (max-width: 991px) 382px, 3vw"
                    id="w-node-d3ca20d3-45a2-b08f-7d3b-86916c9bffdc-918f42ed"
                    loading="lazy"
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
