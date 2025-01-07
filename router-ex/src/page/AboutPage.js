import { Link, Outlet } from "react-router-dom";

export default function AboutPage() {
  return (
    <div>
      <h2>About Page</h2>
      <p>이 프로젝트에 대한 간단한 설명을 보여줍니다.</p>
      <ul>
        <li><Link to="team">팀 소개</Link></li>
        <li><Link to="company">회사 소개</Link></li>
      </ul>
      <hr/>
      {/* 중첩 라우트로 매칭된 하위 컴포넌트가 랜더링 될 위치 */}
      <Outlet/>
    </div>
  );
}