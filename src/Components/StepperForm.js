import { useState, useEffect } from "react";
import styles from "./StepperForm.module.css";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const StepperForm = ({ selectedPlanData }) => {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const [step, setStep] = useState(2); // Start directly from Step 2
  const [formData, setFormData] = useState({
    plan: 1,
    firstName: "",
    lastName: "",
    companyName: "",
    website: "",
    jobTitle: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyInfo: "",
  });

  const steps = [
    { number: 1, title: "CHOOSE PLAN" },
    { number: 2, title: "CREATE ACCOUNT" },
    { number: 3, title: "CHECKOUT" },
    { number: 4, title: "COMPANY INFORMATION" },
    { number: 5, title: "SUCCESS" },
  ];

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "firstName":
        if (!value) error = "First name is required";
        break;
      case "lastName":
        if (!value) error = "Last name is required";
        break;
      case "companyName":
        if (!value) error = "Company name is required";
        break;
      case "website":
        if (!value) {
          error = "Website is required";
        } else if (!/^https?:\/\/.+\..+/.test(value)) {
          error = "Enter a valid URL (e.g. https://example.com)";
        }
        break;
      case "jobTitle":
        if (!value) error = "Job title is required";
        break;
      case "email":
        if (!value) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Enter a valid email address";
        }
        break;
      case "password":
        if (!value) {
          error = "Password is required";
        } else if (value.length < 6) {
          error = "Password must be at least 6 characters";
        }
        break;
      case "confirmPassword":
        if (!value) {
          error = "Confirm password is required";
        } else if (value !== formData.password) {
          error = "Passwords do not match";
        }
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (step > 2) {
      // Prevent going back to Step 1
      setStep((prev) => prev - 1);
    }
  };

  const makeError = (error, toast) => {
    const errorBag = error?.response?.data?.errors;

    if (errorBag && typeof errorBag === "object") {
      Object.keys(errorBag).forEach((key) => {
        (Array.isArray(errorBag[key])
          ? errorBag[key]
          : [errorBag[key]]
        ).forEach((msg) => toast.error(msg));
      });
    } else {
      toast.error("Internal Server Error, Please try again");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    Object.keys(formData).forEach((name) => {
      validateField(name, formData[name]);
      setTouched((prev) => ({ ...prev, [name]: true }));
    });

    const hasErrors = Object.values(errors).some((err) => err);
    if (hasErrors) return;

    if (step < steps.length - 1) {
      nextStep();
    } else {
      try {
        const data = new FormData();
        data.append("name", formData.firstName);
        data.append("last_name", formData.lastName);
        data.append("company", formData.companyName);
        data.append("website", formData.website);
        data.append("job_title", formData.jobTitle);
        data.append("email", formData.email);
        data.append("password", formData.password);
        data.append("password_confirmation", formData.confirmPassword);
        data.append("package_id", selectedPlanData.package.id || 0);
        data.append("billing_type", selectedPlanData.billing);
        data.append("billing_type", selectedPlanData.billing);
        data.append("billing_amount", selectedPlanData.selectedPlan.total);
        data.append("currency", selectedPlanData.currency || 'USD');

        await axios.post(
          "https://manypixel.innovationpixel.com/onboard",
          data,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        nextStep();
      } catch (error) {
        makeError(error, toast);
      }
    }
  };

  useEffect(() => {
    // Initialize Bootstrap tooltips
    const bootstrap = require("bootstrap/dist/js/bootstrap.bundle.min.js");
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  }, []);

  const renderStep = () => {
    switch (step) {
      case 2:
        return (
          <div className={styles.stepContent}>
            <h3>Create Account</h3>
            <form>
              <div className="row">
                {/* First Name */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    First Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className={`form-control ${
                      touched.firstName && errors.firstName ? "is-invalid" : ""
                    }`}
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your first name"
                    required
                  />
                  {touched.firstName && errors.firstName && (
                    <div className="invalid-feedback">{errors.firstName}</div>
                  )}
                </div>

                {/* Last Name */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Last Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className={`form-control ${
                      touched.lastName && errors.lastName ? "is-invalid" : ""
                    }`}
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your last name"
                    required
                  />
                  {touched.lastName && errors.lastName && (
                    <div className="invalid-feedback">{errors.lastName}</div>
                  )}
                </div>
              </div>

              <div className="row">
                {/* Company Name */}
                <div className="col-md-6 mb-3">
                  <label className="form-label d-flex align-items-center gap-1">
                    Company Name
                    <span
                      className={styles.infoIcon}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="If you don't have a company, you can enter your name."
                    >
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.1992 0.699219H2.79922C1.63942 0.699219 0.699219 1.63942 0.699219 2.79922V11.1992C0.699219 12.359 1.63942 13.2992 2.79922 13.2992H11.1992C12.359 13.2992 13.2992 12.359 13.2992 11.1992V2.79922C13.2992 1.63942 12.359 0.699219 11.1992 0.699219ZM2.09922 2.79922C2.09922 2.41262 2.41262 2.09922 2.79922 2.09922H11.1992C11.5858 2.09922 11.8992 2.41262 11.8992 2.79922V11.1992C11.8992 11.5858 11.5858 11.8992 11.1992 11.8992H2.79922C2.41262 11.8992 2.09922 11.5858 2.09922 11.1992V2.79922ZM7.04636 3.43342C6.45183 3.43342 5.9357 3.57062 5.49796 3.84502V5.28562C5.72663 5.13536 5.96183 5.02756 6.20356 4.96222C6.4453 4.89036 6.67396 4.85442 6.88956 4.85442C7.31423 4.85442 7.52656 5.01449 7.52656 5.33462C7.52656 5.47836 7.49063 5.60576 7.41876 5.71682C7.3469 5.82789 7.23583 5.96182 7.08556 6.11862C6.8765 6.35382 6.71316 6.57269 6.59556 6.77522C6.4845 6.97122 6.42896 7.22276 6.42896 7.52982V8.13742H7.46776L7.53636 7.73562C7.56903 7.59189 7.6409 7.45796 7.75196 7.33382C7.86303 7.20969 8.0329 7.04962 8.26156 6.85362C8.6013 6.56616 8.86263 6.29829 9.04556 6.05002C9.23503 5.80176 9.32976 5.50449 9.32976 5.15822C9.32976 4.82502 9.23176 4.52776 9.03576 4.26642C8.8463 4.00509 8.57843 3.80256 8.23216 3.65882C7.8859 3.50856 7.49063 3.43342 7.04636 3.43342ZM7.88916 8.67642H6.04676V10.4992H7.88916V8.67642Z"
                          fill="#0099F6"
                        ></path>{" "}
                      </svg>
                    </span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    className={`form-control ${
                      touched.companyName && errors.companyName
                        ? "is-invalid"
                        : ""
                    }`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={formData.companyName}
                    placeholder="Enter your company name"
                    required
                  />
                  {touched.companyName && errors.companyName && (
                    <div className="invalid-feedback">{errors.companyName}</div>
                  )}
                </div>

                {/* Company Website */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Company Website <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="url"
                    name="website"
                    className={`form-control ${
                      touched.website && errors.website ? "is-invalid" : ""
                    }`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={formData.website}
                    placeholder="www.example.com"
                    required
                  />
                  {touched.website && errors.website && (
                    <div className="invalid-feedback">{errors.website}</div>
                  )}
                </div>
              </div>

              <div className="row">
                {/* Job Title */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Job Title <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    className={`form-control ${
                      touched.jobTitle && errors.jobTitle ? "is-invalid" : ""
                    }`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={formData.jobTitle}
                    placeholder="Enter your role"
                    required
                  />
                  {touched.jobTitle && errors.jobTitle && (
                    <div className="invalid-feedback">{errors.jobTitle}</div>
                  )}
                </div>

                {/* Email */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Email <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${
                      touched.email && errors.email ? "is-invalid" : ""
                    }`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={formData.email}
                    placeholder="Enter your email"
                    required
                  />
                  {touched.email && errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
              </div>

              <div className="row">
                {/* Password */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Create Password <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    className={`form-control ${
                      touched.password && errors.password ? "is-invalid" : ""
                    }`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={formData.password}
                    placeholder="Create your password"
                    required
                  />
                  {touched.password && errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Confirm Password <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className={`form-control ${
                      touched.confirmPassword && errors.confirmPassword
                        ? "is-invalid"
                        : ""
                    }`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={formData.confirmPassword}
                    placeholder="Confirm your password"
                    required
                  />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <div className="invalid-feedback">
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        );
      case 3:
        return (
          <div className={styles.stepContent}>
            <h3>Checkout</h3>
            <p>Review your information before proceeding to payment.</p>
            <div className={styles.summary}>
              <p>
                <strong>Plan:</strong> {formData.plan}
              </p>
              <p>
                <strong>Name:</strong> {formData.firstName} {formData.lastName}
              </p>
              <p>
                <strong>Company:</strong> {formData.companyName}
              </p>
              <p>
                <strong>Email:</strong> {formData.email}
              </p>
            </div>
          </div>
        );
      case 4:
        return (
          <div className={styles.stepContent}>
            <h3>Company Information</h3>
            <Form.Group className="mb-3">
              <Form.Label>Additional Company Details</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="companyInfo"
                value={formData.companyInfo}
                onChange={handleChange}
                placeholder="Provide additional information about your company"
              />
            </Form.Group>
          </div>
        );
      case 5:
        return (
          <div className={styles.successContent}>
            <h3>Success!</h3>
            <div className={styles.successIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
            </div>
            <p>Your registration is complete. Thank you!</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Container className={styles.stepperContainer}>
      <div className={styles.stepper}>
        {steps.map((item, index) => (
          <div
            key={index}
            className={`${styles.step} ${
              step === item.number ? styles.active : ""
            } ${step > item.number ? styles.completed : ""}`}
          >
            <div className={styles.stepNumber}>{item.number}</div>
            <div className={styles.stepTitle}>{item.title}</div>
          </div>
        ))}
      </div>
      <div className="container">
        <Form onSubmit={handleSubmit} className={styles.formContainer}>
          {renderStep()}

          <div className={styles.buttonGroup}>
            {step > 2 && step < steps.length && (
              <Button
                variant="outline-primary"
                onClick={prevStep}
                className={styles.prevButton}
              >
                Back
              </Button>
            )}
            {step < steps.length ? (
              <Button
                variant="primary"
                type="submit"
                className={styles.nextButton}
              >
                {step === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            ) : (
              null
              // <Button
              //   variant="success"
              //   onClick={() => setStep(2)}
              //   className={styles.restartButton}
              // >
              //   Start New Registration
              // </Button>
            )}
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default StepperForm;
