import SelectableReply from "../styles/molecules/SelectableReply";

const ANSWER_DATA = ["Yes", "No"];

const ExcerciseStep = ({ journeyData, onDataChange }) => {
  return (
    <div>
      <h3 className="mb-6">Do you exercise more than 1 hour per week?</h3>
      <SelectableReply
        replyArray={ANSWER_DATA}
        active={journeyData.excersing}
        handleChange={(value) => onDataChange({ excersing: value })}
      />
    </div>
  );
};

export default ExcerciseStep;
