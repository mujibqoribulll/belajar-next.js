import dynamic from "next/dynamic";

const LayoutComponent = dynamic(() => import("@/components/layout"));
export default function DetailNote(props) {
  const { notes } = props;

  return (
    <LayoutComponent
      metaTitle={"Detail notes"}
      metaDescription={"belajar next js"}
    >
      <div className="bg-gray-700/20 p-5 h-screen flex flex-row justify-start gap-3 items-center">
        <input type="checkbox" checked={notes?.completed} />
        <p className="font-semibold text-sm">{notes?.todo}</p>
      </div>
    </LayoutComponent>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    `https://dummyjson.com/todos?${new URLSearchParams({ limit: "10" })}`
  );
  const notes = await res.json();
  const paths = notes.todos.map((item) => ({
    params: {
      id: item?.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false, // false or "blocking"
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(
    `https://dummyjson.com/todos/${id}?${new URLSearchParams({ limit: "10" })}`
  );
  const notes = await res.json();
  return { props: { notes } };
}
