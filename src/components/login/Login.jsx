import { loginUrl } from '../../spotify-api';
// import { BrowserRouter } from "react-router-dom";

const Login = () => {

  return (
        <div className="login">
            <a href={loginUrl}>
              <img title="login" src="https://cdn3.iconfinder.com/data/icons/remixicon-logos/24/spotify-fill-128.png" alt = "spotify-icon" className="spotify-icon" />
            </a>
        </div>
  )
}

export default Login