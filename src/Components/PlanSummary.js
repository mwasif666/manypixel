import React, { useEffect, useState, useContext } from "react";
import styles from "./PlanSummary.module.css";
import { Card, Form, Modal, Button } from "react-bootstrap";
import PricingCard from "../Pages/Pricing";
import { PricingContext } from "../contexts/PricingContext";
import { toast } from "react-toastify";

const PlanSummary = ({ setSelectedPlanData }) => {
  const [billing, setBilling] = useState("monthly");
  const [showModal, setShowModal] = useState(false);

  const {
    packages,
    loading,
    selectedPackage,
    setSelectedPackage,
    billingCycle,
    setBillingCycle,
    plans,
    currency,
    isUSD
  } = useContext(PricingContext);

  // Map billingCycle to billing key
  useEffect(() => {
    if (billingCycle === "MONTHLY") {
      setBilling('monthly');
    } else if (billingCycle === "QUARTERLY") {
      setBilling('quarterly');
    } else if (billingCycle === "YEARLY") {
      setBilling('yearly');
    }
  }, [billingCycle]);

  // Update selectedPlanData using context values
  useEffect(() => {
    if (selectedPackage && plans[billing]) {
      setSelectedPlanData({
        package: selectedPackage,
        billing,
        selectedPlan: plans[billing],
        currency: currency,
      });
    }
  }, [selectedPackage, billing, plans, currency, setSelectedPlanData]);

  const handleBillingChange = (newBilling) => {
    setBilling(newBilling);
    const newBillingCycle = newBilling.toUpperCase();
    setBillingCycle(newBillingCycle);
  };

  return (
    <>
      <Card className={styles.planCard}>
        <Card.Body>
          <div className={styles.header}>
            <span className={styles.title}>Your plan</span>
            <button
              className={styles.changeLink}
              onClick={() => setShowModal(true)}
            >
              Change plan
            </button>
          </div>

          <h4 className={styles.planName}>{selectedPackage.name}</h4>

          <hr />

          <ul className={styles.features}>
            <li>1 Daily Output</li>
            <li>Next Day Delivery</li>
          </ul>

          <Form className={styles.billingOptions}>
            {Object.entries(plans).map(([key, plan]) => (
              <Form.Check
                key={key}
                type="radio"
                id={key}
                name="billing"
                label={
                  <div className={styles.optionLabel}>
                    <span>
                      {plan.label}{" "}
                      {plan.save && (
                        <span className={styles[`save-${key}`]}>
                          {plan.save}
                        </span>
                      )}
                    </span>
                    <span className={styles.price}>${plan.price} / m</span>
                  </div>
                }
                checked={billing === key}
                onChange={() => handleBillingChange(key)}
                className={styles.radioOption}
              />
            ))}
          </Form>

          <div className={styles.total}>
            <span>Billed today</span>
            <span className={styles.totalPrice}>
              {plans[billing] &&
                `${isUSD ? "$" : "AED"} ${plans[
                  billing
                ].total.toLocaleString()}`}
            </span>
          </div>
        </Card.Body>
      </Card>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="xl"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Select Your Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PricingCard setShowModal={setShowModal} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PlanSummary;
