import { React, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./componets/PagesBeforeLogin/Components/Login";
import SignUp from "./componets/PagesBeforeLogin/Components/SignUp";
import Start from "./componets/PagesBeforeLogin/Components/Start";
import UserPrivatePage from "./componets/PagesAfterLogin/UserPrivatePage";
import UserHomePage from "./componets/PagesAfterLogin/UserHomePage";

function App() {
  const [LoggedUser, setLoggedUser] = useState({});
  //in react for changing object during running we need to "latof" the change state function in that function
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
            path="/userHomePage"
            element={
              <UserHomePage
                userInfo={LoggedUser}
                changeUserInfo={onLoggedUser}
              />
            }
          />
          <Route path="/" element={<Start />} />
          <Route
            path="/Login"
            element={<Login onLoggedUser={onLoggedUser} />}
          />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
