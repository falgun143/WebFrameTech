import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import * as React from "react";
import Slider, {
  SliderThumb,
} from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
export type SlideType = {
  text?: string;
  prop?: string;
  prop1?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};


 <div
style={{
  position: "absolute",
  top: "0px",
  left: "37.3px",

  backgroundColor: "#62c3c6",

}}
/> 
const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: "#62C3C6",
  height: 3,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    width: "15.4px",
  height: "20px",
  zIndex: "2",
  borderRadius: "15.38px 0px 15.38px 0px",
    backgroundColor: "#62c3c6",
    border: "1px solid currentColor",
    "&:hover": {
      boxShadow: "0 0 0 4px rgba(98, 195, 198, 0.3)",
    },
    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  "& .MuiSlider-track": {
    height: 5,
  },
  "& .MuiSlider-rail": {
    color: "rgba(98, 195, 198, 0.3)",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 7,
  },
}));

interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> {}

function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

const Slide: NextPage<SlideType> = ({
  text,
  prop,
  propMinWidth,
  prop1,
  propMinWidth1,
}) => {
  const divStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("minWidth", propMinWidth),
    };
  }, [propMinWidth]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("minWidth", propMinWidth1),
    };
  }, [propMinWidth1]);

  return (
    <div
      style={{
        alignSelf: "stretch",
        borderBottom: "1px solid rgba(98, 195, 198, 0.3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "0px 0px 28px",
        gap: "20px",
        textAlign: "center",
        fontSize: "18px",
        color: "#365758",
        fontFamily: "Sora",
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          position: "relative",
          fontWeight: "600",
        }}
      >
        {text}
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "8px",
          textAlign: "left",
          fontSize: "16px",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <div style={{ height: "20px", flex: "1", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                borderRadius: "10px",
                backgroundColor: "rgba(98, 195, 198, 0.3)",
                width: "100%",
                height: "100%",
                display: "none",
              }}
            />
            {/* SLider */}
            <Box sx={{ mb: 2 }}>
              <AirbnbSlider
                slots={{ thumb: AirbnbThumbComponent }}
                getAriaLabel={(index) =>
                  index === 0 ? "Minimum price" : "Maximum price"
                }
                defaultValue={[20, 40]}
              />
            </Box>
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "4px",
          }}
        >
          <div
            style={{
              flex: "1",
              borderRadius: "20px",
              backgroundColor: "rgba(129, 145, 145, 0.1)",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "2px 10px",
              whiteSpace: "nowrap",
            }}
          >
            <div
              style={{
                position: "relative",
                display: "inline-block",
                minWidth: "25px",
                ...divStyle,
              }}
            >
              {prop}
            </div>
          </div>
          <div
            style={{
              position: "relative",
              fontSize: "18px",
              color: "#585555",
              display: "inline-block",
              minWidth: "10px",
            }}
          >
            -
          </div>
          <div
            style={{
              flex: "1",
              borderRadius: "20px",
              backgroundColor: "rgba(129, 145, 145, 0.1)",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "2px 10px",
              whiteSpace: "nowrap",
            }}
          >
            <div
              style={{
                position: "relative",
                display: "inline-block",
                minWidth: "34px",
                ...div1Style,
              }}
            >
              {prop1}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
