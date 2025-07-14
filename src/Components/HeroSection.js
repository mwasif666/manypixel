import React, { useState } from "react";
import styles from "./HeroSection.module.css";
import Modal from "react-bootstrap/Modal";

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      {/* Hero Section */}
      <section className={styles.section_header}>
        <div className={`${styles.padding_global} container`}>
          <div className="row align-items-center">
            {/* Left Column - Text Content */}
            <div className="col-lg-6">
              <div className={styles.header_texts_wrapper}>
                <h1 className={styles.header_title}>
                  On-Demand Graphic <br />& Web Design
                </h1>
                <p className={`${styles.header_subtitle} text-large`}>
                  Get access to our creative team in a few clicks. <br />
                  Simple, fast, and affordable.
                </p>
              </div>
              <a
                href="/pricing"
                className={`${styles.cta_button} btn btn-primary`}
              >
                Pick your plan
              </a>
            </div>

            {/* Right Column - Image Content */}
            <div className="col-lg-6">
              <div className={styles.header_image}>
                <img
                  src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/64778bceeeb5e90bc39c9f03_frame_44191.avif"
                  loading="eager"
                  alt="ManyPixels Hero Video Image"
                  className={styles.header_bg_video}
                  onClick={handleShow}
                />
                <div className={styles.header_video_play} onClick={handleShow}>
                  <img
                    src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6474d49aec4ebf83409b1da2_Rectangle%201925.svg"
                    loading="lazy"
                    width="24"
                    height="32"
                    alt="Play icon"
                    className={styles.header_play_icon}
                  />
                </div>
                <img
                  src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/64778b2516348fbd659d0a5a_Group%204820.svg"
                  loading="eager"
                  alt=""
                  className={styles.header_image_bg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <div className={styles.modalHeaderContent}>
            <div className={styles.modalLogo}>mp.</div>
            <Modal.Title>ManyPixels | On-demand Graphic Design</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.videoWrapper}>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.videoControls}>
            <div className={styles.controlsLeft}>
              <span className={styles.watchLater}>Watch later</span>
              <span className={styles.share}>Share</span>
            </div>
            <div className={styles.manyPixelsText}>many pixels</div>
            <div className={styles.timeDisplay}>0:00 / 1:25</div>
          </div>
          <div className={styles.platform}>
            <div className={styles.platformIcon}>
              <svg
                width="24"
                height="17"
                viewBox="0 0 24 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.5 8.30857C23.5 12.9214 19.3062 16.6171 14.1667 16.6171H9.83333C4.69375 16.6171 0.5 12.9214 0.5 8.30857C0.5 3.69571 4.69375 0 9.83333 0H14.1667C19.3062 0 23.5 3.69571 23.5 8.30857Z"
                  fill="#EE1D1D"
                />
                <path
                  d="M15.5833 8.30859L9.16663 4.0415V12.5757L15.5833 8.30859Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className={styles.platformText}>YouTube</span>
          </div>
        </Modal.Body>
        <Modal.Footer className={styles.modalFooter}>
          <button className={styles.primaryButton}>PICK YOUR PLAN</button>
          <button className={styles.secondaryButton}>BOOK A CALL</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HeroSection;
