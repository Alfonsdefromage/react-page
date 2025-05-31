import { useState } from "react";
import StepStart from "./TFRsteps/StepStart";
import StepChoices from "./TFRsteps/StepChoices";
import "./TFR.css";

const Tfr = () => {
  const [step, setStep] = useState(0);
  const [userInput, setUserInput] = useState("");

  return (
    <div className="container">
      <div className="main-content">
        {step === 0 && <StepStart onNext={() => setStep(1)} />}
        {step === 1 && (
          <StepChoices
            value={userInput}
            onChange={setUserInput}
            onNext={() => setStep(2)}
          />
        )}
      </div>
    </div>
  );
};
export default Tfr;
