export const PAGE_CONTENT = {
  steps: {
    WelcomeStep: {
      heading: "Welcome to Lifestyle Checker",
      description:
        "This web app helps you visualize and track your lifestyle data. " +
        "Answer a few simple questions to get started and see personalized insights.",
    },
    ReferenceStep: { question: "Enter your NHS number" },
    NameStep: { question: "Enter your surname" },
    DOBStep: { question: "Enter your Date of Birth" },
    Result: {
      proceed: "Let's explore your lifestyle",
      stop: "Sorry",
      cta: "Continue",
    },
    DrinkingStep: { question: "Do you drink on more than 2 days a week?" },
    SmokingStep: { question: "Do you smoke?" },
    ExcerciseStep: { question: "Do you exercise more than 1 hour per week?" },
    ScoreStep: {
      title: "Here's your score",
      subHeading: "You have scored ",
      loadingText: "Calculating",
    },
  },
};
