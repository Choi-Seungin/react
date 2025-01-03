import logo from './logo.svg';
import './App.css';
import EffectEx from './components/EffectEx';
import LoginForm from './components/LoginForm';
import RefEx from './components/RefEx';
import SignUpForm from './components/SignUpForm';
import MemoEx from './components/MemoEx';
import Callback from './components/Callback';
import ContextComponent from './components/ContextComponent';
import CounterReducer from './components/CounterReducer';

function App() {
  return (
    <div className="App">
      <EffectEx/>
      <hr/>
      <LoginForm/>
      <hr/>
      <RefEx/>
      <hr/>
      <SignUpForm/>
      <hr/>
      <MemoEx/>
      <hr/>
      <Callback/>
      <hr/>
      <ContextComponent/>
      <hr/>
      <CounterReducer/>  
    </div>
  );
}

export default App;
