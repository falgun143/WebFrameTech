import type { NextPage } from "next";
import { useMemo, useState, type CSSProperties } from "react";
import Availability from "./availability";
import CheckboxTag from "./checkbox-tag";
import FrameComponent1 from "./frame-component1";
import Button from "./button";

export type FrameComponentType = {
  secondtag?: boolean;
  img?: string;
  tHC24?: string;
  navcoraTHCSpotlightPortoMast?: string;
  maintag?: string;
  propBackgroundColor?: string;
  propBackgroundColor1?: string;
  propColor?: string;
  propMinWidth?: string;
  tHC241?: string;
  propFlex?: string;
  propMinWidth2?: string;
  genetik?: string;
  genetik1?: string;
  indica?: string;
  indica1?: string;
  propMinWidth3?: string;
  propMinWidth4?: string;
  propBorder?: CSSProperties["border"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propGap?: CSSProperties["gap"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propWidth1?: CSSProperties["width"];
  propMinWidth1?: CSSProperties["minWidth"];
  propBorder1?: CSSProperties["border"];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const FrameComponent: NextPage<FrameComponentType> = ({
  propBorder,
  propBoxShadow,
  propGap,
  secondtag,
  img,
  propBorder1,
  navcoraTHCSpotlightPortoMast,
  maintag,
  propBackgroundColor,
  propBackgroundColor1,
  propColor,
  propMinWidth,
  propFlex,
  propMinWidth2,
  genetik,
  genetik1,
  indica,
  indica1,
  propMinWidth3,
  propMinWidth4,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("border", propBorder),
      ...getStyleValue("boxShadow", propBoxShadow),
    };
  }, [propBorder, propBoxShadow]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("gap", propGap),
    };
  }, [propGap]);

  const bodyStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("border", propBorder1),
    };
  }, [propBorder1]);
  const [select, setSelect] = useState("CBD <1%");

  return (
    <div
      style={{
        width: "310px",
        borderRadius: "30px 0px 30px 0px",
        backgroundColor: "#fff",
        border: "2px solid #28e3e9",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "12px",
        textAlign: "left",
        fontSize: "12px",
        color: "#a10b0b",
        fontFamily: "Sora",
        ...frameDivStyle,
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 20px 0px",
          ...frameDiv1Style,
        }}
      >
        <Availability
          propBackgroundColor={propBackgroundColor}
          propBackgroundColor1={propBackgroundColor1}
          maintag={maintag}
          propColor={propColor}
          propMinWidth={propMinWidth}
        />
        {secondtag && (
          <div
            style={{
              alignSelf: "stretch",
              width: "50px",
              borderRadius: "30px",
              backgroundColor: "rgba(98, 195, 198, 0.1)",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "3px 12px",
              boxSizing: "border-box",
              gap: "4px",
              color: "#116a6c",
            }}
          >
            <div
              style={{
                height: "4px",
                width: "4px",
                position: "relative",
                borderRadius: "50%",
                backgroundColor: "#0d7052",
                display: "none",
              }}
            />
            {secondtag && (
              <div
                style={{
                  alignSelf: "stretch",
                  width: "26px",
                  position: "relative",
                  letterSpacing: "0.01em",
                  fontWeight: "300",
                }}
              >
                Neu
              </div>
            )}
          </div>
        )}
      </div>
      <img
        style={{
          alignSelf: "stretch",
          height: "150px",
          position: "relative",
          maxWidth: "100%",
          overflow: "hidden",
          flexShrink: "0",
          objectFit: "cover",
        }}
        alt=""
        src={img}
      />
      <div
        style={{
          alignSelf: "stretch",
          boxShadow: "0px 0px 10px rgba(7, 64, 64, 0.1)",
          borderRadius: "0px 0px 30px 0px",
          backgroundColor: "rgba(98, 195, 198, 0.3)",
          border: "2px solid #28e3e9",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "21px 22px",
          gap: "30px",
          fontSize: "16px",
          color: "#365758",
          ...bodyStyle,
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "24px",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "20px",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "16px",
              }}
            >
              <div
                style={{
                  borderRadius: "4px",
                  backgroundColor: "rgba(98, 195, 198, 0.3)",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2px 9px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.01em",
                    fontWeight: "600",
                    display: "inline-block",
                    minWidth: "55px",
                  }}
                >
                  Canify
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  color: "#116a6c",
                }}
              >
                <CheckboxTag
                  text={`THC 18%`}
                  propFlex={propFlex}
                  select={select}
                  setSelect={setSelect}
                  propMinWidth={propMinWidth2}
                />

                <CheckboxTag
                  text={`CBD <1%`}
                  propFlex={propFlex}
                  select={select}
                  setSelect={setSelect}
                  propMinWidth={propMinWidth2}
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: "0",
                  }}
                  alt=""
                  src="/iconbestrahlt.svg"
                />
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "54px",
                position: "relative",
                fontSize: "18px",
                letterSpacing: "0.01em",
                fontWeight: "600",
                color: "#116a6c",
                display: "inline-block",
                flexShrink: "0",
              }}
            >
              {navcoraTHCSpotlightPortoMast}
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "8px",
            }}
          >
            <FrameComponent1
              genetik={genetik}
              indica={indica}
              propMinWidth={propMinWidth3}
            />
            <FrameComponent1
              genetik={genetik1}
              indica={indica1}
              propMinWidth={propMinWidth4}
            />
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "7px",
            fontSize: "24px",
            color: "#62c3c6",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "2px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "4px",
              }}
            >
              <h3
                style={{
                  margin: "0",
                  position: "relative",
                  fontSize: "inherit",
                  letterSpacing: "0.01em",
                  fontWeight: "800",
                  fontFamily: "inherit",
                  display: "inline-block",
                  minWidth: "18px",
                }}
              >
                €
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "2px",
                  color: "#116a6c",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.01em",
                    fontWeight: "800",
                    display: "inline-block",
                    minWidth: "62px",
                  }}
                >
                  11,66
                </div>
                <div
                  style={{
                    position: "relative",
                    fontSize: "20px",
                    letterSpacing: "0.01em",
                    color: "#365758",
                    display: "inline-block",
                    minWidth: "5px",
                  }}
                >
                  1
                </div>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                fontSize: "12px",
                letterSpacing: "0.01em",
                fontWeight: "300",
                color: "#365758",
                display: "inline-block",
                minWidth: "70px",
              }}
            >
              pro Gramm
            </div>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
