import React from "react";

import BrokenImage from "../../assets/NoImgAvailable.jpg";
import {
  AlbumImg,
  InfoContainer,
  AlbumContainer,
  InfoDivAlbum,
  NamesDiv,
  InfoPAlbum,
  InfoName,
  SpotifyLink,
} from "./styled-components";

//component that renders out the album result page
const AlbumResult = ({ album, artist }) => {
  return (
    <AlbumContainer>
      <AlbumImg
        src={album.thumbnailUrl === "N/A" ? BrokenImage : album.thumbnailUrl}
        alt={`artist image ${album.id}`}
      />
      <InfoContainer>
        <NamesDiv>
          <InfoName>{album.name}</InfoName>
          <InfoPAlbum>{artist}</InfoPAlbum>
        </NamesDiv>
        <InfoDivAlbum>
          <InfoPAlbum>{album.releaseDate}</InfoPAlbum>
          <InfoPAlbum>{album.numTracks} Tracks</InfoPAlbum>
        </InfoDivAlbum>
        <SpotifyLink href={album.albumPreviewUrl} target="_blank">
          Preview on Spotify
        </SpotifyLink>
      </InfoContainer>
    </AlbumContainer>
  );
};

export default AlbumResult;
