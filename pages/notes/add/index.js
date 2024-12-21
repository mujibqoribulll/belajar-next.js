import ButtonIcon from "@/components/button";
import { useMutation } from "@/hooks/useMutation";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";

const LayoutComponent = dynamic(() => import("@/components/layout"));
export default function AddNote() {
  const route = useRouter();
  const {
    function: { mutation },
  } = useMutation();
  const [note, setNote] = useState({
    title: "",
    description: "",
  });

  async function handleSubmit(e) {
    const { description, title } = note;
    e.preventDefault();
    if ((!title, !description)) {
      return null;
    }
    const result = await mutation({
      url: "https://service.pace-unv.cloud/api/notes",
      payload: note,
    });
    if (result?.success) {
      route.push("/notes");
    }
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
                  value={note.title}
                  name="title"
                  onChange={handleChange}
                  className="border border-gray-700/20 w-full p-2 rounded-lg outline-blue-800/80"
                />
              </div>
              <div className="py-2">
                <label>Description</label>
                <textarea
                  placeholder="Description"
                  value={note.description}
                  name="description"
                  onChange={handleChange}
                  className="border border-gray-700/20 w-full p-2 rounded-lg outline-blue-800/80"
                />
              </div>
              <ButtonIcon
                label="Add Note"
                styleContainer="bg-blue-800/80"
                type="submit"
                //   onClick={() => handleNavigate()}
              />
            </form>
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
}
