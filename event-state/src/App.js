import logo from './logo.svg';
import './App.css';
import TimeView from './components/TimeView';
import LoginForm from './components/LoginForm';
import ColorToggle from './components/ColorToggle';
import CountButton from './components/CountButton';
import AlertState from './components/AlertState';

function App() {
  return (
    <div className="App">
      <TimeView/>
      <hr/>
      <LoginForm/>
      <hr/>
      <ColorToggle/>
      <hr/>
      <CountButton/>
      <hr/>
      <AlertState/>
    </div>
  );
}

export default App;
