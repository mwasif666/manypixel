import React, { useState } from "react";
import styles from "./TestimonialsSection.module.css";

const TestimonialsSection = () => {
  const [activeTab, setActiveTab] = useState("agencies");
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);

  const testimonials = {
    agencies: {
      quote:
        "“If my bestfriend was on the fence about trying ManyPixels, I would tell them that they needed to do it, because it's a no-brainer.”",
      name: "Jeanette Knutti",
      role: "CEO, Moxie Marketing",
      icon: "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/647620d3523664c9b52615eb_Mask%20Group.svg",
      image:
        "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/647620bf88fb1815cc698d5f_frame_6850%20(5).avif",
      imageSet: {
        small:
          "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/647620bf88fb1815cc698d5f_frame_6850%20(5)-p-500.avif",
        medium:
          "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/647620bf88fb1815cc698d5f_frame_6850%20(5)-p-800.avif",
        large:
          "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/647620bf88fb1815cc698d5f_frame_6850%20(5).avif",
      },
    },
    marketing: {
      quote:
        "“I love the quality of communication, the ease of platform. You can literally get out of bed, open your laptop and get critical things accomplished, without a lot back-and-forth or over-communicating.”",
      name: "Sean Mackenzie",
      role: "Team Lead, Citi Habitats",
      icon: "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/647620d2f50e5fd1bd14059d_Mask%20Group%20(1).svg",
      image:
        "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/647620c0518af78d11d9c610_frame_6850%20(4).avif",
      imageSet: {
        small:
          "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/647620c0518af78d11d9c610_frame_6850%20(4)-p-500.avif",
        medium:
          "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/647620c0518af78d11d9c610_frame_6850%20(4)-p-800.avif",
        large:
          "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/647620c0518af78d11d9c610_frame_6850%20(4).avif",
      },
    },
    entrepreneurs: {
      quote:
        "“The potential upside is so big. Your stuff could look good, it could land you bigger clients, and you could just have your entire brand be better. It's a very low risk - high reward, so go ahead and just do it.”",
      name: "Itamar Marani",
      role: "Founder & CEO, Marani Consulting",
      icon: "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/647620d2de532b9f27c52ef9_Mask%20Group%20(2).svg",
      image:
        "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/647620bf09a553b6dfa931fb_frame_6850%20(3).avif",
      imageSet: {
        small:
          "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/647620bf09a553b6dfa931fb_frame_6850%20(3)-p-500.avif",
        medium:
          "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/647620bf09a553b6dfa931fb_frame_6850%20(3)-p-800.avif",
        large:
          "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/647620bf09a553b6dfa931fb_frame_6850%20(3).avif",
      },
    },
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setShowMobileDropdown(false);
  };

  return (
    <div className={styles.section_testimonials}>
      <div className={styles.padding_global}>
        <div className={styles.container_large}>
          <div className={styles.padding_section_medium}>
            <div className={styles.testimonials_component}>
              {/* Mobile Dropdown */}

              {/* Tablet Tabs */}
              <div
                className={`${styles.testimonials_tabs_wrapper} ${styles.tablet}`}
              >
                <div
                  className={`${styles.testimonials_tab} ${
                    activeTab === "agencies" ? styles.active : ""
                  }`}
                  onClick={() => handleTabChange("agencies")}
                >
                  <div className={styles.testimonials_tab_text}>agencies</div>
                </div>
                <div
                  className={`${styles.testimonials_tab} ${
                    activeTab === "marketing" ? styles.active : ""
                  }`}
                  onClick={() => handleTabChange("marketing")}
                >
                  <div className={styles.testimonials_tab_text}>
                    marketing teams
                  </div>
                </div>
                <div
                  className={`${styles.testimonials_tab} ${
                    activeTab === "entrepreneurs" ? styles.active : ""
                  }`}
                  onClick={() => handleTabChange("entrepreneurs")}
                >
                  <div className={styles.testimonials_tab_text}>
                    entrepreneurs
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className={styles.testimonials_images_wrapper}>
                    <img
                      src={testimonials.entrepreneurs.image}
                      srcSet={`${testimonials.entrepreneurs.imageSet.small} 500w, ${testimonials.entrepreneurs.imageSet.medium} 800w, ${testimonials.entrepreneurs.imageSet.large} 1464w`}
                      sizes="100vw"
                      loading="lazy"
                      alt=""
                      className={`${styles.testimonials_image} ${styles.img3} ${
                        activeTab === "entrepreneurs" ? styles.active : ""
                      }`}
                    />
                    <img
                      src={testimonials.agencies.image}
                      srcSet={`${testimonials.agencies.imageSet.small} 500w, ${testimonials.agencies.imageSet.medium} 800w, ${testimonials.agencies.imageSet.large} 1464w`}
                      sizes="100vw"
                      loading="lazy"
                      alt=""
                      className={`${styles.testimonials_image} ${styles.img1} ${
                        activeTab === "agencies" ? styles.active : ""
                      }`}
                    />
                    <img
                      src={testimonials.marketing.image}
                      srcSet={`${testimonials.marketing.imageSet.small} 500w, ${testimonials.marketing.imageSet.medium} 800w, ${testimonials.marketing.imageSet.large} 1464w`}
                      sizes="100vw"
                      loading="lazy"
                      alt=""
                      className={`${styles.testimonials_image} ${styles.img2} ${
                        activeTab === "marketing" ? styles.active : ""
                      }`}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={styles.testimomials_right}>
                    {/* Desktop Tabs */}
                    <div
                      className={`${styles.testimonials_tabs_wrapper} ${styles.deskop}`}
                    >
                      <div
                        className={`${styles.testimonials_tab} ${
                          activeTab === "agencies" ? styles.active : ""
                        }`}
                        onClick={() => handleTabChange("agencies")}
                      >
                        <div className={styles.testimonials_tab_text}>
                          agencies
                        </div>
                      </div>
                      <div
                        className={`${styles.testimonials_tab} ${
                          activeTab === "marketing" ? styles.active : ""
                        }`}
                        onClick={() => handleTabChange("marketing")}
                      >
                        <div className={styles.testimonials_tab_text}>
                          marketing teams
                        </div>
                      </div>
                      <div
                        className={`${styles.testimonials_tab} ${
                          activeTab === "entrepreneurs" ? styles.active : ""
                        }`}
                        onClick={() => handleTabChange("entrepreneurs")}
                      >
                        <div className={styles.testimonials_tab_text}>
                          entrepreneurs
                        </div>
                      </div>
                    </div>

                    <div className={styles.testimonials_text_wrapper}>
                      <div
                        className={`${styles.testimonials_text_box} ${
                          styles.first
                        } ${activeTab === "agencies" ? styles.active : ""}`}
                      >
                        <p className={styles.text_size_medium}>
                          {testimonials.agencies.quote}
                        </p>
                        <div
                          className={styles.testimonials_text_bottom_wrapper}
                        >
                          <div
                            className={styles.testimonials_text_heading_wrapper}
                          >
                            <h4>{testimonials.agencies.name}</h4>
                            <div className={styles.text_size_small}>
                              {testimonials.agencies.role}
                            </div>
                            <img
                              src={testimonials.agencies.icon}
                              loading="lazy"
                              alt=""
                              className={styles.testimonials_icon}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${styles.testimonials_text_box} ${
                          styles.second
                        } ${activeTab === "marketing" ? styles.active : ""}`}
                      >
                        <p className={styles.text_size_medium}>
                          {testimonials.marketing.quote}
                        </p>
                        <div
                          className={styles.testimonials_text_bottom_wrapper}
                        >
                          <div
                            className={styles.testimonials_text_heading_wrapper}
                          >
                            <h4>{testimonials.marketing.name}</h4>
                            <div className={styles.text_size_small}>
                              {testimonials.marketing.role}
                            </div>
                            <img
                              src={testimonials.marketing.icon}
                              loading="lazy"
                              alt=""
                              className={styles.testimonials_icon}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${styles.testimonials_text_box} ${
                          styles.third
                        } ${
                          activeTab === "entrepreneurs" ? styles.active : ""
                        }`}
                      >
                        <p className={styles.text_size_medium}>
                          {testimonials.entrepreneurs.quote}
                        </p>
                        <div
                          className={styles.testimonials_text_bottom_wrapper}
                        >
                          <div
                            className={styles.testimonials_text_heading_wrapper}
                          >
                            <h4>{testimonials.entrepreneurs.name}</h4>
                            <div className={styles.text_size_small}>
                              {testimonials.entrepreneurs.role}
                            </div>
                            <img
                              src={testimonials.entrepreneurs.icon}
                              loading="lazy"
                              alt=""
                              className={styles.testimonials_icon}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
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

export default TestimonialsSection;
