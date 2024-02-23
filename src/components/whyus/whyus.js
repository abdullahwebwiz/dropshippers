import Title from "../title/title";
import style from "./whyus.module.css";
import WhyUsCard from "./whyuscard/whyuscard";
const WhyUs = () => {
  return (
    <div className={style.main}>
      <div className={style.maincon}>
        <WhyUsCard
          title={"0 Investment 💲"}
          img={"1"}
          alt={"money"}
          desc={
            "Start and run Your e-commerce Business without heavy investments"
          }
        />
        <WhyUsCard
          title={"100% Halal ☪️"}
          img={"2"}
          alt={"halal business"}
          desc={
            "Our dropshiping is islamic scholar approved and works on halal model"
          }
        />
        <WhyUsCard
          title={"No more Inventories"}
          img={"3"}
          alt={"inventry"}
          desc={"Eliminates the need of time consuming inventry management"}
        />
        <WhyUsCard
          title={"No Packaging Headache"}
          img={"4"}
          alt={"packaging materials"}
          desc={"No more need to find affordable packaging materials"}
        />
        <WhyUsCard
          title={"Affordable Shipping"}
          img={"5"}
          alt={"shipping and courior"}
          desc={"Get reasonable & affordable shipping rates"}
        />
      </div>
    </div>
  );
};

export default WhyUs;
