import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type PointType = {
  className?: string;
  text?: string;
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propTextDecoration?: CSSProperties["textDecoration"];
  propFontWeight?: CSSProperties["fontWeight"];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const Point: NextPage<PointType> = ({
  propBackgroundColor,
  text,
  propColor,
  propDisplay,
  propMinWidth,
  propTextDecoration,
  propFontWeight,
}) => {
  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
      ...getStyleValue("display", propDisplay),
      ...getStyleValue("minWidth", propMinWidth),
      ...getStyleValue("textDecoration", propTextDecoration),
      ...getStyleValue("fontWeight", propFontWeight),
    };
  }, [
    propColor,
    propDisplay,
    propMinWidth,
    propTextDecoration,
    propFontWeight,
  ]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "4px",
        textAlign: "left",
        fontSize: "16px",
        color: "#fff",
        fontFamily: "Sora",
      }}
    >
    
        <div
          style={{
            width: "10px",
            height: "16px",
            position: "relative",
            borderRadius: "16px 0px 16px 0px",
            backgroundColor: "#28e3e9",
            ...rectangleDivStyle,
          }}
        />
   
      <div
        style={{
          position: "relative",
          display: "inline-block",
          minWidth: "64px",
          cursor:"pointer",
          ...textStyle,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Point;
