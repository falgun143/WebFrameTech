import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Button1Type = {
  bestellprozess?: string;
  propBorder?: CSSProperties["border"];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const Button1: NextPage<Button1Type> = ({
  propBorder,
  bestellprozess,
}) => {
  const button2Style: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("border", propBorder),
    };
  }, [propBorder]);

  return (
    <button
      style={{
        cursor: "pointer",
        border: "2px solid #ecfeaa",
        padding: "4px 70px 5px",
        backgroundColor: "transparent",
        borderRadius: "24px 0px 24px 0px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        ...button2Style,
      }}
    >
      <div
        style={{
          position: "relative",
          fontSize: "14px",
          letterSpacing: "0.01em",
          fontFamily: "Sora",
          color: "#045a5c",
          textAlign: "left",
          display: "inline-block",
          minWidth: "106px",
        }}
      >
        {bestellprozess}
      </div>
    </button>
  );
};

export default Button1;
