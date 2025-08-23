import { PAGE_CONTENT } from "../content/page-content";
import SelectableReply from "../styles/molecules/SelectableReply";

const ANSWER_DATA = ["Yes", "No"];

const {
  steps: { SmokingStep: content },
} = PAGE_CONTENT;

const SmokingStep = ({ journeyData, onDataChange }) => {
  return (
    <div>
      <h3 className="mb-6">{content.question}</h3>
      <SelectableReply
        replyArray={ANSWER_DATA}
        active={journeyData.smoking}
        handleChange={(value) => onDataChange({ smoking: value })}
      />
    </div>
  );
};

export default SmokingStep;
