import React, { useEffect } from "react";

import {
  Container,
  LoginButton,
  SpotifyImg,
  StyledLink,
} from "./styled-components";
import spotifyLogo from "../../assets/spotify-logo.png";

//this component is for displaying and authenticating the user login to Spotify
const Login = () => {
  useEffect(() => {
    window.sessionStorage.setItem("searchTerm", JSON.stringify(""));
  }, []);

  return (
    <Container>
      <StyledLink to="/login">
        <LoginButton>
          Login
          <SpotifyImg src={spotifyLogo} />
        </LoginButton>
      </StyledLink>
    </Container>
  );
};
export default Login;
