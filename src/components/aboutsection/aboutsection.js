import style from "./aboutsection.module.css";
import Title from "../title/title";
const AboutSection = () => {
  return (
    <div className={style.main}>
      <div className={style.maincon}>
        <div className={style.para}>
          Did you know that nearly 50% of businesses fail within their first
          five years, according to Shopify? It's is due to some of major
          problems like: low investments, poor inventory management, high
          packaging costs, and expensive shipment fees. But here at
          Dropshippers.pk you can list and sell as many products as you desire
          on daraz, shopify and more, without the burden of investments,
          shipping complexities, packaging concerns, and more. 🚀 Signup for
          free and start your halal dropshipping journey. ✨
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
    </div>
  );
};
export default AboutSection;
