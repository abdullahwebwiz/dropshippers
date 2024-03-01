import style from "./linkcard.module.css";
const LinkCard = ({ title, list }) => {
  return (
    <div className={style.main}>
      <div className={style.title}>{title}</div>
      <div className={style.linklist}>
        {list.map((data, index) => {
          return <div key={index}>{data}</div>;
        })}
      </div>
    </div>
  );
};

export default LinkCard;
