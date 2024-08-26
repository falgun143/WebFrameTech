import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type CheckboxTagType = {
  propFlex?: CSSProperties["flex"];
  text: string;
  propMinWidth?: CSSProperties["minWidth"];
  select: string;
  setSelect: (value: string) => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const CheckboxTag: NextPage<CheckboxTagType> = ({
  propFlex,
  text,
  propMinWidth,
  select,
  setSelect,
}) => {
  const checkboxTagStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("flex", propFlex),
    };
  }, [propFlex]);

  const tHC24Style: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("minWidth", propMinWidth),
    };
  }, [propMinWidth]);

  const handleClick = () => {
    setSelect(text);
  };

  return (
    <button
      style={{
        cursor: "pointer",
        border: "none",
        padding: "4px 20px",
        backgroundColor: text === select ? "#62c3c6" : "#fff",
        flex: "1",
        borderRadius: "4px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        whiteSpace: "nowrap",
        ...checkboxTagStyle,
      }}
      onClick={handleClick}
    >
      <div
        style={{
          position: "relative",
          fontSize: "16px",
          fontFamily: "Sora",
          color: text === select ? "#fff" : "#116A6C",
          textAlign: "left",
          display: "inline-block",
          minWidth: "70px",
          ...tHC24Style,
        }}
      >
        {text}
      </div>
    </button>
  );
};

export default CheckboxTag;
