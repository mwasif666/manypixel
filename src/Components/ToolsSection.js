import React from "react";
import styles from "./ToolsSection.module.css";

const ToolsSection = () => {
  return (
    <section className={`${styles.section_businesses} py-5`}>
      <div
        className="container"
        style={{
          backgroundColor: "#f8f8f8",
          padding: "3.75rem 3.125rem",
          borderRadius: "30px",
        }}
      >
        <div className="row align-items-center">
          <div className="col-md-8 mb-4 mb-md-0">
            <div className={styles.business_heading_wrapper}>
              <div className={`${styles.text_size_tiny} text-uppercase mb-2`}>
                OUR TOOLS
              </div>
              <h2 className={`${styles.heading_style_h2} mb-0`}>
                Serving businesses of every size with digital and print designs
              </h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`${styles.business_right}`}>
              <div className="row">
                <div className="col-4">
                  <img
                    src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6481ba63324e32f8eb28a92c_image%2078.svg"
                    loading="lazy"
                    width="70"
                    height="70"
                    alt="Photoshop logo"
                    className={styles.businesses_logo}
                  />
                </div>
                <div className="col-4">
                  <img
                    src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6481ba6372022b5f87539318_image%2080.svg"
                    loading="lazy"
                    width="70"
                    height="70"
                    alt="Illustrator Logo"
                    className={styles.businesses_logo}
                  />
                </div>
                <div className="col-4">
                  <img
                    src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6481ba63ce30ba841d5472e7_image%2079.svg"
                    loading="lazy"
                    width="70"
                    height="70"
                    alt="Canva logo"
                    className={styles.businesses_logo}
                  />
                </div>
                <div className="col-4 mt-4">
                  <img
                    src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6481ba63af835b5134efa2fa_image%2077.svg"
                    loading="lazy"
                    width="70"
                    height="70"
                    alt="Indesign logo"
                    className={styles.businesses_logo}
                  />
                </div>
                <div className="col-4 mt-4">
                  <img
                    src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6481ba638e41f40e2028ccd2_image%2082.svg"
                    loading="lazy"
                    width="70"
                    height="70"
                    alt="After Effects logo"
                    className={styles.businesses_logo}
                  />
                </div>
                <div className="col-4 mt-4">
                  <img
                    src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6481ba63af835b5134efa34e_image%2081.svg"
                    loading="lazy"
                    width="70"
                    height="70"
                    alt="Figma Logo"
                    className={styles.businesses_logo}
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

export default ToolsSection;
