import React from "react";
import styles from "./Achievements.module.css";

const Achievements = () => {
  return (
    <div className={styles.section_achievements}>
      <div className={styles.padding_global}>
        <div className="container ">
          <div className={styles.achievements_component}>
            {/* Numbers Section */}
            <div className="row d-flex align-items-center">
              <div className="col-lg-3">
                <div className="row">
                  <div className="col-lg-12">
                    <div className={styles.achievements_numbers_items}>
                      <h2 className={styles.achievements_numbers_heading}>
                        50,000+
                      </h2>
                      <div className={styles.text_regular}>
                        Projects completed
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className={styles.achievements_numbers_items}>
                      <h2 className={styles.achievements_numbers_heading}>
                        350+
                      </h2>
                      <div className={styles.text_regular}>
                        on going clients
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                {/* Logos Grid */}
                <div className={styles.achievements_grid}>
                  <img
                    src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6474dbc6ebc6cee81325e4f6_Mask%20Group-4.svg"
                    loading="eager"
                    width="170"
                    height="30"
                    alt="Teachable logo"
                    className={`${styles.achievements_logo} ${styles.logo1}`}
                  />
                  <img
                    src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/64b7bf1a18bead3d787ad73a_Buffer.svg"
                    loading="eager"
                    width="140"
                    height="30"
                    alt="Buffer logo"
                    className={`${styles.achievements_logo} ${styles.logo2}`}
                  />
                  <img
                    src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6474dbc665647b15cfb6c47c_Mask%20Group-3.svg"
                    loading="eager"
                    width="140"
                    height="60"
                    alt="European Investment Bank logo"
                    className={`${styles.achievements_logo} ${styles.logo3}`}
                  />
                  <img
                    src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6474dbc6b4c871d6c49188e7_Group%204809.svg"
                    loading="eager"
                    height="60"
                    width="140"
                    alt="Decathlon logo"
                    className={`${styles.achievements_logo} ${styles.logo4}`}
                  />
                  <img
                    src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6474dbc76ecae385385d1ac8_Mask%20Group-5.svg"
                    loading="eager"
                    width="120"
                    height="50"
                    alt="Sleek logo"
                    className={`${styles.achievements_logo} ${styles.logo5}`}
                  />
                  <img
                    src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6474dbc6cfec71cb21b0e3d3_Group%204808.svg"
                    loading="eager"
                    width="150"
                    height="40"
                    alt="Carousell logo"
                    className={`${styles.achievements_logo} ${styles.logo6}`}
                  />
                  <img
                    src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/64b7bf1a92eeacec8d48fcdd_Alone%20Bird%201.svg"
                    loading="eager"
                    width="100"
                    height="50"
                    alt="Alone Bird logo"
                    className={`${styles.achievements_logo} ${styles.logo7}`}
                  />
                  <img
                    src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/64b7bf1a18bead3d787ad76a_Dynamite%20Jobs.svg"
                    loading="eager"
                    width="120"
                    height="40"
                    alt="Dynamite Jobs logo"
                    className={`${styles.achievements_logo} ${styles.logo8}`}
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

export default Achievements;
