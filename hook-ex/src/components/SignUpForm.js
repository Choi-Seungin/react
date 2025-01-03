import {useState} from 'react';
export default function SignUpForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = () => {
        console.log(name);
        console.log(email);
        console.log(password);
    }

    return (
        <div>
            <h2>회원가입</h2>
            <form>
            <p><input type="text" placeholder='이름' onChange={e =>setName(e.target.value)}/></p>
            <p><input type="email" placeholder='Email' onChange={e =>setEmail(e.target.value)}/></p>
            <p><input type="password" placeholder='패스워드' onChange={e =>setPassword(e.target.value)}/></p>
            <p><button onClick={signUp}>가입하기</button></p>
            </form>
        </div>

    );
}