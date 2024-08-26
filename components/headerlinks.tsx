import { useState } from "react";

const HeaderLinks = () => {
  const [selected, setSelected] = useState("Cannabis Blüten");

  const links = ["Home", "Livebestand", "Cannabis Blüten"];

  const handleSelect = (text: string) => {
    setSelected(text);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        fontSize: "16px",
        color: "#62c3c6",
        fontFamily: "Sora",
      }}
    >
      {links.map((link, index) => (
        <div key={link} style={{ display: "flex", alignItems: "center",gap:"20px" }}>
          <a
            style={{
              cursor: "pointer",
              color: selected === link ? "#045a5c" : "inherit",
            }}
            onClick={() => handleSelect(link)}
          >
            {link}
          </a>
          {index < links.length - 1 && (
            <img
              style={{ height: "20px", width: "20px" }}
              alt="rightarrow"
              src="/checkboxiconarrowright.svg"
              
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default HeaderLinks;
