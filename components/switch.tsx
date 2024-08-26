"use client";
import { useState } from "react";

const Switch = () => {
  const [toogle, setToogle] = useState(false);

  function handleChange() {
    setToogle((prev) => !prev);
  }
  return (
    <div
      style={{ width: "27px", height: "15px", position: "relative" }}
      onClick={() => handleChange()}
    >
      <div
        style={{
          position: "absolute",
          top: "3px",
          left: "0px",
          borderRadius: "20px",
          backgroundColor: "rgba(98, 195, 198, 0.3)",
          width: "24px",
          height: "9px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: !toogle ? "12px" : "0px",
          borderRadius: "50%",
          backgroundColor: "#62c3c6",
          width: "15px",
          height: "15px",
          zIndex: "1",
        }}
      />
    </div>
  );
};

export default Switch;
