const clientId = 'd89f8525654645d68d1b0cce27e39bba';
const authEndpoint = "https://accounts.spotify.com/authorize";
// const clientSecret = 'c92b7e1c1d714aeeb796bb08b6eb7188';
const redirectUri =  "http://localhost:3000/callback/";
const Top_Tracks = `http://api.spotify.com/v1/me/type`
  
const scopes = [
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-top-read",
];

export const getTopTracks = async() => {
    const { access_token } = await getTokenFromUrl()

    return fetch(Top_Tracks, 
        {
            mode: 'no-cors',
            method: "post",
            headers: 
            {
                Authorization: `Bearer ${access_token}`,
                // Content-Type: applicationjson,
            },
        }
    )
}

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1])

        return initial
    }, {});
}



export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}`;
