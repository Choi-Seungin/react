import { Fragment, useState } from "react"
export default function AlertState() {
    const [list, setList] = useState([]);
    const [txt, setTxt] = useState('');
    const addList = () => {
        //이런식으로 작업하면 주소값이 바뀌지 않기에 상태값을 감시하는 부분에서 값 변경을 감지하지 못함
        //list.push(txt);
        //새로 객체를 만드는 방식으로 처리
        //setList(list.concat(txt));
        setList([...list, txt]);
    }
    return (
        <Fragment>
            <p>리스트 내용 : {list.join(', ')}</p>
            <p><input type="text" onChange={(e) => setTxt(e.target.value)} /></p>
            <p><button onClick={addList}>리스트에 추가</button></p>
        </Fragment>
    );
}