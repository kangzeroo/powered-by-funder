import React from "react";

const HeroVideo = () => {
  const screenWidth = (screen.width < 800 ? screen.width : 800) - 20;
  const videoHeight = screenWidth * (315 / 560);
  return (
    <section style={styles.hero({ height: videoHeight })}>
      <div
        style={styles.backgroundImage({
          backgroundImage:
            "https://static.wixstatic.com/media/43628e_7eda31f70cf54924a9c53889f479bf62~mv2.jpg/v1/fill/w_478,h_574,al_c,q_80/43628e_7eda31f70cf54924a9c53889f479bf62~mv2.webp",
        })}
      ></div>
      <div style={styles.videoPlayer}>
        <iframe
          width={screenWidth}
          height={videoHeight}
          src="https://www.youtube.com/embed/JwshQhspCi4?start=3&autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

const styles = {
  hero: ({ height }: { height: number }) => ({
    width: "100%",
    minWidth: "100%",
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "center",
    position: "relative" as "relative",
    height: height + 40,
    margin: "80px 0px 0px 0px",
  }),
  backgroundImage: ({ backgroundImage }: { backgroundImage: string }) => ({
    backgroundImage: `url("${backgroundImage}")`,
    filter: "blur(8px)",
    WebkitFilter: "blur(8px)",
    height: "100%",
    width: "100%",
  }),
  videoPlayer: {
    position: "absolute" as "absolute",
    margin: "20px 0px 20px 0px",
  },
};

export default HeroVideo;
