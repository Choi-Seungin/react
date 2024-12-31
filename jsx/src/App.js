 
import './App.css';
import NoJSX from './components/NoJSX'; 
import ComponentEx from './components/ComponentEx';
import LoginEx from './components/LoginEx';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <div className="App">
      <NoJSX/>
      <hr/>
      <ComponentEx/>
      <hr/>
      <LoginEx/>
      <hr/>
      <RegisterForm/>
    </div>
  );
}

export default App;
