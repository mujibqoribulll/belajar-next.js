import { useRouter } from "next/router";
import ButtonIcon from "../button";

export default function Card(props) {
  const router = useRouter();

  const { note, onDelete } = props;
  return (
    <div className="bg-white p-5 rounded-lg shadow-lg">
      <h3>{note?.title}</h3>
      <p>{note.description}</p>
      <div className="flex flex-row gap-2">
        <ButtonIcon
          label="Edit"
          styleContainer="bg-teal-500"
          onClick={() => router.push(`/notes/edit/${note?.id}`)}
        />
        <ButtonIcon label="Delete" onClick={() => onDelete(note?.id)} />
      </div>
    </div>
  );
}
