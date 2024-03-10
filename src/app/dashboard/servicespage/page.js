import Space from "@/components/space/space";
import Header from "../header";
const Page = () => {
  return (
    <div>
      <Header />
      <Space />
      <div
        style={{
          fontSize: "30px",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        Coming Soon. Good things take time 👍
      </div>
    </div>
  );
};
export default Page;
