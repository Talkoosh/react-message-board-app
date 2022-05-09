import './App.css';
import { MainPage } from './cmps/MainPage';
import { Login } from './cmps/Login';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login></Login>}/>
          <Route path="/" element={<MainPage></MainPage>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
