import { useParams } from "react-router-dom";

export default function PostDetailPage() {
  const {id} = useParams();
  return (
    <div>
      <h2>PostDetailPage</h2>
      <p>게시글 번호 : {id}</p>
    </div>
  );
}