import React, { useState } from 'react';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    const userData = {
      name: name,
      email: email,
      password: password,
    };
    console.log('회원가입 정보:', JSON.stringify(userData));
  };

  return (
    <div>
      <h1>회원가입</h1>
      <input 
        type="text" 
        placeholder="이름 입력" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <br />
      <input 
        type="email" 
        placeholder="이메일 입력" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <br />
      <input 
        type="password" 
        placeholder="비밀번호 입력" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <br />
      <button onClick={handleSignUp}>회원가입</button>
    </div>
  );
}

export default RegisterForm;