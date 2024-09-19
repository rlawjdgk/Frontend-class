import React from "react";
import "./Button1.css";

const Biutton1 = ({ text, type }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";
  return (
    <button className={["Button", `Button_${btnType}`].join(" ")}>
      Button1
    </button>
  );
};

export default Biutton1;
