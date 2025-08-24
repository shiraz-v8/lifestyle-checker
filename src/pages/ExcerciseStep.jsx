import { PAGE_CONTENT } from "../content/page-content";
import { SelectableReply, Title } from "../styles";

const ANSWER_DATA = ["Yes", "No"];

const {
  steps: { ExcerciseStep: content },
} = PAGE_CONTENT;

const ExcerciseStep = ({ journeyData, onDataChange }) => {
  return (
    <div>
      <Title text={content.question} />
      <SelectableReply
        replyArray={ANSWER_DATA}
        active={journeyData.excersing}
        handleChange={(value) => onDataChange({ excersing: value })}
      />
    </div>
  );
};

export default ExcerciseStep;
