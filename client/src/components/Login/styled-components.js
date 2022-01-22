import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  width: 30%;
  max-width: 500px;
  min-width: 200px;
`;

export const LoginButton = styled.button`
  width: 100%;
  border-radius: 10px;
  font-size: 20px;
  position: relative;
`;

export const SpotifyImg = styled.img`
  position: absolute;
  background-color: transparent;
  width: 40px;
  right: 5px;
  bottom: 3px;
`;
