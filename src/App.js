import { useEffect, useState } from "react";
import SpotifyApi from "spotify-web-api-node";
import Blend from "./components/blend/Blend";
import Home from "./components/home/Home";
import { getTokenFromUrl } from "./spotify-api";
import "./app.css";

function App() {
  const [token, setToken] = useState(null);
  const [alltopGenres, setTopGenres] = useState([]);
  console.log("HERE IS THE TOKEN", token);
  console.log("Top Genre : ", alltopGenres);

  useEffect(() => {
    const spotifyApi = new SpotifyApi();
    const hash = getTokenFromUrl();

    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotifyApi.setAccessToken(_token);

      spotifyApi.getMe().then(
        function (data) {
          console.log(
            "Some information about the authenticated user",
            data.body
          );
        },
        function (err) {
          console.log("Something went wrong!", err);
        }
      );

      spotifyApi.getMyTopArtists().then(
        function (data) {
          let topArtists = data.body.items;
          let allGenres = [];
          topArtists.forEach((each) => {
            // console.log(each);
            allGenres.push(...each.genres);
          });
          const upDatedGenres = new Set(allGenres);
          const genresArray = [...upDatedGenres];
          setTopGenres(genresArray);
        },
        function (err) {
          console.log("Something went wrong!", err);
        }
      );

      spotifyApi.getMyTopTracks().then(
        function (data) {
          let topTracks = data.body.items;
          console.log("Top tracks", topTracks);
        },
        function (err) {
          console.log("Something went wrong!", err);
        }
      );

      // spotifyApi.getMyRecentlyPlayedTracks({limit : 20})
      // .then(function(data) {
      //     console.log("Your 20 most recently played tracks are:");
      //     data.body.items.forEach(item => console.log(item.track));
      //   }, function(err) {
      //     console.log('Something went wrong!', err);
      //   })
    }
  }, []);

  return <div className="app">{token ? <Blend /> : <Home />}</div>;
}

export default App;
