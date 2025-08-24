import { PAGE_CONTENT } from "../content/page-content";
import { SelectableReply, Title } from "../styles";

const ANSWER_DATA = ["Yes", "No"];

const {
  steps: { SmokingStep: content },
} = PAGE_CONTENT;

const SmokingStep = ({ journeyData, onDataChange }) => {
  return (
    <div>
      <Title text={content.question} />
      <SelectableReply
        replyArray={ANSWER_DATA}
        active={journeyData.smoking}
        handleChange={(value) => onDataChange({ smoking: value })}
      />
    </div>
  );
};

export default SmokingStep;
