import StepperForm from "../Components/StepperForm";
import styles from "../Components/StepperForm.module.css";
import PlanSummary from "../Components/PlanSummary";
import { useState } from "react";

const GetStarted = () => {
  const [selectedPlanData, setSelectedPlanData] = useState()
  return (
    <>
      <section className={styles.started}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <StepperForm selectedPlanData={selectedPlanData}/>
            </div>
            <div className="col-lg-4">
              <PlanSummary setSelectedPlanData={setSelectedPlanData}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStarted;
