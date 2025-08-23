import SelectableReply from "../styles/molecules/SelectableReply";

const ANSWER_DATA = ["Yes", "No"];

const DrinkingStep = ({ journeyData, onDataChange }) => {
  return (
    <div>
      <h3 className="mb-6">Do you drink on more than 2 days a week?</h3>
      <SelectableReply
        replyArray={ANSWER_DATA}
        active={journeyData.drinking}
        handleChange={(value) => onDataChange({ drinking: value })}
      />
    </div>
  );
};

export default DrinkingStep;
