import React from "react";

const CallToAction = () => {
  return (
    <section style={styles.ctaBox}>
      <a href="https://shrtm.nu/eaRo" target="_blank" style={styles.ahref}>
        <button style={styles.ctaButton}>See Investment Details</button>
      </a>
    </section>
  );
};

const styles = {
  ctaBox: {
    width: "auto",
    minWidth: "auto",
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "10px 20px 20px 20px",
  },
  ahref: {
    width: "100%",
  },
  ctaButton: {
    padding: "20px",
    width: "100%",
    fontSize: "1.5em",
    borderRadius: "10px",
    backgroundColor: "#0f9e0b",
    color: "white",
    border: "white",
    boxShadow: "#19a315 2px 2px",
  },
};
export default CallToAction;
