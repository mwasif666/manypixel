import React, { useState, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "./ServicesDropdown.module.css";
import SoftwareServices from "./SoftwareServices";

const ServicesAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const services = [
    {
      title: "Logo & Branding",
      items: [
        "Logos",
        "Brand Guidelines",
        "Typography",
        "Brand Colors",
        "Stationaries",
        "Packaging",
        "Labels",
        "Business Cards",
        "Letterheads",
      ],
    },
    {
      title: "Web Design",
      items: ["Websites", "Landing Pages", "Website Graphics", "Blog Graphics"],
    },
    {
      title: "Art & Illustrations",
      items: [
        "Custom Illustrations",
        "Icons",
        "Infographics",
        "Characters & Mascots",
        "Book Covers",
        "Charts & Graphs",
        "Concept Art",
        "Business Cards",
        "Letterheads",
      ],
    },
    {
      title: "Ads & Social Media",
      items: [
        "Digital Ads",
        "Video Ads (<2 min)",
        "Magazine Ads",
        "Newspaper Ads",
        "Print Ads",
        "Retargeting Ads",
        "Carousel Ads",
        "Social Media Ads",
        "Social Media Covers",
        "Social Media Posts",
        "Social Media Reels",
      ],
    },
    {
      title: "Digital",
      items: [
        "Email Template",
        "Email Graphics",
        "Email Signatures",
        "Ebook",
        "Ebook Covers",
        "Blog Graphics",
        "Website Graphics",
        "GIFs",
      ],
    },
    {
      title: "Motion Graphics",
      items: [
        "Animated Ads",
        "Animated Logos",
        "Animated Typography",
        "UI/UX Animations",
        "Subtitling",
        "Product Animations",
        "Video Openers/Titles",
        "Animated Explainers",
        "Animated Graphics",
        "Lottie Animations",
        "Text Overlays",
        "Advanced GIFs",
      ],
    },
    {
      title: "Print",
      items: [
        "Banners",
        "Catalogs",
        "Flyers",
        "Brochures",
        "Business Cards",
        "Posters",
        "Signages",
        "Stationaries",
        "Stickers",
        "Leaflets",
        "Menus",
        "Invitations",
        "Post Cards",
        "Certificates & Awards",
        "Billboards",
        "Trade Show Banners",
        "Album Covers",
        "Book Covers",
        "T-Shirts",
        "Packaging",
        "Packaging Inserts",
      ],
    },
    {
      title: "PDFs & Presentations",
      items: [
        "PDFs",
        "Presentation & Pitch Decks",
        "Presentation Templates",
        "Infographics",
        "Sales sheets",
        "Reports",
      ],
    },
    {
      title: "Video Editing",
      items: [
        "General Editing (<5 min)",
        "Video Ads (<2 min)",
        "Social Media Reels, Shorts, Stories (<2 min)",
        "Explainers (<2 min)",
        "Product Highlights (<2 min)",
        "Footage Stitching, Clipping, Trimming",
        "Transition Effects",
        "Titling, Subtitling, Captioning",
        "Voiceover Sync",
        "Audio Addition",
        "Format Adjustment",
        "Template Editing",
        "Color Correction, Color Grading",
        "Footage Repair",
      ],
    },
    {
      title: "Others",
      items: [
        "Photo Editing",
        "Amazon Listings",
        "Product Mockups",
        "Background Removal",
      ],
    },
  ];

  return (
    <div className={styles.sectionScope}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className={styles.scopeMainComponent}>
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`${styles.scopeMainItem} ${
                    activeIndex === index ? styles.active : ""
                  }`}
                >
                  <div
                    className={styles.scopeTopWrapper}
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={activeIndex === index}
                    role="button"
                    tabIndex={0}
                  >
                    <h2 className={styles.headingStyleH4}>{service.title}</h2>
                    <div className={styles.scopeLineBox}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={styles.scopeLineAnim}
                      >
                        <path
                          d="M5 12H19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 5V19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`${styles.verticalLine} ${
                            activeIndex === index ? styles.rotate : ""
                          }`}
                        />
                      </svg>
                    </div>
                  </div>

                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    className={styles.scopeBodyWrapper}
                    style={{
                      height:
                        activeIndex === index
                          ? `${contentRefs.current[index]?.scrollHeight}px`
                          : "0px",
                    }}
                  >
                    <div className={styles.divider}></div>
                    <div className={styles.scopeList}>
                      {service.items.map((item, itemIndex) => (
                        <div key={itemIndex} className={styles.scopeListItem}>
                          <div className={styles.aboutHomeListIcon}></div>
                          <div className={styles.textSizeMediumX}>{item}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <SoftwareServices />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesAccordion;
