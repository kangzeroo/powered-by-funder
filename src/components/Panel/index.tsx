import React from "react";
import Topbar from "../Topbar";
import HeroVideo from "../HeroVideo";
import MidFold from "../MidFold";
import Highlights from "../Highlights";
import CallToAction from "../CallToAction";
import Footer from "../Footer";

export const Panel = ({
  closePanel,
}: {
  closePanel: React.MouseEventHandler;
}) => {
  return (
    <div style={styles.panelWrapper}>
      <main style={styles.panel}>
        <Topbar closePanel={closePanel} />
        <HeroVideo />
        <div style={styles.midLockWidth}>
          <MidFold />
          <Highlights />
          <CallToAction />
        </div>
        <Footer />
      </main>
    </div>
  );
};

const styles = {
  panel: {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  panelWrapper: {
    height: "100%",
    width: "100%",
    minHeight: "100%",
    minWidth: "100%",
    maxWidth: "800px",
    overflowY: "scroll" as "scroll",
    left: "0px",
    bottom: "0px",
    position: "absolute" as "absolute",
    transition: "5s",
    backgroundColor: "#ffffff",
    color: "#15263d",
    transitionTimingFunction: "ease-in",
  },
  midLockWidth: {
    width: "100%",
    maxWidth: "800px",
    padding: "40px 0px 40px 0px",
  },
};
