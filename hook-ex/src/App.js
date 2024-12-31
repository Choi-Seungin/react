import logo from './logo.svg';
import './App.css';
import EffectEx from './components/EffectEx';
import LoginForm from './components/LoginForm';
import RefEx from './components/RefEx';
import SignUpForm from './components/SignUpForm';

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
    </div>
  );
}

export default App;
