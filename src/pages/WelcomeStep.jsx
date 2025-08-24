import { PAGE_CONTENT } from "../content/page-content";
import { Title } from "../styles";

const {
  steps: { WelcomeStep: content },
} = PAGE_CONTENT;

const WelcomeStep = () => {
  return (
    <>
      <Title text={content.heading} />
      <p className="mb-4">{content.description}</p>
    </>
  );
};

export default WelcomeStep;
