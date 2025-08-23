import { PAGE_CONTENT } from "../content/page-content";
import { Input } from "../styles/atoms/Input";

const {
  steps: { DOBStep: content },
} = PAGE_CONTENT;

const DOBStep = ({ journeyData, onDataChange }) => {
  return (
    <div>
      <h3 className="mb-6">{content.question}</h3>
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
