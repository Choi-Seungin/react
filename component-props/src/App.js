import logo from './logo.svg';
import './App.css';
import ButtonOK from './components/ButtonOK';
import PropsEx from './components/PropsEx';
import ButtonCount from './components/ButtonCount';
import ItemList from './components/ItemList';
import Product from './components/Product';

const obj = {
  count : 0
}
function App() {
  const addCount = () => {
    obj.count += 1;
    console.log(obj.count);
  }
  return (
    <div className="App">
      <h2>컴포넌트 Props</h2>
      <ButtonOK data='데이터' var='확인' attr1='속성1'/>
      <hr/>
      <PropsEx name='홍길동' age='30'/>
      <hr/>
      <ButtonCount count={obj.count} addCount={addCount} obj={obj} />
      <hr/>
      <ItemList />
      <hr/>
      <Product name='컴퓨터' price='1500000' description='고성능 게이밍 컴퓨터입니다.' />
      <hr/>
      <Product name='키보드' price='1000' description='멤브레인 키보드' />
    </div>
  );
}

export default App;
