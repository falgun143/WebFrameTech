const H = () => {
  return (
    <div
      style={{
        width: "160px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "0px 0px 5px",
        boxSizing: "border-box",
        gap: "12px",
        textAlign: "left",
        fontSize: "36px",
        color: "#116a6c",
        fontFamily: "Sora",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "9px 0px 0px",
        }}
      >
        <div
          style={{
            width: "20px",
            height: "26px",
            position: "relative",
            borderRadius: "20px 0px 20px 0px",
            backgroundColor: "#28e3e9",
          }}
        />
      </div>
      <h1
        style={{
          margin: "0",
          flex: "1",
          position: "relative",
          fontSize: "inherit",
          fontWeight: "600",
          fontFamily: "inherit",
        }}
      >
        {" "}
        Blüten
      </h1>
    </div>
  );
};

export default H;
