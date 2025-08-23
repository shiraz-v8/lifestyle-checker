import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReferenceStep from "../pages/ReferenceStep";
import NameStep from "../pages/NameStep";
import DOBStep from "../pages/DOBStep";

import Result from "../pages/Result";
import styled from "styled-components";
import DrinkingStep from "../pages/DrinkingStep";
import SmokingStep from "../pages/SmokingStep";
import ExcerciseStep from "../pages/ExcerciseStep";
import ScoreStep from "../pages/ScoreStep";
import StepWrapper from "./StepWrapper";

const steps = [
  ReferenceStep,
  NameStep,
  DOBStep,
  Result,
  DrinkingStep,
  SmokingStep,
  ExcerciseStep,
  ScoreStep,
];

const JourneyWindow = styled.div`
  height: 80vh;
  justify-content: center;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
`;

const JourneyWizard = () => {
  const [patient, setPatient] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [journeyData, setJourneyData] = useState({
    ref: 222333444,
    surname: null,
    dob: null,
    drinking: null,
    smoking: null,
    excersing: null,
  });

  const handleDataChange = (data) => {
    setJourneyData((prev) => ({ ...prev, ...data }));
  };

  const StepComponent = steps[currentStep];

  return (
    <JourneyWindow>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          style={{ position: "relative", overflow: "hidden" }}
        >
          <StepWrapper
            currentStep={currentStep}
            steps={steps}
            setCurrentStep={setCurrentStep}
            journeyData={journeyData}
            patient={patient}
            setPatient={setPatient}
          >
            <StepComponent
              journeyData={journeyData}
              onDataChange={handleDataChange}
            />
          </StepWrapper>
        </motion.div>
      </AnimatePresence>
    </JourneyWindow>
  );
};

export default JourneyWizard;
