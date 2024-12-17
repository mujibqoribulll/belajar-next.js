import dynamic from "next/dynamic";
import Link from "next/link";

const LayoutComponent = dynamic(() => import("@/components/layout"));

export default function Posts(props) {
  const { posts } = props;
  return (
    <LayoutComponent metaTitle={"Posts"} metaDescription={"belajar next js"}>
      {posts.posts.map((post, item) => (
        <Link href={`posts/${post.id}`} key={item}>
          <div className="border border-gray-800/30 p-5 rounded-lg mt-2">
            <h3 className="text-base font-bold">{post?.title}</h3>
            <p className="text-base font-extralight leading-6">{post?.body}</p>
            <div>
              <ul className="flex flex-row gap-2">
                {post.tags.map((tag, index) => {
                  return <li className="text-base font-medium" key={index}>#{tag}</li>;
                })}
              </ul>
            </div>
          </div>
        </Link>
      ))}
    </LayoutComponent>
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
