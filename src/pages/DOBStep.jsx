import { Input } from "../styles/atoms/Input";

const DOBStep = ({ journeyData, onDataChange }) => {
  return (
    <div>
      <h3 className="mb-6">Enter your Date of Birth</h3>
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
