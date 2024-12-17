import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const LayoutComponent = dynamic(() => import("@/components/layout"));

export default function Notes(props) {
  const { notes } = props;

  function handleCLick() {}
  return (
    <>
      <LayoutComponent metaTitle={"Notes"} metaDescription={"belajar next js"}>
        <div className="flex flex-col gap-y-2">
          {notes.todos.map((item, index) => {
            return (
              <Link href={`/notes/${item?.id}`} key={index}>
                <div className="bg-gray-700/20 p-5 flex flex-row justify-start gap-3 items-center">
                  <input type="checkbox" checked={item?.completed} />
                  <p className="font-semibold text-sm">{item?.todo}</p>
                </div>
              </Link>
            );
          })}
          <div className="flex justify-center items-center">
            <button
              className="bg-slate-700/90 text-white text-lg px-4 py-2"
              onClick={handleCLick}
            >
              Load more!
            </button>
          </div>
        </div>
      </LayoutComponent>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://dummyjson.com/todos?${new URLSearchParams({ limit: "10" })}`
  );
  const notes = await res.json();
  return { props: { notes }, revalidate: 10 };
}
