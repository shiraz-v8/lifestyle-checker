import React, { useCallback, useMemo, useState } from "react";

import styled from "styled-components";
import { getPatient } from "../api";
import { Button, Spinner, Text } from "../styles";

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

    if (currentStep === 3 && !isMalformed) {
      setLoading(true);
      const result = await getPatient(journeyData);
      setPatient(result);
      setTimeout(() => {
        setLoading(false);
        setCurrentStep(4);
      }, 2000);
    }
  }, [journeyData, currentStep, setCurrentStep, setPatient]);

  const isStepValid = useMemo(() => {
    switch (currentStep) {
      case 0:
        return true;
      case 1:
        return journeyData.ref !== null && journeyData.ref !== "";
      case 2:
        return journeyData.surname !== null && journeyData.surname !== "";
      case 3:
        return journeyData.dob !== null && journeyData.dob !== "";
      case 5:
        return journeyData.drinking !== null;
      case 6:
        return journeyData.smoking !== null;
      case 7:
        return journeyData.exercising !== null;
      default:
        return true;
    }
  }, [currentStep, journeyData]);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Back button */}
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

          if (currentStep === 4 && patient) {
            return React.cloneElement(child, {
              result: patient,
              continueCTA: continueStep,
            });
          }
          return child;
        })}
      </StepComponent>

      {/*Continue button - 0 to 2 continue steps. 3 submit step, onwards continue */}

      <div className="mt-4 flex gap-2">
        {(currentStep >= 0 && currentStep <= 2) ||
        (currentStep > 4 && currentStep <= 7) ? (
          <Button disabled={!isStepValid} onClick={continueStep}>
            Continue
          </Button>
        ) : null}

        {currentStep === 8 && (
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

        {currentStep === 3 && (
          <Button disabled={loading} onClick={handleSubmit}>
            {loading ? <Spinner /> : "Submit"}
          </Button>
        )}
      </div>
      {malformedData && (
        <Text text="Complete all the steps before proceeding." />
      )}
    </div>
  );
};

export default StepWrapper;
