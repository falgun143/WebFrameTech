

const IconCart = () => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        height: "30px",
        position: "relative",
        textAlign: "left",
        fontSize: "12px",
        color: "#28e3e9",
        fontFamily: "Sora",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "7px",
          left: "18px",
          borderRadius: "24px",
          backgroundColor: "rgba(98, 195, 198, 0.3)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "2px 6px 1.7px",
        }}
      >
        <div
          style={{
            position: "relative",
            fontWeight: "500",
            display: "inline-block",
            minWidth: "6px",
          }}
        >
          1
        </div>
      </div>
      <img
        style={{
          position: "absolute",
          height: "70%",
          width: "62.22%",
          top: "13.33%",
          right: "33.33%",
          bottom: "16.67%",
          left: "4.44%",
          maxWidth: "100%",
          overflow: "hidden",
          maxHeight: "100%",
          zIndex: "1",
        }}
        loading="lazy"
        alt=""
        src="/vector.svg"
      />
    </div>
  );
};

export default IconCart;
