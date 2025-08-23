import React, { useCallback, useMemo, useState } from "react";
import Button from "../styles/atoms/Button";
import getPatient from "../api/get-patient";
import Spinner from "../styles/atoms/Spinner";
import styled from "styled-components";

const StepComponent = styled.div`
  min-height: 300px;
  width: inherit;
`;

const StepWrapper = ({
  currentStep,
  steps,
  setCurrentStep,
  journeyData,
  children,
  patient,
  setPatient,
}) => {
  const [loading, setLoading] = useState(false);
  const [malformedData, setmalformedData] = useState(false);

  const continueStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = useCallback(async () => {
    const isMalformed =
      journeyData.ref === null ||
      journeyData.surname === null ||
      journeyData.dob === null;

    setmalformedData(isMalformed);

    if (currentStep === 2 && !isMalformed) {
      setLoading(true);
      const result = await getPatient(journeyData);
      setPatient(result);
      setTimeout(() => {
        setLoading(false);
        setCurrentStep(3);
      }, 2000);
    }
  }, [journeyData, currentStep]);

  const isStepValid = useMemo(() => {
    switch (currentStep) {
      case 0:
        return journeyData.ref !== null;
      case 1:
        return journeyData.surname !== null;
      case 2:
        return true;
      case 4:
        return journeyData.drinking !== null;
      case 5:
        return journeyData.smoking !== null;
      case 6:
        return journeyData.excersing !== null;
      default:
        return true;
    }
  }, [currentStep, journeyData]);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* <h1>Step {currentStep}</h1> */}

      <div className="self-start h-[44px] flex items-center">
        {currentStep > 0 && (
          <Button variant="secondary" onClick={prevStep}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </Button>
        )}
      </div>
      <StepComponent>
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return child;

          if (currentStep === 3 && patient) {
            return React.cloneElement(child, {
              result: patient,
              continueCTA: continueStep,
            });
          }
          return child;
        })}
      </StepComponent>

      <div className="mt-4 flex gap-2">
        {(currentStep <= 1 || currentStep >= 4) && currentStep !== 7 && (
          <Button disabled={!isStepValid} onClick={continueStep}>
            Continue
          </Button>
        )}

        {currentStep === 7 && (
          <Button
            disabled={!isStepValid}
            onClick={() =>
              window.open(
                "https://github.com/shiraz-v8/lifestyle-checker",
                "_blank"
              )
            }
          >
            Read more
          </Button>
        )}

        {currentStep === 2 && (
          <Button disabled={loading} onClick={handleSubmit}>
            {loading ? <Spinner /> : "Submit"}
          </Button>
        )}
      </div>
      {malformedData && (
        <p className="text-red">Complete all the steps before proceeding.</p>
      )}
    </div>
  );
};

export default StepWrapper;
