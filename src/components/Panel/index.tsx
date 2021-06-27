import React from "react";
import styled from "styled-components";
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
  );
};
export const PanelAnimation = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
  max-width: 800px;
  overflow-y: scroll;
  left: 0px;
  bottom: 0px;
  position: absolute;
  transition: 5s;
  background-color: #ffffff;
  color: #15263d;
  transition-timing-function: ease-in;
`;

const styles = {
  panel: {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  midLockWidth: {
    width: "100%",
    maxWidth: "800px",
    padding: "40px 0px 40px 0px",
  },
};
