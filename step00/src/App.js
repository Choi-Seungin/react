import './App.css';
import {sum, minus} from './func/math';
import test from './func/default';

function App() {
  //값 비교(Primitive Type)
  console.log(-0 === +0);
  console.log(Object.is(-0, +0));
  console.log(NaN === NaN);
  console.log(Object.is(NaN, NaN));

  //문자열 비교 - Primitive Type
  let str1 = 'hello';
  let str2 = 'hello';
  console.log(str1 == str2);
  console.log('---------------------');

  //객체 비교 - Reference Type
  let obj1 = {name : '홍길동'};
  let obj2 = {name : '홍길동'};
  console.log(obj1 == obj2);
  console.log(obj1 === obj2);
  console.log(Object.is(obj1, obj2));

  obj1 = obj2;
  console.log(obj1 == obj2);
  console.log(obj1 === obj2);
  console.log(Object.is(obj1, obj2));
  console.log('---------------------');

  console.log(sum(10, 20));
  console.log(minus(10, 20));

  test('hello world');
  console.log('test')
  return (
    <div className="App">
      <h1>리액트 테스트</h1>
    </div>
  );
}

export default App;
