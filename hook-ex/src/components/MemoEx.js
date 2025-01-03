import { useMemo, useRef, useState } from "react";
export default function MemoEx() {
    const [avg, setAvg] = useState(0);
    const [num, setNum] = useState([]);
    const input = useRef(null);
    const btnAdd = () => {
        setNum([...num, Number(input.current.value)]);
    }
    const [temp, setTemp] = useState(0);
    const getAvg = (arr) => {
        console.log("평균 계산중...")
        if(temp === arr.length) return avg;
        //평균을 구해서 리턴
        return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
    }
    const getAvgMemo = useMemo(() => getAvg(num),[num]);
    return (
        <div>
            <h2>useMemo 테스트</h2>
            <p>{num.join(', ')} / 평균 : {getAvgMemo}</p>
            <p><input type="number" ref={input}/><button onClick={btnAdd}>숫자 추가</button></p>
            <p><button onClick={() => setTemp(temp + 1)}>테스트</button></p>
        </div>
    );
}