import { Input } from "../styles/atoms/Input";

const ReferenceStep = ({ journeyData, onDataChange }) => {
  return (
    <>
      <h3 className="mb-6">Enter your NHS number</h3>
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
