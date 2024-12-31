import { useState } from "react";
export default function ColorToggle() {
    const [fcolor, setColor] = useState(true);
    const toggleFunction = () => setColor(!fcolor);
    return (
        <div>
            <p style={{ color: fcolor ? "red" : "blue" }}>이 텍스트의 색상을 변경해보세요.</p>
            <button onClick={toggleFunction}>색상 변경</button>
        </div>
    );
}