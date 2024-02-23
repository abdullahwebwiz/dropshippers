import Link from "next/link";

const LearnMore = ({ link }) => {
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
      <Link href={link}> {"Learn More 🚀"}</Link>
    </div>
  );
};

export default LearnMore;
