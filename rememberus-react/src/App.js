import { React, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./componets/Login";
import SignUp from "./componets/SignUp";
import HomePrivate from "./componets/homePages/HomePrivatePage/HomePrivate";
import Start from "./componets/Start";

function App() {
  const [LoggedUser, setLoggedUser] = useState({});
  const onLoggedUser = (userInfo) => {
    setLoggedUser((prev) => {
      return userInfo;
    });
  };
  return (
    <div
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/img/backgroungFloorplan.png"
        })`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <Router>
        <Routes>
          <Route
            path="/HomePrivate"
            element={<HomePrivate userInfo={LoggedUser} />}
          />
          <Route path="/" element={<Start />} />
          <Route
            path="/Login"
            element={<Login onLoggedUser={onLoggedUser} />}
          />
          <Route
            path="/SignUp"
            element={<SignUp onLoggedUser={onLoggedUser} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
