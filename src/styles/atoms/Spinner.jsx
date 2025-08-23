import React from "react";

const Spinner = ({ color = "#ffffff", size = 16 }) => {
  const style = {
    borderColor: color,
    borderTopColor: "transparent",
    width: size,
    height: size,
  };

  return (
    <div
      style={style}
      className="border-2 rounded-full animate-spin mx-auto"
    ></div>
  );
};

export default Spinner;
