import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./componets/Login";
import SignUp from "./componets/SignUp";
import HomePrivate from "./componets/homePages/HomePrivatePage/HomePrivate";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
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
        <Route path="/HomePrivate" element={<HomePrivate />} />;
        <Route path="/" element={<App />} />
        <Route path="Login" element={<Login />} />
        <Route path="SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  </div>
);
