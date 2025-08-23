import { PAGE_CONTENT } from "../content/page-content";

const {
  steps: { WelcomeStep: content },
} = PAGE_CONTENT;

const WelcomeStep = () => {
  return (
    <>
      <h3 className="mb-6">{content.heading}</h3>
      <p className="mb-4">{content.description}</p>
    </>
  );
};

export default WelcomeStep;
