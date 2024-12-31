import { useState } from "react";

export default function CountButton() {
    const [count, setCount] = useState(0);
    const increaseCount = () => setCount(count + 1);
    
    return (
        <>
        <p>count 상태 변수 값 : {count}</p>
        <button onClick={increaseCount}>카운트 증가</button>
        </>
    );
}