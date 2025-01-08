import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const login = () => {
    navigate("/home");
  }
  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h1 className="text-center mb-4">로그인</h1>
      <input type="id" placeholder="아이디를 입력해주세요."  className="form-control mb-2"/><br/>
      <input type="password" placeholder="비밀번호를 입력해주세요." className="form-control mb-3"/><br/>
      <button onClick={login} className="btn btn-primary w-100">로그인</button>
    </div>
  );
}