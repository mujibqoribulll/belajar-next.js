

import dynamic from "next/dynamic";
import Image from "next/image";

const LayoutComponent = dynamic(() => import("@/components/layout"));

export default function Home() {

  return (
    <>
      <LayoutComponent metaTitle={"Home"} metaDescription={"belajar next js"}>
        Content
        <Image src={"/love.jpg"} width={400} height={400} alt="love.jpg" />
        <img
          src="/love.jpg"
          style={{ width: 400, height: 400 }}
          alt="love.jpg"
        />
      </LayoutComponent>
    </>
  );
}
