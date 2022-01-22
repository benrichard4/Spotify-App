import { Link } from "react-router-dom";
import styled from "styled-components";

export const InfoContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  height: 80%;
  width: 85%;
  border-radius: 25px;
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: var(--card-color);
`;

export const ArtistImg = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  min-width: 100px;
  height: 60%;
  object-fit: cover;
  border-radius: 20%;
  z-index: 10;
  box-shadow: 0 0 6px 5px var(--card-color);
`;

export const AlbumImg = styled(ArtistImg)`
  height: 50%;
`;

export const ArtistContainer = styled(Link)`
  display: flex;
  flex-flow: column;
  position: relative;
  max-width: 270px;
  width: 100%;
  min-width: 250px;
  max-height: 270px;
  height: 40vh;
  min-height: 270px;
  margin: 15px 0;
  &:hover ${InfoContainer} {
    box-shadow: 0 0 6px 5px lightgrey;
    cursor: pointer;
  }
  &:hover ${ArtistImg} {
    box-shadow: 0 0 6px 5px lightgrey;
    cursor: pointer;
  }
`;

export const AlbumContainer = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
  max-width: 270px;
  width: 100%;
  max-height: 330px;
  height: 50vh;
  min-height: 270px;
  margin: 20px 0;
`;

export const InfoDiv = styled.div`
  position: absolute;
  bottom: 7px;
  width: 80%;
`;

export const InfoDivAlbum = styled(InfoDiv)`
  bottom: 36px;
`;

export const InfoP = styled.p`
  font-size: 15px;
  color: grey;
  margin-bottom: 5px;
`;

export const InfoName = styled.div`
  line-height: 1.1em;
  max-height: 2.2em;
  font-size: 1.1rem;
  margin: 5px 0;
  color: black;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;

  :hover {
    overflow: visible;
  }
`;

export const NamesDiv = styled.div`
  position: absolute;
  top: 43%;
  width: 80%;
`;

export const InfoPAlbum = styled.p`
  font-size: 0.8em;
  max-height: 1.5em;
  color: grey;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SpotifyLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  height: 30px;
  text-align: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  background-color: var(--spotify-green);
  border-radius: 0 0 25px 25px;
`;
