/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import JourneyWizard from "./JourneyWizard";

// this will not block the tests
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }) => <>{children}</>,
}));

jest.mock("styled-components", () => ({
  __esModule: true,
  default: { div: () => "div" },
}));

jest.mock("../pages", () => ({
  WelcomeStep: () => <div data-testid="welcome-step">Welcome Step</div>,
  ReferenceStep: () => <div data-testid="reference-step">Reference Step</div>,
  NameStep: () => <div data-testid="name-step">Name Step</div>,
  DOBStep: () => <div data-testid="dob-step">DOB Step</div>,
  Result: () => <div data-testid="result-step">Result Step</div>,
  DrinkingStep: () => <div data-testid="drinking-step">Drinking Step</div>,
  SmokingStep: () => <div data-testid="smoking-step">Smoking Step</div>,
  ExcerciseStep: () => <div data-testid="exercise-step">Exercise Step</div>,
  ScoreStep: () => <div data-testid="score-step">Score Step</div>,
}));

jest.mock(
  "./StepWrapper",
  () =>
    ({ children, currentStep, setCurrentStep }) =>
      (
        <div>
          {children}
          <button
            data-testid="step-continue"
            onClick={() => setCurrentStep(currentStep + 1)}
          >
            Continue
          </button>
          {currentStep > 0 && (
            <button
              data-testid="step-back"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Back
            </button>
          )}
        </div>
      )
);

describe("JourneyWizard", () => {
  it("renders the first step (WelcomeStep) by default", () => {
    render(<JourneyWizard />);
    expect(screen.getByTestId("welcome-step")).toBeInTheDocument();
  });

  it("navigates forward and backward through steps", async () => {
    render(<JourneyWizard />);

    expect(screen.getByTestId("welcome-step")).toBeInTheDocument();

    await userEvent.click(screen.getByTestId("step-continue"));
    expect(screen.getByTestId("reference-step")).toBeInTheDocument();

    await userEvent.click(screen.getByTestId("step-continue"));
    expect(screen.getByTestId("name-step")).toBeInTheDocument();

    await userEvent.click(screen.getByTestId("step-back"));
    expect(screen.getByTestId("reference-step")).toBeInTheDocument();
  });
});
