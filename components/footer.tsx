import { Box } from "@mui/material";
import Point from "./point";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          alignSelf: "stretch",
          boxShadow: "0px 0px 20px rgba(7, 64, 64, 0.05)",
          borderRadius: "30px 30px 0px 0px",
          backgroundColor: "#1a8d91",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "40px 310px",
          boxSizing: "border-box",
          gap: "71px",
          maxWidth: "100%",
          textAlign: "left",
          fontSize: "12px",
          color: "rgba(255, 255, 255, 0.5)",
          fontFamily: "Sora",
          flexWrap: "nowrap",
          "@media (max-width: 1350px)": {
            flexWrap: "wrap",
            padding: "40px 20px",
          },
        }}
      >
        <div
          style={{
            width: "149px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "49px 0px 0px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "12px",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "0.01em",
                fontWeight: "300",
                display: "inline-block",
                minWidth: "28px",
              }}
            >
              AGB
            </div>
            <div
              style={{
                position: "relative",
                letterSpacing: "0.01em",
                fontWeight: "300",
                display: "inline-block",
                minWidth: "69px",
              }}
            >
              Impressum
            </div>
            <div
              style={{
                position: "relative",
                letterSpacing: "0.01em",
                fontWeight: "300",
                display: "inline-block",
                minWidth: "78px",
              }}
            >
              Datenschutz
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "25px",
            maxWidth: "100%",
            fontSize: "16px",
            color: "#fff",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "30px",
            }}
          >
            <Point
              propBackgroundColor="#28e3e9"
              text="Rezept einlösen"
              propColor="#fff"
              propDisplay="inline-block"
              propMinWidth="129px"
              propTextDecoration="unset"
              propFontWeight="unset"
            />
            <Point
              propBackgroundColor="#28e3e9"
              text="Live Bestand"
              propColor="#fff"
              propDisplay="inline-block"
              propMinWidth="103px"
              propTextDecoration="unset"
              propFontWeight="unset"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "30px",
            }}
          >
            <Point
              propBackgroundColor="#28e3e9"
              text="Videosprechstunde"
              propColor="#fff"
              propDisplay="unset"
              propMinWidth="unset"
              propTextDecoration="unset"
              propFontWeight="unset"
            />
            <Point
              propBackgroundColor="#28e3e9"
              text="FAQs"
              propColor="#fff"
              propDisplay="inline-block"
              propMinWidth="43px"
              propTextDecoration="unset"
              propFontWeight="unset"
            />
            <Point text="Kontakt" />
          </div>
        </div>
        <div
          style={{
            width: "369px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            padding: "0px 35px 0px 0px",
            boxSizing: "border-box",
            maxWidth: "100%",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "12px",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "0.01em",
                fontWeight: "300",
                display: "inline-block",
                minWidth: "56px",
              }}
            >
              Standort
            </div>
            <div
              style={{
                position: "relative",
                fontSize: "16px",
                fontWeight: "800",
                fontFamily: "Manrope",
                color: "#fff",
              }}
            >
              <p style={{ margin: "0" }}>Bergstraße 49 - 57</p>
              <p style={{ margin: "0" }}>69469 Weinheim</p>
              <p style={{ margin: "0" }}>(3 Glocken Quartier)</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "12px",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "0.01em",
                fontWeight: "300",
                display: "inline-block",
                minWidth: "46px",
              }}
            >
              Telefon
            </div>
            <div
              style={{
                position: "relative",
                fontSize: "16px",
                fontWeight: "800",
                fontFamily: "Manrope",
                color: "#fff",
                display: "inline-block",
                minWidth: "114px",
              }}
            >
              0223 545 5250
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "12px",
          }}
        >
          <div
            style={{
              position: "relative",
              letterSpacing: "0.01em",
              fontWeight: "300",
              display: "inline-block",
              minWidth: "95px",
            }}
          >
            Öffnungszeiten
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "4px",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "0.01em",
                fontWeight: "300",
                display: "inline-block",
                minWidth: "37px",
              }}
            >
              Mo-Fr
            </div>
            <div
              style={{
                position: "relative",
                fontSize: "16px",
                fontWeight: "800",
                fontFamily: "Manrope",
                color: "#fff",
                whiteSpace: "nowrap",
              }}
            >
              09:00 – 18:00 Uhr
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "4px",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "0.01em",
                fontWeight: "300",
                display: "inline-block",
                minWidth: "16px",
              }}
            >
              Sa
            </div>
            <div
              style={{
                position: "relative",
                fontSize: "16px",
                fontWeight: "800",
                fontFamily: "Manrope",
                color: "#fff",
                whiteSpace: "nowrap",
              }}
            >
              09:00 – 14:00 Uhr
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Footer;
