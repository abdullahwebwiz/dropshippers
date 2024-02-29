import Title from "../title/title";
import style from "./tutorials.module.css";
import LearnMore from "../title/learnmore/learnmore";
const Tutorials = () => {
  return (
    <div className={style.main}>
      <Title color={"o"} title={"Tutorials & Guide 📚"} />
      <div className={style.con}>
        <div className={style.video}>
          <iframe
            width={250 * 1.77777777778}
            height={250}
            src={`https://www.youtube.com/embed/${"o-I61UoVWR8"}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video Intro"
          ></iframe>
        </div>
        <div className={style.video}>
          <iframe
            width={250 * 1.77777777778}
            height={250}
            src={`https://www.youtube.com/embed/${"o-I61UoVWR8"}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video Intro"
          ></iframe>
        </div>
        <div className={style.video}>
          <iframe
            width={250 * 1.77777777778}
            height={250}
            src={`https://www.youtube.com/embed/${"o-I61UoVWR8"}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video Intro"
          ></iframe>
        </div>
        <div className={style.video}>
          <iframe
            width={250 * 1.77777777778}
            height={250}
            src={`https://www.youtube.com/embed/${"o-I61UoVWR8"}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video Intro"
          ></iframe>
        </div>
        <div className={style.video}>
          <iframe
            width={250 * 1.77777777778}
            height={250}
            src={`https://www.youtube.com/embed/${"o-I61UoVWR8"}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video Intro"
          ></iframe>
        </div>
      </div>
      <LearnMore link={"/"} color={'white'}/>
    </div>
  );
};
export default Tutorials;
