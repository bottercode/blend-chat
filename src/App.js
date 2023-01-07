import { useEffect, useState } from "react";
import SpotifyApi from "spotify-web-api-node";
import Blend from "./components/blend/Blend";
import Home from "./components/home/Home";
import { getTokenFromUrl, getTopTracks } from "./spotify-api";

function App() {
  const [token, setToken] = useState(null);
  console.log("HERE IS THE TOKEN", token);
  
  
  useEffect(() => {
    const spotifyApi = new SpotifyApi()
    const hash = getTokenFromUrl();
    const top_track_of_user = getTopTracks();
    console.log("Top tracks are", top_track_of_user)

    window.location.hash ="";
    const _token = hash.access_token;

    if(_token) {
      setToken(_token)
      spotifyApi.setAccessToken(_token)

      module.exports = {
        user: spotifyApi.getMe()
        .then(function(data) {
        console.log('Some information about the authenticated user', data.body);
      }, function(err) {
        console.log('Something went wrong!', err);
      })
    }

      module.topArtist = {
        artist: spotifyApi.getMyTopArtists()
      .then(function(data) {
        let topArtists = data.body.items;
        console.log("Top Artists", topArtists);
      }, function(err) {
        console.log('Something went wrong!', err);
      })
    }

      module.mytopTracks = {
        topTracks: spotifyApi.getMyTopTracks()
      .then(function(data) {
        let topTracks = data.body.items;
        console.log("Top tracks", topTracks);
      }, function(err) {
        console.log('Something went wrong!', err);
      })
    }


      module.recentlyPlayed = {
        recentlyPlayed : spotifyApi.getMyRecentlyPlayedTracks({
        limit : 20
      }).then(function(data) {
          console.log("Your 20 most recently played tracks are:");
          data.body.items.forEach(item => console.log(item.track));
        }, function(err) {
          console.log('Something went wrong!', err);
        })
      }
    }
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
