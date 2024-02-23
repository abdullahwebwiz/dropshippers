import Space from "../space/space";
import Title from "../title/title";
import style from "./steps.module.css";
import StepsCard from "./stepscard/stepscard";
const Steps = () => {
  return (
    <>
      <div className={style.main}>
        <StepsCard number={"1"} img={"1"} name={"Sign Up ✅"} />
        <StepsCard number={"2"} img={"2"} name={"List Products 🛍️"} />
        <StepsCard number={"3"} img={"3"} name={"Get Orders 📦"} />
        <StepsCard number={"4"} img={"4"} name={"Earn Halal Profit 💸"} />
      </div>
    </>
  );
};
export default Steps;
