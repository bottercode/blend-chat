import { loginUrl } from '../../spotify-api';
import { ExternalLink } from 'react-external-link';

const Login = () => {

  return (
        <div className="login">
            <ExternalLink href={loginUrl}>
              <img title="login" src="https://cdn3.iconfinder.com/data/icons/remixicon-logos/24/spotify-fill-128.png" alt = "spotify-icon" className="spotify-icon" />
            </ExternalLink>
        </div>
  )
}

export default Login