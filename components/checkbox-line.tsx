import type { NextPage } from "next";
import Checkbox from "@mui/material/Checkbox";
import CheckIcon from "@mui/icons-material/Check";

export type CheckboxLineType = {
  text: string;
};

const CheckboxLine: NextPage<CheckboxLineType> = ({ text }) => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "10px",
        textAlign: "left",
        fontSize: "16px",
        color: "#365758",
      }}

    >
      <Checkbox
        style={{ color: "#62C3C6" }}
        checkedIcon={<CheckIcon style={{ backgroundColor: "#ebf4f3" }} />}
      />
      <div style={{ flex: "1", position: "relative" }}>{text}</div>
    </div>
  );
};

export default CheckboxLine;
