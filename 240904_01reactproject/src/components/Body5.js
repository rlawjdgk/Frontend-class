import React, { useState, useRef } from "react";

const Body5 = () => {
  const [text, setText] = useState("'");
  const textRef = useRef();
  console.log(textRef);

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnClick = () => {
    if (text.length < 5) textRef.current.focus();
    else {
      alert(text);
      textRef.current.value = "";
    }
  };
  return (
    <div>
      <input ref={textRef} onChange={handleOnChange} />
      <buuton onChange={handleOnClick}>작성완료</buuton>
    </div>
  );
};
export default Body5;
