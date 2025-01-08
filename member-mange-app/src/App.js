import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Login from './page/Login';
import Home from './page/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <hr />
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
