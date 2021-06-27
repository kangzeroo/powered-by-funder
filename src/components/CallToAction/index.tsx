import React from "react";

const CallToAction = () => {
  return (
    <section style={styles.ctaBox}>
      <a href="https://shrtm.nu/eaRo" target="_blank" style={styles.ahref}>
        <button style={styles.ctaButton}>👉 SEE INVESTMENT DETAILS</button>
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
    padding: "10px 10px 10px 10px",
  },
  ahref: {
    width: "100%",
  },
  ctaButton: {
    padding: "10px",
    width: "100%",
    fontSize: "1.2em",
    borderRadius: "10px",
    color: "#ffffff",
    backgroundColor: "#28c897",
    border: "5px solid #28c897",
    fontWeight: "bold" as "bold",
    cursor: "pointer",
    fontFamily: "arial, sans-serif",
    ":hover": {
      backgroundColor: "#28c897",
    },
  },
};
export default CallToAction;
