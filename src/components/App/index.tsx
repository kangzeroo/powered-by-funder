/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useEffect, useState, Fragment, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { Panel } from "../Panel";
import { v4 as uuidv4 } from "uuid";

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
  loopKey: string;
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
      key: "start",
      message: "🎉 We are crowdfunding!",
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
  loopKey: "",
  nextPhase: function (currentPhaseKey): string {
    const nextPhaseKey = this.phases[currentPhaseKey].nextPhase;
    return nextPhaseKey;
  },
};
type TLoopHash = {
  [index: string]: string;
};

const App = () => {
  const [showPanel, setShowPanel] = useState<boolean>(false);
  const [message, setMessage] = useState<TPhase>();
  const nodeRef = useRef(null);
  const panelRef = useRef<TLoopHash>();

  useEffect(() => {
    panelRef.current = {};
    if (showPanel) {
      XState.loopKey = "";
      setMessage(DefaultPoweredByFunder);
    } else {
      const transitionXState = async (
        currentPhaseKey = "start"
      ): Promise<void> => {
        const cachedLoopKey = XState.loopKey;
        if (XState.loopKey) {
          const phase = XState.phases[currentPhaseKey];
          setMessage(phase);
          await sleep(phase.duration);
          if (cachedLoopKey === XState.loopKey) {
            const nextPhaseIndex = XState.nextPhase(currentPhaseKey);
            transitionXState(nextPhaseIndex);
          }
        }
        return;
      };
      if (!XState.loopKey) {
        const loopKey: string = uuidv4();
        XState.loopKey = loopKey;
        transitionXState(message?.key);
      }
    }
  }, [showPanel, XState, message]);

  const setPanel = (bool: boolean) => {
    setShowPanel(bool);
  };

  const expandPanel = () => {
    panelRef.current = {};
    setPanel(!showPanel);
  };

  const closePanel = () => {
    setPanel(false);
  };

  return (
    <Fragment>
      <CSSTransition
        nodeRef={nodeRef}
        in={showPanel}
        timeout={400}
        classNames="list"
        transitions={{
          enter: css`
            opacity: 1;
          `,
          enterActive: css`
            opacity: 0;
            transition: opacity 250ms ease-in;
          `,
          enterDone: css`
            opacity: 0;
          `,
          exit: css`
            opacity: 0;
          `,
          exitActive: css`
            opacity: 1;
            transition: opacity 250ms ease-in;
          `,
        }}
        unmountOnExit
        appear
      >
        <Panel closePanel={closePanel} />
      </CSSTransition>
      <section onClick={expandPanel} style={styles.anchored}>
        {message?.message}
      </section>
    </Fragment>
  );
};

const styles = {
  anchored: {
    position: "fixed" as "fixed",
    bottom: "1em",
    right: "1em",
    width: "200px",
    maxWidth: "220px",
    minWidth: "220px",
    textAlign: "center" as "center",
    border: "0 solid #eff2f7",
    backgroundColor: "#3177b8",
    color: "#ffffff",
    fontFamily: "arial, sans-serif",
    padding: "0.5em",
    borderRadius: "1em",
    cursor: "pointer",
  },
};

export default App;
