"use client";
import {
  Select,
  InputLabel,
  FormControl,
  MenuItem,
  NativeSelect,
  styled,
  SelectChangeEvent,
  TextField,
  Box,
} from "@mui/material";

import HeaderDesktop from "./header";
import HeaderLinks from "./headerlinks";
import H from "./MainHeading";
import Button1 from "./button1";
import Switch from "./switch";
import GenetikFilter from "./Slider";
import CheckboxLine from "./checkbox-line";
import FrameComponent from "./frame-component";
import Pagination from "./pagination";
import React, { useState } from "react";

const Header = () => {
  const [showcheckbox, setShowcheckbox] = useState(false);
  const [showoptions, setShowOptions] = useState(false);
  const [showheaderoptions, setShowheaderOptions] = useState(false);

  const [option, setoption] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setoption(event.target.value);
  };

  function toggle() {
    setShowcheckbox((prev) => !prev);
  }
  function toggle1() {
    setShowOptions((prev) => !prev);
  }
  function toggle2() {
    setShowheaderOptions((prev) => !prev);
  }

  return (
    <section
      style={{
        width: "1304px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "90px",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "16px",
        color: "#62c3c6",
        fontFamily: "Sora",
      }}
    >
      <HeaderDesktop />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "60px",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            alignContent: "flex-start",
            gap: "20px",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0px 80px 0px 0px",
              boxSizing: "border-box",
              gap: "80px",
              minWidth: "315px",
              maxWidth: "100%",
            }}
          >
            <HeaderLinks />
            <H />
          </div>
          <div
            style={{
              width: "340px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "100px 0px 0px",
            }}
          >
            <div
              style={{
                width: "340px",
                boxSizing: "border-box",
                borderRadius: "30px",
                backgroundColor: "rgba(129, 145, 145, 0.1)",
                display: "flex",
                alignSelf: "stretch",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
                maxWidth: "100%",
                padding: "0px 14px",
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
                    color: "#62C3C6", // Set the label color to red when focused
                    "&.Mui-focused": {
                      color: "#62C3C6", // Keeps the label color red when focused
                    },
                  },
                }}
                sx={{
                  flex: 1,
                  "& .MuiInputBase-input": {
                    color: "#62C3C6", // Sets the input text color
                  },
                  "& .MuiInputBase-input:focus": {
                    color: "#62C3C6", // Changes input text color when focused
                  },
                }}
                style={{
                  marginBottom: 1,
                }}
              ></TextField>

              <img
                style={{
                  height: "20px",
                  width: "20px",

                  overflow: "hidden",
                  flexShrink: "0",
                  minHeight: "20px",
                }}
                alt=""
                src="/iconsearch.svg"
              ></img>
            </div>
          </div>
          <div
            style={{
              width: "438px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              gap: "45px",
              maxWidth: "100%",
              textAlign: "center",
              fontSize: "14px",
              color: "#365758",
            }}
          >
            <div
              style={{
                width: "227px",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-end",
                padding: "0px 2px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    letterSpacing: "0.01em",
                  }}
                >
                  GKV mit Kostenübernahme?
                </div>
                <Button1
                  propBorder="2px solid #62c3c6"
                  bestellprozess="textoptionen"
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap:"wrap",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "20px",
                textAlign: "left",
                fontSize: "16px",
              }}
            >
              <div
                style={{
                  flex: "1",
                  borderRadius: "4px",
                  backgroundColor: "rgba(98, 195, 198, 0.3)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",

                  gap: "9px",
                  maxWidth: "172px",
                }}
              >
                <div
                  style={{
                    letterSpacing: "0.01em",
                    fontWeight: "600",
                    display: "flex",
                    maxWidth: "172px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "7px",
                    padding: "2px 10px",
                  }}
                >
                  <div> Sortieren nach</div>

                  <img
                    style={{
                      height: "16px",
                      width: "16px",

                      overflow: "hidden",
                      flexShrink: "0",
                      objectFit: "contain",
                    }}
                    alt="downarrow"
                    src={
                      showcheckbox ? "/iconarrow-up.svg" : "/iconarrow-down.svg"
                    }
                    onClick={() => toggle2()}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "2px 0px 0px",
                    maxWidth: "172px",
                  }}
                >
                  {showheaderoptions && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CheckboxLine text="Aurora" />
                      <CheckboxLine text=" Avaay" />
                      <CheckboxLine text="Bedrocan" />
                    </div>
                  )}
                </div>
              </div>
              <div
                style={{
                  flex: "1",
                  borderRadius: "4px",
                  backgroundColor: "rgba(98, 195, 198, 0.3)",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "7px 12px",
                  boxSizing: "border-box",
                  gap: "10px",
                  minWidth: "115px",
                }}
              >
                <div
                  style={{
                    letterSpacing: "0.01em",
                    fontWeight: "600",
                    display: "inline-block",
                    minWidth: "116px",
                  }}
                >
                  Verfügbarkeit
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "2.5px 0px 0px",
                  }}
                >
                  <Switch />
                </div>
              </div>
              <div
                style={{
                  height: "34px",
                  borderRadius: "4px",
                  backgroundColor: "rgba(98, 195, 198, 0.3)",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2px 12px",
                  boxSizing: "border-box",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",

                    overflow: "hidden",
                    flexShrink: "0",
                  }}
                  loading="lazy"
                  alt=""
                  src="/iconlistview.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <Box
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "80px",
            maxWidth: "100%",
            fontSize: "24px",
            color: "#045a5c",
          }}
          sx={{
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: {
              xs: "flex-start",
              sm: "center",
              md: "flex-start",
            },
          }}
        >
          <div
            style={{
              width: "250px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "44px",
            }}
          >
            <div
              style={{
                borderRadius: "4px",
                backgroundColor: "rgba(98, 195, 198, 0.1)",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "2px 20px",
              }}
            >
              <h3
                style={{
                  margin: "0",

                  fontSize: "inherit",
                  letterSpacing: "0.01em",
                  fontWeight: "600",
                  fontFamily: "inherit",
                  display: "inline-block",
                  minWidth: "65px",
                }}
              >
                Filter
              </h3>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "40px",
                textAlign: "center",
                fontSize: "18px",
                color: "#365758",
              }}
            >
              <GenetikFilter text="text" prop="5 €" prop1="10 €" />
              <div
                style={{
                  borderBottom: "1px solid rgba(98, 195, 198, 0.3)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 28px",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0px",
                      rowGap: "20px",
                    }}
                  >
                    <div
                      style={{
                        width: "234px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        fontWeight: "600",
                      }}
                    >
                      Hersteller
                    </div>
                    <img
                      style={{
                        height: "16px",
                        width: "16px",

                        overflow: "hidden",
                        flexShrink: "0",
                        objectFit: "contain",
                      }}
                      alt="downarrow"
                      src={
                        showcheckbox
                          ? "/iconarrow-up.svg"
                          : "/iconarrow-down.svg"
                      }
                      onClick={() => toggle()}
                    />
                  </div>
                  {showcheckbox && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "px",
                        textAlign: "left",
                        fontSize: "16px",
                      }}
                    >
                      <CheckboxLine text="ADREXpharma" />
                      <CheckboxLine text="Aurora" />
                      <CheckboxLine text=" Avaay" />
                      <CheckboxLine text="Bedrocan" />
                      <CheckboxLine text="Cannamedical" />
                    </div>
                  )}
                </div>
                <Button1 bestellprozess="mehr anzeigen" />
              </div>
              <GenetikFilter
                text="THC Gehalt"
                prop="11%"
                propMinWidth="28px"
                prop1="18%"
                propMinWidth1="31px"
              />
              <GenetikFilter
                text="CBD Gehalt"
                prop="1%"
                propMinWidth="21px"
                prop1="5%"
                propMinWidth1="24px"
              />
              <div
                style={{
                  borderBottom: "1px solid rgba(98, 195, 198, 0.3)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 28px",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    Genetik
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "4px",
                    textAlign: "left",
                    fontSize: "16px",
                    color: "#045a5c",
                  }}
                >
                  <div
                    style={{
                      flex: "1",
                      borderRadius: "4px",
                      backgroundColor: "#62c3c6",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "4px 14px",
                      color: "#fcfcfa",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        minWidth: "51px",
                        cursor: "pointer",
                      }}
                    >
                      Indica
                    </div>
                  </div>
                  <div
                    style={{
                      flex: "1",
                      borderRadius: "4px",
                      backgroundColor: "rgba(98, 195, 198, 0.3)",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "4px 14px",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        minWidth: "51px",
                        cursor: "pointer",
                      }}
                    >
                      Sativa
                    </div>
                  </div>
                  <div
                    style={{
                      borderRadius: "4px",
                      backgroundColor: "rgba(98, 195, 198, 0.3)",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "4px 12px",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        minWidth: "56px",
                        cursor: "pointer",
                      }}
                    >
                      Hybrid
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  borderBottom: "1px solid rgba(98, 195, 198, 0.3)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 28px",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Bestrahltung
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "4px",
                    textAlign: "left",
                    fontSize: "16px",
                    color: "#045a5c",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "4px",
                      backgroundColor: "#62c3c6",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "4px 10px",
                      whiteSpace: "nowrap",
                      color: "#fff",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        minWidth: "120px",
                        cursor: "pointer",
                      }}
                    >
                      nicht bestrahlt
                    </div>
                  </div>

                  <div
                    style={{
                      borderRadius: "4px",
                      backgroundColor: "rgba(98, 195, 198, 0.3)",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "4px 10px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        minWidth: "120px",
                        cursor: "pointer",
                      }}
                    >
                      nicht bestrahlt
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  borderBottom: "1px solid rgba(98, 195, 198, 0.3)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 28px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "234px",
                        fontWeight: "600",
                      }}
                    >
                      {option}
                    </div>
                    <img
                      style={{
                        height: "16px",
                        width: "16px",
                      }}
                      alt="downarrow"
                      src={
                        showoptions
                          ? "/iconarrow-up.svg"
                          : "/iconarrow-down.svg"
                      }
                      onClick={() => toggle1()}
                    />
                  </div>
                  {showoptions && (
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                      <InputLabel id="demo-select-small-label">
                        option
                      </InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={option}
                        label="option"
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 25px",
                  textAlign: "left",
                  fontSize: "16px",
                  color: "#0d0d0d",
                }}
              >
                <div
                  style={{
                    flex: "1",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "4px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "4px 0px 0px",
                    }}
                  >
                    <img
                      style={{
                        width: "12px",
                        height: "12px",

                        overflow: "hidden",
                        flexShrink: "0",
                        objectFit: "cover",
                      }}
                      loading="lazy"
                      alt=""
                      src="/iconclose@2x.png"
                    />
                  </div>
                  <div style={{ position: "relative" }}>
                    alle Filter zurücksetzen
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "center",
              gap: "40px",
              maxWidth: "calc(100% - 330px)",
              fontSize: "12px",
              color: "#a10b0b",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-end",
                padding: "0px 4px 0px 0px",
                boxSizing: "border-box",
                maxWidth: "100%",
              }}
            >
              <Box
                style={{
                  width: "970px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  alignContent: "flex-start",
                  gap: "20px 18px",
                  minHeight: "1702px",
                  maxWidth: "100%",
                }}
                sx={{
                  justifyContent: {
                    xs: "flex-start",
                    md: "center",
                  }
                }}
              >
                <FrameComponent
                  propBorder="2px solid #28e3e9"
                  propBoxShadow="unset"
                  propGap="unset"
                  propAlignSelf="stretch"
                  propWidth="50px"
                  propAlignSelf1="stretch"
                  propWidth1="26px"
                  propMinWidth1="unset"
                  img="/medicine.png"
                  propBorder1="2px solid #28e3e9"
                  tHC24="THC 18% "
                  navcoraTHCSpotlightPortoMast="Cannabis Flos 18/1 PT Mango"
                  maintag="nicht lieferbar"
                  propBackgroundColor="rgba(161, 11, 11, 0.05)"
                  propBackgroundColor1="#a10b0b"
                  propColor="#a10b0b"
                  propMinWidth="87px"
                  tHC241={`CBD <1%`}
                  propFlex="1"
                  propMinWidth2="70px"
                  genetik="Kultivar"
                  genetik1="Genetik"
                  indica="Mango"
                  indica1="Hybrid"
                  propMinWidth3="56px"
                  propMinWidth4="56px"
                />
                <FrameComponent
                  propBorder="2px solid #28e3e9"
                  propBoxShadow="unset"
                  propGap="unset"
                  propAlignSelf="stretch"
                  propWidth="50px"
                  propAlignSelf1="stretch"
                  propWidth1="26px"
                  propMinWidth1="unset"
                  img="/medicine.png"
                  propBorder1="2px solid #28e3e9"
                  tHC24="THC 18% "
                  navcoraTHCSpotlightPortoMast="Cannabis Flos 18/1 PT Mango"
                  maintag="nicht lieferbar"
                  propBackgroundColor="rgba(161, 11, 11, 0.05)"
                  propBackgroundColor1="#a10b0b"
                  propColor="#a10b0b"
                  propMinWidth="87px"
                  tHC241={`CBD <1%`}
                  propFlex="1"
                  propMinWidth2="70px"
                  genetik="Kultivar"
                  genetik1="Genetik"
                  indica="Mango"
                  indica1="Hybrid"
                  propMinWidth3="56px"
                  propMinWidth4="56px"
                />
                <FrameComponent
                  propBorder="2px solid #28e3e9"
                  propBoxShadow="unset"
                  propGap="unset"
                  propAlignSelf="stretch"
                  propWidth="50px"
                  propAlignSelf1="stretch"
                  propWidth1="26px"
                  propMinWidth1="unset"
                  img="/medicine.png"
                  propBorder1="2px solid #28e3e9"
                  tHC24="THC 18% "
                  navcoraTHCSpotlightPortoMast="Cannabis Flos 18/1 PT Mango"
                  maintag="nicht lieferbar"
                  propBackgroundColor="rgba(161, 11, 11, 0.05)"
                  propBackgroundColor1="#a10b0b"
                  propColor="#a10b0b"
                  propMinWidth="87px"
                  tHC241={`CBD <1%`}
                  propFlex="1"
                  propMinWidth2="70px"
                  genetik="Kultivar"
                  genetik1="Genetik"
                  indica="Mango"
                  indica1="Hybrid"
                  propMinWidth3="56px"
                  propMinWidth4="56px"
                />
                <FrameComponent
                  propBorder="unset"
                  propBoxShadow="0px 0px 20px rgba(7, 64, 64, 0.05)"
                  propGap="20px"
                  secondtag={true}
                  propAlignSelf="unset"
                  propWidth="unset"
                  propAlignSelf1="unset"
                  propWidth1="unset"
                  propMinWidth1="26px"
                  img="/medicine.png"
                  propBorder1="unset"
                  tHC24="THC 25% "
                  navcoraTHCSpotlightPortoMast="Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify"
                  maintag="sofort lieferbar"
                  propBackgroundColor="rgba(13, 112, 82, 0.05)"
                  propBackgroundColor1="#0d7052"
                  propColor="#0d7052"
                  propMinWidth="93px"
                  tHC241={`CBD <1%`}
                  propFlex="1"
                  propMinWidth2="70px"
                  genetik="Kultivar"
                  genetik1="Genetik"
                  indica="Pink Kush"
                  indica1="Hybrid"
                  propMinWidth3="78px"
                  propMinWidth4="56px"
                />
                <FrameComponent
                  propBorder="unset"
                  propBoxShadow="0px 0px 20px rgba(7, 64, 64, 0.05)"
                  propGap="20px"
                  secondtag={true}
                  propAlignSelf="unset"
                  propWidth="unset"
                  propAlignSelf1="unset"
                  propWidth1="unset"
                  propMinWidth1="26px"
                  img="/medicine.png"
                  propBorder1="unset"
                  tHC24="THC 25% "
                  navcoraTHCSpotlightPortoMast="Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify"
                  maintag="sofort lieferbar"
                  propBackgroundColor="rgba(13, 112, 82, 0.05)"
                  propBackgroundColor1="#0d7052"
                  propColor="#0d7052"
                  propMinWidth="93px"
                  tHC241={`CBD <1%`}
                  propFlex="1"
                  propMinWidth2="70px"
                  genetik="Kultivar"
                  genetik1="Genetik"
                  indica="Pink Kush"
                  indica1="Hybrid"
                  propMinWidth3="78px"
                  propMinWidth4="56px"
                />
                <FrameComponent
                  propBorder="unset"
                  propBoxShadow="0px 0px 20px rgba(7, 64, 64, 0.05)"
                  propGap="20px"
                  secondtag={true}
                  propAlignSelf="unset"
                  propWidth="unset"
                  propAlignSelf1="unset"
                  propWidth1="unset"
                  propMinWidth1="26px"
                  img="/medicine.png"
                  propBorder1="unset"
                  tHC24="THC 25% "
                  navcoraTHCSpotlightPortoMast="Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify"
                  maintag="sofort lieferbar"
                  propBackgroundColor="rgba(13, 112, 82, 0.05)"
                  propBackgroundColor1="#0d7052"
                  propColor="#0d7052"
                  propMinWidth="93px"
                  tHC241={`CBD <1%`}
                  propFlex="1"
                  propMinWidth2="70px"
                  genetik="Kultivar"
                  genetik1="Genetik"
                  indica="Pink Kush"
                  indica1="Hybrid"
                  propMinWidth3="78px"
                  propMinWidth4="56px"
                />
                <FrameComponent
                  propBorder="2px solid #28e3e9"
                  propBoxShadow="unset"
                  propGap="unset"
                  propAlignSelf="stretch"
                  propWidth="50px"
                  propAlignSelf1="stretch"
                  propWidth1="26px"
                  propMinWidth1="unset"
                  img="/medicine.png"
                  propBorder1="2px solid #28e3e9"
                  tHC24="THC 18% "
                  navcoraTHCSpotlightPortoMast="Cannabis Flos 18/1 PT Mango"
                  maintag="nicht lieferbar"
                  propBackgroundColor="rgba(161, 11, 11, 0.05)"
                  propBackgroundColor1="#a10b0b"
                  propColor="#a10b0b"
                  propMinWidth="87px"
                  tHC241={`CBD <1%`}
                  propFlex="1"
                  propMinWidth2="70px"
                  genetik="Kultivar"
                  genetik1="Genetik"
                  indica="Mango"
                  indica1="Hybrid"
                  propMinWidth3="56px"
                  propMinWidth4="56px"
                />
                <FrameComponent
                  propBorder="2px solid #28e3e9"
                  propBoxShadow="unset"
                  propGap="unset"
                  propAlignSelf="stretch"
                  propWidth="50px"
                  propAlignSelf1="stretch"
                  propWidth1="26px"
                  propMinWidth1="unset"
                  img="/medicine.png"
                  propBorder1="2px solid #28e3e9"
                  tHC24="THC 18% "
                  navcoraTHCSpotlightPortoMast="Cannabis Flos 18/1 PT Mango"
                  maintag="nicht lieferbar"
                  propBackgroundColor="rgba(161, 11, 11, 0.05)"
                  propBackgroundColor1="#a10b0b"
                  propColor="#a10b0b"
                  propMinWidth="87px"
                  tHC241={`CBD <1%`}
                  propFlex="1"
                  propMinWidth2="70px"
                  genetik="Kultivar"
                  genetik1="Genetik"
                  indica="Mango"
                  indica1="Hybrid"
                  propMinWidth3="56px"
                  propMinWidth4="56px"
                />
                <FrameComponent
                  img="/medicine.png"
                  tHC24="THC 18% "
                  navcoraTHCSpotlightPortoMast="Cannabis Flos 18/1 PT Mango"
                  maintag="nicht lieferbar"
                  tHC241={`CBD <1%`}
                  genetik="Kultivar"
                  genetik1="Genetik"
                  indica="Mango"
                  indica1="Hybrid"
                  propMinWidth3="56px"
                />
              </Box>
            </div>
          </div>
        </Box>
      </div>
      <Pagination />
    </section>
  );
};

export default Header;
