import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AlbumResult from "../Results/AlbumResults";
import {
  Container,
  ArtistTitle,
  AlbumP,
  TitlesDiv,
  ResultsContainer,
  Results,
} from "./styled-components";

//component that renders out the AlbumsPage
const AlbumsPage = ({ spotifyWebApi, accessToken }) => {
  //get the artist Id from the params
  const { artistId } = useParams();

  const [albumResults, setAlbumResults] = useState([]);
  const [artist, setArtist] = useState(null);
  const [displayedResultNumber, setDisplayedResultNumber] = useState(8);

  //on load, get artist and get albums
  useEffect(() => {
    if (!artistId || !accessToken || !spotifyWebApi) return;
    spotifyWebApi.getArtist(artistId).then((res) => {
      setArtist(res.body.name);
    });
    getAlbums();
  }, []);

  //when variables noted in dependency array change, run getartist and getAlbums function
  useEffect(() => {
    if (!accessToken || !spotifyWebApi) {
      return;
    }

    spotifyWebApi.getArtist(artistId).then((res) => {
      setArtist(res.body.name);
    });

    getAlbums();
  }, [accessToken, displayedResultNumber, spotifyWebApi]);

  //function that uses the spotify api node library to get albums based
  const getAlbums = () => {
    let cancel = false;
    spotifyWebApi
      .getArtistAlbums(artistId, { limit: displayedResultNumber })
      .then((res) => {
        if (cancel) return;
        setAlbumResults(
          res.body.items.map((album, index) => {
            //get largest image
            let largestImg = album.images.reduce((largest, image) => {
              if (image.height > largest.height) return image;
              return largest;
            }, album.images[0]);

            return {
              id: album.id,
              name: album.name,
              thumbnailUrl: largestImg ? largestImg.url : "N/A",
              releaseDate: album.release_date,
              numTracks: album.total_tracks,
              albumPreviewUrl: album.external_urls.spotify,
              artist: album.artists[0].name,
            };
          })
        );
      });

    return () => (cancel = true);
  };

  //if the display more button is clicked, add 8 to the displayed Results number
  const displayMoreClick = () => {
    setDisplayedResultNumber(displayedResultNumber + 8);
  };

  return (
    albumResults && (
      <Container>
        <ResultsContainer>
          <TitlesDiv>
            <ArtistTitle>{artist}</ArtistTitle>
            <AlbumP>Albums</AlbumP>
          </TitlesDiv>
          <Results>
            {albumResults.map((albumResult) => {
              return (
                <AlbumResult
                  key={albumResult.id}
                  album={albumResult}
                  artist={artist}
                />
              );
            })}
          </Results>
          {albumResults.length > 0 && (
            <button onClick={displayMoreClick}>Display More</button>
          )}
        </ResultsContainer>
      </Container>
    )
  );
};

export default AlbumsPage;
