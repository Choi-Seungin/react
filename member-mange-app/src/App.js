import './App.css';
import Header from './components/Header';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Login from './page/Login';
import Home from './page/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './page/Register';
import Board from './page/Board';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <hr />
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/board/view" element={<Board/>}></Route>
          <Route path="/register/view" element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
