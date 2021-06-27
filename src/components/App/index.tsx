import React, { useEffect, useState } from "react";

const sleep = async (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

type TPhase = {
  key: string;
  message: string;
  duration: number;
  nextPhase: string;
  ahref: string;
};
type TPhases = {
  [key: string]: TPhase;
};
interface IXState {
  phases: TPhases;
  nextPhase: (currentPhaseKey: string) => string;
}
const XState: IXState = {
  phases: {
    "1": {
      key: "1",
      message: "🎉 StartEngine is fundraising!",
      duration: 2000,
      nextPhase: "2",
      ahref: "https://wefunder.com/hempitecture",
    },
    "2": {
      key: "2",
      message: "😇 Join as our Angel Investor",
      duration: 2000,
      nextPhase: "3",
      ahref: "https://wefunder.com/hempitecture",
    },
    "3": {
      key: "3",
      message: "🚀 Participate with $100+",
      duration: 2000,
      nextPhase: "4",
      ahref: "https://wefunder.com/hempitecture",
    },
    "4": {
      key: "4",
      message: "⚡️ Powered by Wefunder",
      duration: 4000,
      nextPhase: "1",
      ahref: "https://wefunder.com/hempitecture",
    },
  },
  nextPhase: function (currentPhaseKey): string {
    const nextPhaseKey = this.phases[currentPhaseKey].nextPhase;
    console.log(
      `Transitioning from phase ${currentPhaseKey} to ${nextPhaseKey}`
    );
    return nextPhaseKey;
  },
};

const App = () => {
  const [message, setMessage] = useState<TPhase>();

  useEffect(() => {
    const transitionXState = async () => {
      console.log("transitionXState");
      let currentPhaseKey = "1";
      while (true) {
        const phase = XState.phases[currentPhaseKey];
        setMessage(phase);
        await sleep(phase.duration);
        const nextPhaseIndex = XState.nextPhase(currentPhaseKey);
        currentPhaseKey = nextPhaseIndex;
        console.log(nextPhaseIndex);
      }
    };
    transitionXState();
  }, []);

  return (
    <a href={message?.ahref} target="_blank">
      <section style={styles.anchored}>{message?.message}</section>
    </a>
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
