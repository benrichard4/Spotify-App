import React from "react";

import Ratings from "react-ratings-declarative";

import {
  ArtistContainer,
  ArtistImg,
  InfoContainer,
  InfoDiv,
  InfoName,
  InfoP,
} from "./styled-components";
import BrokenImage from "../../assets/NoImgAvailable.jpg";

//component that renders out the artist result page. Includes search bar.
const ArtistResult = ({ artist }) => {
  return (
    <ArtistContainer to={`albums/${artist.id}`}>
      <ArtistImg
        src={artist.thumbnailUrl === "N/A" ? BrokenImage : artist.thumbnailUrl}
        alt={`artist image ${artist.id}`}
      />
      <InfoContainer>
        <InfoDiv>
          <InfoName>{artist.name}</InfoName>
          <InfoP>Followers: {artist.numFollowers}</InfoP>
          <Ratings
            rating={artist.starRating}
            widgetEmptyColors="grey"
            widgetRatedColors="var(--spotify-green)"
            widgetDimensions="25px"
            widgetSpacings="1px"
          >
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
          </Ratings>
        </InfoDiv>
      </InfoContainer>
    </ArtistContainer>
  );
};

export default ArtistResult;
