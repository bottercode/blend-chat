import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import Blend from "./components/blend/Blend";
import Home from "./components/home/Home";
import { getTokenFromUrl } from "./spotify-api";

function App() {
  const [token, setToken] = useState(null);
  const spotifyWebApi = new SpotifyWebApi()


  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash ="";
    const _token = hash.access_token;

    if(_token) {
      setToken(_token)
      spotifyWebApi.setAccessToken(_token)

      spotifyWebApi.getMe().then((user) => {
        console.log(user)
      })
    }

    console.log(token)
  },[]);

  return (
    <div className="App">
      {
        token ? (<Blend />) : (<Home />)
      }
    </div>
  );
}

export default App;
