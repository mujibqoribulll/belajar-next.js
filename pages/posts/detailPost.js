import dynamic from "next/dynamic";
import Link from "next/link";

const LayoutComponent = dynamic(() => import("@/components/layout"));

export default function DetailPost(props) {
  const { posts } = props;
  return (
    <LayoutComponent
      metaTitle={"DEtail posts"}
      metaDescription={"belajar next js"}
    ></LayoutComponent>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://dummyjson.com/posts?${new URLSearchParams({ limit: "10" })}`
  );
  const posts = await res.json();
  // Pass data to the page via props
  return { props: { posts } };
}
