"use client";
import MyImage from "@/components/myimage/myimage";
export default function Page() {
  return (
    <div>
      <div>About</div>
      <MyImage
        folder={"productimages"}
        name={"5nyjdxaheb0" + ".png"}
        width={200}
        height={200}
        alt={"my img"}
      />
    </div>
  );
}
