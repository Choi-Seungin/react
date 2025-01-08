import {Link} from 'react-router-dom';
import '../css/header.css';

export default function Header() {
  return (
    <nav>
      <ul>
        <li><Link href="/home">홈</Link></li>
        <li><Link href="/register/view">회원등록</Link></li>
        <li><Link href="/logout">로그아웃</Link></li>
      </ul>
    </nav>
  );
}