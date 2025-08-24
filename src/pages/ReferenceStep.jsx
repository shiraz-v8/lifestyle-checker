import { PAGE_CONTENT } from "../content/page-content";
import { Input, Title } from "../styles";

const {
  steps: { ReferenceStep: content },
} = PAGE_CONTENT;

const ReferenceStep = ({ journeyData, onDataChange }) => {
  return (
    <>
      <Title text={content.question} />
      <Input
        type="text"
        value={journeyData.ref}
        onChange={(e) => onDataChange({ ref: e.target.value })}
        onBlur={() => {}}
        placeholder="Enter your NHS number"
        error={false}
        maxLength={10}
      />
    </>
  );
};

export default ReferenceStep;
