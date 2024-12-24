export default function LoginEx() {
    const login = () => {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        console.log(email, password);
    };
    return (
        <div>
            <h3>로그인 페이지</h3>
            <input type="email" id="email" placeholder="Email을 입력해주세요" /> <br/>
            <input type="password" id="password" placeholder="비밀번호를 입력해주세요" /><br/>
            <button type="button" onClick={login}>로그인</button>
        </div>
    );
}