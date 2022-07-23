import './App.css';
import Login from "./componets/Login";
import SignUp from './componets/SignUp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

//let UserConnected;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="SignUp" element={<SignUp />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
