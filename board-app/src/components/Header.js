import './../css/Header.css';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearInfo } from '../store/MemberSlice';

export default function Header() {
  const user = useSelector(state => state.member.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    dispatch(clearInfo());
    alert("로그아웃 하셨습니다.");
    navigate('/');
  }
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to="/">홈</Link></li>
            <li>
              { user.token ?  <a href="" onClick={logout}>로그아웃</a> : <Link to="/login">로그인</Link>}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}