import { Box } from "@mui/material";

const Pagination = () => {
  return (
    <Box
      style={{
        width: "100%",
        display: "flex",
       
        fontSize: "18px",
        color: "#045a5c",
        fontFamily: "Sora",
      }}
      sx={{
        justifyContent:{
          xs:"center",
          md:"flex-end"
        }
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "30px",
        }}
      >
        <img
          style={{
            height: "20px",
            width: "20px",
            position: "relative",
            overflow: "hidden",
            flexShrink: "0",
            objectFit: "contain",
          }}
          alt=""
          src="/checkboxiconarrowright-2.svg"
        />
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div
            style={{
              position: "relative",
              fontWeight: "600",
              display: "inline-block",
              minWidth: "8px",
            }}
          >
            1
          </div>
          <div
            style={{
              position: "relative",
              fontWeight: "600",
              display: "inline-block",
              minWidth: "12px",
            }}
          >
            2
          </div>
          <div
            style={{
              position: "relative",
              fontWeight: "600",
              display: "inline-block",
              minWidth: "12px",
            }}
          >
            3
          </div>
          <div
            style={{
              position: "relative",
              fontWeight: "600",
              display: "inline-block",
              minWidth: "15px",
            }}
          >
            ...
          </div>
          <div
            style={{
              position: "relative",
              fontWeight: "600",
              display: "inline-block",
              minWidth: "19px",
            }}
          >
            12
          </div>
        </div>
        <img
          style={{
            height: "20px",
            width: "20px",
            position: "relative",
            overflow: "hidden",
            flexShrink: "0",
          }}
          alt=""
          src="/checkboxiconarrowright.svg"
        />
      </div>
    </Box>
  );
};

export default Pagination;
