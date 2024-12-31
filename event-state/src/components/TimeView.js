import {useState} from "react";
export default function TimeView() {
    // 일반 변수의 값이 바뀌어도 다시 랜더링 되지 않음.
    // 해당 값을 상태값으로 지정해야 상태값이 바뀌면 다시 랜더링이 됨. <-상태변수
    // let time = new Date().toLocaleTimeString();
    // setInterval(() => {
    //     time = new Date().toLocaleTimeString();
    //     console.log(time)
    // },1000);
    // state(상태변수)
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    setTimeout(() => {
        setTime(new Date().toLocaleTimeString());
    }, 1000);

    return (
        <>
            <h2>TimeView</h2>
            <p>{time}</p>
        </>
    );
}