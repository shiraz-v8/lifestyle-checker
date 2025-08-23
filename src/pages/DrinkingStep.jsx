import { PAGE_CONTENT } from "../content/page-content";
import SelectableReply from "../styles/molecules/SelectableReply";

const ANSWER_DATA = ["Yes", "No"];

const {
  steps: { DrinkingStep: content },
} = PAGE_CONTENT;

const DrinkingStep = ({ journeyData, onDataChange }) => {
  return (
    <div>
      <h3 className="mb-6">{content.question}</h3>
      <SelectableReply
        replyArray={ANSWER_DATA}
        active={journeyData.drinking}
        handleChange={(value) => onDataChange({ drinking: value })}
      />
    </div>
  );
};

export default DrinkingStep;
