import StepperForm from "../Components/StepperForm";
import styles from "../Components/StepperForm.module.css";
import PlanSummary from "../Components/PlanSummary";

const GetStarted = () => {
  return (
    <>
      <section className={styles.started}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <StepperForm />
            </div>
            <div className="col-lg-4">
              <PlanSummary />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStarted;
