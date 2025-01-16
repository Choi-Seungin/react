import './../css/Header.css';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearInfo } from '../store/MemberSlice';
import { jwtDecode } from 'jwt-decode';

export default function Header() {
  const user = useSelector(state => state.member.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let id = 'guest';
  const logout = (e) => {
    e.preventDefault();
    dispatch(clearInfo());
    alert("로그아웃 하셨습니다.");
    navigate('/');
  }
  if (user.token) {
    const decodeToken = jwtDecode(user.token);
    id = decodeToken.sub;
  }
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to="/">홈</Link></li>
            <li>
              {user.token ? <a href="" onClick={logout}>로그아웃</a> : <Link to="/login">로그인</Link>}
            </li>

            {user.token ? (
              <>
                <li><Link to="/board">글쓰기</Link></li>
                <li><Link to="/mypage">마이페이지</Link></li>
              </>
            ) : (<li><Link to="/register">회원가입</Link></li>)}
          </ul>
          {user.token ? <div>{id}님 로그인하셨습니다.</div> : <></>}
        </nav>
      </header>
    </>
  );
}