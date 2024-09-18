import React, { useState } from "react";
import "./index.css";

const Events = () => {
  const [isChanged, setIsChanged] = useState(false);

  const toggleChange = () => {
    if (isChanged) {
      setIsChanged(false);
    } else {
      setIsChanged(true);
    }
  };

  return (
    <>
      <div style={{ backgroundColor: isChanged ? "green" : "red" }}>
        <button onClick={toggleChange}>
          {isChanged ? "Changed!!" : "Click Here"}
        </button>
      </div>
    </>
  );
};

export default Events;
