import { PAGE_CONTENT } from "../content/page-content";
import { Input, Title } from "../styles";

const {
  steps: { NameStep: content },
} = PAGE_CONTENT;

const NameStep = ({ journeyData, onDataChange }) => {
  return (
    <>
      <Title text={content.question} />
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
