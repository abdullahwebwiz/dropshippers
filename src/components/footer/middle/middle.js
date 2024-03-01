import LinkCard from "./linkcard/linkcard";
import style from "./middle.module.css";
let data = [
  {
    title: "ThephonesGrarage.com",
    links: ["Newsletter", "Blogs & News", "Contact", "About", "Careers"],
  },
  {
    title: "Documentations",
    links: ["Privacy Policy", "Terms & Conditions", "FAQs"],
  },
  {
    title: "ShortCuts",
    links: [
      "Search by brand",
      "Accessories",
      "Batteries",
      "Chargers",
      "Display Screens",
      "Internal Body",
      "Tools",
    ],
  },
  {
    title: "Social Links",
    links: ["Facebook", "Twitter", "Linkedin", "Youtube", "Instagram"],
  },
  { title: "Users", links: ["Signup", "login"] },
];
const Middle = () => {
  return (
    <div className={style.main}>
      {data.map((data, index) => {
        return <LinkCard key={index} title={data.title} list={data.links} />;
      })}
    </div>
  );
};
export default Middle;
