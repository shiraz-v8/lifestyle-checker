import SelectableReply from "../styles/molecules/SelectableReply";

const ANSWER_DATA = ["Yes", "No"];

const SmokingStep = ({ journeyData, onDataChange }) => {
  return (
    <div>
      <h3 className="mb-6">Do you smoke?</h3>
      <SelectableReply
        replyArray={ANSWER_DATA}
        active={journeyData.smoking}
        handleChange={(value) => onDataChange({ smoking: value })}
      />
    </div>
  );
};

export default SmokingStep;
