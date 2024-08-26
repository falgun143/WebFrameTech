import type { NextPage } from "next";
import Header from "../components/header_content";
import Footer from "../components/footer";

const Catalog: NextPage = () => {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fcfcfa",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        boxSizing: "border-box",
        gap: "150px",
        lineHeight: "normal",
        letterSpacing: "normal",
      }}
    >
      <main
        style={{
          alignSelf: "stretch",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "70px 24px 0px 24px",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        <Header />
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
