import ButtonIcon from "@/components/button";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const LayoutComponent = dynamic(() => import("@/components/layout"));

export default function Edit() {
  const router = useRouter();
  const { id } = router.query;
  const route = useRouter();
  const [note, setNote] = useState({
    title: "",
    description: "",
  });

  async function fetchData() {
    try {
      let result = await fetch(
        `https://service.pace-unv.cloud/api/notes/${id}`
      );
      let listNote = await result.json();
      console.log("listNote", listNote);
      setNote(() => ({
        title: listNote?.data?.title,
        description: listNote?.data?.description,
      }));
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  async function handleSubmit(e) {
    const { description, title } = note;
    e.preventDefault();
    if ((!title, !description)) {
      return null;
    }
    try {
      let response = await fetch(`https://service.pace-unv.cloud/api/notes/update/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      });

      const result = await response.json();
      if (result?.success) {
        route.push("/notes");
      }
    } catch (error) {}
  }

  function handleChange(e) {
    const { value, name } = e.target;
    setNote((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }
  return (
    <LayoutComponent
      metaTitle={"Add notes"}
      metaDescription={"belajar next js"}
    >
      <div className="flex flex-row justify-between my-4 ">
        <div className="grid grid-cols-0 md:grid-cols-2 flex-1 px-4 ">
          <div className="bg-white p-5 rounded-lg shadow-lg ">
            <form onSubmit={handleSubmit}>
              <div className="py-2">
                <label className="text-lg font-medium">Title</label>
                <input
                  placeholder="Title"
                  value={note?.title}
                  name="title"
                  onChange={handleChange}
                  className="border border-gray-700/20 w-full p-2 rounded-lg outline-blue-800/80"
                />
              </div>
              <div className="py-2">
                <label>Description</label>
                <textarea
                  placeholder="Description"
                  value={note?.description}
                  name="description"
                  onChange={handleChange}
                  className="border border-gray-700/20 w-full p-2 rounded-lg outline-blue-800/80"
                />
              </div>
              <ButtonIcon
                label="Edit Note"
                styleContainer="bg-blue-800/80"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
}
