import React from "react";
// import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "../login/Login";

import "./home.css";

const Home = () => {
  return (
    <>
      <div className="home_tag">
        <div className="home_tag__inner">
          <h1>
            Unite your <span>𝕞𝕦𝕤𝕚𝕔 𝕥𝕒𝕤𝕥𝕖 𝕨𝕚𝕥𝕙 𝕝𝕚𝕜𝕖-𝕞𝕚𝕟𝕕𝕖𝕕</span> friends.
          </h1>
        </div>
      </div>
      <div className="home_login">
        <div className="home_inner">
          <Login />
        </div>
      </div>
    </>
  );
};

export default Home;
