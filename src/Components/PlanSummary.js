import React, { useEffect, useState } from "react";
import styles from "./PlanSummary.module.css";
import { Card, Form, Modal, Button } from "react-bootstrap";
import PricingCard from "../Pages/Pricing";
import { toast } from "react-toastify";
import axios from "axios";

const PlanSummary = ({ setSelectedPlanData }) => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [billing, setBilling] = useState("yearly");
  const [showModal, setShowModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState({});
  let [plans, setPlans] = useState({});

  const getPackageData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://manypixel.innovationpixel.com/packages_api`
      );
      if (response.data.data) {
        setPackages(response.data.data);
        setSelectedPackage(response.data.data[0]);
        makeData(response.data.data[0]);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to get package!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPackageData();
  }, []);


  const currency = {
    usd: 0,
    aed: 1,
  };

  const currencyCheck = (currencyVal = "") => {
    // Todo: return currency.usd === currenyy ?  true : false;
    return currency.usd === 0 ? true : false;
  };
  const makeData = (selectedPackage) => {
    if (!selectedPackage) return;

    const isUSD = currencyCheck();

    const getPrice = (base, discount) => {
      const amount = parseFloat(base) || 0;
      const disc = parseFloat(discount) || 0;

      if (disc > 0) {
        return (amount * (1 - disc / 100)).toFixed(2);
      }
      return amount.toFixed(2);
    };

    const getTotal = (base, discount, multiplier) => {
      const price = parseFloat(getPrice(base, discount));
      return price * multiplier;
    };

    const newPlans = {
      yearly: {
        price: getPrice(
          isUSD ? selectedPackage.y_dol : selectedPackage.y_aed,
          isUSD
            ? selectedPackage.y_dol_discount
            : selectedPackage.y_aed_discount
        ),
        total: getTotal(
          isUSD ? selectedPackage.y_dol : selectedPackage.y_aed,
          isUSD
            ? selectedPackage.y_dol_discount
            : selectedPackage.y_aed_discount,
          12
        ),
        label: "Billed yearly",
        save: isUSD
          ? `SAVE ${selectedPackage.y_dol_discount || 0}%`
          : `SAVE ${selectedPackage.y_aed_discount || 0}%`,
      },
      quarterly: {
        price: getPrice(
          isUSD ? selectedPackage.quar_dol : selectedPackage.quar_aed,
          isUSD
            ? selectedPackage.quar_dol_discount
            : selectedPackage.quar_aed_discount
        ),
        total: getTotal(
          isUSD ? selectedPackage.quar_dol : selectedPackage.quar_aed,
          isUSD
            ? selectedPackage.quar_dol_discount
            : selectedPackage.quar_aed_discount,
          3
        ),
        label: "Billed quarterly",
        save: isUSD
          ? `SAVE ${selectedPackage.quar_dol_discount || 0}%`
          : `SAVE ${selectedPackage.quar_aed_discount || 0}%`,
      },
      monthly: {
        price: getPrice(
          isUSD ? selectedPackage.mon_dol : selectedPackage.mon_aed,
          isUSD
            ? selectedPackage.mon_dol_discount
            : selectedPackage.mon_aed_discount
        ),
        total: getTotal(
          isUSD ? selectedPackage.mon_dol : selectedPackage.mon_aed,
          isUSD
            ? selectedPackage.mon_dol_discount
            : selectedPackage.mon_aed_discount,
          1
        ),
        label: "Billed monthly",
        save: isUSD
          ? `SAVE ${selectedPackage.mon_dol_discount || 0}%`
          : `SAVE ${selectedPackage.mon_aed_discount || 0}%`,
      },
    };

    setPlans(newPlans);

    setSelectedPlanData({
      package: selectedPackage,
      billing,
      selectedPlan: newPlans[billing],
      currency: isUSD ? "USD" : "AED",
    });
  };

  useEffect(() => {
    makeData(selectedPackage);
  }, [selectedPackage, billing]);

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
                onChange={() => setBilling(key)}
                className={styles.radioOption}
              />
            ))}
          </Form>

          <div className={styles.total}>
            <span>Billed today</span>
            <span className={styles.totalPrice}>
              {plans[billing] &&
                `${currencyCheck() ? "$" : "AED"} ${plans[
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
          <PricingCard
            loading={loading}
            packages={packages}
            setSelectedPackage={setSelectedPackage}
            setShowModal={setShowModal}
          />
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
