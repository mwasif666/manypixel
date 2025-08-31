import React, { useState } from "react";
import styles from "../style/Signin.module.css";
import { Link } from "react-router-dom";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: true,
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Validate on change if field has been touched
    if (touched[name]) {
      validateField(name, type === "checkbox" ? checked : value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "email":
        if (!value) {
          error = "Email is required";
        } else if (!validateEmail(value)) {
          error = "Please enter a valid email";
        }
        break;
      case "password":
        if (!value) {
          error = "Password is required";
        } else if (value.length < 6) {
          error = "Password must be at least 6 characters";
        }
        break;
      default:
        break;
    }

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    Object.keys(formData).forEach((name) => {
      if (name !== "remember") {
        validateField(name, formData[name]);
        setTouched((prev) => ({ ...prev, [name]: true }));
      }
    });

    // Check if form is valid
    const isValid =
      Object.keys(errors).every((key) => !errors[key]) &&
      formData.email &&
      formData.password;

    if (isValid) {
      console.log("Form submitted:", formData);
      // Here you would typically make an API call
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
              <h2 className={styles.formTitle}>Sign in</h2>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={`mb-3 ${styles.formGroup}`}>
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
                      touched.email && errors.email ? "is-invalid" : ""
                    }`}
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email && (
                    <div className={`invalid-feedback ${styles.errorMessage}`}>
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className={`mb-3 ${styles.formGroup}`}>
                  <label
                    htmlFor="password"
                    className={`form-label ${styles.label}`}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    className={`form-control ${styles.input} ${
                      touched.password && errors.password ? "is-invalid" : ""
                    }`}
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.password && errors.password && (
                    <div className={`invalid-feedback ${styles.errorMessage}`}>
                      {errors.password}
                    </div>
                  )}
                </div>

                <div className={`mb-3 ${styles.optionsRow}`}>
                  <div className="checkbox-wrapper">
                    <input
                      className="input"
                      id="checkbox-filled-ripple"
                      type="checkbox"
                    />
                    <label class="checkbox" for="checkbox-filled-ripple">
                      <span>
                        <svg viewbox="0 0 12 10">
                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                      </span>
                      <span>Remember me</span>
                    </label>
                  </div>
                  <Link to="/forgetPassword" className={styles.forgotPassword}>
                    Forgot your password?
                  </Link>
                </div>

                <button type="submit" className={`btn ${styles.submitButton}`}>
                  SIGN IN
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
