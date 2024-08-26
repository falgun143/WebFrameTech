import type { NextPage } from "next";
import Point from "./point";
import IconCart from "./icon-cart";
import Button2 from "./button2";
import { IconButton, TextField } from "@mui/material";

const HeaderDesktop = () => {
  return (
    <header
      style={{
        alignSelf: "stretch",
        borderRadius: "24px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        gap: "30px",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "16px",
        color: "#62c3c6",
        fontFamily: "Sora",
      }}
    
    >
      <img
        style={{
          height: "44px",
          width: "107.7px",
          position: "relative",
          overflow: "hidden",
          flexShrink: "0",
          display: "none",
        }}
        alt=""
        src="/logo.svg"
      />
      <div
        style={{
          flex: "1",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "30px",
          maxWidth: "100%",
        }}
      >
        {/* Search Bar */}
        <form
          style={{
            flex: "1",
            borderRadius: "30px",
            backgroundColor: "#eef7f7",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "0px 16px",
            alignItems: "center",
            maxWidth: "100%",
          }}
        >
          <TextField
            id="search-bar"
            label="Suchen"
            variant="standard"
            size="medium"
            InputProps={{
              disableUnderline: true, // Removes the underline
            }}
            InputLabelProps={{
              sx: {
                color: "#28e3e9", // Set the label color to red when focused
                "&.Mui-focused": {
                  color: "#28e3e9", // Keeps the label color red when focused
                },
              },
            }}
            sx={{
              flex: 1,
              "& .MuiInputBase-input": {
                color: "#28e3e9", // Sets the input text color
              },
              "& .MuiInputBase-input:focus": {
                color: "#28e3e9", // Changes input text color when focused
              },
            }}
            style={{
              marginBottom: 10,
            }}
          />
          <img src="/iconsearch.svg" alt="Search" />
        </form>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "50px",
            maxWidth: "100%",
            fontSize: "12px",
            color: "#28e3e9",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "6.5px 0px 0px",
              boxSizing: "border-box",
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "30px",
              }}
            >
              <Point
                propBackgroundColor="#28e3e9"
                text="Rezept einlösen"
                propColor="#045a5c"
                propDisplay="unset"
                propMinWidth="unset"
                propTextDecoration="none"
                propFontWeight="700"
              />
              <Point
                propBackgroundColor="rgba(98, 195, 198, 0.3)"
                text="Live Bestand"
                propColor="#045a5c"
                propDisplay="inline-block"
                propMinWidth="103px"
                propTextDecoration="none"
                propFontWeight="unset"
              />
              <Point
                propBackgroundColor="rgba(98, 195, 198, 0.3)"
                text="Videosprechstunde"
                propColor="#045a5c"
                propDisplay="unset"
                propMinWidth="unset"
                propTextDecoration="none"
                propFontWeight="unset"
              />
              <Point
                propBackgroundColor="rgba(98, 195, 198, 0.3)"
                text="FAQs"
                propColor="#045a5c"
                propDisplay="inline-block"
                propMinWidth="43px"
                propTextDecoration="none"
                propFontWeight="unset"
              />
              <Point
                propBackgroundColor="rgba(98, 195, 198, 0.3)"
                text="Kontakt"
                propColor="#045a5c"
                propDisplay="inline-block"
                propMinWidth="64px"
                propTextDecoration="none"
                propFontWeight="unset"
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "36px",
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "1.5px 0px 0px",
                boxSizing: "border-box",
              }}
            >
              <IconCart />
            </div>
            <Button2 />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderDesktop;
