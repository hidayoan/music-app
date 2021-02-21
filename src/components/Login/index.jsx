import React from "react";
import { loginUrl } from "../../Spotify/Spotify";
import "./styles/index.scss";

Login.propTypes = {};

function Login(props) {
  return (
    <div className="login">
      <img
        src="https://i.pinimg.com/originals/55/48/20/554820d211ecbd25d9edb5fb7030183e.png"
        alt=""
      />
      <a href={loginUrl}>LOGIN WITH HIDA</a>
    </div>
  );
}

export default Login;
