"use client";
import style from "./page.module.css";
import Header from "../header";
import Title from "@/components/title/title";
import Space from "@/components/space/space";
import YouTube from "react-youtube";
const Page = () => {
  const videoId = "gPluTBiuItQ";

  const opts = {
    height: 250,
    width: 250 * 1.641,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div>
      <Header />
      <Space />
      <Title color="o" title={"Videos 🎬 "} />
      <div className={style.con}>
        <YouTube videoId={videoId} opts={opts} style={{ margin: "10px" }} />
        <YouTube videoId={videoId} opts={opts} style={{ margin: "10px" }} />
        <YouTube videoId={videoId} opts={opts} style={{ margin: "10px" }} />
      </div>
      <Space />
      <Title color={"p"} title={"Posts 💡"} />
    </div>
  );
};

export default Page;
