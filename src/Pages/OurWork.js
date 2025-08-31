import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactModal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styles from "../style/OurWork.module.css";
import CtaSection from "../Components/CtaSection";

const OurWork = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // Filter categories
  const categories = [
    { id: "all", name: "ALL" },
    { id: "social", name: "Social media design" },
    { id: "display", name: "Display ads" },
    { id: "websites", name: "Websites" },
    { id: "logos", name: "Logos" },
    { id: "illustrations", name: "Illustrations" },
    { id: "print", name: "Print" },
    { id: "infographics", name: "Infographics" },
    { id: "icons", name: "Icons" },
    { id: "video", name: "Video Editing" },
    { id: "brand", name: "Brand guides" },
    { id: "presentations", name: "Presentations" },
    { id: "motion", name: "Motion graphics" },
    { id: "landing", name: "Landing pages" },
    { id: "stationary", name: "Stationary sets" },
  ];

  // Work items data with all the provided images
  const workItems = [
    {
      id: 1,
      category: "social",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d0d94946a1606528deb3_gyc1yIvCRKW8Sx2XaxwR.avif",
      alt: "Social Media Design 9",
      title: "Social Media Design",
      description: "Engaging social media visual content",
    },
    {
      id: 2,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d09c65fd55018cd6cd9c_Wtj041HQlaiz7sbdrAEA.avif",
      alt: "Website Design 6",
      title: "Website Design",
      description: "Modern website interface design",
    },
    {
      id: 3,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d09f45802401cf76f8c4_BmjAmxYQtBZEa1R6hoQw.avif",
      alt: "Website Design 4",
      title: "Website Design",
      description: "Clean website layout design",
    },
    {
      id: 4,
      category: "social",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d114ea0e1de3e98d82c7_uo6BbrSySLW7A1ai4q77.avif",
      alt: "Social Media Design 8",
      title: "Social Media Design",
      description: "Creative social media post design",
    },
    {
      id: 5,
      category: "print",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d114b3faccd944819244_GQ8MbCJDRSybIoXSZfuR.avif",
      alt: "Print 72",
      title: "Print Design",
      description: "Professional print material design",
    },
    {
      id: 6,
      category: "print",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d0d8a6d6ba0af2322061_80d4oghxSWafiMGdYDIx.avif",
      alt: "Print 77",
      title: "Print Design",
      description: "High-quality print collateral",
    },
    {
      id: 7,
      category: "presentations",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d024d76e1ccef573e63c_fABBexOTRsGztbqItU1o.avif",
      alt: "Presentations 36",
      title: "Presentation Design",
      description: "Professional slide deck design",
    },
    {
      id: 8,
      category: "icons",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d1c89afc165b198973c5_9RBDafbcSWOf2GTZ92gg.jpeg",
      alt: "Icons 47",
      title: "Icon Design",
      description: "Custom icon set design",
    },
    {
      id: 9,
      category: "social",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516cfacbefbe36899f6c779_DtBlpAgQTVadAPBcO2o4.avif",
      alt: "Social Media Design 34",
      title: "Social Media Design",
      description: "Branded social media content",
    },
    {
      id: 10,
      category: "brand",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d1165f9d25fd806601ef_4Du2jBtJR01IDTAamg3q.avif",
      alt: "Brand Guides 50",
      title: "Brand Guide",
      description: "Comprehensive brand guidelines",
    },
    {
      id: 11,
      category: "motion",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/66c49aca634d9cef0bf23566_0029.gif",
      alt: "motion-graphic-29",
      title: "Motion Graphic",
      description: "Animated visual content",
    },
    {
      id: 12,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d09deacf6f1464494901_STTzsoTTRir4q6f7kiGw.avif",
      alt: "Website Design 17",
      title: "Website Design",
      description: "Responsive web interface",
    },
    {
      id: 13,
      category: "print",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516cf35382181c4defc9ff7_MukqFhFoQdqDx7dAqftX.avif",
      alt: "Print 65",
      title: "Print Design",
      description: "Marketing print material",
    },
    {
      id: 14,
      category: "logos",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d113ce430434cd2123a2_YDpqgVisRpafZ6W2Z1HA.avif",
      alt: "Logo-21",
      title: "Logo Design",
      description: "Brand identity logo",
    },
    {
      id: 15,
      category: "infographics",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516ce061f6447eeb3ffa87e_rRueHt5TnqN2bUT9fXrh.avif",
      alt: "Infographics 10",
      title: "Infographic",
      description: "Data visualization design",
    },
    {
      id: 16,
      category: "print",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d18c17c29e3d8dccb9d1_b8vHmt7QYWJCdrCemH8A.avif",
      alt: "Print 26",
      title: "Print Design",
      description: "Editorial print design",
    },
    {
      id: 17,
      category: "brand",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d1149129882cf8a63750_2yQzOILSYOd0LAnGjrCQ.avif",
      alt: "Brand Guides 40",
      title: "Brand Guide",
      description: "Visual identity system",
    },
    {
      id: 18,
      category: "social",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516ce52984bd30122141b10_HL3Yw1haQlCqLcXeH5ZQ.avif",
      alt: "Social Media Design 29",
      title: "Social Media Design",
      description: "Digital marketing content",
    },
    {
      id: 19,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6511b214c1e418fbedefca60_qP1KK3w7RBixPgXcjriw.avif",
      alt: "Website Design 31",
      title: "Website Design",
      description: "Interactive web experience",
    },
    {
      id: 20,
      category: "brand",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6511ad8965ac56a5a7d8f33e_qgOerBu3RfGxkynPapOz.avif",
      alt: "Brand Guides 35",
      title: "Brand Guide",
      description: "Corporate brand standards",
    },
    {
      id: 21,
      category: "display",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d150a0d84072aa7e4ca1_K3pRwLyRRxeGXql8q1vg.avif",
      alt: "Display Ads 9",
      title: "Display Ad",
      description: "Digital advertising banner",
    },
    {
      id: 22,
      category: "infographics",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d1149afc165b1988fc58_SZmypEjuQweHRyxbvPOI.avif",
      alt: "Infographics 24",
      title: "Infographic",
      description: "Information design layout",
    },
    {
      id: 23,
      category: "display",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d1c8befbe36899f821a4_jS6Vr9TVT5a5RINh5UEZ.jpeg",
      alt: "Display Ads 21",
      title: "Display Ad",
      description: "Promotional digital ad",
    },
    {
      id: 24,
      category: "display",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d24069678ff796acdb24_mRwYSYSDSXiZz8tOuAwo.avif",
      alt: "Display Ads 14",
      title: "Display Ad",
      description: "Marketing campaign ad",
    },
    {
      id: 25,
      category: "illustrations",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d1517f908ca86c5185fa_nwrHPs9SS5KKhc1vLZhg.jpeg",
      alt: "Illustrations 66",
      title: "Illustration",
      description: "Custom digital artwork",
    },
    {
      id: 26,
      category: "icons",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d06084a3c0d8136fb6ff_9r1k1nKiS3aPtxKV5W8T.avif",
      alt: "Icons 40",
      title: "Icon Set",
      description: "Pixel-perfect icon collection",
    },
    {
      id: 27,
      category: "logos",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516ce81816a4907c137a803_KTjMggeLThSiFx7AXdj2.avif",
      alt: "Logo-66",
      title: "Logo Design",
      description: "Minimalist brand mark",
    },
    {
      id: 28,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d09ebfb2d673aa1dc933_MDQRdyZzQ5miijSDg32O.avif",
      alt: "Website Design 36",
      title: "Website Design",
      description: "Modern responsive website design",
    },
    {
      id: 29,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6511b214c1e418fbedefca60_qP1KK3w7RBixPgXcjriw.avif",
      alt: "Website Design 31",
      title: "Website Design",
      description: "Clean and professional website layout",
    },
    {
      id: 30,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6511b07199af635f794f6497_ZbgvnIVReqKtvXpTngUV.avif",
      alt: "Website Design 70",
      title: "Website Design",
      description: "E-commerce website interface",
    },
    {
      id: 31,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6511b160a97e7d1e3df79b7b_ScJUFjotTmqqlAxtWfLs.avif",
      alt: "Website Design 71",
      title: "Website Design",
      description: "Portfolio website design",
    },
    {
      id: 32,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d060a6d6ba0af231d7c4_6wCaJ5DFQr6yET7xv8bV.avif",
      alt: "Website Design 69",
      title: "Website Design",
      description: "Corporate website redesign",
    },
    {
      id: 33,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d060a46e08d3e515e898_VVljMLJSUSNhZaSCKjWK.avif",
      alt: "Website Design 66",
      title: "Website Design",
      description: "Minimalist website layout",
    },
    {
      id: 34,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d060c58c60da10596282_m4y8cUsSwKWiD3ybkWAC.avif",
      alt: "Website Design 68",
      title: "Website Design",
      description: "Interactive web elements",
    },
    {
      id: 35,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6511b1605c22766febe251b4_dQvegLZQQoyIjincvWLJ.avif",
      alt: "Website Design 67",
      title: "Website Design",
      description: "Creative agency website",
    },
    {
      id: 36,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6511ae53c1e418fbeded6085_LpEisGfCSbeIaXe6uct6.avif",
      alt: "Website Design 65",
      title: "Website Design",
      description: "Landing page conversion design",
    },
    {
      id: 37,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6511b16097cc2427b2a048be_O2SDpI1KS3GMEKIpYMt5.avif",
      alt: "Website Design 53",
      title: "Website Design",
      description: "Dashboard interface design",
    },
    {
      id: 38,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/648b40338189272aa5f0fac4_gYEt18CFRD2PjlCtWN1u.avif",
      alt: "Website Design 63",
      title: "Website Design",
      description: "Mobile-first website approach",
    },
    {
      id: 39,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d062ef064b73ba51a752_VIutHbYXTCWOHP72NWDu.avif",
      alt: "Website Design 64",
      title: "Website Design",
      description: "Typography focused design",
    },
    {
      id: 40,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d061063d2de9d9e9ce15_boQUC4ZQSFaOZNVyLZMh.avif",
      alt: "Website Design 61",
      title: "Website Design",
      description: "User experience focused design",
    },
    {
      id: 41,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6511b21409a82e2531ad86ed_wPU1Uj2R8yGgl6BQAxGC.avif",
      alt: "Website Design 60",
      title: "Website Design",
      description: "Bold color scheme website",
    },
    {
      id: 42,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d0606987359846ae3b74_C5QaOF93TdCZR5nmOyFD.avif",
      alt: "Website Design 58",
      title: "Website Design",
      description: "Navigation focused design",
    },
    {
      id: 43,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6511b1d81bc17ef4da2508d1_IWLvbH6rRbyfg7XV8Tm9.avif",
      alt: "Website Design 62",
      title: "Website Design",
      description: "Content hierarchy design",
    },
    {
      id: 44,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516ce4c984bd30122141663_zzVJ1CdfRc2FcFJ0PICn.avif",
      alt: "Website Design 57",
      title: "Website Design",
      description: "Visual storytelling website",
    },
    {
      id: 45,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d0600b55624c4b9828fa_MmEFvLYXRdWyCN62wtoG.avif",
      alt: "Website Design 59",
      title: "Website Design",
      description: "Grid-based layout design",
    },
    {
      id: 46,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6511b1624dcba944af2b1a8d_LLG7fWyrSt6oU8KjhDVF.avif",
      alt: "Website Design 56",
      title: "Website Design",
      description: "Responsive mobile design",
    },
    {
      id: 47,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6511b19c8d6673fc564c62fb_ZQYkmMX6Ri2AyqYo7Q8I.avif",
      alt: "Website Design 54",
      title: "Website Design",
      description: "Interactive elements design",
    },
    {
      id: 48,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d060a9c33d76f3c138cc_2NScAP0OTKK8JZmATbew.avif",
      alt: "Website Design 52",
      title: "Website Design",
      description: "White space focused design",
    },
    {
      id: 49,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d0600680c6b61931ff7d_j2ddZQaIRIyyA1kJo8ni.avif",
      alt: "Website Design 55",
      title: "Website Design",
      description: "Accessibility focused design",
    },
    {
      id: 50,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d060d76e1ccef5741953_ZY307VMFQCidfAuqYs2w.avif",
      alt: "Website Design 50",
      title: "Website Design",
      description: "Performance optimized design",
    },
    {
      id: 51,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d06079bfb7527fc92fdf_s0PRQirxS5Kveg1clSm1.avif",
      alt: "Website Design 51",
      title: "Website Design",
      description: "User interface components",
    },
    {
      id: 52,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6511b1d8c902a5fed7138781_12Zr3Vb9S3mWVPyfUKjG.avif",
      alt: "Website Design 46",
      title: "Website Design",
      description: "Visual hierarchy design",
    },
    {
      id: 53,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d09d3c55e038a0e1d839_itOWmSmtR4yX0fxJAe1P.avif",
      alt: "Website Design 47",
      title: "Website Design",
      description: "Micro-interactions design",
    },
    {
      id: 54,
      category: "websites",
      imageUrl:
        "https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6511b19c327f40b748eabca3_92ClNcRWqL9BcQxlkG0g.avif",
      alt: "Website Design 48",
      title: "Website Design",
      description: "Conversion focused design",
    },
  ];

  // Filter work items based on active filter
  const filteredItems =
    activeFilter === "all"
      ? workItems
      : workItems.filter((item) => {
          // Special case for "social" which was previously "Social media design"
          if (activeFilter === "social" && item.category === "social")
            return true;
          // Match other categories
          return item.category === activeFilter;
        });

  const toggleMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters);
  };

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
    setShowMobileFilters(false);
  };

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setThumbsSwiper(null);
  };

  return (
    <section className={styles.section_work_home}>
      <div className={styles.padding_global}>
        <Container className={styles.container_large}>
          <div className={styles.padding_section_work_page}>
            {/* Background decoration elements */}
            <div className={styles.workBgWrapper}>
              <img
                src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/647884ab1f140c6821c5fa09_Group%204823.svg"
                loading="lazy"
                alt=""
                className={styles.work_dec_1}
              />
              <img
                src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/647884ab33e01215443f94d9_Group%204824.svg"
                loading="lazy"
                alt=""
                className={styles.work_dec_2}
              />
              <img
                src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/64789a0a94d2fcfd0eb19717_Frame%2048311.svg"
                loading="lazy"
                alt=""
                className={styles.work_dec_3}
              />
              <img
                src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/647884aba97aaae67c2a5ea2_Group%204822.svg"
                loading="lazy"
                alt=""
                className={styles.work_dec_4}
              />
              <img
                src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/647884ab33593e56fc75b54e_Ellipse%20164.svg"
                loading="lazy"
                alt=""
                className={styles.work_dec_5}
              />
            </div>

            <div className={styles.work_page_component}>
              {/* Heading */}
              <div className={styles.work_page_heading_wrapper}>
                <h1>Our Work</h1>
                <p className={styles.text_size_large}>
                  Check out some of the latest creations we did for our
                  customers
                </p>
              </div>

              {/* Desktop Filters */}
              <div
                className={`${styles.work_page_filter_system} ${styles.desktop}`}
              >
                <div className={styles.work_page_form}>
                  <div className={styles.work_page_filter_list}>
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        className={`${styles.button} ${styles.is_secondary} ${
                          styles.is_inverted
                        } ${styles.is_small} ${
                          activeFilter === category.id ? styles.is_active : ""
                        }`}
                        onClick={() => handleFilterClick(category.id)}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Filters */}
              <div
                className={`${styles.work_page_filter_system} ${styles.mobile}`}
              >
                <div className={styles.illustrations_filter}>
                  <div
                    className={styles.filter_dropdown_toggle}
                    onClick={toggleMobileFilters}
                  >
                    <div id="workFilterText" className={styles.filter_text}>
                      {activeFilter === "all"
                        ? "All works"
                        : categories.find((c) => c.id === activeFilter)?.name}
                    </div>
                    <div className={styles.filter_dropdown_icon}>
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.3928 12.8243C10.1759 13.0586 9.82412 13.0586 9.60716 12.8243L5.16272 8.02426C4.94576 7.78995 4.94576 7.41005 5.16272 7.17574C5.37968 6.94142 5.73143 6.94142 5.94839 7.17574L10 11.5515L14.0516 7.17574C14.2686 6.94142 14.6203 6.94142 14.8373 7.17574C15.0542 7.41005 15.0542 7.78995 14.8373 8.02426L10.3928 12.8243Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  {/* Mobile Filter Dropdown */}
                  <div
                    className={styles.filter_list}
                    style={{
                      display: showMobileFilters ? "block" : "none",
                      opacity: showMobileFilters ? 1 : 0,
                    }}
                  >
                    <div className={styles.filter_list_wrapper}>
                      <button
                        className={`${styles.button} ${styles.is_secondary} ${
                          styles.is_inverted
                        } ${styles.is_small} ${
                          activeFilter === "all" ? styles.is_active : ""
                        }`}
                        onClick={() => handleFilterClick("all")}
                      >
                        All works
                      </button>
                      <div className={styles.divider_checkbox}></div>
                      <div className={styles.work_page_filter_list}>
                        {categories.slice(1).map((category) => (
                          <button
                            key={category.id}
                            className={`${styles.button} ${
                              styles.is_secondary
                            } ${styles.is_inverted} ${styles.is_small} ${
                              activeFilter === category.id
                                ? styles.is_active
                                : ""
                            }`}
                            onClick={() => handleFilterClick(category.id)}
                          >
                            {category.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Work Items Grid */}
              <div className={styles.work_page_paste_here}>
                <div className={styles.work_page_items_wrapper}>
                  <Row className={styles.twelve_col_grid}>
                    {filteredItems.map((item, index) => (
                      <Col
                        key={item.id}
                        xs={6}
                        md={4}
                        lg={4}
                        className={styles.work_page_item}
                      >
                        <div
                          className={styles.work_page_lightbox}
                          onClick={() => openModal(index)}
                        >
                          <img
                            src={item.imageUrl}
                            loading="lazy"
                            alt={item.alt}
                            className={styles.work_page_image}
                          />
                          <div className={styles.image_overlay}>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                          </div>
                        </div>
                        <div className={styles.hide}>{item.category}</div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <CtaSection />

      {/* Lightbox Modal with Swiper */}
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modal}
        overlayClassName={styles.overlay}
        ariaHideApp={false}
      >
        <div className={styles.modal_body}>
          <button className={styles.close_button} onClick={closeModal}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path
                d="M18 6L6 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M6 6L18 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <Swiper
            spaceBetween={20}
            navigation={{
              nextEl: `.${styles.swiper_button_next}`,
              prevEl: `.${styles.swiper_button_prev}`,
            }}
            thumbs={{ swiper: thumbsSwiper }}
            initialSlide={selectedImageIndex}
            modules={[Navigation, Thumbs]}
            className={styles.main_swiper}
            onSlideChange={(swiper) =>
              setSelectedImageIndex(swiper.activeIndex)
            }
          >
            {filteredItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={styles.slide_content}>
                  <img
                    src={item.imageUrl}
                    alt={item.alt}
                    className={styles.modal_image}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className={styles.swiper_button_prev}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button className={styles.swiper_button_next}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className={styles.modal_footer}>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={0}
            slidesPerView={15}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[Thumbs]}
            className={styles.thumbnail_swiper}
          >
            {filteredItems.map((item, index) => (
              <SwiperSlide
                key={item.id}
                onClick={() => setSelectedImageIndex(index)}
              >
                <div
                  className={`${styles.thumbnail_container} ${
                    index === selectedImageIndex ? styles.thumbnail_active : ""
                  }`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.alt}
                    className={styles.thumbnail}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ReactModal>
    </section>
  );
};

export default OurWork;
