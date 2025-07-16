import React from "react";
import styles from "./FooterSection.module.css";
import { Container, Row, Col } from "react-bootstrap";

const FooterSection = () => {
  return (
    <div className={styles.section_footer}>
      <div className={styles.padding_global}>
        <Container className={styles.container_large}>
          <Row className={styles.twelve_col_grid}>
            <Col md={12} className={styles.footer}>
              <div className={styles.footer_logo_wrapper}>
                <a href="#" className={styles.footer_logo_box}>
                  <img
                    src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6476311aff1c1ec0320d6319_Group%204813.svg"
                    loading="lazy"
                    width="122"
                    height="20"
                    alt="White Logo"
                    className={styles.footer_logo}
                  />
                </a>
              </div>

              <div className={styles.footer_menu}>
                <div className={styles.footer_item}>
                  <div className={styles.footer_heading}>COMPANY</div>
                  <div className={styles.footer_links_wrapper}>
                    <a href="/about-us" className={styles.footer_link}>
                      About Us
                    </a>
                    <a
                      href="https://manypixels.breezy.hr/"
                      target="_blank"
                      className={styles.footer_link}
                      rel="noopener noreferrer"
                    >
                      Careers
                    </a>
                  </div>
                </div>

                <div className={styles.footer_item}>
                  <div className={styles.footer_heading}>SERVICE</div>
                  <div className={styles.footer_links_wrapper}>
                    <a href="/our-work" className={styles.footer_link}>
                      Our Work
                    </a>
                    <a href="/pricing" className={styles.footer_link}>
                      Pricing
                    </a>
                    <a href="/help" className={styles.footer_link}>
                      Help Center
                    </a>
                    <a href="/scope-of-services" className={styles.footer_link}>
                      Scope of Services
                    </a>
                  </div>
                </div>

                <div className={styles.footer_item}>
                  <div className={styles.footer_heading}>RESOURCES</div>
                  <div className={styles.footer_links_wrapper}>
                    <a href="/gallery" className={styles.footer_link}>
                      Free Illustrations
                    </a>
                    <a href="/guides" className={styles.footer_link}>
                      Guides
                    </a>
                    <a href="/blog" className={styles.footer_link}>
                      Blog
                    </a>
                    <a href="/case-studies" className={styles.footer_link}>
                      Case Studies
                    </a>
                    <a href="/affiliates" className={styles.footer_link}>
                      Affiliates
                    </a>
                    <a href="/compare" className={styles.footer_link}>
                      Compare Hub
                    </a>
                  </div>
                </div>

                <div className={styles.footer_item}>
                  <div className={styles.footer_heading}>EMAIL US</div>
                  <div className={styles.footer_links_wrapper}>
                    <a
                      href="mailto:info@manypixels.co"
                      className={styles.footer_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      info@manypixels.co
                    </a>
                    <div className={styles.footer_heading}>ADDRESS</div>
                    <div className={`${styles.footer_link} ${styles.no_hover}`}>
                      ManyPixels Pte Ltd
                      <br />
                      160 Robinson Road
                      <br />
                      Singapore, 068914
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row className={styles.footer_bottom}>
            <Col md={6} className={styles.footer_bottom_links}>
              <a
                href="#"
                className={`${styles.footer_link} ${styles.b} ${styles.no_hover}`}
              >
                © 2024 ManyPixels
              </a>
              <a
                href="/terms-of-service"
                className={`${styles.footer_link} ${styles.b}`}
              >
                Terms of Service
              </a>
              <a
                href="/privacy-policy"
                className={`${styles.footer_link} ${styles.b}`}
              >
                Privacy Policy
              </a>
            </Col>

            <Col md={6} className={styles.footer_social_wrapper}>
              <a
                aria-label="Manypixels Facebook link"
                href="https://www.facebook.com/manypixels/"
                target="_blank"
                className={styles.footer_social_link}
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <path d="M17.9483 11.0148H20.0103V7.96875H17.5863V7.97974C14.6493 8.08376 14.0473 9.73473 13.9943 11.4687H13.9882V12.9898H11.9883V15.9727H13.9882V23.9687H17.0023V15.9727H19.4713L19.9482 12.9898H17.0033V12.0708C17.0033 11.4848 17.3932 11.0148 17.9483 11.0148Z"></path>
                </svg>
              </a>

              <a
                aria-label="Manypixels Twitter Link"
                href="https://twitter.com/manypixelsco"
                target="_blank"
                className={styles.footer_social_link}
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 32 32" fill="currentColor">
                  <path d="M26.003 10.7789C25.3041 11.0808 24.552 11.2838 23.7631 11.3759C24.5691 10.9068 25.1871 10.1658 25.4781 9.28091C24.7241 9.7159 23.89 10.0309 23.0011 10.1999C22.29 9.4649 21.277 9.00586 20.1551 9.00586C18.0031 9.00586 16.2571 10.6989 16.2571 12.7888C16.2571 13.0858 16.2912 13.3748 16.3581 13.6519C13.1181 13.4939 10.2441 11.9868 8.32212 9.69788C7.9861 10.2569 7.7941 10.9059 7.7941 11.5999C7.7941 12.9118 8.48206 14.0718 9.52811 14.7489C8.88815 14.7289 8.28807 14.5599 7.76114 14.2749V14.3229C7.76114 16.1569 9.1051 17.6859 10.8891 18.0339C10.5621 18.1199 10.218 18.167 9.86204 18.167C9.61104 18.167 9.36708 18.144 9.12904 18.099C9.625 19.603 11.0651 20.6969 12.7721 20.727C11.4371 21.743 9.75604 22.347 7.92909 22.347C7.61406 22.347 7.30408 22.329 6.99805 22.2941C8.72503 23.368 10.7731 23.995 12.976 23.995C20.1481 23.995 24.0701 18.227 24.0701 13.227L24.0591 12.737C24.819 12.2049 25.4801 11.5389 26.003 10.7789Z"></path>
                </svg>
              </a>

              <a
                aria-label="Manypixels LinkedIn link"
                href="https://www.linkedin.com/company/manypixels/"
                target="_blank"
                className={styles.footer_social_link}
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 32 32" fill="currentColor">
                  <path d="M9.01604 21.984H12.0121V11.9979H9.01604V21.984ZM20.6881 11.652C19.2341 11.652 17.9331 12.183 17.0101 13.3551V11.9651H14.0031V21.9841H17.0101V16.5661C17.0101 15.421 18.0592 14.304 19.3731 14.304C20.6871 14.304 21.0111 15.421 21.0111 16.538V21.9831H24.0072V16.3151C24.0071 12.378 22.1431 11.652 20.6881 11.652ZM10.5 11C11.3281 11 12.0001 10.3279 12.0001 9.49994C12.0001 8.67192 11.3281 8 10.5 8C9.67203 8 9 8.67203 9 9.50005C9 10.3281 9.67203 11 10.5 11Z"></path>
                </svg>
              </a>

              <a
                aria-label="Manypixels Instagram link"
                href="https://www.instagram.com/manypixels/"
                target="_blank"
                className={styles.footer_social_link}
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 32 32" fill="currentColor">
                  <path d="M21.522 6.99805H10.4771C8.55807 6.99805 6.99805 8.55906 6.99805 10.4771V21.5231C6.99805 23.4421 8.55906 25.0021 10.4771 25.0021H21.5231C23.4421 25.0021 25.0021 23.4411 25.0021 21.5231V10.4771C25.002 8.55906 23.441 6.99805 21.522 6.99805ZM22.618 9.01107L23.012 9.01008V11.9981L20.0021 12.0081L19.9921 9.02008C19.9921 9.02008 22.618 9.01107 22.618 9.01107ZM16.0001 12.988C18.4971 12.988 19.012 15.332 19.012 16.001C19.012 17.66 17.6601 19.0119 16.0001 19.0119C14.3391 19.0119 12.9881 17.66 12.9881 16.001C12.987 15.332 13.5031 12.988 16.0001 12.988ZM23.0291 21.3051C23.0291 22.2561 22.2561 23.0301 21.3031 23.0301H10.663C9.711 23.0301 8.93703 22.2571 8.93703 21.3051V13.9961H11.437C11.205 14.567 11.074 15.3471 11.074 16.0011C11.074 18.7151 13.282 20.9241 15.997 20.9241C18.7121 20.9241 20.919 18.7151 20.919 16.0011C20.919 15.3471 20.7879 14.567 20.5569 13.9961H23.0269V21.3051H23.0291Z"></path>
                </svg>
              </a>

              <a
                aria-label="Manypixels Dribbble link"
                href="https://dribbble.com/manypixels"
                target="_blank"
                className={styles.footer_social_link}
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 32 32" fill="currentColor">
                  <g clipPath="url(#clip0_13025_118610)">
                    <path d="M19.3176 24.5108C19.3328 24.5062 19.3473 24.5001 19.3626 24.4948C28.6692 20.7972 26.0948 6.85742 16.0003 6.85742C10.9344 6.85742 6.85742 10.9869 6.85742 16.0003C6.85742 22.3447 13.2833 26.8719 19.3176 24.5108ZM10.881 22.1405C11.5302 21.0494 13.6308 17.9713 17.2163 16.9092C17.966 18.8209 18.4917 21.0509 18.5435 23.5797C15.8266 24.4932 12.961 23.8784 10.881 22.1405V22.1405ZM19.6673 23.1028C19.5675 20.673 19.0715 18.5184 18.3645 16.6517C19.9508 16.4041 21.7869 16.5694 23.8692 17.4037C23.4266 19.8883 21.838 21.9767 19.6673 23.1028V23.1028ZM23.9888 16.222C21.6955 15.3603 19.6742 15.2529 17.9248 15.5866C17.6544 14.977 17.3702 14.3911 17.0692 13.8517C19.7534 12.7797 21.3397 11.473 22.0498 10.7812C23.3031 12.2319 24.0475 14.11 23.9888 16.222V16.222ZM21.2384 9.96752C20.5923 10.5824 19.0708 11.8243 16.4688 12.8399C15.1934 10.8224 13.8296 9.39914 12.9656 8.60218C15.7298 7.4639 18.9176 7.94999 21.2384 9.96752V9.96752ZM11.873 9.16066C12.5252 9.73437 13.9568 11.1119 15.3382 13.2422C13.441 13.8532 11.0624 14.302 8.16942 14.3652C8.62961 12.1603 10.0041 10.2921 11.873 9.16066V9.16066ZM8.02466 15.5127C11.2628 15.4601 13.8837 14.9489 15.9553 14.257C16.2418 14.7591 16.5138 15.3062 16.7751 15.8746C13.1675 17.0235 10.913 19.9896 10.0498 21.329C8.65704 19.7748 7.88904 17.7466 8.02466 15.5127V15.5127Z"></path>
                  </g>
                </svg>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FooterSection;
