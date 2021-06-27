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
    <main>
      <Topbar closePanel={closePanel} />
      <HeroVideo />
      <MidFold />
      <Highlights />
      <CallToAction />
      <Footer />
    </main>
  );
};
export const PanelAnimation = styled.div`
  height: 100vh;
  width: 100vw;
  min-height: 100vh;
  min-width: 100vw;
  max-width: 800px;
  overflow-y: scroll;
  left: 0px;
  top: 0px;
  position: absolute;
  transition: 5s;
  background-color: #ffffff;
  color: #15263d;
  transition-timing-function: ease-in;
`;
