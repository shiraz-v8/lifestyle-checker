import { Input } from "../styles/atoms/Input";
import { PAGE_CONTENT } from "../content/page-content";

const {
  steps: { NameStep: content },
} = PAGE_CONTENT;

const NameStep = ({ journeyData, onDataChange }) => {
  return (
    <>
      <h3 className="mb-6">{content.question}</h3>
      <Input
        type="text"
        value={journeyData.surname}
        onChange={(e) => onDataChange({ surname: e.target.value })}
        onBlur={() => {}}
        placeholder="Enter your name"
        error={false}
        maxLength={10}
      />
    </>
  );
};

export default NameStep;
