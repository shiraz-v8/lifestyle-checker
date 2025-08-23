import React, { useState } from "react";
import { Input } from "../styles/atoms/Input";

const NameStep = ({ journeyData, onDataChange }) => {
  const [name, setname] = useState("");
  return (
    <>
      <h3 className="mb-6">Enter your surname</h3>
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
