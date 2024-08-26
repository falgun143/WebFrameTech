import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent1Type = {
  className?: string;
  genetik?: string;
  indica?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  className = "",
  genetik,
  indica,
  propMinWidth,
}) => {
  const indicaStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("minWidth", propMinWidth),
    };
  }, [propMinWidth]);

  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "flex-start",
        gap: "8px",
        textAlign: "left",
        fontSize: "16px",
        color: "#365758",
        fontFamily: "Sora",
      }}
      className={className}
    >
      <div
        style={{
          position: "relative",
          display: "inline-block",
          minWidth: "65px",
        }}
      >
        {genetik}
      </div>
      <div
        style={{
          height: "1px",
          flex: "1",
          position: "relative",
          borderTop: "1px dashed rgba(98, 195, 198, 0.3)",
          boxSizing: "border-box",
        }}
      />
      <div
        style={{
          position: "relative",
          display: "inline-block",
          minWidth: "56px",
          ...indicaStyle,
        }}
      >
        {indica}
      </div>
    </div>
  );
};

export default FrameComponent1;
