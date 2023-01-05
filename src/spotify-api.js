const clientId = 'd89f8525654645d68d1b0cce27e39bba';
const authEndpoint = "https://accounts.spotify.com/authorize";
const clientSecret = 'c92b7e1c1d714aeeb796bb08b6eb7188';
const redirectUri =  "http://localhost:3000/callback/";

const scopes = [
    "streaming",
    "user-read-email",
    "user-read-private",
];

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
