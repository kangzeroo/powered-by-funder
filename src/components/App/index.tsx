import React, { useEffect, useState, Fragment, useRef } from "react";
import { Transition } from "react-transition-group";
import { PanelAnimation, Panel } from "../Panel";

const sleep = async (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

type TPhase = {
  key: string;
  message: string;
  duration: number;
  nextPhase: string;
};
type TPhases = {
  [key: string]: TPhase;
};
interface IXState {
  phases: TPhases;
  nextPhase: (currentPhaseKey: string) => string;
}
const DefaultPoweredByFunder = {
  key: "funder",
  message: "⚡️ Powered by Funder",
  duration: 4000,
  nextPhase: "start",
};
const XState: IXState = {
  phases: {
    start: {
      key: "1",
      message: "🎉 HEMPITECTURE is fundraising!",
      duration: 2000,
      nextPhase: "2",
    },
    "2": {
      key: "2",
      message: "😇 Join as our Angel Investor",
      duration: 2000,
      nextPhase: "3",
    },
    "3": {
      key: "3",
      message: "🚀 Participate with $100+",
      duration: 2000,
      nextPhase: "funder",
    },
    funder: DefaultPoweredByFunder,
  },
  nextPhase: function (currentPhaseKey): string {
    const nextPhaseKey = this.phases[currentPhaseKey].nextPhase;
    // console.log(
    //   `Transitioning from phase ${currentPhaseKey} to ${nextPhaseKey}`
    // );
    return nextPhaseKey;
  },
};

const App = () => {
  const [showPanel, setShowPanel] = useState<boolean>(false);
  const [message, setMessage] = useState<TPhase>();
  const nodeRef = useRef(null);
  const panelRef = useRef(showPanel);

  useEffect(() => {
    if (panelRef.current) {
      setMessage(DefaultPoweredByFunder);
    } else {
      const transitionXState = async (currentPhaseKey = "start") => {
        const phase = XState.phases[currentPhaseKey];
        setMessage(phase);
        await sleep(phase.duration);
        if (!panelRef.current) {
          const nextPhaseIndex = XState.nextPhase(currentPhaseKey);
          transitionXState(nextPhaseIndex);
        } else {
          setMessage(DefaultPoweredByFunder);
        }
      };
      transitionXState(message?.key);
    }
  }, [showPanel, panelRef]);

  const setPanel = (bool: boolean) => {
    setShowPanel(bool);
    panelRef.current = bool;
  };

  const expandPanel = () => {
    setPanel(true);
  };

  const closePanel = () => {
    setPanel(false);
  };

  return (
    <Fragment>
      <Transition nodeRef={nodeRef} in={showPanel} timeout={1000} unmountOnExit>
        {(state) => (
          <PanelAnimation>
            <Panel closePanel={closePanel} />
          </PanelAnimation>
        )}
      </Transition>
      <section onClick={expandPanel} style={styles.anchored}>
        {message?.message}
      </section>
    </Fragment>
  );
};

const styles = {
  anchored: {
    position: "absolute" as "absolute",
    bottom: "1em",
    right: "1em",
    width: "200px",
    maxWidth: "220px",
    minWidth: "220px",
    textAlign: "center" as "center",
    border: "0 solid #eff2f7",
    backgroundColor: "#3177b8",
    color: "#ffffff",
    fontFamily: "Gotham SSm A,Gotham SSm B,Helvetica,Arial,sans-serif",
    padding: "0.5em",
    borderRadius: "1em",
  },
};

export default App;
