import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "./FAQ.module.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "What does unlimited really mean?",
      answer: (
        <>
          <p>
            With all our plans, you can submit as many design requests as you
            like and our designers will work on it every business day. Revisions
            are unlimited too!
          </p>
          <p>
            No matter how many requests or revisions you submit, the price stays
            the same. You are only limited in terms of speed as we are real
            humans doing real work.
          </p>
          <p>
            You can read more about the amount of design you can expect to
            receive on a daily basis{" "}
            <a
              href="https://www.manypixels.co/help/daily-output-delivery-time"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
        </>
      ),
    },
    {
      question: "What's the turnaround time?",
      answer: (
        <>
          <p>
            Turnaround time depends on various factors, including the type and
            complexity of the task, the quality of the design brief and the
            number of revisions needed.
          </p>
          <p>
            On average, you can expect to receive your design the next business
            day with our Advanced and Business plans and on the same day with
            our Dedicated Designer plan.
          </p>
        </>
      ),
    },
    {
      question: "What type of designs can I request?",
      answer: (
        <>
          <p>
            The answer is a lot! If you can clearly explain or show it, then we
            can design it.
          </p>
          <p>
            If you feel like you don't know what you want and would need
            multiple meetings with a brand strategist to figure it out, then
            ManyPixels might not be the right fit for you at this time.
          </p>
          <p>
            Note that we do NOT offer 3D design, complex UI/UX, prototyping and
            coding.
          </p>
          <p>
            You can review our full Scope of Service{" "}
            <a
              href="https://www.manypixels.co/scope-of-services"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
        </>
      ),
    },
    {
      question: "Do I own the rights to the designs?",
      answer: (
        <>
          <p>
            Yes. All of our work is done for you and for you only. You have
            complete ownership of the files as soon as you received them and are
            free to use them as you please.
          </p>
          <p>
            Source files (PSD, AI, INDD, FIG) are always included along with
            PNG, JPEG, SVG & PDF.
          </p>
        </>
      ),
    },
    {
      question: "Are there any hidden fees?",
      answer: <p>No! What you see is what you pay! Everything is included.</p>,
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.sectionFaq}>
      <div className="container">
        <div className={`py-5 ${styles.paddingSectionMedium}`}>
          <div className="row">
            <div className="col-lg-4">
              <div className={styles.faqHeadingWrapper}>
                <h2 className={`h3 ${styles.headingStyleH3}`}>F.A.Q</h2>
                <p className={styles.textSizeMedium}>
                  Can't find the info your are looking for? Visit our{" "}
                  <a href="/help" className={styles.link}>
                    Help Center
                  </a>{" "}
                  or send us an email at{" "}
                  <a
                    href="mailto:info@manypixels.co"
                    className={styles.emailLink}
                  >
                    info@manypixels.co
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className={styles.faqWrapper}>
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className={`${styles.faqItem} ${
                      activeIndex === index ? styles.active : ""
                    }`}
                  >
                    <div
                      className={styles.faqTop}
                      onClick={() => toggleAccordion(index)}
                    >
                      <h3 className={`h5 ${styles.headingStyleH5} `}>
                        {item.question}
                      </h3>
                      <div className={styles.faqIcon}>
                        {activeIndex === index ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </div>
                    </div>
                    <div
                      className={styles.faqBody}
                      style={{
                        height: activeIndex === index ? "auto" : 0,
                        overflow: "hidden",
                        transition: "height 0.3s ease",
                      }}
                    >
                      <div className={styles.faqContent}>{item.answer}</div>
                      <div className={styles.marginBottomFaq}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
