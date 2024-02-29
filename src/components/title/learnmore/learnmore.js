import Link from "next/link";

const LearnMore = ({ link, color }) => {
  return (
    <div
      style={{
        width: "100%",
        padding: "10px",
        fontSize: "18px",
        fontWeight: 600,
        textAlign: "center",
      }}
    >
      <Link href={link} style={{ color: color ? color : "black" }}>
        {" "}
        {"Learn More 🚀"}
      </Link>
    </div>
  );
};

export default LearnMore;
