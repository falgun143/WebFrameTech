import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type AvailabilityType = {

  maintag?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propMinWidth?: CSSProperties["minWidth"];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const Availability: NextPage<AvailabilityType> = ({
  propBackgroundColor,
  propBackgroundColor1,
  maintag,
  propColor,
  propMinWidth,
}) => {
  const availabilityStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const ellipseDivStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor1),
    };
  }, [propBackgroundColor1]);

  const maintagStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
      ...getStyleValue("minWidth", propMinWidth),
    };
  }, [propColor, propMinWidth]);

  return (
    <div
      style={{
        borderRadius: "30px",
        backgroundColor: "rgba(161, 11, 11, 0.05)",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "3px 12px",
        gap: "4px",
        textAlign: "left",
        fontSize: "12px",
        color: "#a10b0b",
        fontFamily: "Sora",
        ...availabilityStyle,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "5.5px 0px 0px",
        }}
      >
        <div
          style={{
            width: "4px",
            height: "4px",
            position: "relative",
            borderRadius: "50%",
            backgroundColor: "#a10b0b",
            ...ellipseDivStyle,
          }}
        />
      </div>
      <div
        style={{
          position: "relative",
          letterSpacing: "0.01em",
          fontWeight: "300",
          display: "inline-block",
          minWidth: "87px",
          ...maintagStyle,
        }}
      >
        {maintag}
      </div>
    </div>
  );
};

export default Availability;
