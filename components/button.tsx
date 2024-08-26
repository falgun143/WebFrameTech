const Button = () => {
  return (
    <div
      style={{
        cursor: "pointer",
        borderRadius: "24px 0px 24px 0px",
        backgroundColor: "#ecfeaa",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: "7px 18px 8px",
        whiteSpace: "nowrap",
        textAlign: "left",
        fontSize: "14px",
        color: "#365758",
        fontFamily: "Sora",
      }}
    >
      <div
        style={{
          position: "relative",
          letterSpacing: "0.01em",
          display: "inline-block",
          minWidth: "128px",
        }}
      >
        in den Warenkorb
      </div>
    </div>
  );
};

export default Button;
