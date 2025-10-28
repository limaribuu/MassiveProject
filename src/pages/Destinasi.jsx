import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  return <div className="p-6">Menampilkan detail untuk: {id}</div>;
}
