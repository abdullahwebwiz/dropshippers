import Image from "next/image";
import style from "./reviewsection.module.css";
import Title from "../title/title";

let data = [
  {
    name: "Abdullah",
    city: "Kohat",
    msg: "This is a very useful plateform. I will recommend this plateform toall my fellow all accross the country. 5 out of 5 stars from me. Trust me you will love it too. My dear brothers and sisters you need to raise and shine.",
    stars: 5,
  },
  {
    name: "Salman",
    city: "Karachi",
    msg: "This is a very useful plateform. I will recommend this plateform toall my fellow all accross the country. 5 out of 5 stars from me. Trust me you will love it too. My dear brothers and sisters you need to raise and shine.",
    stars: 5,
  },
  {
    name: "Salman",
    city: "Karachi",
    msg: "This is a very useful plateform. I will recommend this plateform toall my fellow all accross the country. 5 out of 5 stars from me. Trust me you will love it too. My dear brothers and sisters you need to raise and shine.",
    stars: 5,
  },
  {
    name: "Salman",
    city: "Karachi",
    msg: "This is a very useful plateform. I will recommend this plateform toall my fellow all accross the country. 5 out of 5 stars from me. Trust me you will love it too. My dear brothers and sisters you need to raise and shine.",
    stars: 5,
  },
];

const ReviewSection = () => {
  return (
    <div className={style.parent}>
      <Title color={'p'} title={'DropShippers Reviews 🌟'} />
      <div className={style.main}>
        {
          data ?
            data.map((content, index) => {
              return (
                <div className={style.review} key={index}>
                  <div className={style.namecity}>
                    <div className={style.name}>{content.name}</div>
                    <div className={style.city}>From {content.city}</div>
                  </div>
                  <div className={style.msg}>
                    {'"' + content.msg + '"'}
                  </div>
                  <div className={style.stars}>
                    {[...Array(content.stars)].map((_, index) => (
                      <Image src={'/star.png'} width={35} height={35} key={index} />
                    ))}
                  </div>
                </div>
              )
            })
            : ""
        }
      </div>
    </div>
  );
};
export default ReviewSection;
