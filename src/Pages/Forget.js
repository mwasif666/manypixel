import React, { useState } from "react";
import styles from "./Signin.module.css";
import { Link } from "react-router-dom";
import ChevronLeft from "../Components/Chevronleft";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [touched, setTouched] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (touched) {
      validateField(e.target.value);
    }
  };

  const handleBlur = () => {
    setTouched(true);
    validateField(email);
  };

  const validateField = (value) => {
    if (!value) {
      setError("Email is required");
    } else if (!validateEmail(value)) {
      setError("Please enter a valid email");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    validateField(email);

    if (!error && email) {
      // Here you would typically make an API call to send reset password email
      console.log("Reset password email sent to:", email);
      setIsSubmitted(true);
    }
  };

  return (
    <section className={styles.Login}>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-lg-5">
            <div className={styles.textimg}>
              <div className={styles.logoimg}>
                <div className={styles.backcolor}>
                  <div className={styles.backcolor1}></div>
                  <div className={styles.backcolor2}></div>
                </div>
                <img src="./login.svg" alt="" />
              </div>
              <div className={styles.testdesign}>
                <h2>
                  Get your design <br /> team in a few clicks
                </h2>
                <h4>
                  Your on-demand graphic design service. Simple, fast and
                  affordable.
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className={styles.formWrapper}>
              {isSubmitted ? (
                <div className={styles.successMessage}>
                  <h2 className={styles.formTitle}>Check your email</h2>
                  <p className={styles.successText}>
                    We've sent a password reset link to <strong>{email}</strong>
                    . Please check your inbox and follow the instructions.
                  </p>
                  <div className={styles.backToLogin}>
                    <Link to="/signin">Go back to sign in</Link>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className={styles.formTitle}>Forgot Password</h2>
                  <p className={styles.instructions}>
                    Enter the email address you signed up with below. We will
                    send you an email containing a link to reset your password.
                  </p>
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={`mb-4 ${styles.formGroup}`}>
                      <label
                        htmlFor="email"
                        className={`form-label ${styles.label}`}
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                        className={`form-control ${styles.input} ${
                          touched && error ? "is-invalid" : ""
                        }`}
                        value={email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched && error && (
                        <div
                          className={`invalid-feedback ${styles.errorMessage}`}
                        >
                          {error}
                        </div>
                      )}
                    </div>
                    <div className={styles.backToLogin}>
                      <ChevronLeft />
                      <Link to="/signin">Go back to sign in</Link>
                    </div>
                    <button
                      type="submit"
                      className={`btn ${styles.submitButton}`}
                    >
                      SEND
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
