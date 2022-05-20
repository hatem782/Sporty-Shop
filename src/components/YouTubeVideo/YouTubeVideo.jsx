import React from "react";

import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  video_container: {
    /*width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& *": {
      width: "100vw",
      height: "calc(100vw/1.77)",
    },*/

    position: "relative",
    paddingBottom: "56.25%" /* 16:9 */,
    height: "0",
    "& *": {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
    },
  },
}));

function YouTubeVideo({ src }) {
  const css = useStyles();
  const urlRefiner = (url) => {
    let videId = url.split("v=")[1];
    return `https://www.youtube.com/embed/${videId}`;
  };
  return (
    <div className={css.video_container}>
      <iframe
        width="560"
        height="315"
        src={urlRefiner(src)}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen"
        msallowfullscreen="msallowfullscreen"
        oallowfullscreen="oallowfullscreen"
        webkitallowfullscreen="webkitallowfullscreen"
      ></iframe>
    </div>
  );
}

export default YouTubeVideo;
