import React from "react";

const MidFold = () => {
  return (
    <section style={styles.midfold}>
      <span>
        INVEST IN <b>HEMPITECTURE INC.</b>
      </span>
      <h2>
        Hempitecture is building a US manufacturing facility for HempWool®
        insulation
      </h2>
      <div style={styles.raiseBar}>
        <div style={styles.progressBar}></div>
      </div>
      <h1 style={styles.fundingRaised}>$1,959,660</h1>
      <span style={styles.fundingTarget}>of a $2,500,000 goal</span>
    </section>
  );
};

const styles = {
  midfold: {
    width: "auto",
    minWidth: "auto",
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "10px 20px 10px 20px",
    fontFamily: "arial, sans-serif",
  },
  raiseBar: {
    width: "100%",
    height: "5px",
    backgroundColor: "#eff2f7",
  },
  progressBar: {
    width: "80%",
    height: "100%",
    backgroundColor: "#27c897",
  },
  fundingRaised: {
    fontSize: "2em",
    margin: "10px 0px 0px 0px",
  },
  fundingTarget: {
    margin: "3px 0px 0px 0px",
  },
};
export default MidFold;
