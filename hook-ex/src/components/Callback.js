import React, { useCallback, useRef } from 'react';
export default function Callback() {
    const area = useRef(null);
    const changeColor = useCallback ((e) => {
        console.log(e.target.value);
        area.current.style.backgroundColor = e.target.value;
    },[]);
    return (
        <div>
            <h2>useCallback 테스트</h2>
            <div style={{width: '200px', height: '200px', border: '1px solid black', margin: '0 auto'}} ref={area}></div>
            <p><input type='color' onChange={changeColor}/></p>
        </div>
    );
}