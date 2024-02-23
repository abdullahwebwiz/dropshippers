const Title = ({ color, title }) => {
  return (
    <div
      style={{
        width: "100%",
        padding: "10px",
        color: color == "o" ? "#f85606" : "purple",
        fontSize: "25px",
        fontWeight: 600,
        textAlign: "center",
      }}
    >
      {title}
    </div>
  );
};

export default Title;
