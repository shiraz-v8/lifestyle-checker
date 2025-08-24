import { PAGE_CONTENT } from "../content/page-content";
import { Input, Title } from "../styles";

const {
  steps: { DOBStep: content },
} = PAGE_CONTENT;

const DOBStep = ({ journeyData, onDataChange }) => {
  return (
    <div>
      <Title text={content.question} />
      <Input
        type="date"
        value={journeyData.dob || ""}
        onChange={(e) => onDataChange({ dob: e.target.value })}
        placeholder="DD/MM/YYYY"
      />
    </div>
  );
};

export default DOBStep;
