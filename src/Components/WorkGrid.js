// WorkGrid.jsx
import React from "react";
import styles from "./WorkGrid.module.css";

const WorkGrid = () => {
  const workItems = [
    {
      title: "SOCIAL MEDIA GRAPHICS",
      image:
        "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/647616997b21d93dc6da2675_frame_6869.avif",
      link: "/our-work/social-media-graphics",
      height: "normal",
    },

    {
      title: "MOTION GRAPHICS",
      image:
        "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/64c81c079dcce24965dc9b41_GIF_LOOP.gif",
      link: "/our-work/motion-graphics",
      height: "tall",
    },
    {
      title: "WEBSITES",
      image:
        "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/647616998f56e2685cb45c8c_frame_47936.avif",
      link: "/our-work/website-design",
      height: "tall",
    },
    {
      title: "LOGOS",
      image:
        "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6666ff1c68a6857946f4fb40_648b3f763e57444f750d5d6d_6jTtqUtwQJG8aEAXZ6Nq.avif",
      link: "/our-work/logos",
      height: "normal",
    },
    {
      title: "ILLUSTRATIONS",
      image:
        "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6476169931337d3beb6d2a92_frame_47937.avif",
      link: "/our-work/illustrations",
      height: "normal",
    },
    {
      title: "DISPLAY ADS",
      image:
        "https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/66447007b2f81b61ffeea294_display.avif",
      link: "/our-work/display-ads",
      height: "tall",
    },
  ];

  return (
    <div className={styles.sectionWork}>
      <div className={styles.paddingGlobal}>
        <div className={styles.containerLarge}>
          <div className={styles.paddingSectionMedium}>
            <div className={styles.workComponent}>
              <div className={`${styles.headingWrapper} ${styles.left}`}>
                <div className={styles.textSizeTiny}>OUR WORK</div>
                <h2 className={`${styles.headingStyleH2} ${styles.smaller}`}>
                  Your one-stop shop for all your creatives
                </h2>
              </div>

              <div className={styles.workGrid}>
                <div className={styles.workColumn}>
                  <a
                    href={workItems[0].link}
                    className={`${styles.workItem} ${styles.normalHeight}`}
                  >
                    <h3 className={styles.headingStyleH5}>
                      {workItems[0].title}
                    </h3>
                    <div className={styles.workBg}>
                      <div className={styles.workGrad}></div>
                      <img
                        src={workItems[0].image}
                        alt={workItems[0].title}
                        className={styles.workImage}
                      />
                    </div>
                  </a>
                  <a
                    href={workItems[1].link}
                    className={`${styles.workItem} ${styles.tallHeight}`}
                  >
                    <h3 className={styles.headingStyleH5}>
                      {workItems[1].title}
                    </h3>
                    <div className={styles.workBg}>
                      <div className={styles.workGrad}></div>
                      <img
                        src={workItems[1].image}
                        alt={workItems[1].title}
                        className={styles.workImage}
                      />
                    </div>
                  </a>
                </div>

                <div className={styles.workColumn}>
                  <a
                    href={workItems[2].link}
                    className={`${styles.workItem} ${styles.tallHeight}`}
                  >
                    <h3 className={styles.headingStyleH5}>
                      {workItems[2].title}
                    </h3>
                    <div className={styles.workBg}>
                      <div className={styles.workGrad}></div>
                      <img
                        src={workItems[2].image}
                        alt={workItems[2].title}
                        className={styles.workImage}
                      />
                    </div>
                  </a>
                  <a
                    href={workItems[3].link}
                    className={`${styles.workItem} ${styles.normalHeight}`}
                  >
                    <h3 className={styles.headingStyleH5}>
                      {workItems[3].title}
                    </h3>
                    <div className={styles.workBg}>
                      <div className={styles.workGrad}></div>
                      <img
                        src={workItems[3].image}
                        alt={workItems[3].title}
                        className={styles.workImage}
                      />
                    </div>
                  </a>
                </div>

                <div className={styles.workColumn}>
                  <a
                    href={workItems[4].link}
                    className={`${styles.workItem} ${styles.normalHeight}`}
                  >
                    <h3 className={styles.headingStyleH5}>
                      {workItems[4].title}
                    </h3>
                    <div className={styles.workBg}>
                      <div className={styles.workGrad}></div>
                      <img
                        src={workItems[4].image}
                        alt={workItems[4].title}
                        className={styles.workImage}
                      />
                    </div>
                  </a>
                  <a
                    href={workItems[5].link}
                    className={`${styles.workItem} ${styles.tallHeight}`}
                  >
                    <h3 className={styles.headingStyleH5}>
                      {workItems[5].title}
                    </h3>
                    <div className={styles.workBg}>
                      <div className={styles.workGrad}></div>
                      <img
                        src={workItems[5].image}
                        alt={workItems[5].title}
                        className={styles.workImage}
                      />
                    </div>
                  </a>
                </div>
              </div>

              <a
                href="/our-work"
                className={`${styles.button} ${styles.isSecondary}`}
              >
                all our work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkGrid;
