"use client";
import MyImage from "@/components/myimage/myimage";
import { useState } from "react";
export default function Page() {
  let [download, setdownload] = useState(false);
  return (
    <div>
      <div onClick={() => setdownload(true)}>About</div>
      <MyImage
        folder={"productimages"}
        name={"5nyjdxaheb0" + ".png"}
        width={200}
        height={200}
        alt={"my img"}
        download={download}
        downname={'1'}
      />
    </div>
  );
}
