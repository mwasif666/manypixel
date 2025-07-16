import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Reviews.module.css";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      title: "manypixels is the best place to find…",
      content:
        "manypixels is the best place to find illustrations that fit my apps and websites. There are a lot of free stuff too. Keep up the good work!",
      author: "Arman Mohamed",
      stars: "full",
    },
    {
      id: 2,
      title: "Professional and creative solution.",
      content:
        "I have been working with Many Pixels for the past 4 months and their service and quality of work has been outstanding. As a startup company great design and illustration work can cost prohibitive, ManyPixels provides an affordable, professional and creative solution.",
      author: "Gary Turner",
      stars: "empty",
    },
    {
      id: 3,
      title: "Happy customer for more than 1 year!",
      content:
        "I have been a customer for more than 1 year and I am happy with the service! I use them for all of my social media graphics. I recently switched to the dedicated designer plan and it's been great. I get my designs back on the same day and we can do the revisions on the spot.",
      author: "Matt D.",
      stars: "empty",
    },
    {
      id: 4,
      title: "Fantastic design service",
      content:
        "I am extremely pleased by the collaboration. I've been working for more than a vear with them now and we love their designs. They reply fast, and understand our needs and ideas, which they turn into eye-popping graphics.",
      author: "Charlie GM",
      stars: "full",
    },
    {
      id: 5,
      title: "We really enjoy their quality",
      content:
        "We are using ManyPixels for quite a long time now and we really enjoy their quality!",
      author: "Flowdee",
      stars: "empty",
    },
    {
      id: 6,
      title: "Great service for web design",
      content:
        "I've been using this service for about a year, mostly for web designer. My designer, Kevin, is great. I also really like their platform, very easy to use.",
      author: "Jaouad Lizati",
      stars: "empty",
    },
    {
      id: 7,
      title: "I'd happily recommend ManyPixels",
      content:
        "I've used ManyPixels for a while now and I'd happily recommend them as a service. If you need design work done but don't have a big budget, they're a great option.",
      author: "Matt Studdert",
      stars: "empty",
    },
    {
      id: 8,
      title: "Very good experience",
      content:
        "ManyPixels has been very impressive with turnaround time and quality. I was able to get my project (almost) done while still waiting for a traditional freelancer to get back to me.",
      author: "Guillaume",
      stars: "empty",
    },
    {
      id: 9,
      title: "It's worth every penny",
      content:
        "I've been a designer for 8 years and ManyPixels allows me to be more of a creative director which I love. I don't think I could go back to not having a subscription, it's worth every penny and frees up my time to focus on growing my business.",
      author: "Laura Elizabeth",
      stars: "empty",
    },
  ];

  return (
    <div className={styles.section_reviews}>
      <div className={styles.padding_section_medium}>
        <div className={styles.reviews_component}>
          <div
            className={`${styles.advantages_heading_wrapper} ${styles.small}`}
          >
            <div className={styles.heading_wrapper}>
              <div className={styles.text_size_tini}>wall of love</div>
              <h2 className={`${styles.heading_style_h2} ${styles.smaller}`}>
                Thousands of happy customers
              </h2>
            </div>
            <p
              className={`${styles.text_size_large} ${styles.smaller} ${styles.small}`}
            >
              Don't take our word for it - see what some of our happy customers
              think about the service.
            </p>
          </div>

          <div className={styles.desktop_swiper_component}>
            <div className={styles.new_testimonial_wrapper}>
              <div className={styles.padding_global}>
                <div className={styles.container_large}>
                  <div className={styles.new_testimonial_component}>
                    <Swiper
                      modules={[Navigation]}
                      spaceBetween={20}
                      slidesPerView={3}
                      navigation={{
                        nextEl: `.${styles.custom_arrow_next}`,
                        prevEl: `.${styles.custom_arrow_prev}`,
                      }}
                      loop={true}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                        992: {
                          slidesPerView: 3,
                        },
                      }}
                    >
                      {reviews.map((review) => (
                        <SwiperSlide key={review.id}>
                          <div className={styles.testimonial_item}>
                            <div
                              className={`${styles.reviews_item} ${styles.is_auto}`}
                            >
                              <div className={styles.reviews_top}>
                                {review.stars === "full" ? (
                                  <img
                                    src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/64771ca81ca155824e1c4c08_Group%204818.svg"
                                    loading="lazy"
                                    width="140"
                                    height="30"
                                    alt=""
                                    className={styles.reviews_stars}
                                  />
                                ) : (
                                  <img
                                    src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/64771ca82bfc836b6eb7307e_Group%204819.svg"
                                    loading="lazy"
                                    width="140"
                                    height="30"
                                    alt=""
                                    className={styles.reviews_stars}
                                  />
                                )}
                                <h3 className={styles.heading_style_h4}>
                                  {review.title}
                                </h3>
                              </div>
                              <div className={styles.text_size_small}>
                                <p>{review.content}</p>
                              </div>
                              <div className={styles.reviews_autor_name}>
                                {review.author}
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    <div className={styles.testimonial_arrow}>
                      <div className={styles.custom_arrow_box}>
                        <div
                          className={`${styles.custom_arrow} ${styles.custom_arrow_prev}`}
                          tabIndex="0"
                          role="button"
                          aria-label="Previous slide"
                        >
                          <div className={styles.custom_arrow_arrow}>
                            <svg
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5 16H27"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M18 7L27 16L18 25"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div
                          className={`${styles.custom_arrow} ${styles.custom_arrow_next}`}
                          tabIndex="0"
                          role="button"
                          aria-label="Next slide"
                        >
                          <div className={styles.custom_arrow_arrow}>
                            <svg
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5 16H27"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M18 7L27 16L18 25"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
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

export default ReviewsSection;
