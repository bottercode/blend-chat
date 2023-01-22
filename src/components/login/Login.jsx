import { loginUrl } from "../../spotify-api";
import spotify from "../../images/spotify_icon.png";
// import { BrowserRouter } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div>
        <img
          src={spotify}
          alt="spotify-icon"
          className="spotify-icon"
        />
        <h1 className="spotify_text">Spotify</h1>
      </div>
      <a href={loginUrl}>
        <div className="login_btn">
          <p>LOGIN WITH SPOTIFY</p>
        </div>
      </a>
    </div>
  );
};

export default Login;
