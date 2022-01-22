import { useEffect, useState } from "react";
import { Switch, Route, useHistory, withRouter } from "react-router-dom";

import SpotifyWebApi from "spotify-web-api-node";

import Header from "./components/Header";
import Login from "./components/Login";
import SpotifyLogin from "./components/SpotifyLogin";
import ArtistSearch from "./components/ArtistSearch";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import AlbumsPage from "./components/AlbumsPage";
// import { useHistory } from "react-router";

const App = () => {
  const [spotifyWebApi, setSpotifyWebApi] = useState(null);
  const [accessToken, setAccessToken] = useState(() => {
    const persistParam = window.sessionStorage.getItem("accessToken");
    return persistParam !== null ? JSON.parse(persistParam) : null;
  });

  let history = useHistory();

  //on initial render, set up the spotify web api from the library spotify-web-api-node using the client id.
  useEffect(() => {
    setSpotifyWebApi(
      new SpotifyWebApi({
        clientId: process.env.REACT_APP_CLIENT_ID,
      })
    );

    if (accessToken && spotifyWebApi) {
      spotifyWebApi.setAccessToken(accessToken);
    }

    //when the login expires, pusht the user back to login and alert them
    const timeout = setTimeout(() => {
      window.sessionStorage.setItem("accessToken", JSON.stringify(""));
      alert("Your access token has expired. Please login again");
      history.push("/");
    }, 3600 * 1000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!accessToken || !spotifyWebApi) return;
    window.sessionStorage.setItem("accessToken", JSON.stringify(accessToken));
    spotifyWebApi.setAccessToken(accessToken);
  }, [accessToken]);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/login">
            <SpotifyLogin />
          </Route>
          <Route path="/artistsearch">
            <ArtistSearch
              spotifyWebApi={spotifyWebApi}
              setAccessToken={setAccessToken}
              accessToken={accessToken}
            />
          </Route>
          <Route path="/albums/:artistId">
            <AlbumsPage
              spotifyWebApi={spotifyWebApi}
              accessToken={accessToken}
            />
          </Route>
        </Switch>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 1 auto;
  height: 100%;
`;

export default withRouter(App);
