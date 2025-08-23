import { useState } from "react";
import styled from "styled-components";

const Item = styled.button`
  background-color: ${(props) => (props.active ? "#2f6dff" : "#d7d7d7")};
  color: ${(props) => (props.active ? "white" : "black")};
  padding: 10px 25px;
  height: 80px;
  width: 80px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s, color 0.15s, border 0.14s, transform 0.13s;

  &:active {
    transform: scale(0.98);
  }
`;

const SelectableReply = ({ replyArray = [], active, handleChange }) => {
  const [selected, setSelected] = useState(active);

  const onClick = (answer) => {
    setSelected(answer);
    handleChange(answer);
  };

  return (
    <div className="flex flex-row justify-center flex-wrap gap-3">
      {replyArray.map((answer, idx) => (
        <Item
          key={idx}
          active={selected === answer}
          onClick={() => onClick(answer)}
        >
          {answer}
        </Item>
      ))}
    </div>
  );
};

export default SelectableReply;
