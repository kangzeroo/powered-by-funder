import React from "react";

const Topbar = ({ closePanel }: { closePanel: React.MouseEventHandler }) => {
  return (
    <section style={styles.fixed}>
      <div style={styles.banner}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/video-entropy.appspot.com/o/funder%2Fimages%2Fhempitecture.png?alt=media&token=01003795-eef2-4c4b-a9d8-b29d60df0568"
          style={styles.equalImage}
        />
        <span onClick={closePanel} style={styles.closeButton}>
          ⅹ
        </span>
      </div>
    </section>
  );
};
const styles = {
  fixed: {
    position: "fixed" as "fixed",
    width: "100%",
    backgroundColor: "white",
    top: "0",
    zIndex: 99,
  },
  banner: {
    width: "100%",
    minWidth: "100%",
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0px 15px 0px",
    height: "30px",
    position: "relative" as "relative",
  },
  closeButton: {
    width: "25px",
    height: "25px",
    fontSize: "1.5em",
    textAlign: "center" as "center",
    position: "absolute" as "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
    color: "#767676",
  },
  equalImage: {
    width: "40%",
    maxWidth: "200px",
    height: "auto",
  },
};
export default Topbar;
