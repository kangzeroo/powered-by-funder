import React from "react";

const highlights = [
  { key: "1", message: "🌱 Our products capture CO2" },
  { key: "2", message: "💰 $1+ million in total revenue w/ 250+ customers" },
  {
    key: "3",
    message: "📄 Advisor authored the US patent for HempWool® insulation",
  },
  {
    key: "4",
    message:
      "🏗️ Department of Energy partnership to decarbonize building materials",
  },
  { key: "5", message: "🇺🇸 USA Manufacturing and farming" },
  {
    key: "6",
    message: "🏡 Making healthier homes and a more sustainable planet possible",
  },
  { key: "7", message: "👷‍♀️ We're creating green, healthy jobs" },
  { key: "8", message: "👥 25k+ social followers" },
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
  },
};
export default Highlights;
