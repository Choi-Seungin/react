import './../css/style.css'

export default function componentEx() {
    const func = () => alert('hello');
    //이벤트 처리 방법
    //https://ko.legacy.reactjs.org/docs/handling-events.html
    console.log('test')
    const items = ['item1', 'item2', 'item3'];
    const style = {color:'red', backgroundColor:'yellow' ,fontSize:'20px'}
    let flag = true;
    return (
        <div>
            <h2>태그는 반드시 닫아야 함, 단일태그도 포함</h2>
            <input type="text" placeholder="아이디를 입력해주세요"/>
            <hr></hr>
            <h2>이벤트 처리 방법</h2>
            <button onClick={func}>경고창 띄우기 - 1</button>
            <button onClick={() => alert('hello')}>경고창 띄우기 - 2</button>
            <hr/>
            <h2>반복적인 UI 생성</h2>
            <ul>
                {items.map((item,idx) => <li key={idx} className='bold'>{item}</li>)}
            </ul>
            <hr/>
            <div style={{color:'red', backgroundColor:'yellow' ,fontSize:'20px'}}>
                인라인 스타일 적용 방법
            </div>
            <div style={style}>
                스타일 적용 방법
            </div>
            <h3>조건부 랜더링</h3>
            {flag ? <h3>true 일때</h3> : <h3>false 일때</h3>}
        </div>
    );
}
//JSX 규칙
// 1. 반드시 부모요소 태그 하나로 감싸야 된다.
// 2. JSX 안에서 자바스크립트 표현식을 쓸려면 {}로 묶어야 됨
// 3. {} 내에서는 반복문이랑 if문을 사용하지 않음, 필요시 삼항연산자는 사용 가능
// 4. CSS 적용시에도 카멜 표기법으로 작성해야함 (background-color —> backgroundColor)
// 5. JSX의 속성은 DOM 속성명(javascript 속성)을 따른다 → class 를 className으로 사용
// 6. 반드시 닫는 태그를 써야됨
// 7. 반드시 ‘’ “”로 묶지 않음