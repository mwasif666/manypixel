import React from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./SoftwareServices.module.css";

const SoftwareServices = () => {
  const softwareList = [
    {
      name: "Adobe Photoshop",
      icon: "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6481ba63324e32f8eb28a92c_image%2078.svg",
      short: "Ps",
    },
    {
      name: "Adobe Illustrator",
      icon: "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6481ba6372022b5f87539318_image%2080.svg",
      short: "Ai",
    },
    {
      name: "Adobe InDesign",
      icon: "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6481ba63af835b5134efa2fa_image%2077.svg",
      short: "Id",
    },
    {
      name: "Adobe After Effect",
      icon: "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6481ba638e41f40e2028ccd2_image%2082.svg",
      short: "Ae",
    },
    {
      name: "Adobe Premiere Pro",
      icon: "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6613d6168b69652f4aa56de4_image%20158.svg",
      short: "Pr",
    },
    {
      name: "Canva",
      icon: "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6481ba63ce30ba841d5472e7_image%2079.svg",
      short: "Canva",
    },
    {
      name: "Figma",
      icon: "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6613d61630544bc293e5b36c_image%2081.svg",
      short: "⚠️ Figma",
    },
    {
      name: "Microsoft PowerPoint",
      icon: "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6613d6162cf2c01ab2a75800_image%20154.svg",
      short: "P",
    },
    {
      name: "Google Slides",
      icon: "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6613d6160c5617be331a9132_image%20155.svg",
      short: "⚡️ Google Slides",
    },
  ];

  const notOfferedList = [
    "Audio Editing",
    "Visual Effects Creation / CGI",
    "Rotoscoping",
    "Motion Tracking",
    "Prototypes",
    "UX Design",
    "WordPress, Framer, Wix, Webflow or any website builders",
    "Coding [HTML/CSS/JS]",
    "Complex PDF documents",
    "Complex photo manipulation",
    "Complex 2D animation",
    "3D Animation",
    "3D / CAD",
  ];

  return (
    <div className={styles.sectionScope}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mx-auto">
            <div className={styles.scopeRightWrapper}>
              <div className={styles.scopeRightBox}>
                {/* Software We Use Section */}
                <div className={styles.scopeSoftwareWrapper}>
                  <h2 className={`${styles.headingStyleH4} mb-4`}>
                    Softwares we use
                  </h2>
                  <div className={styles.scopeSoftwareList}>
                    {softwareList.map((software, index) => (
                      <div key={index} className={styles.scopeSoftwareListItem}>
                        <div className={styles.softwareImageContainer}>
                          <img
                            src={software.icon}
                            loading="lazy"
                            alt={`${software.name} logo`}
                            className={styles.scopeSoftwareImage}
                          />
                          {/* <span className={styles.softwareShort}>
                            {software.short}
                          </span> */}
                        </div>
                        <div className={styles.textSizeMediumX}>
                          {software.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className={styles.divider}></div>

                {/* What We Don't Offer Section */}
                <div className={styles.scopeSoftwareWrapper}>
                  <h2 className={`${styles.headingStyleH4} mb-4`}>
                    What we do not offer
                  </h2>
                  <div className={styles.scopeSoftwareList}>
                    {notOfferedList.map((item, index) => (
                      <div key={index} className={styles.scopeSoftwareListItem}>
                        <div className={styles.scopeIcon}>
                          <FaTimes />
                        </div>
                        <div className={styles.textSizeMediumX}>{item}</div>
                      </div>
                    ))}
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

export default SoftwareServices;
