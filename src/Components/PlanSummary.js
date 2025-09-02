import React, { useEffect, useState } from "react";
import styles from "./PlanSummary.module.css";
import { Card, Form, Modal, Button } from "react-bootstrap";
import PricingCard from "../Pages/Pricing";
import { toast } from "react-toastify";
import axios from "axios";

const PlanSummary = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [billing, setBilling] = useState("yearly");
  const [showModal, setShowModal] = useState(false);

  const plans = {
    yearly: {
      price: 479.17,
      total: 5750,
      label: "Billed yearly",
      save: "SAVE 20%",
    },
    biannually: {
      price: 509.17,
      total: 6110,
      label: "Billed biannually",
      save: "SAVE 15%",
    },
    quarterly: {
      price: 539,
      total: 6468,
      label: "Billed quarterly",
      save: "SAVE 10%",
    },
    monthly: { price: 599, total: 7188, label: "Billed monthly", save: "" },
  };

  const selectedPlan = plans[billing];

  const getPackageData = async() =>{
    try {
      setLoading(true);
      const response = await axios.get(`https://manypixel.innovationpixel.com/packages_api`);
      if(response.data.data){
        setPackages(response.data.data);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to get package!")
    }finally{
      setLoading(false);
    }
  }

  useEffect(()=>{
    getPackageData();
  },[])

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

          <h4 className={styles.planName}>Advanced</h4>

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
                onChange={() => setBilling(key)}
                className={styles.radioOption}
              />
            ))}
          </Form>

          <div className={styles.total}>
            <span>Billed today</span>
            <span className={styles.totalPrice}>
              ${selectedPlan.total.toLocaleString()}
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
          <PricingCard loading={loading} packages={packages}/>
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
