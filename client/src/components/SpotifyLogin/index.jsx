import React, { useEffect } from "react";

//this component is for displaying and authenticating the user login to Spotify
const SpotifyLogin = () => {
  //generate random string to save to sessionStorage. This is for validating if the user is authorized later on. Accepts a length argument
  const generateRandomString = (length) => {
    let text = "";
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  };

  const client_id = process.env.REACT_APP_CLIENT_ID;
  const redirect_uri = "http://localhost:3000/artistsearch";
  const scope = "user-read-private user-read-email";
  const state = generateRandomString(12);

  let url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += `&client_id=${encodeURIComponent(client_id)}`;
  url += `&scope=${encodeURIComponent(scope)}`;
  url += `&redirect_uri=${encodeURIComponent(redirect_uri)}`;
  url += `&state=${encodeURIComponent(state)}`;

  useEffect(() => {
    handleLogin();
  }, []);

  const handleLogin = () => {
    window.location = url;
  };

  return <div>Loading...</div>;
};

export default SpotifyLogin;
