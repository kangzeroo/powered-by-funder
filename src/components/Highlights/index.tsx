import React from "react";

const highlights = [
  { key: "1", message: "ð± Our products capture CO2" },
  { key: "2", message: "ð° $1+ million in total revenue w/ 250+ customers" },
  {
    key: "3",
    message: "ð Advisor authored the US patent for HempWoolÂ® insulation",
  },
  {
    key: "4",
    message:
      "ðï¸ Department of Energy partnership to decarbonize building materials",
  },
  { key: "5", message: "ðºð¸ USA Manufacturing and farming" },
  {
    key: "6",
    message: "ð¡ Making healthier homes and a more sustainable planet possible",
  },
  { key: "7", message: "ð·ââï¸ We're creating green, healthy jobs" },
  { key: "8", message: "ð¥ 25k+ social followers" },
];

const Highlights = () => {
  return (
    <section style={styles.highlights}>
      <ol>
        {highlights.map((high) => {
          return (
            <span key={high.key}>
              <li>{high.message}</li>
            </span>
          );
        })}
      </ol>
    </section>
  );
};
const styles = {
  highlights: {
    width: "100%",
    minWidth: "100%",
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontFamily: "arial, sans-serif",
  },
};
export default Highlights;
