import { useRef } from 'react';
import './../css/Login.css';
import axios from 'axios';
import { saveInfo } from '../store/MemberSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';

export default function Login() {
  const id = useRef(null);
  const pwd = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginHandler = () => {
    const data = {
      id: id.current.value,
      passwd: pwd.current.value
    }
    axios.post('http://localhost:9999/member/login', data)
      .then(res => {
        console.log(res.data);
        //로그인 성공하면 Home으로 이동
        if (res.data.flag) {
          //redux에 로그인 정보 저장
          dispatch(saveInfo(res.data));
          const decodeToken = jwtDecode(res.data.token);
          console.log(decodeToken);
          navigate('/');
          alert("로그인 성공");
        } else {
          //실패하면 경고창 출력
          alert('아이디 비밀번호를 확인해주세요.');
        }
      }).catch(err => {
        console.log(err);
      });
  }

  return (
    <div className="login-container">
      <h2>로그인</h2>
      <p>이곳은 로그인 페이지입니다.</p>
      <div className="login-form">
        <input type="text" ref={id} placeholder="아이디" />
        <input type="password" ref={pwd} placeholder="비밀번호" />
        <button type="submit" onClick={loginHandler}>로그인</button>
      </div>
    </div>

  );
}