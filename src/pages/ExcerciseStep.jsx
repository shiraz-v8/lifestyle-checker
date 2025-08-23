import { PAGE_CONTENT } from "../content/page-content";
import SelectableReply from "../styles/molecules/SelectableReply";

const ANSWER_DATA = ["Yes", "No"];

const {
  steps: { ExcerciseStep: content },
} = PAGE_CONTENT;

const ExcerciseStep = ({ journeyData, onDataChange }) => {
  return (
    <div>
      <h3 className="mb-6">{content.question}</h3>
      <SelectableReply
        replyArray={ANSWER_DATA}
        active={journeyData.excersing}
        handleChange={(value) => onDataChange({ excersing: value })}
      />
    </div>
  );
};

export default ExcerciseStep;
