import { PAGE_CONTENT } from "../content/page-content";
import { SelectableReply, Title } from "../styles";

const ANSWER_DATA = ["Yes", "No"];

const {
  steps: { DrinkingStep: content },
} = PAGE_CONTENT;

const DrinkingStep = ({ journeyData, onDataChange }) => {
  return (
    <div>
      <Title text={content.question} />
      <SelectableReply
        replyArray={ANSWER_DATA}
        active={journeyData.drinking}
        handleChange={(value) => onDataChange({ drinking: value })}
      />
    </div>
  );
};

export default DrinkingStep;
