import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

export default function Home() {
  const user = useSelector(state => state.member.value);
  let id = 'guest';
  if(user.token){
    const decodeToken = jwtDecode(user.token);
    id = decodeToken.sub;
  }
  return (
    <div>
      <h2>게시글 목록을 출력하는 페이지 입니다.</h2>
      <p>{id}님이 로그인하셨습니다.</p>

    </div>
  );
}