import "./App.css";
import { MainPage } from "./cmps/MainPage";
import { Login } from "./cmps/Login";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login></Login>} />
          <Route path="/" element={<MainPage></MainPage>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
