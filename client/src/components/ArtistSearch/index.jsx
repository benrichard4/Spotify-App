import React, { useEffect, useRef, useState } from "react";

import ArtistResult from "../Results/ArtistResults";
import { getHashParams } from "../../services/SpotifyHelpers";
import {
  Container,
  SearchContainer,
  SearchandButtonWrapper,
  Input,
  DeleteButton,
  ResultsContainer,
  Results,
} from "./styled-components";

//component that renders out the artist search page. It gets the access code from the params and assigns it to session storage for easy access.
const ArtistSearch = ({ spotifyWebApi, setAccessToken, accessToken }) => {
  //if there is searchTerm in session storage set it to state
  const [searchTerm, setSearchTerm] = useState(() => {
    const persistParam = window.sessionStorage.getItem("searchTerm");
    return persistParam !== null ? JSON.parse(persistParam) : "";
  });

  const [searchResults, setSearchResults] = useState([]);
  const [displayedResultNumber, setDisplayedResultNumber] = useState(8);

  //ref variable for setting focus on search input
  const searchInput = useRef(null);

  //on first render set focus to input and use getHashParams to set Access Token
  useEffect(() => {
    searchInput.current.focus();
    setAccessToken(getHashParams().access_token);
  }, []);

  //when variables noted in dependency array change, run getArtist function
  useEffect(() => {
    if (!searchTerm) {
      setSearchResults([]);
      setDisplayedResultNumber(8);
      return;
    }

    if (!spotifyWebApi) return;

    //update session storage with searchTerm
    window.sessionStorage.setItem("searchTerm", JSON.stringify(searchTerm));

    //run get artist funciton
    getArtists();
  }, [searchTerm, accessToken, displayedResultNumber, spotifyWebApi]);

  //if the display more button is clicked, add 8 to the displayed Results number
  const displayMoreClick = () => {
    setDisplayedResultNumber(displayedResultNumber + 8);
  };

  //function that uses the spotify web api library to find artists based on search term
  const getArtists = () => {
    spotifyWebApi.setAccessToken(accessToken);
    //if there is time to load an artist, the cancel variable will stop the api connection as one is quickly typing.
    let cancel = false;
    spotifyWebApi
      .searchArtists(searchTerm, { limit: displayedResultNumber })
      .then((res) => {
        if (cancel) return;
        setSearchResults(
          res.body.artists.items.map((artist) => {
            //get largest image
            let largestImg = artist.images.reduce((largest, image) => {
              if (image.height > largest.height) return image;
              return largest;
            }, artist.images[0]);

            let starRating = artist.popularity / 20;

            return {
              id: artist.id,
              name: artist.name,
              thumbnailUrl: largestImg ? largestImg.url : "N/A",
              starRating: starRating,
              numFollowers: artist.followers.total.toLocaleString(),
            };
          })
        );
      });

    return () => (cancel = true);
  };

  return (
    <Container>
      <SearchContainer>
        <SearchandButtonWrapper>
          <Input
            type="text"
            placeholder="Search by Artist"
            value={searchTerm}
            onChange={(ev) => setSearchTerm(ev.target.value)}
            ref={searchInput}
          />
          <DeleteButton onClick={() => setSearchTerm("")}>X</DeleteButton>
        </SearchandButtonWrapper>
      </SearchContainer>
      {/* if there are no search results, render no results found */}
      {searchResults?.length === 0 ? (
        <div style={{ marginTop: "30px" }}>No results found</div>
      ) : (
        <ResultsContainer>
          <Results>
            {/* maps through the search results and displays them with the ArtistResult component */}
            {searchResults.map((searchResult) => {
              return (
                <ArtistResult key={searchResult.id} artist={searchResult} />
              );
            })}
          </Results>
          {searchTerm && searchResults.length > 0 && (
            <button onClick={displayMoreClick}>Display More</button>
          )}
        </ResultsContainer>
      )}
    </Container>
  );
};

export default ArtistSearch;
